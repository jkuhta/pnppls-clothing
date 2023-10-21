import React, { useContext } from "react";
import "./Outlet.css";
import { ShopContext } from "../../context/ShopContext";

import OutletCategory from "../../components/outletCategory/OutletCategory";

const Outlet = () => {
  const { all_product } = useContext(ShopContext);

  const categories = ["men", "women", "accessories", "kids"];

  return (
    <div className="outlet pineapples">
      {categories.map((categ, index) => {
        const filtered_products = all_product.filter((product) => {
          // Filter by category
          if (product.category !== categ) {
            return false; // Skip this product if it's not in the desired category
          }

          // Filter by labels
          if (product.lables.includes("sale")) {
            return true; // Include this product if it has the desired label
          }

          return false; // Skip this product if it doesn't match the label
        });
        return (
          <OutletCategory
            key={index}
            category={categ}
            products={filtered_products}
          />
        );
      })}
    </div>
  );
};

export default Outlet;
