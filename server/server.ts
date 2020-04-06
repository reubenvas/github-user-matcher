import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import Users from './Users';

const PORT = process.env.PORT || 8080;

const app = express();
app.use(bodyParser.json());
app.use(cors());

const users = new Users();

app.get('/', async (req, res) => {
    res.send('Hello Mr. Basic!');
});

app.post('/users/login', async (req, res) => {
    const { username } = req.body;
    if (!username) {
        res.status(404).json('Has not included username in body');
        return;
    }
    const user = await users.getUserByName(username);
    users.initUser(user.id);
    res.json(user);
});

app.get('/users/:userId/random-user', async (req, res) => {
    const senderUserId = req.params.userId;
    const user = await users.getRandomUser(Number(senderUserId));
    if (user === null) {
        // this could occur when the first response contain one user which is liked on,
        // but the second one is empty. Maybe redo the request if that is the case?
        res.status(404).json('Either the wrong user id was included in the uri or a random user couldn\'t be found this time.');
        return;
    }
    res.send(user);
});

app.post('/users/interact', (req, res) => {
    const { interaction, receiverId, senderId } = req.body;
    if (!['like', 'dislike'].includes(interaction)) {
        res.status(404).json('interaction should be "like" or "dislike" in bocy');
        return;
    }
    if (!(senderId || receiverId)) {
        res.status(404).json('sender user id and receiver user id needs to be included in body');
        return;
    }
    try {
        users.registerUserInteraction(Number(senderId), Number(receiverId), interaction);
        res.status(201).json('ok');
    } catch (err) {
        res.status(404).json(err.toString());
    }
});

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`); // eslint-disable-line no-console
});
