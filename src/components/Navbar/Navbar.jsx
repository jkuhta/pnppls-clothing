import React from "react";
import "./Navbar.css";
import { useState } from "react";
import pineapple_icon from "../../assets/pineapple.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  //   const { getTotalCartItems } = useContext(ShopContext);
  return (
    <div className="navbar">
      <div>
        <Link className="nav-logo" to="/">
          <img className="nav-logo-img" src={pineapple_icon} alt="" />
          <p className="nav-logo-text">PNPPLS</p>
        </Link>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("mens")}>
          <Link className="nav-item" to="/mens">
            Men
          </Link>{" "}
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link className="nav-item" to="/womens">
            Women
          </Link>{" "}
          {menu === "womens" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("accessories")}>
          <Link className="nav-item" to="/accessories">
            Accessories
          </Link>{" "}
          {menu === "accessories" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("outlet")}>
          <Link className="nav-item" to="/outlet">
            Outlet
          </Link>{" "}
          {menu === "outlet" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("story")}>
          <Link className="nav-item" to="/story">
            Story
          </Link>{" "}
          {menu === "story" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("contact")}>
          <Link className="nav-item" to="/contact">
            Contact
          </Link>{" "}
          {menu === "contact" ? <hr /> : <></>}
        </li>
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
        </Link>
        <div className="nav-cart-count">
          <p>{0}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
