import React from "react";
import "./BreadCrumb.css";
import arrow_icon from "../../assets/breadcrum_arrow.png";
import { Link } from "react-router-dom";

const BreadCrumb = (props) => {
  const { product } = props;
  return (
    <div className="breadcrumb">
      <div className="breadcrumb-content">
        <Link to="/" className="breadcrumb-link">
          Home
        </Link>
        <img src={arrow_icon} alt="" />
        <Link to={`/${product.category}`} className="breadcrumb-link">
          <span>{product.category}</span>'s Collection
        </Link>
        <img src={arrow_icon} alt="" />
        {product.name}
      </div>
    </div>
  );
};

export default BreadCrumb;
