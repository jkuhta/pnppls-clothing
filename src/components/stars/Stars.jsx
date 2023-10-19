import React from "react";
import "./Stars.css";

const Stars = ({ rating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <span key={i} className="star full-star">
            <i className="bx bxs-star"></i>
          </span>
        );
      } else if (i - 0.5 === rating) {
        stars.push(
          <span key={i} className="star half-star">
            <i className="bx bxs-star-half"></i>{" "}
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="star empty-star">
            <i className="bx bx-star"></i>
          </span>
        );
      }
    }
    return stars;
  };

  return <div className="star-rating">{renderStars()}</div>;
};

export default Stars;
