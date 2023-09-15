import React, { useEffect, useState } from "react";
import "../styles/Body.css";
import axios from "axios";
import { NavLink } from "react-router-dom";

<h2 className="title">
  Featured movie
</h2>
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
  
  const popularMovies = movies.map((movie) => {
    return (
      <div className="cards">
        <NavLink to={`/about/${movie.id}`} data-testid="movie-card" key={movie.id}>
        <div className="poster" data testid="movie-poster">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        {/* <div data-testid="">{movie.id}</div> */}
        <div className="movie-title" data-testid="movie-title"> {movie.title}</div>
        {/* <div>Genre {genre_ids}</div> */}
        {/* <div className="movie-release-date" data-testid:""></div> */}
        <div className="date" data-testid="movie-release-date">{movie.release_date}</div>
        {/* <div> overview {movie.overview}</div> */}
          {/* {movie.popularity} */} 
      </NavLink>
      </div>
      // </div>
    );
  });

  return (
    <div>
      <h2 className="title">
      Featured movie
      </h2>

      <div className="grid">{popularMovies}</div>
    </div>
  );
};

export default Body;
