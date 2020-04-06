import { User } from './stores/UserStore';

const baseUrl = 'http://localhost:8080/users/';

export const postLogin = (username: string): Promise<User> => (
    fetch(`${baseUrl}login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
    }).then((res) => res.json()));

export const getRandomUser = (userId: string | number): Promise<User> => (
    fetch(`${baseUrl}${userId}/random-user`, {
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json()));

export const postInteraction = (senderId: number, receiverId: number, interaction: 'like' | 'dislike'): void => {
    fetch(`${baseUrl}interact`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ senderId, receiverId, interaction }),
    }).then((res) => res.json())
        .then(console.log).catch(console.error); // eslint-disable-line no-console
};
