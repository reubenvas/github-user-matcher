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
};

const UserCard = ({ index }: propTypes): React.ReactElement => {
    const [isOpeningView, setIsOpeningView] = React.useState<boolean>(true);
    const styles = useStyles();

    const toggleViews = (): void => setIsOpeningView(!isOpeningView);

    return (
        <SimpleCard index={2}>
            <>
                {
                    isOpeningView
                        ? <OpeningView toggleViews={toggleViews} />
                        : <MoreInfoView toggleViews={toggleViews} />
                }
                <CardActions className={styles.flexButtonContainer}>
                    <Tooltip title="No thx." aria-label="No thx.">
                        <Fab className={styles.lightGrey}>
                            <RemoveIcon />
                        </Fab>
                    </Tooltip>
                    <Tooltip title="Yeah!" aria-label="Yeah!">
                        <Fab className={styles.darkGrey}>
                            <AddIcon />
                        </Fab>
                    </Tooltip>
                </CardActions>
            </>
        </SimpleCard>
    );
};

export default UserCard;
