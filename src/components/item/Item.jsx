import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import Stars from "../stars/Stars";

const Item = ({ item }) => {
  return (
    <div className="item">
      <Link className="item-link" to={`/product/${item.id}`}>
        <img
          className="item-img"
          src={item.image}
          alt=""
          onClick={window.scrollTo(0, 0)}
        ></img>
        <div className="item-labels">
          {item.lables.map((label, index) => (
            <label key={index} className={`item-label ${label}`}>
              {label}
            </label>
          ))}
        </div>
      </Link>
      <div className="item-description">
        <p>{item.name}</p>
        <div className="rating">
          <Stars rating={item.rating} />
          <span>({item.reviews})</span>
        </div>
        <div className="item-prices">
          <div className="item-price-new">€ {item.new_price}</div>
        </div>
      </div>
    </div>
  );
};

export default Item;
