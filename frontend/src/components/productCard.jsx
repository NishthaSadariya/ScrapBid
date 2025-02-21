// import {Link} from "react-router-dom";
import React from "react";
import "../styles/productCard.css";
import { FaGavel, FaRegHeart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card-container">
      <div className="product-card">
        <div className="product-img">
          <img src={product.image} alt={product.name} />
          <div className="product-icons">
            <FaGavel className="auction-icon" />
            <FaRegHeart className="like-icon"/>
          </div>
        </div>
        <div className="product-info">
          <h3>{product.name}</h3>
          <p>
            Starting Bid: <strong>{product.price}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
