import React from 'react';
import SignIn from '../SignIn/SignIn';
import './NavBar.css';

const NavBar = function (props) {
	return (
		<div className="nav-bar">
			<a className="nav-bar__item">Submit a book</a>
			<a className="nav-bar__item">Submissions</a>
			<a className="nav-bar__item">Rate a book</a>
			<SignIn isAuthenticated={props.isAuthenticated} />
		</div>
	);
}

export default NavBar;