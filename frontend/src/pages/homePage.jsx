import React from "react";
import Header from "../components/header";
import Navbar from "../components/navbar";
import "../styles/homePage.css";

const HomePage=()=>{
    return(
        <div>
            <Header />
            <Navbar />

            {/* Image Section */}
            <div className="image-container">
                <img 
                    src="/Images/ScrapBidHome.jpg" 
                    alt="Background" 
                />
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
            <div style={{ display: 'flex', backgroundColor: '#51a0fc', height: '150px' }}>
                
            </div>
        </div> 
    );
}

export default HomePage;