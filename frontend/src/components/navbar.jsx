import React from "react";
import "../styles/navbar.css";
import { BsCartFill } from "react-icons/bs";
import SearchBox from "./searchBox";

const Navbar = () => {
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
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/contact">Profile</a>
        <a href="/signin">Signin</a>
      </div>

      {/* Cart Button */}
      <button className="cart-btn">
        <BsCartFill size={25} color="#87CEFA" /> My Cart
      </button>
    </div>
  );
};

export default Navbar;
