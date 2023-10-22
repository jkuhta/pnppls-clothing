import React, { useContext } from "react";
import "./productDisplay.css";
import { ShopContext } from "../../context/ShopContext";
import Stars from "../stars/Stars";
import Colors from "../colors/Colors";
import { useState } from "react";
import Sizes from "../sizes/Sizes";
import Related from "../related/Related";
import Review from "../review/Review";
import Complete from "../complete/Complete";
import OverView from "../overview/OverView";
import { useRef } from "react";
import { useEffect } from "react";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  // Create a ref to store the scroll position
  const scrollPositionRef = useRef(null);

  const handleColor = (color) => {
    setSelectedColor(color);
    scrollPositionRef.current = window.scrollY;
  };

  const [selectedSize, setSelectedSize] = useState("S");

  const handleSize = (size) => {
    setSelectedSize(size);
    scrollPositionRef.current = window.scrollY;
  };

  // Use an effect to scroll to the saved position
  useEffect(() => {
    if (scrollPositionRef.current !== null) {
      window.scrollTo(0, scrollPositionRef.current);
      // Clear the stored scroll position after using it
      scrollPositionRef.current = null;
    }
  }, [selectedSize, selectedColor]);

  return (
    <>
      <div className="productdisplay">
        <div className="productdisplay-left">
          <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
          </div>
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
        <div className="productdisplay-right">
          <div className="productdisplay-labels">
            {product.lables.map((label, index) => (
              <label key={index} className={`productdisplay-label ${label}`}>
                {label}
              </label>
            ))}
          </div>
          <h1>{product.name}</h1>
          <div className="productdisplay-right-stars">
            <Stars rating={product.rating} /> ({product.reviews})
          </div>
          <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-new">
              €{product.new_price}
            </div>
            <div className="productdisplay-right-price-old">
              €{product.old_price}
            </div>
          </div>
          <div className="productdisplay-right-description">
            A lightweight, usually knitted, pullover shirt, close-fitting and
            with a round neckline and short sleeves, worn as an undershirt or
            outer garment.
          </div>
          <div className="productdisplay-colors">
            <Colors
              colors={product.colors}
              selectedColor={selectedColor}
              handleColor={handleColor}
            />
          </div>
          <div className="productdisplay-right-sizes">
            <Sizes selectedSize={selectedSize} handleSize={handleSize} />
          </div>
          <button
            onClick={() =>
              addToCart({
                id: product.id,
                size: selectedSize,
                color: selectedColor,
              })
            }
          >
            Add to Cart
          </button>
          <div className="pd-shipping-box">
            <div className="pd-shipping-line">
              <i className="pd-shipping-icon fa-solid fa-gift"></i>One free
              PNPPLS keychain per order
            </div>
            <div className="pd-shipping-line">
              <i className="pd-shipping-icon fa-solid fa-truck-fast"></i>Free
              shipping on orders over €60
            </div>
            <div className="pd-shipping-line">
              <i className="pd-shipping-icon fa-solid fa-rotate-left"></i>60 day
              returns
            </div>
          </div>
        </div>
      </div>
      <div className="pd-overview">
        <OverView />
      </div>
      <div className="pd-complete">
        <Complete category={product.category} />
      </div>
      <div className="pd-review">
        <Review />
      </div>
      <div className="pd-related">
        <Related category={product.category} />
      </div>
    </>
  );
};

export default ProductDisplay;
