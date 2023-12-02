import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD71usc2dSjwRijZUE3NI2haXvw5UKL3fI",
  authDomain: "sharpe-assignment.firebaseapp.com",
  projectId: "sharpe-assignment",
  storageBucket: "sharpe-assignment.appspot.com",
  messagingSenderId: "446754872637",
  appId: "1:446754872637:web:7310cc72b7c6918cd9f954",
  measurementId: "G-DXFVR3WJBG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebaseApp.firestore();


export { firestore };