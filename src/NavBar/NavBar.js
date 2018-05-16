import React from 'react';
import './NavBar.css';

const NavBar = function () {
	return (
		<div className="nav-bar">
			<a className="nav-bar__item">Submit a book</a>
			<a className="nav-bar__item">Submissions</a>
			<a className="nav-bar__item">Rate a book</a>
		</div>
	);
}

export default NavBar;