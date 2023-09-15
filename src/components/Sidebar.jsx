import React, { useEffect, useState } from "react";
import "../styles/Sidebar.css";
import image8 from "../images/tv.png";
import image9 from "../images/Home.png";
import image10 from "../images/movie loggo.png";
import image11 from "../images/TV Show.png";
import image12 from "../images/Calendar.png";
import image13 from "../images/Logout.png";
import image14 from "../images/Rectangle 29.png";
import Details from "./Details";
import { useParams } from "react-router";
import axios from "axios";
import Alert from "./Alert";

const Sidebar = (props) => {
  const { id } = useParams();
  const key = `https://api.themoviedb.org/3/movie/${id}?api_key=6758311a6817aa5bb17dd3da21ba9fa4`;
  const [movies, setMovies] = useState([]);
  const [errorMessage, setError] = useState("");

  const getApi = async () => {
    try {
      const response = await axios.get(key);
      console.log("response movie");
      console.log(response);
      var singleMovie = response?.data;
      console.log("my single movie");
      console.log(singleMovie);
      setMovies(singleMovie);
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  useEffect(() => {
    getApi();
  }, []);

  return (
    <div className="about-flex" style={{ display: "flex", gap: "3rem" }}>
      {/* <div className="nav"> */}
      <div className="header-container">
        <div className="location">
          <img src={image8} alt="Movie" />
          <span>
            <p className="about">MovieBox</p>
          </span>
        </div>
        <div className="navigator">
          <div className="property">
            <img src={image9} alt="home" />
            <a href="home">Home</a>
          </div>
          <div className="property">
            <img src={image10} alt="movies" />
            <a href="movie">Movies</a>
          </div>
          <div className="property">
            <img src={image11} alt="tv" />
            <a href="series">TV series</a>
          </div>
          <div className="property">
            <img src={image12} alt="cal" />
            <a href="calender">Upcoming</a>
          </div>
        </div>
        <div className="box">
          <p className="promo">Play movie quizes and earn free tickets</p>
          <p className="update">50k people are playing now</p>
          <button className="instruct">Start Playing</button>
        </div>
        <div className="logout">
          <img src={image13} alt="logou-icon" />
          <a href="log">Logout</a>
        </div>
      </div>
      {errorMessage == "" ? (
        <div className="details">{<Details data={movies} />}</div>
      ) : (
        <Alert />
      )}
    </div>
  );
};

export default Sidebar;
