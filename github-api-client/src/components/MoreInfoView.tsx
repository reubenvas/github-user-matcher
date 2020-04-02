import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
    media: {
        borderRadius: 6,
        width: '25%',
        paddingBottom: '25%',
        backgroundColor: 'rgba(0, 0, 0, 0.08)',
        marginRight: 10,
    },
    heading: {
        textAlign: 'center',
        fontSize: 32,
        lineHeight: 2,
        fontWeight: 300,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    },
    overline: {
        display: 'block',
        textAlign: 'center',
        color: '#9e9e9e',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        fontSize: 14,
        marginTop: 12,
    },
}));

type propTypes = {
    overline: string;
    heading: string;
}

const MoreInfoView = (/* { overline, heading }: propTypes */) => {

    const styles = useStyles();

    return (
        <>
            <Grid container>
                <CardMedia
                    className={styles.media}
                    image="https://avatars0.githubusercontent.com/u/46671298?v=4"
                    title="User profile picture"
                />
                <Typography
                    component={'span'}
                    className={styles.heading}
                >
                    {'Inner Varnika'}
                </Typography>
            </Grid>
        </>
    );
}

export default MoreInfoView;