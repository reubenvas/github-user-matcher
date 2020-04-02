import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { generateRandomNum } from '../utils';
import Card from '@material-ui/core/Card';

const InactiveCards = () => {

    return (
        <div>INACTIVE CARDS</div>
    );
}

export default InactiveCards;

type propTypes = {
    index: number;
    children?: React.ReactChild;
}

export const SingleCard = ({ index, children }: propTypes) => {
    const classes = makeStyles(theme => ({
        card: {
            position: "absolute",
            right: 0,
            bottom: 0,
            minWidth: 350,
            maxHeight: 500,
            top: -theme.spacing(1) * index * 0.5,
            left: -theme.spacing(1) * index * 0.5,
            transition: "0.3s",
            transform: index === 2 ? "unset" : `rotate(${generateRandomNum(-3, 3)}deg)`,
            maxWidth: 343,
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
    })) ({ index });

return (
    <Card className={classes.card} raised={index === 0}>
        {children}
    </Card>
);
};