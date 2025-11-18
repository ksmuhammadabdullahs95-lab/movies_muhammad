// server.js
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// In-memory movies data
// At least 6 movies, 3+ genres, mix of classics and recent
const movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    genre: "Drama",
    releaseYear: 1994,
    isClassic: true,
    director: "Frank Darabont"
  },
  {
    id: 2,
    title: "Inception",
    genre: "Sci-Fi",
    releaseYear: 2010,
    isClassic: false,
    director: "Christopher Nolan"
  },
  {
    id: 3,
    title: "The Dark Knight",
    genre: "Action",
    releaseYear: 2008,
    isClassic: false,
    director: "Christopher Nolan"
  },
  {
    id: 4,
    title: "Pulp Fiction",
    genre: "Crime",
    releaseYear: 1994,
    isClassic: true,
    director: "Quentin Tarantino"
  },
  {
    id: 5,
    title: "The Matrix",
    genre: "Sci-Fi",
    releaseYear: 1999,
    isClassic: true,
    director: "The Wachowskis"
  },
  {
    id: 6,
    title: "Spider-Man: Into the Spider-Verse",
    genre: "Animation",
    releaseYear: 2018,
    isClassic: false,
    director: "Bob Persichetti, Peter Ramsey, Rodney Rothman"
  }
];

// Middleware to serve static files (frontend)
app.use(express.static(path.join(__dirname, "public")));

/**
 * GET /movies
 * Returns all movies
 */
app.get("/movies", (req, res) => {
  res.json(movies);
});

/**
 * GET /movies/classics
 * Returns only classic movies (isClassic: true)
 */
app.get("/movies/classics", (req, res) => {
  const classicMovies = movies.filter((movie) => movie.isClassic === true);
  res.json(classicMovies);
});

/**
 * GET /movies/genres
 * Returns all unique genres with movie counts
 * Response shape:
 * {
 *   "genres": [
 *     { "name": "Drama", "movieCount": 2 },
 *     ...
 *   ]
 * }
 */
app.get("/movies/genres", (req, res) => {
  const genreCountsMap = movies.reduce((acc, movie) => {
    if (!acc[movie.genre]) {
      acc[movie.genre] = 0;
    }
    acc[movie.genre] += 1;
    return acc;
  }, {});

  const genresArray = Object.keys(genreCountsMap).map((genreName) => ({
    name: genreName,
    movieCount: genreCountsMap[genreName]
  }));

  res.json({ genres: genresArray });
});

app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
