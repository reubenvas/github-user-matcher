import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles, Theme } from '@material-ui/core/styles';
import SimpleCard from './SimpleCard';
import ShallowInfo from './ShallowInfo';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import blueGrey from '@material-ui/core/colors/blueGrey';
import CardActionArea from '@material-ui/core/CardActionArea';
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
        color: theme.palette.getContrastText(blueGrey[50]),
        backgroundColor: blueGrey[50],
        '&:hover': {
            color: theme.palette.getContrastText(blueGrey[100]),
            backgroundColor: blueGrey[100],
        },
    },
}));


type propTypes = {
    index?: number;
}

const UserCard = ({ index }: propTypes) => {
    const [isOpeningView, setIsOpeningView] = React.useState<boolean>(true);
    const styles = useStyles();

    const toggleViews = () => setIsOpeningView(!isOpeningView);

    return (
        <SimpleCard index={2}>
            <>
                <CardActionArea onClick={toggleViews}>
                    {isOpeningView ? <OpeningView /> : <MoreInfoView />}
                </CardActionArea>
                <CardActions className={styles.flexButtonContainer}>
                    <Tooltip title="No thx." aria-label="No thx.">
                        <Fab className={styles.lightGrey} >
                            <RemoveIcon />
                        </Fab>
                    </Tooltip>
                    <Tooltip title='Yeah!' aria-label='Yeah!'>
                        <Fab className={styles.darkGrey} >
                            <AddIcon />
                        </Fab>
                    </Tooltip>
                </CardActions>
            </>
        </SimpleCard>
    );
}

export default UserCard;
