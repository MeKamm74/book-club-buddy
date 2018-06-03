import React from 'react';
import SignIn from '../SignIn/SignIn';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = function (props) {
	return (
		<div className="nav-bar">
			<Link to="/submit" className="nav-bar__item" >Submit a book</Link>
			<Link to="/submissions" className="nav-bar__item">Submissions</Link>
			<Link to="/rate" className="nav-bar__item">Rate a book</Link>
			<SignIn isAuthenticated={props.isAuthenticated} />
		</div>
	);
}

export default NavBar;