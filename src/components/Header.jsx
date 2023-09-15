import React from "react";
import "../styles/Header.css";
import image1 from "../images/tv.png";
import image2 from "../images/Search (1).png";
import image3 from "../images/Menu .png";
import image4 from "../images/imob.png";
import image5 from "../images/berry.png";
import image6 from "../images/Icon.png";
import Body from "./Body";
// import image7 from "../images/bg poster.png";
const Header = () => {
  return (
    <div>
      <div className="container">
        <nav>
          <div className="movie-loggo">
            <img src={image1} alt="landing -image" />
            <p className="movie-box">MovieBox</p>
          </div>
          <div className="search-box">
            <input type='text' placeholder='What do you want to watch'/>
              <img src={image2} alt="search-img" />
            </div>
          <div className="sign-box">
            <p className="sign-in">Sign in</p>
            <div className="icon"><img src={image3} alt="sign-img" /> </div>
          </div>
        </nav>
    <div className="movie-details">
        <p className="movie-name">John Wick 3 :
         Parabellum
         </p>
         <div className="details">
      <div className="detail-1">
        <img src={image4} alt="imob" />
        <p className="percentage">86.0 / 100</p>
      </div>
      <div className="detail-2">
        <img src={image5} alt="berry" />
        <p className="percentage">97%</p>
      </div>
      </div>
      <p className="preview">
      John Wick is on the run after killing a member of the international assassins' guild,
       and with a $14 million price tag on his head,
       he is the target of hit men and women everywhere.
      </p>
      <div className="trailer">
      <img src={image6} alt="icon" />
      <button>Watch Trailer</button>
      </div>
    </div>
      </div>
      <div className="body"><Body/></div>
    </div>
  );
};

export default Header;
