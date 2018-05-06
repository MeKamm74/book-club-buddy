const firebase = require('firebase');
require('firebase/firestore');

function initializeFirebaseApp() {
    firebase.initializeApp({
        apiKey: "AIzaSyCXwgdIDD3wN2hFiRdnuCc1zlbfRhHGuqQ",
        authDomain: "book-club-buddy-dev.firebaseapp.com",
        databaseURL: "https://book-club-buddy-dev.firebaseio.com",
        projectId: "book-club-buddy-dev",
        storageBucket: "book-club-buddy-dev.appspot.com",
        messagingSenderId: "217999158030",
        timestampsInSnapshots: true
      })
    const db = firebase.firestore();
    db.collection('users').get().then(snapshot => {
        snapshot.forEach(doc => console.log(doc.data()));
    })
}

export default initializeFirebaseApp;