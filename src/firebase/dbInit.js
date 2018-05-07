const firebase = require('firebase');
require('firebase/firestore');

let db;

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
    db = firebase.firestore();
}

function getDB() {
    return db;
}

export default {
    initializeFirebaseApp,
    getDB
};