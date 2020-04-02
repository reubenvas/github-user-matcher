import fetch from 'node-fetch';
import { User } from './Users';

export const getOne = (url: string): Promise<User> => ( // Promise<{}[]>
    fetch(url).then((res) => res.json())
);

export const getMany = (url: string): Promise<User[]> => ( // Promise<{}[]>
    fetch(url).then((res) => res.json())
);
