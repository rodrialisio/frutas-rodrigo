import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCI9Hbf2pV5AZSrWX5qOMijqqeCobjQGts",
  authDomain: "frutas-rodrigo.firebaseapp.com",
  projectId: "frutas-rodrigo",
  storageBucket: "frutas-rodrigo.appspot.com",
  messagingSenderId: "209626972936",
  appId: "1:209626972936:web:b7c58eb1c21152fc4122bd"
};

const app = initializeApp(firebaseConfig);

export const getData= () => getFirestore(app)