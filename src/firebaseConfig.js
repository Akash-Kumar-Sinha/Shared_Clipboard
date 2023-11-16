import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB9wwbukwcu5uLuSrDtk6SgeFHvweAKpzs",
  authDomain: "clipboard-f3993.firebaseapp.com",
  projectId: "clipboard-f3993",
  storageBucket: "clipboard-f3993.appspot.com",
  messagingSenderId: "1093342936135",
  appId: "1:1093342936135:web:ae351ffb0d31cab10b0562",
  measurementId: "G-3227R5SKJR"
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
// const analytics = getAnalytics(app);