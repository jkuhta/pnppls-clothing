import React from "react";
import "./Footer.css";
import pineapple from "../../assets/pineapple.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div>
            <Link className="footer-logo" to="/">
              <img className="footer-logo-img" src={pineapple} alt="" />
              <p className="footer-logo-text">PNPPLS</p>
            </Link>
          </div>
          <p className="footer-col-p">
            Clothing made to embrace the journeys to come, while leaving the
            smallest of footprints. We put sustainability & adventure at the
            heart of every product.
          </p>
          <h3 className="footer-col-title">Connect with us</h3>
          <div className="footer-social-icons">
            <i className="bx bxl-instagram-alt"></i>
            <i className="bx bxl-facebook-circle"></i>
            <i className="bx bxl-pinterest"></i>
            <i className="bx bxl-tumblr"></i>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-col">
            <h3 className="footer-col-title">Womens</h3>
            <div className="footer-col-links">
              <Link className="footer-col-link">New Arrivals</Link>
              <Link className="footer-col-link">Clothing</Link>
              <Link className="footer-col-link">Accessories</Link>
              <Link className="footer-col-link">Headwear</Link>
              <Link className="footer-col-link">Footwear</Link>
              <Link className="footer-col-link">Outlet</Link>
            </div>
          </div>
          <div className="footer-col">
            <h3 className="footer-col-title">Mens</h3>
            <div className="footer-col-links">
              <Link className="footer-col-link">New Arrivals</Link>
              <Link className="footer-col-link">Clothing</Link>
              <Link className="footer-col-link">Accessories</Link>
              <Link className="footer-col-link">Headwear</Link>
              <Link className="footer-col-link">Footwear</Link>
              <Link className="footer-col-link">Outlet</Link>
            </div>
          </div>
          <div className="footer-col">
            <h3 className="footer-col-title">Explore</h3>
            <div className="footer-col-links">
              <Link className="footer-col-link">About Us</Link>
              <Link className="footer-col-link">Responsibility</Link>
              <Link className="footer-col-link">Journal</Link>
              <Link className="footer-col-link">Reviews</Link>
              <Link className="footer-col-link">Collective</Link>
              <Link className="footer-col-link">Careers</Link>
            </div>
          </div>
          <div className="footer-col">
            <h3 className="footer-col-title">Help & Support</h3>
            <div className="footer-col-links">
              <Link className="footer-col-link">Help Center</Link>
              <Link className="footer-col-link">Delievery</Link>
              <Link className="footer-col-link">Returns & Refunds</Link>
              <Link className="footer-col-link">FAQ</Link>
              <Link className="footer-col-link">Payments & Orders</Link>
              <Link className="footer-col-link">Get In Touch</Link>
            </div>
          </div>
        </div>
      </div>
      <hr className="footer-hr" />

      <div className="footer-terms">
        <span>Terms & Conditions</span> <hr /> <span>Privacy Policy</span>{" "}
        <hr />
        <span>Cookies</span>
      </div>
      <div className="footer-copyrights">
        © 2023 jankuhta. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
