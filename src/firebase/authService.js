import firebase from '@firebase/app';
import '@firebase/auth';
import userService from './userService';

const authService = function() {
    let auth = null;

    function init() {
        auth = firebase.auth();
        auth.getRedirectResult().then(result => {
            if(result && result.user) {
                userService.addUser(result.user);
            }
        })

        // firebase.auth().onAuthStateChanged(user => {})
    }

    function getCurrentUser() {
        return auth.currentUser;
    }  

    function signIn() {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithRedirect(provider)
    }

    function signOut() {
        auth.signOut();
    }

    return {
        init,
        getCurrentUser,
        signIn,
        signOut
    }
}

const instance = authService();

export default instance;
