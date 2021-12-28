import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChVCz3oqRGiF6hPBNBf8nn0LN1sRr10r8",
  authDomain: "absolut-ecommerce2.firebaseapp.com",
  projectId: "absolut-ecommerce2",
  storageBucket: "absolut-ecommerce2.appspot.com",
  messagingSenderId: "555345304015",
  appId: "1:555345304015:web:5f65a7d6683111f56c5aba"
};

const app = initializeApp(firebaseConfig);
export const getFirebase = () => app;

  export { getFirestore };