// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDco_1Db3OQVISi3QzwcOh1iFgMu436WrM",
  authDomain: "dragon-news-prac.firebaseapp.com",
  projectId: "dragon-news-prac",
  storageBucket: "dragon-news-prac.appspot.com",
  messagingSenderId: "666309723451",
  appId: "1:666309723451:web:eb6a2c4d89b54146ebe31e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;