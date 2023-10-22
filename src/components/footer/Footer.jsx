import React from "react";
import "./Footer.css";
import pineapple from "../../assets/pineapple.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
  const [showLinks, setShowLinks] = useState(Array(4).fill(false));

  const toggleLinks = (index) => {
    const updatedLinks = [...showLinks];
    updatedLinks[index] = !updatedLinks[index];
    setShowLinks(updatedLinks);
  };

  const footerLinks = [
    {
      title: "Womens",
      links: [
        "New Arrivals",
        "Clothing",
        "Accessories",
        "Headwear",
        "Footwear",
        "Outlet",
      ],
    },
    {
      title: "Mens",
      links: [
        "New Arrivals",
        "Clothing",
        "Accessories",
        "Headwear",
        "Footwear",
        "Outlet",
      ],
    },
    {
      title: "Explore",
      links: [
        "About Us",
        "Responsibility",
        "Journal",
        "Reviews",
        "Collective",
        "Careers",
      ],
    },
    {
      title: "Support",
      links: [
        "Help Center",
        "Delievery",
        "Returns & Refunds",
        "FAQ",
        "Payments & Orders",
        "Get In Touch",
      ],
    },
  ];
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
          {footerLinks.map((col, index) => (
            <div className="footer-col" key={index}>
              <h3
                className="footer-col-title"
                onClick={() => toggleLinks(index)}
              >
                {col.title}
              </h3>
              <i
                onClick={() => toggleLinks(index)}
                className={` footer-small-icon ${
                  showLinks[index]
                    ? "fa-regular fa-minus"
                    : "fa-regular fa-plus"
                }`}
              ></i>
              <div
                className={`footer-col-links ${
                  showLinks[index] ? "" : "hidden"
                }`}
              >
                {col.links.map((link, linkIndex) => (
                  <Link className="footer-col-link" key={linkIndex}>
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          ))}
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
