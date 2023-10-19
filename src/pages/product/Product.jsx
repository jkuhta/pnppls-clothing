import React from "react";
import "./Product.css";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import ProductDisplay from "../../components/productDisplay/productDisplay";
import { useParams } from "react-router-dom";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div className="pineapples product">
      <BreadCrumb product={product} />
      <ProductDisplay product={product} />
      {/* <DescriptionBox />
      <RelatedProducts /> */}
    </div>
  );
};

export default Product;
