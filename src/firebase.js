import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB4CDuCrtVqA0zef3IAI3zHT-yGOtMjs-Y",
  authDomain: "hussein-s-market.firebaseapp.com",
  projectId: "hussein-s-market",
  storageBucket: "hussein-s-market.appspot.com",
  messagingSenderId: "393533812010",
  appId: "1:393533812010:web:ab66f0ed46b188cce84253",
  measurementId: "G-MWPMDZK2BF",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
