import React from 'react';
import UserCard from './UserCard';
import InactiveCards, { SingleCard } from './InactiveCards';
import SimpleCard from './SimpleCard';

const CardInterface = () => {

    return (
        <>
            <UserCard />
            {/* <InactiveCards /> */}
                <SimpleCard index={0}/>
                <SimpleCard index={1} />
                <UserCard />
        </>
    );
}

export default CardInterface;
