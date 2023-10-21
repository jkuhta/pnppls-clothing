import React, { useState, useEffect } from "react";
import "./Filter.css";

const Filter = ({
  setShowFilterMenu,
  showFilterMenu,
  all_product,
  category,
  setFilteredItems,
}) => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  useEffect(() => {
    const filtered_products = all_product.filter((item) => {
      if (selectedFilters.length === 0) {
        return item.category === category;
      } else {
        return (
          item.category === category &&
          selectedFilters.every((filter) => item.lables.includes(filter))
        );
      }
    });

    setFilteredItems(filtered_products);
  }, [selectedFilters, setFilteredItems, all_product, category]);

  const handleFilterClick = (item) => {
    if (selectedFilters.includes(item)) {
      setSelectedFilters(selectedFilters.filter((filter) => filter !== item));
    } else {
      setSelectedFilters([...selectedFilters, item]);
    }
  };

  const filterOptions = [
    { label: "New Arrivals", value: "new" },
    { label: "On Sale", value: "sale" },
    { label: "Recycled", value: "recycled" },
  ];

  return (
    <div className="filter">
      <button onClick={() => setShowFilterMenu(!showFilterMenu)}>
        <i className="bx bx-filter-alt"></i> Filter
      </button>
      {showFilterMenu && (
        <form id="filter-form">
          <div className="shop-category-filter-list">
            {filterOptions.map((option) => (
              <div
                className={`shop-category-filter-item ${
                  selectedFilters.includes(option.value)
                    ? "shop-category-active-filter"
                    : ""
                }`}
                key={option.value}
                onClick={() => handleFilterClick(option.value)}
              >
                {option.label}
              </div>
            ))}
          </div>
        </form>
      )}
    </div>
  );
};

export default Filter;
