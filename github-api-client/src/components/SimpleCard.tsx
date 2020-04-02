import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { generateRandomNum } from '../utils';


const useStyles = (index: number) => makeStyles((theme: Theme) => ({
    card: {
        position: "absolute",
        right: 0,
        bottom: 0,
        maxHeight: 500,
        top: -theme.spacing(1) * index * 0.5,
        left: -theme.spacing(1) * index * 0.5,
        transition: '0.3s',
        transform: index === 2 ? "unset" : `rotate(${generateRandomNum(-3, 3)}deg)`,
        maxWidth: 260,
        margin: 'auto',
        borderRadius: 12,
        padding: 18,
        boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
        '&:hover': {
            top: -theme.spacing(1) * index,
            ...(index === 2 && {
                transform: 'translateY(2px)',
                boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
            }),
        },
    }
}));

type propTypes = {
    index: number;
    children?: React.ReactChild;
}

const UserCard = ({ index, children }: propTypes) => {

    const styles = useStyles(index)();

    return (
        <Card className={styles.card} raised={index === 0}>
            {children}
        </Card>
    );
}

export default UserCard;
