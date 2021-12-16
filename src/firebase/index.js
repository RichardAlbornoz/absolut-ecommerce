import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBtvmImIR-mWMwxRdUg8hvw7iwDVMM74zA",
    authDomain: "absolut-ecommerce.firebaseapp.com",
    projectId: "absolut-ecommerce",
    storageBucket: "absolut-ecommerce.appspot.com",
    messagingSenderId: "139924492295",
    appId: "1:139924492295:web:e821fe7222f44fb9665aa2",
    // eslint-disable-next-line no-template-curly-in-string
    measurementId: "${config.measurementId}"
  };
  
  const app = initializeApp(firebaseConfig);

  export const getFirebase = () => app;

  export { getFirestore };