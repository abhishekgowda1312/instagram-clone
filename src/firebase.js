import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBbUIMSmBxTWZ_RcTPWa3QghHYILdWKsrs",
    authDomain: "instagram-clone-60a54.firebaseapp.com",
    projectId: "instagram-clone-60a54",
    storageBucket: "instagram-clone-60a54.appspot.com",
    messagingSenderId: "676246920207",
    appId: "1:676246920207:web:6762b7cbeda99ccbaf177a",
    measurementId: "G-LS1FQTX9V4"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage }