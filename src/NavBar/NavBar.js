import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
	render () {
		return (
			<div className="nav-bar">
				<div className="nav-bar__item">Submit a book</div>
				<div className="nav-bar__item">Submissions</div>
				<div className="nav-bar__item">Rate a book</div>
			</div>
		);
	}
}

export default NavBar;