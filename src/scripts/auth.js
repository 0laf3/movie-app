// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCE6tZeRg14AW850GsORfxQOjKLB6-yDrk",
    authDomain: "test-49104.firebaseapp.com",
    projectId: "test-49104",
    storageBucket: "test-49104.firebasestorage.app",
    messagingSenderId: "551491932990",
    appId: "1:551491932990:web:443b8481e51a3ec773d26f",
    measurementId: "G-3S0GSVM73B",
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// DOM Elements
const loginButton = document.getElementById("loginButton");
const logoutButton = document.getElementById("logoutButton");
const favoritesButton = document.getElementById("favoritesButton");

// Handle authentication state
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is logged in
    loginButton.style.display = "none";
    logoutButton.style.display = "inline-block";
    favoritesButton.style.display = "inline-block";
  } else {
    // User is logged out
    loginButton.style.display = "inline-block";
    logoutButton.style.display = "none";
    favoritesButton.style.display = "none";
  }
});

// Login functionality
loginButton.addEventListener("click", () => {
  const email = prompt("Enter your email:");
  const password = prompt("Enter your password:");

  if (email && password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert(`Welcome back, ${userCredential.user.email}!`);
      })
      .catch((error) => {
        console.error("Login error:", error.message);
        alert("Login failed. Please try again.");
      });
  } else {
    alert("Email and password are required to login.");
  }
});

// Logout functionality
logoutButton.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      alert("You have logged out successfully.");
    })
    .catch((error) => {
      console.error("Logout error:", error.message);
      alert("Failed to logout. Please try again.");
    });
});

// Favorites button functionality
favoritesButton.addEventListener("click", () => {
  alert("Favorites feature coming soon!");
});
