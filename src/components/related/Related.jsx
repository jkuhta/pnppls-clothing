import React from "react";
import "./Related.css";
import all_product from "../../assets/all_product";
import Item from "../item/Item";

const Related = ({ category }) => {
  const filteredAndSortedItems = all_product
    .filter((item) => item.category === category) // Filter items by category
    .sort((a, b) => b.rating - a.rating); // Sort by rating in descending order

  const top4Items = filteredAndSortedItems.slice(0, 4);

  return (
    <div className="related section">
      <h1 className="section-title">You may also like</h1>
      <div className="related-category"></div>

      <div className="related-items-container">
        <div className="related-items">
          {top4Items.map((item, index) => {
            return <Item key={index} item={item}></Item>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Related;
