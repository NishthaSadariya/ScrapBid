import React from "react";
import { BiSearch } from "react-icons/bi"; 
import { BsCartFill } from "react-icons/bs";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      {/* Logo */}
      <strong className="logo">
        <span className="s-letter">S</span>crap
        <span className="b-letter">B</span>id
      </strong>

      {/* Search Bar */}
      <div className="search-bar">
        <select className="category-dropdown">
          <option>All</option>
          <option>Computer and Networking</option>
          <option>Electronic Components</option>
          <option>Gadgets and Devices</option>
          <option>Home Appliences</option>
        </select>
        <input type="text" placeholder="Search here..." className="search-input" />
        <button className="search-btn">
          <BiSearch size={20} /> 
        </button>
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
