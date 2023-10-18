import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-top">
        <div className="hero-banner">
          <h1>NEW ARRIVALS</h1>
          <h3>Designed For You</h3>
          <div className="hero-buttons">
            <Link className="hero-button" to="/womens">
              <button>Women</button>
            </Link>
            <Link className="hero-button" to="/mens">
              <button>Men</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="hero-slogan">eat pnppls * wear pnppls * vibe pnppls</div>
    </div>
  );
};

export default Hero;
