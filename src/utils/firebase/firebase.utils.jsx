import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-3Dv_Hi2LsbkoygWUeyg-sELlzCrLwyg",
  authDomain: "crwn-clothing-db-42746.firebaseapp.com",
  projectId: "crwn-clothing-db-42746",
  storageBucket: "crwn-clothing-db-42746.appspot.com",
  messagingSenderId: "1086905906562",
  appId: "1:1086905906562:web:303e322269ee6ab64e0b9b",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

// Singleton instance
export const db = getFirestore();

// Store the data in the firestore.
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the userdoc" + error.message);
    }
  }
  return userDocRef;
};