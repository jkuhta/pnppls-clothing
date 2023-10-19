import React, { useContext } from "react";
import "./ShopCategory.css";
import { ShopContext } from "../../context/ShopContext";
import Item from "../../components/item/Item";
import Dropdown from "../../components/dropdown/Dropdown";
import { useState } from "react";
import { useEffect } from "react";

const ShopCategory = ({ category }) => {
  const { all_product } = useContext(ShopContext);

  const [selectedItem, setSelectedItem] = useState("featured");
  const [sortedItems, setSortedItems] = useState(all_product);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    console.log(selectedItem);
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
      setSortedItems(sorted);
    };

    sortArray(selectedItem);
  }, [selectedItem, all_product]);

  return (
    <div className="shop-category">
      <div className="shop-category-title">{category}'s Collection</div>
      <div className="shop-category-settings">
        <div className="shop-category-filter">
          <button>Filter</button>
        </div>
        <div className="shop-category-settings-right">
          <div className="shop-category-count">
            <p>36 products</p>
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
          if (category === item.category) {
            return <Item key={index} item={item} />;
          } else {
            return null;
          }
        })}
      </div>
      <div className="shop-category-loadmore">Explore More</div>
    </div>
  );
};

export default ShopCategory;
