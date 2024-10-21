import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration (your config details)
const firebaseConfig = {
  apiKey: "AIzaSyCs3ZTN1MbYokuP_vJ1Cjio1svcY1In3yY",
  authDomain: "drdeepak-d50b6.firebaseapp.com",
  projectId: "drdeepak-d50b6",
  storageBucket: "drdeepak-d50b6.appspot.com",
  messagingSenderId: "141865523457",
  appId: "1:141865523457:web:c71fb7ef174476dc99a300",
  measurementId: "G-0EYFBW7QPZ",
};

// Initialize Firebase only if no apps are initialized
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app); // Initialize Firestore
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null; // Initialize Analytics only in the browser

export { firestore };