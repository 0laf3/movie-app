const TMDB_API_KEY = "2838e19881854431b204e47ac0d0d9b8";
const BASE_URL = "https://api.themoviedb.org/3";

async function fetchMovies(query) {
    try {
        const response = await fetch(
            `${BASE_URL}/search/movie?api_key=${"2838e19881854431b204e47ac0d0d9b8"}&query=${query}`
        );
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
}

function displayMovies(movies) {
    const moviesSection = document.getElementById('movies');
    moviesSection.innerHTML = '';

    movies.forEach((movie) => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';

        movieCard.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <button onclick="addToFavorites('${movie.id}', '${movie.title}')">Add to Favorites</button>
        `;

        moviesSection.appendChild(movieCard);
    });
}

document.getElementById('searchButton').addEventListener('click', async () => {
    const query = document.getElementById('searchInput').value;
    const movies = await fetchMovies(query);
    displayMovies(movies);
});