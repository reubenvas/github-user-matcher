import fetch from 'node-fetch';
import { User } from './Users';
import token from './githubAuthToken.json';

export const getOne = (url: string): Promise<User> => ( // Promise<{}[]>
    fetch(url, {
        headers: {
            Authorization: `Basic ${token}`, // hide this
        },
    }).then((res) => res.json())
);

export const getMany = (url: string): Promise<User[]> => ( // Promise<{}[]>
    fetch(url, {
        headers: {
            Authorization: `Basic ${token}`, // hide this
        },
    }).then((res) => res.json())
);
