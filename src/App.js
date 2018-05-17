import React, { Component } from 'react';
import NavBar from './NavBar/NavBar.js'
import Header from './Header/Header.js'
import Footer from './Footer/Footer.js'
import './App.css';
import SignIn from './SignIn/SignIn';

import firebase from '@firebase/app';
import '@firebase/auth';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <NavBar />
                <div className="main"></div>
                <Footer />
            </div>
        );
    }
}

export default App;
