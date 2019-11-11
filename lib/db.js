import * as Firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
}

const firebase = Firebase.apps.length
  ? Firebase.app()
  : Firebase.initializeApp(firebaseConfig)

const firestore = Firebase.firestore()

const auth = Firebase.auth()

const signUp = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

const signIn = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

const signOut = () => auth.signOut();

const PasswordReset = email => auth.sendPasswordResetEmail(email);

const PasswordUpdate = password => auth.currentUser.updatePassword(password);

module.exports = {
  firebase,
  firestore,
  auth,
  signUp,
  signIn,
  signOut,
  PasswordReset,
  PasswordUpdate,
}