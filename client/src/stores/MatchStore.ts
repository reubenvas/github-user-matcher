import {
    observable, configure, action,
} from 'mobx';
import { User } from './UserStore';

configure({
    enforceActions: 'always',
    computedRequiresReaction: true,
    observableRequiresReaction: true,
    reactionRequiresObservable: true,
});

class MatchStore {
    @observable likedUsers: User[] = [];

    @action addLikedUser = (user: User): void => {
        this.likedUsers.push(user);
    };
}

export default MatchStore;
