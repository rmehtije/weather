import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './services/stateService';

// Sdes' my berjom object DOM (decument) v kotorom vsja struktura nashego index.html. Iz nego 
// vyberaem element div u kotorogo id = root i oborachevajem jego v ReactDOM

// ReactDOM sozdajot Virtualnyj DOM na servere i v nego renderit ili otrisovaet vsjo 4to nahoditsja 
// v nashem React prilozhenii.

// Render tojest otrisovka eto procedura perehoda s React komponenta v 4istqj js i html.

// Provider komponent eto vspomogatel'nyj komponent react-redux dlja raboty s redux state.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
