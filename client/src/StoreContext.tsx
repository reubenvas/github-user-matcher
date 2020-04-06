import { createContext } from 'react';
import UserStore from './stores/UserStore';
import MatchStore from './stores/MatchStore';

export const StoreContext = createContext<{ user: UserStore; matches: MatchStore }>(
    { user: {} as UserStore, matches: {} as MatchStore },
);

export const StoreProvider = StoreContext.Provider;
