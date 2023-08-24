// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFUROG00JT_2_bhTCMo4W0OOtxnNCDLKU",
  authDomain: "request-com-8d159.firebaseapp.com",
  projectId: "request-com-8d159",
  storageBucket: "request-com-8d159.appspot.com",
  messagingSenderId: "993476091584",
  appId: "1:993476091584:web:3d0a23f369bd0b7283d725",
  measurementId: "G-CNQD6GX4GM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider(app);
export const db = getFirestore(app);