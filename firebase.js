import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyA7pSOeH1BNtzl2KnZ-3ApB4Rvf5YM63TE",
    authDomain: "giftedchat-11970.firebaseapp.com",
    projectId: "giftedchat-11970",
    storageBucket: "giftedchat-11970.appspot.com",
    messagingSenderId: "512418562297",
    appId: "1:512418562297:web:dc365bf58514da7db82228"
};

let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}
const db = app.firestore();
const auth = firebase.auth();
export { db, auth };