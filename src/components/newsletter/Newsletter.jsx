import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="newsletter-box">
        <h1 className="newsletter-title">Join our world</h1>
        <p className="newsletter-subtitle">
          Subscribe to the Pnppls newsletter for 10% off your first order.
        </p>
        <form className="newsletter-form">
          <div className="newsletter-inputs">
            <input
              className="newsletter-input"
              type="text"
              placeholder="Your name"
            />
            <input
              className="newsletter-input"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="newsletter-btn-box">
            <button type="submit" className="newsletter-btn">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
