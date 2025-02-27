import React from "react";
import "../styles/searchBox.css";
import { BiSearch } from "react-icons/bi"; 


const SearchBox = () => {
  return (
    <div>
      {/* Search Bar */}
      <div className="search-bar">
        <select className="category-dropdown">
          <option>All</option>
          <option>Computer and Networking</option>
          <option>Electronic Components</option>
          <option>Gadgets and Devices</option>
          <option>Home Appliences</option>
        </select>
        <input
          type="text"
          placeholder="Search here..."
          className="search-input"
        />
        <button className="search-btn">
          <BiSearch size={20} />
        </button>
      </div>

      

    </div>
  );
};

export default SearchBox;
