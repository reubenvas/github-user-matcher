import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import { postLogin } from '../api';
import useStores from '../hooks/useStores';

const useStyles = makeStyles((theme: Theme) => ({
    mainContainer: {
        marginTop: '17.8vh',
    },
    submitButton: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(2),
    },
    textInButton: {
        marginRight: 7,
    },
}));


const SignInPage = observer(() => {
    const { user: { setMainUser, mainUser } } = useStores();

    const styles = useStyles();

    const [username, setUsername] = React.useState<string>('');
    const [loading, setLoading] = React.useState<boolean>(false);

    const inputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setUsername(e.currentTarget.value);
    };

    const submit = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault();
        setLoading(true);
        const user = await postLogin(username);
        setMainUser(user);
        if (mainUser) setLoading(false);
    };

    return (
        <>
            <Container maxWidth="sm">
                <div className={styles.mainContainer}>
                    <Typography variant="h5" component="h1">
                        Sign in now with Github
                    </Typography>
                    <form onSubmit={submit}>
                        <TextField
                            onChange={inputChange}
                            fullWidth
                            margin="normal"
                            variant="filled"
                            label="github username"
                            autoFocus
                        />
                        <Button
                            type="submit"
                            className={styles.submitButton}
                            variant="contained"
                            color="primary"
                            fullWidth
                        >
                            <span className={styles.textInButton}>Sign in</span>
                            <GitHubIcon />
                        </Button>
                    </form>
                    {loading && <span>loading...</span>}
                </div>
            </Container>
        </>
    );
});

export default SignInPage;
