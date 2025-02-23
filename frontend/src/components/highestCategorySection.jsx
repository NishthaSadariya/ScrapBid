import React from "react";
import ProductCard from "./productCard";
import products from "../data/data";
import "../styles/highestCategorySection.css"

const CategorySection = ({category, categoryImage}) =>{
    const allCategoryProducts = products.filter((product) => product.category === category);
    const totalItems = allCategoryProducts.length; // Total count of items

    // Get the top 3 highest bidding products
    const categoryProducts = allCategoryProducts
        .sort((a, b) => parseInt(b.price.replace(/₹/, "")) - parseInt(a.price.replace(/₹/, "")))
        .slice(0, 3);

    return(
        <div className="category-section-container">
            <div className="category-card">
                <img src={categoryImage} alt="category" className="category-image" />
                <div className="category-info">
                    <h2>{category}</h2>
                    <p>{totalItems} Items</p>
                    <button className="view-all-btn">View All Items</button>
                </div>
                {/* <h1></h1> */}
            </div>

            {/* Product cards */}
            {categoryProducts.map((product) => (
                <ProductCard key = {product.id} product={product} />
            ))}
        </div>
    );
};

export default CategorySection;