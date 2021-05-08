import firebase from "firebase/app";
import "firebase/firestore";

let config = {
    apiKey: "AIzaSyAFm2cKtfd0FljNUg-BfQw64hv1cH7i0v0",
    authDomain: "brudget-1ece2.firebaseapp.com",
    projectId: "brudget-1ece2",
    storageBucket: "brudget-1ece2.appspot.com",
    messagingSenderId: "67029653186",
    appId: "1:67029653186:web:65ffb4d364157ea17a0d5b",
    measurementId: "G-XG835LD7GG"
};

firebase.initializeApp(config);
export default firebase.firestore();