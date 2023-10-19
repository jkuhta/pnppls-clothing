import React, { useContext } from "react";
import "./ShopCategory.css";
import { ShopContext } from "../../context/ShopContext";
import Item from "../../components/item/Item";
import Dropdown from "../../components/dropdown/Dropdown";
import { useState } from "react";
import { useEffect } from "react";

const ShopCategory = ({ category }) => {
  const { all_product } = useContext(ShopContext);

  const filtered_products = all_product.filter(
    (item) => item.category === category
  ); // Filter items by category

  const [selectedItem, setSelectedItem] = useState("featured");
  const [sortedItems, setSortedItems] = useState(all_product);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleSort = (sorted) => {
    setSortedItems(sorted);
  };

  useEffect(() => {
    const sortArray = (type) => {
      const types = {
        rating: "rating",
        reviews: "reviews",
        price_up: "new_price",
        price_down: "new_price",
      };
      const sortProperty = types[type];
      const sorted = [...all_product].sort((a, b) =>
        selectedItem === "price_up"
          ? a[sortProperty] - b[sortProperty]
          : b[sortProperty] - a[sortProperty]
      );
      handleSort(sorted);
    };

    sortArray(selectedItem);
  }, [selectedItem, all_product]);

  return (
    <div className="shop-category pineapples">
      <div className="shop-category-title">{category}'s Collection</div>
      <div className="shop-category-settings">
        <div className="shop-category-filter">
          <button>
            <i className="bx bx-filter-alt"></i> Filter
          </button>
        </div>
        <div className="shop-category-settings-right">
          <div className="shop-category-count">
            <p>
              {filtered_products.length} of {filtered_products.length} products
            </p>
          </div>
          <div className="shop-category-sort">
            <Dropdown
              selectedItem={selectedItem}
              handleItemClick={handleItemClick}
            />
          </div>
        </div>
      </div>

      <div className="shop-category-products">
        {sortedItems.map((item, index) => {
          return item.category === category && <Item key={index} item={item} />;
        })}
      </div>
      {/* <div className="shop-category-loadmore">Explore More</div> */}
    </div>
  );
};

export default ShopCategory;
