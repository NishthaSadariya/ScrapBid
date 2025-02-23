import React from "react";
import Header from "../components/header";
import Navbar from "../components/navbar";
import "../styles/homePage.css";
import ProductCard from "../components/productCard";
import products from "../data/data";
import { Gavel, Recycle, Truck, CreditCard } from "lucide-react";
import {FaGavel} from "react-icons/fa"; 
import CategorySection from "../components/highestCategorySection";

// Sort by highest bid price and select top 4 products
const featuredProducts = [...products]
  .sort((a, b) => parseFloat(b.price.replace("₹", "")) - parseFloat(a.price.replace("₹", "")))
  .slice(0, 4);

const HomePage = () => {

  // calculate category count
  
  const categoryCounts = products.reduce((counts, product) => {
    counts[product.category] = (counts[product.category] || 0) + 1;
    return counts;
  }, {});

  return (
    <div>
      <Header />
      <Navbar />

      {/* Image Section */}
      <div className="image-container">
        <img src="/Images/ScrapBidHome.jpg" loading="lazy" alt="Background" />
      </div>

      {/* text on image */}
      {/* <div className="text-overlay">
                <h1>
                    {"Empowering Sustainability Through E-Waste Auctions".split("").map((char, index) => (
                        <span key={index} style={{ animationDelay: `${index * 0.05}s` }}>
                            {char === " " ? "\u00A0" : char} 
                        </span>
                    ))}
                </h1>
                <p>Join us in reducing waste and giving products a second life.</p>
            </div> */}

      {/* after image section*/}
      <div className="blue-flex-container">
        <div className="inside-flex-items-main">
          {/* E-waste */}
          <div className="items">
            <div className="icon">
              <Recycle size={40} />
            </div>
            <h3>Recycle Your E-Waste</h3>
            <p>Join us to give your e-waste a new life.</p>
          </div>
        </div>

        <div className="inside-flex-items-main">
          {/* Auction */}
          <div className="items">
            <div className="icon">
              <Gavel size={40}/>
            </div>
            <h3>Live Scrap Auctions</h3>
            <p>Bid on scrap materials easily.</p>
          </div>
        </div>

        <div className="inside-flex-items-main">
          {/* Pickup */}
          <div className="items">
            <div className="icon">
              <Truck size={40} />
            </div>
            <h3>Hassle-Free Pickup</h3>
            <p>We arrange scrap pickup at your convenience.</p>
          </div>
        </div>

        <div className="inside-flex-items-main">
          {/* Payment */}
          <div className="items">
            <div className="icon">
              <CreditCard size={40} />
            </div>
            <h3>Secure Payments</h3>
            <p>Safe transactions for buyers & sellers.</p>
          </div>
        </div>
      </div>

      {/* label for featured products */}
      <div className="Hbid">
        <p>Highest Bid Products</p>
        <div className="Hbidicon">
            <FaGavel size={40} color="#54a0c9"/>
        </div>
      </div>

      {/* Highest bidding products */}
      <div className="featured-products-container">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {/* Category Section */}
      <div className="category-container">

        <div className="column-1">
          
          <div className="Computer-and-networking">
            <div className="Computer-and-networking-info">
              <img src="/Images/ScrapBidHome.jpg" loading="lazy" alt="Background 1" />
              <h1>Computer and Networking</h1>
              <h3>{categoryCounts["Computer and Networking"] || 0} Auctions</h3>
              <button type="button">View More</button>
            </div>
          </div>
          
          <div className="Electronic-components">
            <div className="Electronic-components-info">
              <img src="/Images/ScrapBidHome.jpg" loading="lazy" alt="Background 2" />
              <h1>Electronic Components</h1>
              <h3>{categoryCounts["Electronic components"] || 0} Auctions</h3>
              <button type="button">View More</button>
            </div>
          </div>
        </div>

        <div className="column-2">

          <div className="Gadgets-and-devices">
            <div className="Gadgets-and-devices-info">
              <img src="/Images/ScrapBidHome.jpg" loading="lazy" alt="Background 3" />
              <h1>Gadgets and Devices</h1>
              <h3>{categoryCounts["Gadgets and Devices"] || 0} Auctions</h3>
              <button type="button">View More</button>
            </div>
          </div>

          <div className="Home-appliances">
            <div className="Home-appliances-info">
              <img src="/Images/ScrapBidHome.jpg" loading="lazy" alt="Background 4" />
              <h1>Home Appliances</h1>
              <h3>{categoryCounts["Home appliances"] || 0} Auctions</h3>
              <button type="button">View More</button> 
            </div>
          </div>

        </div>
      </div>
      
      {/* highest bidding products category wise */}
      
      <div className="highest-bidding-category">
        <CategorySection category="Computer and Networking" categoryImage="/Images/ScrapBidHome.jpg" />
        <CategorySection category="Electronic components" categoryImage="/Images/ScrapBidHome.jpg" />
        <CategorySection category="Gadgets and Devices" categoryImage="/Images/ScrapBidHome.jpg" />
        <CategorySection category="Home appliances" categoryImage="/Images/ScrapBidHome.jpg" />
      </div>
      
    </div>
  );
};

export default HomePage;
