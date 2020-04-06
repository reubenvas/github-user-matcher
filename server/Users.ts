import { getMany, getOne } from './getFetch';
import { generateRandomNum } from './utils';

export type User = {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    name: string;
    company: object;
    blog: string;
    location: string;
    email: object;
    hireable: boolean;
    bio: object;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
}


export default class Users {
    userLikeStatistics: {
        [userId: number]: {
            like: number[];
            dislike: number[];
            total: number[];
        };
    } = {};

    // since the github API only allows a certain amount of requests,
    // the requested users are saved for when the limit is reached.
    // Thus, the app will provide users when the requests isn't working also
    stackedUsers: User[] = [];

    private randomizeUserPageUrl = (): string => {
        const baseUrl = 'https://api.github.com/users?since=';
        const maxPages = 63000000;
        const page = generateRandomNum(maxPages, 0);
        return baseUrl + page;
    }

    private getRandomUserPage = async (): Promise<User[]> => {
        const userPageUrl = this.randomizeUserPageUrl();
        return getMany(userPageUrl);
    }

    private filterUsers = (users: User[]): User[] => users.filter((user) => (
        user.type === 'User'
        && user.name
        && user.location
        && (user.bio || user.public_repos > 1)
    ));

    private storeUserToStack = (users: User[]): void => {
        if (this.stackedUsers.length === 0) {
            this.stackedUsers.push(...users);
            return;
        }
        users.forEach((user) => {
            if (this.stackedUsers.some((stackedUser) => stackedUser.id !== user.id)) {
                this.stackedUsers.push(user);
            }
        });
    }

    private hasNotInteracted = (userId: number, interactedUserId: number): boolean => (
        // DON'T FORGET TO CALL initUser BEFORE THIS FUNC
        !this.userLikeStatistics[userId].total.includes(interactedUserId)
    );

    initUser = (userId: number): void => {
        this.userLikeStatistics[userId] = {
            like: [],
            dislike: [],
            total: [],
        };
    };


    getRandomUser = async (senderUserId: number): Promise<User | null> => {
        const users = await this.getRandomUserPage();
        try {
            const validUsers = this.filterUsers(
                await Promise.all(
                    users.map(
                        (user) => this.getUserByName(user.login),
                    ),
                ),
            );
            console.log('USERS FROM THIS REQ:', validUsers);
            console.log('USERS SAVED FROM BEFORE:', this.stackedUsers);
            this.storeUserToStack(validUsers);
            for (let i = 0; i <= validUsers.length; i += 1) {
                if (this.hasNotInteracted(senderUserId, validUsers[i].id)) {
                    return validUsers[i];
                }
            }
        } catch (err1) {
            try {
                for (let i = 0; i < this.stackedUsers.length; i += 1) {
                    // REMEMBER TO REGISTER LIKE OR DISLIKE!!!
                    if (this.hasNotInteracted(senderUserId, this.stackedUsers[i].id)) {
                        return this.stackedUsers[i];
                    }
                }
            } catch (err2) {
                console.error(err2);
                return null;
            }
        }
        return null;
    }

    getUserByName = async (username: string): Promise<User> => {
        const baseUrl = `https://api.github.com/users/${username}`;
        const user = await getOne(baseUrl);
        return user;
    }

    registerUserInteraction = (senderId: number, receiverId: number, interaction: 'like' | 'dislike'): void | never => {
        if (!Object.keys(this.userLikeStatistics).includes(`${senderId}`)) {
            throw new Error("Couldn't find sender id in storage");
        }
        this.userLikeStatistics[senderId][interaction].push(receiverId);
        this.userLikeStatistics[senderId].total.push(receiverId);
    }
}
