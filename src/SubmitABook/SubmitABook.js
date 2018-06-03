import React, { Component } from 'react';
import bookService from '../firebase/bookService';

class SubmitABook extends Component {

	constructor(props) {
		super(props);
		this.state = {
			showMessage: false
		};
	}

	showMessage(val) {
		this.setState({showMessage: val});
	}

	render() {
		const componentToShow = this.state.showMessage ?
			<FormMessage submitAnother={this.showMessage.bind(this)} /> :
			<SubmitBookForm onSuccessSubmit={this.showMessage.bind(this)} />;
		return componentToShow;
	}
}

const SubmitBookForm = props => {
	function submitBook(e) {
		e.preventDefault();
		const formVals = {};
		document.querySelectorAll('.input').forEach(input => {
			formVals[input.name] = input.value;
		});
		document.querySelector('.button[type="submit"]').disabled = true;
		bookService.submitBook(formVals).then(resp => {
			props.onSuccessSubmit(true);
		});
	}

	return (
		<form className="form" onSubmit={submitBook}>
			<div className="field">
				<label className="label" htmlFor="name">Book Name</label>
				<input className="input" id="name" name="name" type="text" required />
			</div>
			<div className="field">
				<label className="label" htmlFor="author">Author</label>
				<input className="input" id="author" name="author" type="text" required />
			</div>
			<button className="button" type="submit">Submit</button>
		</form>
	);
};

const FormMessage = props => {
	return (
		<div>
			<div>Your submisison has been recorded</div>
			<button className="button" onClick={() => props.submitAnother(false)}>Submit another</button>
		</div>
	);
};
export default SubmitABook;