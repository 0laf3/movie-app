// scripts/auth.js
const loginButton = document.getElementById('loginButton');
const logoutButton = document.getElementById('logoutButton');

auth.onAuthStateChanged((user) => {
    if (user) {
        updateUI(true, user.displayName);
    } else {
        updateUI(false);
    }
});

loginButton.addEventListener('click', () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then((result) => {
            console.log('User signed in:', result.user.displayName);
        })
        .catch((error) => console.error('Login error:', error));
});

logoutButton.addEventListener('click', () => {
    auth.signOut()
        .then(() => console.log('User signed out'))
        .catch((error) => console.error('Logout error:', error));
});

function updateUI(loggedIn, username = '') {
    loginButton.style.display = loggedIn ? 'none' : 'inline';
    logoutButton.style.display = loggedIn ? 'inline' : 'none';
    document.querySelector('header h1').textContent = loggedIn
        ? `Welcome, ${username}`
        : 'Movie App';
}
