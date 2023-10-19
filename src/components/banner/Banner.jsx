import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-text-box">
        <h1 className="banner-title">Exclusive Offers For You</h1>
        {/* <h3 className="banner-subtitle">Check out our Outlet</h3> */}
        <Link className="blabla" to="/outlet">
          <button className="banner-btn">Shop Outlet</button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
