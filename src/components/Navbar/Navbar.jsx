import React from "react";
import "./Navbar.css";
import { useState } from "react";
import pineapple_icon from "../../assets/pineapple.svg";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import Search from "../search/Search";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartItems } = useContext(ShopContext);

  window.addEventListener("scroll", function () {
    const nav = this.document.querySelector(".navbar");
    if (this.scrollY >= 30) nav.classList.add("fixed");
    else nav.classList.remove("fixed");

    if (this.scrollY >= 80) nav.classList.add("scroll-header");
    else nav.classList.remove("scroll-header");
  });
  //   const [toggle, showMenu] = useState(false);
  //   const [activeNav, setActiveNav] = useState("#home");

  const [showSearch, setShowSearch] = useState(false);

  const [showSmallMenu, setShowSmallMenu] = useState(false);

  const handleSearchButton = () => {
    if (showSearch) {
      document.documentElement.classList.add("no-scroll");
    } else {
      document.documentElement.classList.remove("no-scroll");
    }
    setShowSearch(!showSearch);
  };

  const navItems = [
    {
      id: "men",
      icon: "estate",
      name: "Men",
    },
    {
      id: "women",
      icon: "user",
      name: "Women",
    },
    {
      id: "kids",
      icon: "user",
      name: "Kids",
    },
    {
      id: "accessories",
      icon: "file-alt",
      name: "Accessories",
    },
    {
      id: "outlet",
      icon: "briefcase",
      name: "Outlet",
    },
    {
      id: "story",
      icon: "check-circle",
      name: "Story",
    },
    // {
    //   id: "contact",
    //   icon: "water",
    //   name: "Contact",
    // },
  ];

  return (
    <div id="overlay" className={showSmallMenu ? "navbar-black" : ""}>
      <div className="header-navbar">
        <Header />
        {(!showSearch && (
          <div className="navbar">
            <div className="navbar-main">
              <div>
                <Link
                  className="nav-logo"
                  to="/"
                  onClick={() => setMenu("home")}
                >
                  <img className="nav-logo-img" src={pineapple_icon} alt="" />
                  <p className="nav-logo-text">PNPPLS</p>
                </Link>
              </div>
              <ul className="nav-menu">
                {navItems.map((item, index) => (
                  <li key={index} onClick={() => setMenu(item.id)}>
                    <Link className="nav-item" to={`/${item.id}`}>
                      {item.name}
                    </Link>{" "}
                    {menu === item.id ? <hr /> : <></>}
                  </li>
                ))}
              </ul>
              <div className="nav-icons">
                <Link className="nav-icon" onClick={handleSearchButton}>
                  <i className="bx bx-search"></i>
                </Link>
                <Link className="nav-icon" to="/signup">
                  <i className="bx bx-user-circle"></i>
                </Link>
                <Link className="nav-icon" to="/cart">
                  <i className="bx bx-cart"></i>{" "}
                  <div className="nav-cart-count">
                    <p>{getTotalCartItems()}</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="navbar-small">
              <div
                className="nav-menu-icon nav-icon"
                onClick={() => setShowSmallMenu(!showSmallMenu)}
              >
                <i className="fa-solid fa-bars"></i>
              </div>
              <div className="nav-logo-small">
                <Link
                  className="nav-logo"
                  to="/"
                  onClick={() => setMenu("home")}
                >
                  <img className="nav-logo-img" src={pineapple_icon} alt="" />
                  <p className="nav-logo-text">PNPPLS</p>
                </Link>
              </div>
              <div className="nav-icons">
                <Link className="nav-icon" onClick={handleSearchButton}>
                  <i className="bx bx-search"></i>
                </Link>
                <Link className="nav-icon " to="/signup">
                  <i className="bx bx-user-circle nav-signup-icon"></i>
                </Link>
                <Link className="nav-icon" to="/cart">
                  <i className="bx bx-cart"></i>{" "}
                  <div className="nav-cart-count">
                    <p>{getTotalCartItems()}</p>
                  </div>
                </Link>
              </div>
            </div>
            <div
              className={
                showSmallMenu ? "navbar-small-menu" : "navbar-small-menu hidden"
              }
            >
              <ul className="nav-small-menu-list">
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => setShowSmallMenu(!showSmallMenu)}
                  >
                    <Link
                      className={`nav-small-item ${item.name}`}
                      to={`/${item.id}`}
                    >
                      <div className="nav-small-item-name">{item.name}</div>
                      <div className="nav-small-item-icon">{">"}</div>
                    </Link>{" "}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )) || <Search handleSearchButton={handleSearchButton} />}
      </div>
    </div>
  );
};

export default Navbar;
