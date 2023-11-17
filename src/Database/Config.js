import firebase from "firebase/compat/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA0DJl1vkO6CHjmJ-nFkDlfLySsVz-Vbpc",
  authDomain: "whatsapp-clone-website.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-website-default-rtdb.firebaseio.com",
  projectId: "whatsapp-clone-website",
  storageBucket: "whatsapp-clone-website.appspot.com",
  messagingSenderId: "596502964109",
  appId: "1:596502964109:web:0d44b6b7bb2d4200bcbfc4"
};


// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = getAuth(firebaseApp);
const Provider = new GoogleAuthProvider();

export { db, auth, Provider };
