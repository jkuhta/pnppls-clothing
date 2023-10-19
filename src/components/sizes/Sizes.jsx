import React from "react";
import "./Sizes.css";

const Sizes = ({ selectedSize, handleSize }) => {
  const sizes = ["S", "M", "L", "XL"];

  return (
    <div className="sizes">
      <h3 className="sizes-title">Size</h3>
      <div className="sizes-box">
        {sizes.map((item, index) => {
          return (
            <div
              key={index}
              className={selectedSize === item ? "size active" : "size"}
              onClick={() => handleSize(item)}
            >
              {item}
            </div>
          );
        })}
        <div className="size disabled">XXL</div>
      </div>
    </div>
  );
};

export default Sizes;
