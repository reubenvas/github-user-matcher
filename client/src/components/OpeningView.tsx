import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import ShallowInfo from './ShallowInfo';

const useStyles = makeStyles(() => ({
    media: {
        borderRadius: 6,
        paddingBottom: '75%',
        backgroundColor: 'rgba(0, 0, 0, 0.08)',
    },
}));

type propTypes = {
    toggleViews: () => void;
};

const OpeningView = ({ toggleViews }: propTypes): React.ReactElement => {
    const styles = useStyles();
    return (
        <>
            <CardActionArea onClick={toggleViews}>
                <CardMedia
                    className={styles.media}
                    image="https://avatars0.githubusercontent.com/u/46671298?v=4"
                    title="User profile picture"
                />
                <CardContent>
                    <ShallowInfo
                        overline="Kesha" // this will come from the GET request
                        heading="Inner Varnika"
                        body="That year, collection of songs, review melodies, memories full, this is a long and warm journey"
                    />
                </CardContent>
            </CardActionArea>
        </>
    );
};

export default OpeningView;
