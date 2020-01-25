import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB4S8j3c0QvH1DacpFopNu7r8-_7xX0M5c",
  authDomain: "kittyfresh-bbdf6.firebaseapp.com",
  databaseURL: "https://kittyfresh-bbdf6.firebaseio.com",
  projectId: "kittyfresh-bbdf6",
  storageBucket: "kittyfresh-bbdf6.appspot.com",
  messagingSenderId: "82074396236",
  appId: "1:82074396236:web:d9b160ad19073fc39836e9",
  measurementId: "G-T1E2BYWZ03"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
