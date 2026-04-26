import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCNAtkwtt21zdfFE8O25R6dKyOCsfn2XG4",
  authDomain: "fouqra-a0fd6.firebaseapp.com",
  projectId: "fouqra-a0fd6",
  storageBucket: "fouqra-a0fd6.appspot.com", // Gunakan format standar ini
  messagingSenderId: "1012288939398",
  appId: "1:1012288939398:web:b61553dba2a364e7557807",
  measurementId: "G-6CFEZ1JWVQ"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);