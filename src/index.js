import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import dbInit from './firebase/dbInit';
import authService from './firebase/authService';

function init() {
    dbInit.initializeFirebaseApp();
    authService.init();
    ReactDOM.render(<App />, document.getElementById('root'));
    // registerServiceWorker();
}

init();
