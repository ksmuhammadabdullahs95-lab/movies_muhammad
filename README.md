# Movie Collection Display API

## 1. About the Collection

This movie collection mixes beloved classics and modern fan-favorites.  
You’ll find iconic dramas, mind-bending sci-fi, stylish crime films, and vibrant animation, all chosen to show a variety of genres and eras.

## 2. Project Description

This project is a simple Movie Collection Display API built with **Node.js** and **Express.js**, plus a minimal **HTML/CSS/JavaScript** frontend.  
It exposes three GET endpoints to fetch all movies, classic movies, and genre statistics, and a web page that lets you browse this data using buttons.

**Technologies used:**
- Node.js
- Express.js
- HTML
- CSS
- JavaScript (Fetch API)

## 3. Genres Available

Current genres in the collection include:

- Drama  
- Sci-Fi  
- Action  
- Crime  
- Animation  

## 4. Project Structure

```text
movie-collection-api/
├─ server.js          # Main Express server
├─ package.json       # Project metadata & scripts
├─ .gitignore         # Ignored files (node_modules, etc.)
├─ README.md          # Project documentation
└─ public/
   ├─ index.html      # Frontend page
   ├─ styles.css      # Basic styling
   └─ script.js       # Fetch + DOM logic
```

## 5. API Documentation

### 5.1 GET `/movies`

- **Method:** GET  
- **Description:** Returns a list of all movies.

**Sample Response:**

```json
[
  {
    "id": 1,
    "title": "The Shawshank Redemption",
    "genre": "Drama",
    "releaseYear": 1994,
    "isClassic": true,
    "director": "Frank Darabont"
  },
  {
    "id": 2,
    "title": "Inception",
    "genre": "Sci-Fi",
    "releaseYear": 2010,
    "isClassic": false,
    "director": "Christopher Nolan"
  }
]
```

### 5.2 GET `/movies/classics`

- **Method:** GET  
- **Description:** Returns only classic movies (`isClassic: true`).

**Sample Response:**

```json
[
  {
    "id": 1,
    "title": "The Shawshank Redemption",
    "genre": "Drama",
    "releaseYear": 1994,
    "isClassic": true,
    "director": "Frank Darabont"
  }
]
```

### 5.3 GET `/movies/genres`

- **Method:** GET  
- **Description:** Returns all unique genres with a count of how many movies belong to each.

**Sample Response:**

```json
{
  "genres": [
    {
      "name": "Drama",
      "movieCount": 2
    },
    {
      "name": "Action",
      "movieCount": 2
    },
    {
      "name": "Sci-Fi",
      "movieCount": 1
    }
  ]
}
```

## 6. Installation & Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/YOUR_USERNAME/movie-collection-api.git
   cd movie-collection-api
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the server**

   ```bash
   npm start
   ```

4. **Access the API**

   - All movies: `http://localhost:3000/movies`
   - Classic movies: `http://localhost:3000/movies/classics`
   - Genres: `http://localhost:3000/movies/genres`

5. **Access the frontend**

   - Open `http://localhost:3000/` in your browser.

## 7. Features

- Node.js + Express API with in-memory movie collection.
- Three endpoints: all movies, classic-only, genres with counts.
- Simple web UI to:
  - View all movies
  - View only classic movies
  - View genres and movie counts
- Classic movies are visually highlighted with a “Classic” badge.
- Basic error handling for failed fetch requests.

## 8. GitHub Repository Link

> Replace this with your actual repository URL before submission:

- GitHub: `https://github.com/YOUR_USERNAME/movie-collection-api`

## 9. Author Information

- **Name:** KS MUHAMMAD ABDULLAH
