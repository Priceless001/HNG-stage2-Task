import React from "react";
import "../styles/Details.css";

const Details = (props) => {
  console.log("from the details component");
  console.log(props.data);
  const utcDate = new Date(props.data.release_date);
  return (
    <div>
      Details
      <div className="pages">
        <div className="page-2-poster" data testid="movie-poster">
          <img
            src={`https://image.tmdb.org/t/p/w500/${props.data.poster_path}`}
            alt={props.data.title}
          />
        </div>
        <div className="title-date-time">
          <div className="name" data-testid="movie-title">
            {props.data.original_title}
          </div>
          <div className="date" data-testid="movie-release-date">
            {utcDate.toUTCString()};
          </div>
          <div
            className="runtime"
            data-testid="movie-runtime"
          >{`${props.data.runtime} mins`}</div>
        </div>
        <div className="review" data-testid="overview">
          {" "}
          {props.data.overview}
        </div>
        <button className="fav">Add to favourite</button>
      </div>
    </div>
  );
};

export default Details;
