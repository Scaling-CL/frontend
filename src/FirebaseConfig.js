import * as firebase from "firebase";
import "firebase/auth";
//import dataConfig from './dataConfig'

const app = firebase.initializeApp(
    {
        apiKey: "AIzaSyC4d8pAdtGee10V3kAwOXkPp3K7W-ceV6c",
        authDomain: "petvet-fa497.firebaseapp.com",
        databaseURL: "https://petvet-fa497.firebaseio.com",
        projectId: "petvet-fa497",
        storageBucket: "petvet-fa497.appspot.com",
        messagingSenderId: "603417961553",
        appId: "1:603417961553:web:13ff870aa428fbcd8bc470",
        measurementId: "G-M95TKH4ZX0"
    }
);

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();

export default app;
