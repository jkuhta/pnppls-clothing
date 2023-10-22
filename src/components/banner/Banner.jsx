import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = ({ banner_img, banner_title, banner_button, link_to }) => {
  return (
    <div className="banner">
      <img className="banner-img" src={banner_img} alt=""></img>
      <div className="banner-text-box">
        <h1 className="banner-title">{banner_title}</h1>
        {/* <h3 className="banner-subtitle">Check out our Outlet</h3> */}
        <Link className="blabla" to={link_to}>
          <button className="banner-btn">{banner_button}</button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
