import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCs3ZTN1MbYokuP_vJ1Cjio1svcY1In3yY",
  authDomain: "drdeepak-d50b6.firebaseapp.com",
  projectId: "drdeepak-d50b6",
  storageBucket: "drdeepak-d50b6.appspot.com",
  messagingSenderId: "141865523457",
  appId: "1:141865523457:web:c71fb7ef174476dc99a300",
  measurementId: "G-0EYFBW7QPZ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };