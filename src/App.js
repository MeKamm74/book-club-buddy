import React, { Component } from 'react';
import NavBar from './NavBar/NavBar.js';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';
import SubmitABook from './SubmitABook/SubmitABook';
import './App.css';

import firebase from '@firebase/app';
import '@firebase/auth';

class App extends Component {
	constructor() {
		super();
		this.state = {
			authenticated: false
		};
		this.bindAuthEvent();
	}

	bindAuthEvent() {
		firebase.auth().onAuthStateChanged(user => {
			const userExists = user ? true : false;
			this.setState({authenticated: userExists});
		});
	}

	render() {
		return (
			<div className="App">
				<Header />
				<NavBar isAuthenticated={this.state.authenticated}/>
				<div className="main">
					<SubmitABook />
				</div>
				<Footer />
			</div>
		);
	}
}

export default App;
