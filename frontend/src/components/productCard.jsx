// import {Link} from "react-router-dom";
import "../styles/productCard.css"

const ProductCard =({product})=>{
    return(
        <div className="product-card-container">
            <div className="product-card">
                <div className="product-img">
                    <img src= {product.image} alt={product.name}/> 
                </div>
                <div className="product-info">
                    <h3>{product.name}</h3>
                    <p>Starting Bid: <strong>{product.price}</strong></p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
