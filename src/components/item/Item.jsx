import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import Stars from "../stars/Stars";

const Item = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img src={props.image} alt="" onClick={window.scrollTo(0, 0)}></img>
      </Link>
      <div className="item-description">
        <p>{props.name}</p>
        <div className="rating">
          <Stars rating={props.rating} />
          <span>({props.reviews})</span>
        </div>
        <div className="item-prices">
          <div className="item-price-new">€ {props.new_price}</div>
        </div>
      </div>
    </div>
  );
};

export default Item;
