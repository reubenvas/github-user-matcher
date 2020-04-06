import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import App from './App';
import { StoreProvider } from './StoreContext';
import UserStore from './stores/UserStore';
import MatchStore from './stores/MatchStore';

const user = new UserStore();
const matches = new MatchStore();

ReactDOM.render(
    <StoreProvider value={{ user, matches }}>
        <App />
    </StoreProvider>,
    document.getElementById('root'),
);


