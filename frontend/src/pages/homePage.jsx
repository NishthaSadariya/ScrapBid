import React from "react";
import Header from "../components/header";
import Navbar from "../components/navbar";
import "../styles/homePage.css";
import { Gavel, Recycle, Truck, CreditCard } from "lucide-react";
import {FaGavel} from "react-icons/fa"

const HomePage = () => {
  return (
    <div>
      <Header />
      <Navbar />

      {/* Image Section */}
      <div className="image-container">
        <img src="/Images/ScrapBidHome.jpg" alt="Background" />
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
    </div>
  );
};

export default HomePage;
