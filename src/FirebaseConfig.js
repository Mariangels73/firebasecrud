// src/FirebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJ9GLnIbtzvxh8bzaPy8jwjThk9OBbWpI",
  authDomain: "fir-crud-d33bf.firebaseapp.com",
  projectId: "fir-crud-d33bf",
  storageBucket: "fir-crud-d33bf.appspot.com",
  messagingSenderId: "566917128623",
  appId: "1:566917128623:web:95fd077f05c4e522644f5a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
