import React from "react";
import "./BestSeller.css";
import all_product from "../../assets/all_product";
import Item from "../item/Item";
import { Link } from "react-router-dom";

const BestSeller = ({ category }) => {
  const filteredAndSortedItems = all_product
    .filter((item) => item.category === category) // Filter items by category
    .sort((a, b) => b.rating - a.rating); // Sort by rating in descending order

  const top4Items = filteredAndSortedItems.slice(0, 4);

  return (
    <div className="bestSeller">
      <h1>best sellers</h1>
      <div className="bestSeller-category">
        <hr></hr>
        <span>{category}</span>
        <hr></hr>
      </div>
      <div className="bestSeller-all-btn-container">
        <Link to={`/${category}`}>
          <button className="bestSeller-all-btn">Shop All</button>
        </Link>
      </div>

      <div className="bestSeller-items-container">
        <div className="bestSeller-items">
          {top4Items.map((item, index) => {
            return <Item key={index} item={item}></Item>;
          })}
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
