// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdrnzNFFQzQkter9qMn5qeTRCspsxmvJk",
  authDomain: "movie-app-f2790.firebaseapp.com",
  databaseURL: "https://movie-app-f2790-default-rtdb.firebaseio.com",
  projectId: "movie-app-f2790",
  storageBucket: "movie-app-f2790.firebasestorage.app",
  messagingSenderId: "210502729839",
  appId: "1:210502729839:web:64aee2051aa5719cf40d9a",
  measurementId: "G-PBGX4D1SPG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);