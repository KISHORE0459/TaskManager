import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore";
import firebaseConfig from "./firebaseconfig";

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export default firestore;
