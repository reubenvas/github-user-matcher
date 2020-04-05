import express from 'express';
import bodyParser from 'body-parser';
import Users from './Users';

const PORT = process.env.PORT || 8080;

const app = express();
app.use(bodyParser.json());

const users = new Users();

app.get('/', async (req, res) => {
    res.send('Hello Mr. Basic!');
});

app.get('/users/byName/:username', async (req, res) => {
    const { username } = req.params;
    const user = await users.getUserByName(username);
    res.send(user);
});

app.get('/users/randomly', async (req, res) => {
    const user = await users.getUserRandomly();
    res.send(user);
});

app.post('/users/byName/:senderId/interact', async (req, res) => {
    const { senderId } = req.params;
    const { interaction, receiverId } = req.body;
    if (!['like', 'dislike'].includes(interaction)) {
        res.status(404).send('Interaction should be "like" or "dislike"');
        return;
    }
    if (!senderId) {
        res.status(404).send('Sender id needs to be included');
        return;
    }
    try {
        users.registerUserInteraction(senderId, receiverId, interaction);
        res.send('OK');
    } catch (err) {
        res.status(404).send(err.toString());
    }
});

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`); // eslint-disable-line no-console
});
