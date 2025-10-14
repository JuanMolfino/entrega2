
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import "./index.css"
import App from './App.jsx'
import { CartProvider } from './components/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <>
  <BrowserRouter>
    <CartProvider>
    <App />
    </CartProvider>
    </BrowserRouter>
  </>,
)
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1PHHWshMr4NE_GjpIxvuCIJM6nxxKqzU",
  authDomain: "coder-prueba1.firebaseapp.com",
  projectId: "coder-prueba1",
  storageBucket: "coder-prueba1.firebasestorage.app",
  messagingSenderId: "68407137780",
  appId: "1:68407137780:web:615bc690f175ce11fdd5a1",
  measurementId: "G-6E1Y2LB7SG"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



