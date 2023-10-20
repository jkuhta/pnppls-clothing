import React from "react";
import "./Navbar.css";
import { useState } from "react";
import pineapple_icon from "../../assets/pineapple.svg";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

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
    <div className="header-navbar">
      <Header />
      <div className="navbar">
        <div>
          <Link className="nav-logo" to="/" onClick={() => setMenu("home")}>
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
          <Link className="nav-icon" to="/search">
            <i className="bx bx-search"></i>
          </Link>
          <Link className="nav-icon" to="/login">
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
    </div>
  );
};

export default Navbar;
