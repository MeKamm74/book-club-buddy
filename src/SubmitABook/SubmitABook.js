import React from 'react';
import bookService from '../firebase/bookService';

const SubmitABook = function() {

	function submitBook(e) {
		e.preventDefault();
		const formVals = {};
		document.querySelectorAll('.input').forEach(input => {
			formVals[input.name] = input.value;
		});
		bookService.submitBook(formVals);
	}

	return (
		<form className="form">
			<div className="field">
				<label className="label" htmlFor="name">Book Name</label>
				<input className="input" id="name" name="name" type="text" required />
			</div>
			<div className="field">
				<label className="label" htmlFor="author">Author</label>
				<input className="input" id="author" name="author" type="text" required />
			</div>
			<button className="button" type="submit" onClick={submitBook.bind(this)}>Submit</button>
		</form>
	);
};

export default SubmitABook;