import React from "react";
import SearchBox from "./searchBox";
import "../styles/footer.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer-container">
      <div className="before-footer">
        <div className="before-footer-info">
          <h3>Browse through our products library!</h3>
        </div>
        <div className="search-wrapper">
          <SearchBox className="search" />
        </div>
      </div>

      <div className="main-footer-container">
        {/* Left - Brand & Contact */}
        <div className="footer-brand">
        <strong className="logo">
        <span className="s-letter">S</span>crap
        <span className="b-letter">B</span>id
      </strong>
          <p>contact@smart-seller.com</p>
          <p>+91-1234567890</p>
          <div className="footer-icons">
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
            <FaInstagram />
            <FaTiktok />
          </div>
        </div>

        {/* Center - Useful Links */}
        <div className="footer-links">
          <h3>Useful Links</h3>
          <ul>
            <li>Home</li>
            <li>Browse Auctions</li>
          </ul>
        </div>

        {/* Center - Our Policy */}
        <div className="footer-policy">
          <h3>Our Policy</h3>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Refund & Payment</li>
          </ul>
        </div>

        {/* Right - Newsletter */}
        <div className="footer-newsletter">
          <h3>Subscribe to our Newsletter</h3>
          <div className="newsletter-box">
            <input type="email" placeholder="Enter your email" />
            <button>Submit</button>
          </div>
        </div>
      </div>

      {/* last footer section */}
      <div className="footer-bottom">
        <div>
            <p>@ 2025 SmartSeller. All rights preserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
