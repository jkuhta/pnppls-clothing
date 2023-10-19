import React, { useState, useEffect } from "react";
import "./OutletCategory.css";
import Item from "../../components/item/Item";
import Dropdown from "../../components/dropdown/Dropdown";
import { useMemo, useRef } from "react";

const OutletCategory = ({ category, products }) => {
  const [selectedItem, setSelectedItem] = useState("rating");
  const [sortedItems, setSortedItems] = useState(products);
  const [showItems, setShowItems] = useState(4);

  // Create a ref to store the scroll position
  const scrollPositionRef = useRef(null);

  const handleShow = () => {
    // Save the current scroll position before updating the state
    scrollPositionRef.current = window.scrollY;

    setShowItems(showItems + 4);
  };

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
      const sorted = [...products].sort((a, b) =>
        selectedItem === "price_up"
          ? a[sortProperty] - b[sortProperty]
          : b[sortProperty] - a[sortProperty]
      );
      handleSort(sorted);
    };

    sortArray(selectedItem);
  }, [selectedItem, products]);

  const itemstoshow = useMemo(() => {
    return sortedItems
      .slice(0, showItems)
      .map((item, index) => <Item key={index} item={item} />);
  }, [sortedItems, showItems]);

  // Use an effect to scroll to the saved position
  useEffect(() => {
    if (scrollPositionRef.current !== null) {
      window.scrollTo(0, scrollPositionRef.current);
      // Clear the stored scroll position after using it
      scrollPositionRef.current = null;
    }
  }, [showItems]);

  return (
    <div className="outlet">
      <div className="section">
        <div className="outlet-title section-title">{category}'s Outlet</div>
        <div className="outlet-settings">
          <div className="outlet-filter">
            <button>
              <i className="bx bx-filter-alt"></i> Filter
            </button>
          </div>
          <div className="outlet-settings-right">
            <div className="outlet-count">
              <p>
                {sortedItems.slice(0, showItems).length} of {sortedItems.length}{" "}
                products
              </p>
            </div>
            <div className="outlet-sort">
              <Dropdown
                selectedItem={selectedItem}
                handleItemClick={handleItemClick}
              />
            </div>
          </div>
        </div>

        <div className="outlet-products">{itemstoshow}</div>
        <div className="outlet-btn">
          {showItems <= sortedItems.length ? (
            <button
              type="button"
              className="custom-button"
              onClick={handleShow}
            >
              Show More
            </button>
          ) : (
            "All results loaded."
          )}
        </div>
      </div>
    </div>
  );
};

export default OutletCategory;
