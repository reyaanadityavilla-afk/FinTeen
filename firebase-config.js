import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDsLRbbXbkzD8QJqOFbphNjJ8O581UprqI",
  authDomain: "finteen26.firebaseapp.com",
  projectId: "finteen26",
  storageBucket: "finteen26.firebasestorage.app",
  messagingSenderId: "835662472464",
  appId: "1:835662472464:web:aba7470cb3ff74012a7195"
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
