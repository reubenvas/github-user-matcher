import { getMany, getOne } from './getFetch';
import { generateRandomNum } from './utils';

export type User = {
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
    userLikeStatistics: any = {};

    private initUser = (userId: number): void => {
        this.userLikeStatistics[userId] = {
            like: [],
            dislike: [],
        };
    };

    private randomizeUserPageUrl = (): string => {
        const baseUrl = 'https://api.github.com/users?since=';
        const maxPages = 63000000;
        const page = generateRandomNum(maxPages, 0);
        return baseUrl + page;
    }

    getUserRandomly = async (): Promise<User> => {
        const userPageUrl = this.randomizeUserPageUrl();
        const newUser = (await getMany(userPageUrl))[0];
        return newUser;
    }

    getUserByName = async (username: string): Promise<User> => {
        const baseUrl = `https://api.github.com/users/${username}`;
        const user = await getOne(baseUrl);
        this.initUser(user.id);
        return user;
    }

    registerUserInteraction = (senderId: string, receiverId: string, interaction: 'like' | 'dislike' | string): void | never => {
        if (!Object.keys(this.userLikeStatistics).includes(senderId)) {
            throw new Error("Couldn't find receiver id in storage");
        }
        this.userLikeStatistics[senderId][interaction].push(receiverId);
    }
}
