import React, { Component } from 'react';
import authService from '../firebase/authService';

class SignIn extends Component {
    constructor() {
        super();
    }

    signIn() {
        authService.signIn();
    }

    signOut() {
        authService.signOut();
    }

    render() {
        if(this.props.isAuthenticated){
            return <button onClick={this.signOut.bind(this)}>Sign Out</button>
        }

        return <button onClick={this.signIn.bind(this)}>Sign In</button>  
    }
}

export default SignIn;