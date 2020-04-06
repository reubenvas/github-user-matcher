import React from 'react';
import { observer } from 'mobx-react-lite';
import UserCard from './UserCard';
import SimpleCard from './SimpleCard';
import { getRandomUser } from '../api';
import useStores from '../hooks/useStores';

const CardInterface = observer((): React.ReactElement => {
    const { user: { mainUser, setCurrentMatchUser, currentMatchUser } } = useStores();


    React.useEffect(() => {
        const updateActiveUser = (): void => {
            if (mainUser === null) {
                return;
            }

            getRandomUser(mainUser.id).then((randomUser) => setCurrentMatchUser(randomUser));
        };
        updateActiveUser();
    }, [mainUser, setCurrentMatchUser]);

    return (
        <>
            <SimpleCard index={0} />
            <SimpleCard index={1} />
            {currentMatchUser !== null
                && (
                    <UserCard
                        id={currentMatchUser?.id}
                        username={currentMatchUser?.login}
                        fullName={currentMatchUser?.name}
                        bio={currentMatchUser?.bio}
                        imgLink={currentMatchUser?.avatar_url}
                        githubLink={currentMatchUser?.html_url}
                        location={currentMatchUser?.location}
                        publicRepos={currentMatchUser?.public_repos}
                        publicReposLink={`${currentMatchUser?.html_url}/?tab=repositories`}
                        company={currentMatchUser?.company}
                        blog={currentMatchUser?.blog}
                        lastUpdated={currentMatchUser?.updated_at}
                    />
                )}
        </>
    );
});


export default CardInterface;
