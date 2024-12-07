// Watchlist and Favorites Logic

// Firestore reference
const db = firebase.firestore();

// Add a movie to the user's favorites
async function addToFavorites(movieId, title) {
    if (!auth.currentUser) {
        alert('Please login to save favorites!');
        return;
    }

    const userId = auth.currentUser.uid;
    try {
        await db.collection('users').doc(userId).collection('favorites').doc(movieId).set({
            title,
            addedAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
        alert('Movie added to your favorites!');
    } catch (error) {
        console.error('Error adding to favorites:', error);
    }
}

// Fetch user's favorites from Firestore
async function fetchFavorites() {
    if (!auth.currentUser) {
        alert('Please login to view favorites!');
        return [];
    }

    const userId = auth.currentUser.uid;
    try {
        const snapshot = await db.collection('users').doc(userId).collection('favorites').get();
        const favorites = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));
        return favorites;
    } catch (error) {
        console.error('Error fetching favorites:', error);
        return [];
    }
}

// Display user's favorites in the UI
async function displayFavorites() {
    const favorites = await fetchFavorites();
    const moviesSection = document.getElementById('movies');
    moviesSection.innerHTML = '<h2>Your Favorites</h2>';

    favorites.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `
            <h3>${movie.title}</h3>
            <button onclick="removeFromFavorites('${movie.id}')">Remove</button>
        `;
        moviesSection.appendChild(movieCard);
    });
}

// Remove a movie from the user's favorites
async function removeFromFavorites(movieId) {
    if (!auth.currentUser) {
        alert('Please login to modify favorites!');
        return;
    }

    const userId = auth.currentUser.uid;
    try {
        await db.collection('users').doc(userId).collection('favorites').doc(movieId).delete();
        alert('Movie removed from favorites!');
        displayFavorites(); // Refresh the favorites list
    } catch (error) {
        console.error('Error removing from favorites:', error);
    }
}

let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];

function addToFavorites(movieId, movieTitle) {
    const movie = { id: movieId, title: movieTitle };
    watchlist.push(movie);
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
    alert(`${movieTitle} has been added to your favorites!`);
}

// Event listener for displaying favorites
document.getElementById('favoritesButton').addEventListener('click', displayFavorites);
