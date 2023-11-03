import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyBal0GN5MSauWX-ApaF4juHEUwtHV7DFT4",
    authDomain: "e-library-3f783.firebaseapp.com",
    projectId: "e-library-3f783",
    storageBucket: "e-library-3f783.appspot.com",
    messagingSenderId: "834785329392",
    appId: "1:834785329392:web:1f55e19beaa754b97dc235"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
