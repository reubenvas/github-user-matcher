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
    imgLink: string;
    fullName: string;
    username: string;
    bio: string;
};

const OpeningView = ({
    toggleViews, imgLink, fullName, username, bio,
}: propTypes): React.ReactElement => {
    const styles = useStyles();
    return (
        <>
            <CardActionArea onClick={toggleViews}>
                <CardMedia
                    className={styles.media}
                    image={imgLink}
                    title="User profile picture"
                />
                <CardContent>
                    <ShallowInfo
                        overline={username} 
                        heading={fullName}
                        body={bio}
                    />
                </CardContent>
            </CardActionArea>
        </>
    );
};

export default OpeningView;
