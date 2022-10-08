import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCixucR-zh9_BDEmE8h0gVNsBpfBaOvi4Q",
  authDomain: "trash-solver.firebaseapp.com",
  projectId: "trash-solver",
  storageBucket: "trash-solver.appspot.com",
  messagingSenderId: "912317838407",
  appId: "1:912317838407:web:eb86ffbe1d7ff50148ed62",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;
