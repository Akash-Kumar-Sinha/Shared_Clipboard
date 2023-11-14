import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyATdsB3azTnkNhiVVnjQw3mIfM1xUmhRTI",
  authDomain: "shared-clipboard-2ed3b.firebaseapp.com",
  projectId: "shared-clipboard-2ed3b",
  storageBucket: "shared-clipboard-2ed3b.appspot.com",
  messagingSenderId: "321261660111",
  appId: "1:321261660111:web:ef1a7e330bace0e94cd4ba",
  measurementId: "G-HSBEQ7J89P"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
// const analytics = getAnalytics(app);