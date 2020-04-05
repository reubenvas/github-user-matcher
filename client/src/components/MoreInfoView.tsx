import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import ButtonBase from '@material-ui/core/ButtonBase';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import GitHubIcon from '@material-ui/icons/GitHub';
import RoomIcon from '@material-ui/icons/Room';
import WorkIcon from '@material-ui/icons/Work';
import BusinessIcon from '@material-ui/icons/Business';
import LanguageIcon from '@material-ui/icons/Language';
import blueGrey from '@material-ui/core/colors/blueGrey';


const useStyles = makeStyles((theme: Theme) => ({
    container: {
        height: 426,
    },
    media: {
        borderRadius: 6,
        width: '25%',
        paddingBottom: '25%',
        backgroundColor: 'rgba(0, 0, 0, 0.08)',
        marginRight: 10,
    },
    topNameContainer: {
        marginBottom: 14,
        height: 'fit-content',
    },
    backBtn: {
        position: 'absolute',
        top: 8,
        left: 8,
        color: theme.palette.getContrastText(blueGrey[50]),
        backgroundColor: blueGrey[50],
        '&:hover': {
            color: theme.palette.getContrastText(blueGrey[100]),
            backgroundColor: blueGrey[100],
        },
    },
    heading: {
        textAlign: 'center',
        fontSize: 32,
        lineHeight: 2,
        fontWeight: 300,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    },
    infoTextContainer: {
        paddingLeft: 14,
    },
    mainInfoContainer: {
        height: 270,
    },
    infoTextRow: {
        marginTop: 22,
    },
    infoText: {
        letterSpacing: '2px',
        fontSize: 18,
        color: blueGrey[700],
    },
    smallerText: {
        fontSize: 15,
    },
    infoIcon: {
        marginRight: 10,
        color: blueGrey[700],
    },
}));

// type propTypes = {
//     infoText: string;
//     heading: string;
// }

type propTypes = {
    toggleViews: () => void;
};

const MoreInfoView = ({ toggleViews }: propTypes): React.ReactElement => {
    const styles = useStyles();

    const redirectToUrl = (url: string) => (): Window | null => window.open(url);

    return (
        <>
            <Grid container className={styles.container}>
                <Tooltip title="Back" aria-label="back">
                    <Fab color="secondary" size="small" onClick={toggleViews} className={styles.backBtn}>
                        <ArrowBackIcon />
                    </Fab>
                </Tooltip>
                <Grid item container className={styles.topNameContainer}>
                    <CardMedia
                        className={styles.media}
                        image="https://avatars0.githubusercontent.com/u/46671298?v=4"
                        title="User profile picture"
                    />
                    <Typography
                        component="span"
                        className={styles.heading}
                    >
                        Inner Varnika
                    </Typography>
                </Grid>
                <Grid item container className={styles.infoTextContainer}>
                    <Grid item container direction="column" className={styles.mainInfoContainer}>
                        <Grid item container alignItems="center" onClick={redirectToUrl('https://github.com/justin')} className={styles.infoTextRow}>
                            <Tooltip title="Visit Justin's github profile" aria-label="Visit Justin's github profile">
                                <ButtonBase>
                                    <GitHubIcon className={styles.infoIcon} />
                                    {' '}
                                    {/* LINK TO GITHUB PROFILE */}
                                    <Typography
                                        component="span"
                                        className={styles.infoText}
                                    >
                                        Kesha
                                    </Typography>
                                </ButtonBase>
                            </Tooltip>
                        </Grid>
                        <Grid item container alignItems="center" className={styles.infoTextRow}>
                            <RoomIcon className={styles.infoIcon} />
                            <Typography
                                component="span"
                                className={styles.infoText}
                            >
                                Uppsala
                            </Typography>
                        </Grid>
                        <Grid item container alignItems="center" onClick={redirectToUrl('https://github.com/justin?tab=repositories')} className={styles.infoTextRow}>
                            <Tooltip title="See Justin's public repos" aria-label="See Justin's public repos">
                                <ButtonBase>
                                    <WorkIcon className={styles.infoIcon} />
                                    <Typography
                                        component="span"
                                        className={styles.infoText}
                                    >
                                        42 public repos
                                    </Typography>
                                </ButtonBase>
                            </Tooltip>
                        </Grid>
                        <Grid item container alignItems="center" className={styles.infoTextRow}>
                            <BusinessIcon className={styles.infoIcon} />
                            <Typography
                                component="span"
                                className={styles.infoText}
                            >
                                GalacticCoders
                            </Typography>
                        </Grid>
                        <Grid item container alignItems="center" onClick={redirectToUrl('https://google.com')} className={styles.infoTextRow}>
                            <Tooltip title="Visit Justin's blog" aria-label="Visit Justin's blog">
                                <ButtonBase>
                                    <LanguageIcon className={styles.infoIcon} />
                                    <Typography
                                        component="span"
                                        className={styles.infoText}
                                    >
                                        https://google.com
                                    </Typography>
                                </ButtonBase>
                            </Tooltip>
                        </Grid>
                    </Grid>
                    <Grid item container alignItems="center" className={styles.infoTextRow}>
                        <Typography
                            component="span"
                            className={`${styles.infoText} ${styles.smallerText} ${+' '}${styles.infoIcon}`}
                        >
                            Last updated:
                        </Typography>
                        <Typography
                            component="span"
                            className={`${styles.infoText} ${styles.smallerText}`}
                        >
                            {(new Date('2020-03-27T21:19:34Z')).toLocaleDateString()}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default MoreInfoView;
