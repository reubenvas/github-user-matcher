import { useContext } from 'react';
import { StoreContext } from '../StoreContext';
import UserStore from '../stores/UserStore';
import MatchStore from '../stores/MatchStore';

type Store = {
    user: UserStore;
    matches: MatchStore;
};

export default (): Store => useContext(StoreContext);
