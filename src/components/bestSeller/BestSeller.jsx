import React, { useRef, useEffect, useState } from "react";
import "./BestSeller.css";
import all_product from "../../assets/all_product";
import Item from "../item/Item";
import { Link } from "react-router-dom";

const BestSeller = ({ category }) => {
  const filteredAndSortedItems = all_product
    .filter((item) => item.category === category)
    .sort((a, b) => b.rating - a.rating);

  const top8Items = filteredAndSortedItems.slice(0, 8);

  const scrollContainerRef = useRef(null); // Create a ref for the scroll container
  const itemRef = useRef(null); // Create a ref for the Item component
  const [itemWidth, setItemWidth] = useState(0); // State to store item width

  useEffect(() => {
    if (itemRef.current) {
      // Measure the width of the rendered Item component
      const width = itemRef.current.offsetWidth;
      setItemWidth(width);
    }
  }, [top8Items]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= itemWidth + 20;
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += itemWidth + 20;
    }
  };

  return (
    <div className="bestSeller">
      <h1>best sellers</h1>
      <div className="bestSeller-category">
        <hr></hr>
        <span>{category}</span>
        <hr></hr>
      </div>
      <div className="bestSeller-all-btn-container">
        <Link className="link" to={`/${category}`}>
          <button className="bestSeller-all-btn">Shop All</button>
        </Link>
      </div>

      <div className="bestSeller-items-container" ref={scrollContainerRef}>
        <div className="bestSeller-items">
          {top8Items.map((item, index) => {
            return (
              <div className="bestSeller-item" key={index} ref={itemRef}>
                <Item item={item} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="bestSeller-arrows">
        <div className="arrow left" onClick={scrollLeft}>
          <i className="fas fa-chevron-left"></i>
        </div>
        <span className="item-count">
          {/* Display the current item count here */}
        </span>
        <div className="arrow right" onClick={scrollRight}>
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
