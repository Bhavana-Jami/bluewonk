import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/firestore";
import { getFirestore, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAh01jkRQKNlGZG2dL1cIHmFved7ZZa4R4",
  authDomain: "bluewonk-94503.firebaseapp.com",
  projectId: "bluewonk-94503",
  storageBucket: "bluewonk-94503.appspot.com",
  messagingSenderId: "88036855816",
  appId: "1:88036855816:web:a41047c094c4475d2b81bd",
  measurementId: "G-YT4TVS3MEK",
};

const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { db, auth, googleAuthProvider, facebookAuthProvider, serverTimestamp };
