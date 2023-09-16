import React, { useEffect, useState } from "react";
import "../styles/Body.css";
import axios from "axios";
import { NavLink } from "react-router-dom";

<h2 className="title">Featured movie</h2>;
const Body = () => {
  const key =
    "https://api.themoviedb.org/3/movie/popular?api_key=6758311a6817aa5bb17dd3da21ba9fa4";
  const [movies, setMovies] = useState([]);

  const getApi = async () => {
    try {
      const response = await axios.get(key);
      const movies = response?.data?.results.slice(0, 10); // Get the first 10 movies
      setMovies(movies);

      for (let i = 0; i < movies.length; i++) {
        const movie = movies[i];
        console.log(movie);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getApi();
  }, []);

  const genreMap = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };

  const popularMovies = movies.map((movie) => {
    const genreNames = movie.genre_ids
      .map((genreID) => genreMap[genreID])
      .join(", ");
    return (
      <div className="cards">
        <NavLink
          to={`/about/${movie.id}`}
          data-testid="movie-card"
          key={movie.id}
        >
          <div className="poster" data testid="movie-poster">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
          <div className="movie-title" data-testid="movie-title">
            {" "}
            {movie.title}
          </div>
          <div className="date" data-testid="movie-release-date">
            {movie.release_date}
          </div>
          <div className="genre"> {genreNames}</div>
          <div className="rating">{`${(movie.vote_average*10).toFixed(1)}/100`}</div>
          <button className="fav">Add to Favourite</button>
        </NavLink>
      </div>
      // </div>
    );
  });

  return (
    <div>
      <h2 className="title">Featured movie</h2>

      <div className="grid">{popularMovies}</div>
    </div>
  );
};

export default Body;
