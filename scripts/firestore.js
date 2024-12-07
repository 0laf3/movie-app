const addToWatchlist = async (movieId, title, poster) => {
    const userId = auth.currentUser.uid;
    try {
        await db.collection('users').doc(userId).collection('watchlist').doc(movieId).set({
            movieId,
            title,
            poster,
            addedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        alert('Movie added to Watchlist!');
    } catch (error) {
        console.error('Error adding to watchlist:', error);
    }
};
