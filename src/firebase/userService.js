import db from './dbInit';

async function addUser(userData) {
    const userExists = await doesUserExist(userData);
    if (!userExists){
        db.getDB().collection('users').doc(userData.uid).set({
            displayName: userData.displayName,
            email: userData.email
        })
    }
}

function doesUserExist(userData) {
    return db.getDB().collection('users').doc(userData.uid).get().then(user => {
        return user.exists;
    })
}

export default {
    addUser
}