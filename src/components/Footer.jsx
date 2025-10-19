import React from "react";
import { Twitter, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-section">
        <div className="footer-container">
          
          <div className="footer-title">
            <h2>Zcoop Ice Cream Shop</h2>
            <p>Sweet treats delivered to your door</p>
          </div>

          <div className="footer-nav">
            <a href="#">Home</a>
            <a href="#">Shop</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="footer-social">
            <a href="#">
              <Twitter size={20} />
            </a>
            <a href="#">
              <Facebook size={20} />
            </a>
            <a href="#">
              <Instagram size={20} />
            </a>
          </div>
        </div>  

        <div className="copyright">
          &copy; {new Date().getFullYear()} Zcoop. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;