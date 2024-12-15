const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2838e19881854431b204e47ac0d0d9b8&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=2838e19881854431b204e47ac0d0d9b8&query=';
const main = document.getElementById('movies');
const form = document.getElementById('form');
const search = document.getElementById('searchInput');

// Show loading spinner initially
main.innerHTML = `<div class="loading-spinner">Loading...</div>`;

// Get initial movies on page load
getMovies(API_URL);

// Fetch movies from API
async function getMovies(url) {
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error('Failed to fetch movies');
        }
        const data = await res.json();
        showMovies(data.results);
    } catch (error) {
        console.error(error);
        main.innerHTML = `<p>Something went wrong. Please try again later.</p>`;
    }
}

// Display movies on the page
function showMovies(movies) {
    main.innerHTML = '';  // Clear the loading spinner

    // If no movies are found, display a message
    if (movies.length === 0) {
        main.innerHTML = `<p>No movies found. Please try a different search.</p>`;
        return;
    }

    movies.forEach(({ title, poster_path, vote_average, overview }) => {
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');

        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                <p>${overview}</p>
            </div>
        `;
        main.appendChild(movieEl);
    });
}

// Get class based on the rating of the movie
function getClassByRate(vote) {
    if (vote >= 8) {
        return 'green';
    } else if (vote >= 5) {
        return 'orange';
    }
    return 'red';
}

// Handle search functionality
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = search.value.trim();

    if (searchTerm) {
        // Show loading spinner during the search
        main.innerHTML = `<div class="loading-spinner">Searching...</div>`;
        getMovies(SEARCH_API + searchTerm);
        search.value = '';
    } else {
        window.location.reload(); // Reload to show popular movies
    }
});

// Toggle mobile menu visibility
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}