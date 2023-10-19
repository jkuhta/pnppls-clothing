import React from "react";
import "./Colors.css";

const Colors = ({ colors, selectedColor, handleColor }) => {
  return (
    <div className="colors">
      <h3 className="colors-title">
        Color: <span>{selectedColor.name}</span>{" "}
      </h3>
      <div className="colors-box">
        {colors.map((color, index) => {
          return (
            <div
              key={index}
              className={
                color.hex === selectedColor.hex
                  ? "color-circle active"
                  : "color-circle"
              }
              onClick={() => handleColor(color)}
            >
              <div className="color" style={{ background: color.hex }}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Colors;
