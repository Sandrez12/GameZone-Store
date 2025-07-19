// src/firebase.ts
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDly1Qv6Tf-YKcBpN3dw6mjLxlnzbD6sUo",
  authDomain: "gamezonestore-161eb.firebaseapp.com",
  projectId: "gamezonestore-161eb",
  storageBucket: "gamezonestore-161eb.firebasestorage.app",
  messagingSenderId: "989112903230",
  appId: "1:989112903230:web:90f1664db6a4fb95e4d36f"
}

// Inicializar Firebase
const app = initializeApp(firebaseConfig)

// Exportar auth
export const auth = getAuth(app)
