import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

type propTypes = {
    overline: string;
    heading: string;
    body: string;
};

const useStyles = makeStyles(() => ({
    container: {
        height: 187,
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
    heading: {
        textAlign: 'center',
        fontSize: 32,
        lineHeight: 2,
        fontWeight: 300,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    },
    underlineHeading: {
        content: '""',
        width: 24,
        height: 2,
        backgroundColor: '#ddd',
        display: 'block',
        margin: '8px auto 18px',
        borderRadius: 2,
    },
    body: {
        textAlign: 'center',
        fontSize: 14,
        color: '#222',
        lineHeight: 1.75,
        width: '88%',
        margin: '0 auto',
    },
}));

const ShallowInfo = ({ overline, heading, body }: propTypes): React.ReactElement => {
    const styles = useStyles();

    return (
        <Grid className={styles.container}>
            {overline && (
                <Typography
                    component="span"
                    className={styles.overline}
                >
                    {overline}
                </Typography>
            )}
            <Typography
                component="h4"
                className={styles.heading}
            >
                {heading}
            </Typography>
            <div className={styles.underlineHeading} />
            <Typography
                className={styles.body}
            >
                {body}
            </Typography>
        </Grid>
    );
};

export default ShallowInfo;
