import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCw-7vCklwmenJOsL7BnWkR2C0NW2sr4qc",
  authDomain: "clone-f5a18.firebaseapp.com",
  projectId: "clone-f5a18",
  storageBucket: "clone-f5a18.appspot.com",
  messagingSenderId: "55823942360",
  appId: "1:55823942360:web:22956fa2f622a82941cdad",
  measurementId: "G-CCHT2WX5W6",
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGEING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,
  // measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const db = getFirestore(app);

export { auth };
