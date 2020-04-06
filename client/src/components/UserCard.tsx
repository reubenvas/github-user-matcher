import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import blueGrey from '@material-ui/core/colors/blueGrey';
import SimpleCard from './SimpleCard';
import OpeningView from './OpeningView';
import MoreInfoView from './MoreInfoView';
import { postInteraction, getRandomUser } from '../api';
import useStores from '../hooks/useStores';


const useStyles = makeStyles((theme: Theme) => ({
    media: {
        borderRadius: 6,
        ...{
            width: '100%',
            height: 0,
            paddingBottom: '75%',
            backgroundColor: 'rgba(0, 0, 0, 0.08)',
        },
    },
    flexButtonContainer: {
        justifyContent: 'space-evenly',
    },
    darkGrey: {
        color: theme.palette.getContrastText(blueGrey[800]),
        backgroundColor: blueGrey[800],
        '&:hover': {
            color: theme.palette.getContrastText(blueGrey[900]),
            backgroundColor: blueGrey[900],
        },
    },
    lightGrey: {
        color: theme.palette.getContrastText(blueGrey[100]),
        backgroundColor: blueGrey[100],
        '&:hover': {
            color: theme.palette.getContrastText(blueGrey[200]),
            backgroundColor: blueGrey[200],
        },
    },
}));


type propTypes = {
    index?: number;
    id: number;
    username: string;
    fullName: string;
    bio: string;
    imgLink: string;
    githubLink: string;
    location: string;
    publicRepos: number;
    publicReposLink: string;
    company: string;
    blog: string;
    lastUpdated: string;
};

const UserCard = (
    {
        id, username, fullName, bio, imgLink, githubLink, location,
        publicRepos, publicReposLink, company, blog, lastUpdated,
    }: propTypes,
): React.ReactElement => {
    const [isOpeningView, setIsOpeningView] = React.useState<boolean>(true);
    const styles = useStyles();
    const { user: { mainUser, setCurrentMatchUser } } = useStores();

    const toggleViews = (): void => setIsOpeningView(!isOpeningView);

    const registerInteraction = (interaction: 'like' | 'dislike') => async (): Promise<void> => {
        if (mainUser === null) return;
        postInteraction(mainUser.id, id, interaction);
        const newCurrentMatchUser = await getRandomUser(mainUser.id);
        setCurrentMatchUser(newCurrentMatchUser);
    };

    return (
        <SimpleCard index={2} maxWidth={!isOpeningView}>
            <>
                {
                    isOpeningView
                        ? (
                            <OpeningView
                                toggleViews={toggleViews}
                                imgLink={imgLink}
                                fullName={fullName}
                                username={username}
                                bio={bio}
                            />
                        )
                        : (
                            <MoreInfoView
                                toggleViews={toggleViews}
                                imgLink={imgLink}
                                fullName={fullName}
                                username={username}
                                bio={bio}
                                githubLink={githubLink}
                                location={location}
                                publicRepos={publicRepos}
                                publicReposLink={publicReposLink}
                                company={company}
                                blog={blog}
                                lastUpdated={lastUpdated}
                            />
                        )
                }
                <CardActions className={styles.flexButtonContainer}>
                    <Tooltip title="No thx." aria-label="No thx.">
                        <Fab
                            onClick={registerInteraction('dislike')}
                            className={styles.lightGrey}
                            disableRipple
                            disableTouchRipple
                        >
                            <RemoveIcon />
                        </Fab>
                    </Tooltip>
                    <Tooltip title="Yeah!" aria-label="Yeah!">
                        <Fab
                            onClick={registerInteraction('like')}
                            className={styles.darkGrey}
                            disableRipple
                            disableTouchRipple
                        >
                            <AddIcon />
                        </Fab>
                    </Tooltip>
                </CardActions>
            </>
        </SimpleCard>
    );
};

export default UserCard;
