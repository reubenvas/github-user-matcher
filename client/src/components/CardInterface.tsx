import React from 'react';
import UserCard from './UserCard';
import SimpleCard from './SimpleCard';

const CardInterface = (): React.ReactElement => (
    <>
        <SimpleCard index={0} />
        <SimpleCard index={1} />
        <UserCard />
    </>
);

export default CardInterface;
