import React from "react";
import "./Complete.css";
import all_product from "../../assets/all_product";
import Item from "../item/Item";

const Complete = ({ category }) => {
  const filteredAndSortedItems = all_product
    .filter((item) => item.category === category) // Filter items by category
    .sort((a, b) => b.rating - a.rating); // Sort by rating in descending order

  const top4Items = filteredAndSortedItems.slice(0, 4);

  return (
    <div className="complete section">
      <h1 className="section-title">Complete the look</h1>
      <div className="complete-category"></div>

      <div className="complete-items-container">
        <div className="complete-items">
          {top4Items.map((item, index) => {
            return <Item key={index} item={item}></Item>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Complete;
