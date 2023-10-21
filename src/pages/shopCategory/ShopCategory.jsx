import React, { useContext } from "react";
import "./ShopCategory.css";
import { ShopContext } from "../../context/ShopContext";
import Item from "../../components/item/Item";
import Dropdown from "../../components/dropdown/Dropdown";
import { useState } from "react";
import { useEffect } from "react";
import Filter from "../../components/filter/Filter";

const ShopCategory = ({ category }) => {
  const { all_product } = useContext(ShopContext);

  const category_products = all_product.filter(
    (item) => item.category === category
  );

  const [selectedItem, setSelectedItem] = useState("rating");
  const [sortedItems, setSortedItems] = useState(all_product);
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [filteredItems, setFilteredItems] = useState(category_products);

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
      const sorted = [...filteredItems].sort((a, b) =>
        selectedItem === "price_up"
          ? a[sortProperty] - b[sortProperty]
          : b[sortProperty] - a[sortProperty]
      );
      handleSort(sorted);
    };

    sortArray(selectedItem);
  }, [selectedItem, filteredItems]);

  return (
    <div className="shop-category pineapples">
      <div className="shop-category-title">{category}'s Collection</div>
      <div className="shop-category-settings">
        <div className="shop-category-filter">
          <Filter
            setShowFilterMenu={setShowFilterMenu}
            showFilterMenu={showFilterMenu}
            all_product={all_product}
            filteredItems={filteredItems}
            setFilteredItems={setFilteredItems}
            category={category}
          />
        </div>
        <div className="shop-category-settings-right">
          <div className="shop-category-count">
            <p>
              {filteredItems.length} of {category_products.length} products
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
      {(sortedItems.length > 0 && (
        <div className="shop-category-products">
          {sortedItems.map((item, index) => {
            return (
              item.category === category && <Item key={index} item={item} />
            );
          })}
        </div>
      )) || <div className="shop-category-no-results">No results.</div>}

      {/* <div className="shop-category-loadmore">Explore More</div> */}
    </div>
  );
};

export default ShopCategory;
