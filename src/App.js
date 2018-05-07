import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from './SignIn/SignIn';

import firebase from '@firebase/app';
import '@firebase/auth';

class App extends Component {

  constructor(){
    super();
    this.state = {
      authenticated: false
    };
    this.bindAuthEvent()
  }

  bindAuthEvent(){
    firebase.auth().onAuthStateChanged(user => {
      const userExists = user ? true : false;
      this.setState({authenticated: userExists});
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <SignIn isAuthenticated={this.state.authenticated} />
      </div>
    );
  }
}

export default App;
