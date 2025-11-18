// public/script.js

const output = document.getElementById("output");
const btnAll = document.getElementById("btnAll");
const btnClassics = document.getElementById("btnClassics");
const btnGenres = document.getElementById("btnGenres");

/**
 * Utility: Clear output container
 */
function clearOutput() {
  output.innerHTML = "";
}

/**
 * Utility: Render error message
 */
function renderError(message) {
  clearOutput();
  const div = document.createElement("div");
  div.className = "error";
  div.textContent = message;
  output.appendChild(div);
}

/**
 * Render list of movies
 */
function renderMovies(movies) {
  clearOutput();

  if (!movies || movies.length === 0) {
    const p = document.createElement("p");
    p.className = "placeholder";
    p.textContent = "No movies found.";
    output.appendChild(p);
    return;
  }

  movies.forEach((movie) => {
    const card = document.createElement("article");
    card.className = "card";

    const header = document.createElement("div");
    header.className = "card-header";

    const title = document.createElement("h2");
    title.className = "card-title";
    title.textContent = movie.title;

    header.appendChild(title);

    if (movie.isClassic) {
      const badge = document.createElement("span");
      badge.className = "badge-classic";
      badge.textContent = "Classic";
      header.appendChild(badge);
    }

    const meta = document.createElement("p");
    meta.className = "card-meta";
    meta.textContent = `Release Year: ${movie.releaseYear}`;

    const genrePill = document.createElement("span");
    genrePill.className = "genre-pill";
    genrePill.textContent = movie.genre;

    const director = document.createElement("p");
    director.className = "card-director";
    director.textContent = `Director: ${movie.director}`;

    card.appendChild(header);
    card.appendChild(meta);
    card.appendChild(genrePill);
    card.appendChild(director);

    output.appendChild(card);
  });
}

/**
 * Render genres with counts
 * data shape: { genres: [ { name, movieCount }, ... ] }
 */
function renderGenres(data) {
  clearOutput();

  if (!data || !data.genres || data.genres.length === 0) {
    const p = document.createElement("p");
    p.className = "placeholder";
    p.textContent = "No genres found.";
    output.appendChild(p);
    return;
  }

  data.genres.forEach((genre) => {
    const card = document.createElement("article");
    card.className = "card";

    const title = document.createElement("h2");
    title.className = "card-title";
    title.textContent = genre.name;

    const meta = document.createElement("p");
    meta.className = "card-meta";
    meta.textContent = `Movie count: ${genre.movieCount}`;

    card.appendChild(title);
    card.appendChild(meta);

    output.appendChild(card);
  });
}

/**
 * Generic fetch helper
 */
async function fetchAndRender(url, renderFn) {
  try {
    clearOutput();
    const loading = document.createElement("p");
    loading.className = "placeholder";
    loading.textContent = "Loading...";
    output.appendChild(loading);

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    renderFn(data);
  } catch (error) {
    console.error(error);
    renderError("Something went wrong while fetching data. Please try again.");
  }
}

// Button event listeners
btnAll.addEventListener("click", () => {
  fetchAndRender("/movies", renderMovies);
});

btnClassics.addEventListener("click", () => {
  fetchAndRender("/movies/classics", renderMovies);
});

btnGenres.addEventListener("click", () => {
  fetchAndRender("/movies/genres", renderGenres);
});
