import React, { useState } from "react";
import { FaGavel, FaRegHeart, FaHeart } from "react-icons/fa";
import "../styles/header.css";

const Header = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <header>
            <div className="header-left">
                <strong>Call us toll free:</strong> +91-1234567890 | <strong>Email:</strong> ScrapBid@gmail.com
            </div>

            <div className="header-right">
                <a href="/mybid" className="mybid">
                    <FaGavel className="icon gavel-icon" />
                    My Bids
                </a>

                <a 
                    href="/wishlist" 
                    className="heart"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    {hovered ? <FaHeart className="icon heart-icon" /> : <FaRegHeart className="icon heart-icon" />}
                    Wishlist
                </a>
            </div>
        </header>
    );
};

export default Header;
