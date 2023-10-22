import React from "react";
import "./Search.css";
import Header from "../header/Header";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import Item from "../item/Item";

const Search = ({ handleSearchButton }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const { all_product } = useContext(ShopContext);

  useEffect(() => {
    console.log(searchTerm);
  }, [searchTerm]);

  const [filteredProducts, setFilteredProducts] = useState(all_product);

  useEffect(() => {
    // Filter products when the searchTerm changes
    const filtered = all_product
      .filter((product) => {
        return product.name.toLowerCase().includes(searchTerm.toLowerCase());
      })
      .sort((a, b) => b.reviews - a.reviews);

    setFilteredProducts(filtered.slice(0, 4));
  }, [searchTerm, all_product]);

  return (
    <div>
      <div className="search-overlay">
        <Header />
        <div className="navbar search">
          <div className="search-header">
            <div className="search-bar">
              <input
                type="
                "
                className="search-input"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                autoFocus
              />
              <div className="search-bar-icons">
                <div className="search-erase" onClick={() => setSearchTerm("")}>
                  {searchTerm && (
                    <i className="fa-solid fa-x search-erase-icon"></i>
                  )}
                </div>
                <div className="search-icon">
                  {" "}
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
              </div>
            </div>
            <div className="search-close-icon" onClick={handleSearchButton}>
              {" "}
              <i className="fa-solid fa-x"></i>
            </div>
          </div>
        </div>
        {searchTerm && (
          <div className="search-content">
            {(filteredProducts.length > 0 && (
              <div className="search-results">
                {filteredProducts.map((item, index) => (
                  <div
                    key={index}
                    className={`search-item search-${index}`}
                    onClick={handleSearchButton}
                  >
                    {" "}
                    <Item item={item} />
                  </div>
                ))}
              </div>
            )) || <div className="search-no-results">No results.</div>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
