import db from './dbInit';

function submitBook(vals) {
	return db.getDB().collection('books').doc().set(vals);
}

export default {
	submitBook
};