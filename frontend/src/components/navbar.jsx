import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { BsCartFill } from "react-icons/bs";
import SearchBox from "./searchBox";

const Navbar = () => {
  const [showCategories, setShowCategories] = useState(false);
  return (
    <div className="navbar-container">
      {/* Logo */}
      <strong className="logo">
        <span className="s-letter">S</span>crap
        <span className="b-letter">B</span>id
      </strong>

      <div>
        <SearchBox />
      </div>

      {/* Navigation Links */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <div
          className="nav-item"
          onMouseEnter={() => setShowCategories(true)}
          onMouseLeave={() => setShowCategories(false)}
        >
          <Link to="/products">Products</Link> {/* Show all products */}
          {showCategories && (
            <div className="category-list">
              <Link to="/products/category/Computer and Networking">
                Computer and Networking
              </Link>
              <Link to="/products/category/Electronic components">
                Electronic Components
              </Link>
              <Link to="/products/category/Gadgets and Devices">
                Gadgets and Devices
              </Link>
              <Link to="/products/category/Home appliances">
                Home Appliances
              </Link>
            </div>
          )}
        </div>
        <Link to="/profile">Profile</Link>
        <Link to="/signin">Signin</Link>
      </div>

      {/* Cart Button */}
      <button className="cart-btn">
        <BsCartFill size={25} color="#87CEFA" /> My Cart
      </button>
    </div>
  );
};

export default Navbar;
