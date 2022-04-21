// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBoDHFRXUth-3DzZhuO3jZToTHcUipI3fA",
  authDomain: "easy-agro.firebaseapp.com",
  projectId: "easy-agro",
  storageBucket: "easy-agro.appspot.com",
  messagingSenderId: "135112750321",
  appId: "1:135112750321:web:27012a26bd19a1c56a6550"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth  = firebase.auth();
export {auth};
export default db;