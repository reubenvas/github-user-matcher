import {
    observable, configure, action,
} from 'mobx';

configure({
    enforceActions: 'always',
    computedRequiresReaction: true,
    observableRequiresReaction: true,
    reactionRequiresObservable: true,
});

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
    company: string;
    blog: string;
    location: string;
    email: object;
    hireable: boolean;
    bio: string;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
};

class UserStore {
    @observable mainUser: User | null = null;

    @observable currentMatchUser: User | null = null;

    @action setMainUser = (user: User): void => {
        this.mainUser = user;
    };

    @action setCurrentMatchUser = (user: User): void => {
        this.currentMatchUser = user;
    };
}

export default UserStore;
