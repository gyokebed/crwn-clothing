import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDqAgDs-xLUImzBAro9o8fewm6IMR1O330",
  authDomain: "crwn-db-799bd.firebaseapp.com",
  databaseURL: "https://crwn-db-799bd.firebaseio.com",
  projectId: "crwn-db-799bd",
  storageBucket: "",
  messagingSenderId: "1083657710385",
  appId: "1:1083657710385:web:99e2361163687265"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
