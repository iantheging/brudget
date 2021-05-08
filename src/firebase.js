import firebase from "firebase/app";
import "firebase/database";

let config = {
    apiKey: "AIzaSyAFm2cKtfd0FljNUg-BfQw64hv1cH7i0v0",
    authDomain: "brudget-1ece2.firebaseapp.com",
    databaseURL: "https://brudget-1ece2-default-rtdb.firebaseio.com",
    projectId: "brudget-1ece2",
    storageBucket: "brudget-1ece2.appspot.com",
    messagingSenderId: "67029653186",
    appId: "1:67029653186:web:bc408f341a081eb37a0d5b",
    measurementId: "G-2QQ45MRR3W"
  };

firebase.initializeApp(config);
export default firebase.database();