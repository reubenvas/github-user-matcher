import fetch from 'node-fetch';
import { User } from './Users';
import token from './githubAuthToken.json';

export const getOne = (url: string): Promise<User> => (
    fetch(url, {
        headers: {
            Authorization: `Basic ${token}`,
        },
    }).then((res) => res.json())
);

export const getMany = (url: string): Promise<User[]> => ( 
    fetch(url, {
        headers: {
            Authorization: `Basic ${token}`,
        },
    }).then((res) => res.json())
);
