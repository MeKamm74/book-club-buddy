import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import initializeFirebaseApp from './firebase/dbInit';

function init() {
    initializeFirebaseApp();
    ReactDOM.render(<App />, document.getElementById('root'));
    // registerServiceWorker();
}

init();
