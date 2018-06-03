import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import dbInit from './firebase/dbInit';
import authService from './firebase/authService';
import { BrowserRouter } from 'react-router-dom';
// import registerServiceWorker from './registerServiceWorker';

function init() {
    dbInit.initializeFirebaseApp();
    authService.init();
    ReactDOM.render(
    	<BrowserRouter>
    		<App />
    	</BrowserRouter>, 
    	document.getElementById('root')
    );
    // registerServiceWorker();
}

init();
