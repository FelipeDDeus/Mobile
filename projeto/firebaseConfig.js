import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAektNJ5S041WNPaur4YMxpUif_PvQcLQA",
  authDomain: "pratica02-felipeddeus.firebaseapp.com",
  projectId: "pratica02-felipeddeus",
  storageBucket: "pratica02-felipeddeus.firebasestorage.app",
  messagingSenderId: "815506162178",
  appId: "1:815506162178:web:01807b97dd9a6450745d1b"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);