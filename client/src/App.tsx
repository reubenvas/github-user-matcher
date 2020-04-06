import React from 'react';
import { observer } from 'mobx-react-lite';
import './App.css';
import CardInterface from './components/matchmaking/CardInterface';
import SignInPage from './components/login/SignInPage';
import useStores from './hooks/useStores';

const App = observer((): React.ReactElement => {
    const { user: { mainUser } } = useStores();

    return (
        <div className="App">
            {
                mainUser === null
                    ? <SignInPage />
                    : <CardInterface />
            }
        </div>
    );
});

export default App;
