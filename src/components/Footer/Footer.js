import React from "react";
import "./Footer.css"; // Import the CSS file for styles
import FbSocial from "../../assets/icons/facebook.png";
import InstaSocil from "../../assets/icons/instagram.png";
import XSocial from "../../assets/icons/twitter.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="about-us">
          <h3>ABOUT US</h3>
          <p>
            We seek to provide the authentic experiences from travel,
            exploration and adventures around Tanzania. Our long term mission is
            to educate, inspire and...
          </p>
        </div>

        <div className="contact-us">
          <h3>CONTACT US</h3>
          <p>Floor No 19, Millennium Towers, Dar es Salaam, Tanzania.</p>
          <p>+255 (0) 712 345 678</p>
          <p>info@goodnes.co.tz</p>
        </div>

        <div className="page-links">
          <h3>PAGE</h3>
          <ul>
            <li>Home</li>
            <li>Destination</li>
            <li>Activities</li>
            <li>About</li>
            <li>Contacts</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className="social-media">
          <h3>Social Media</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img src={FbSocial} width={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <img src={InstaSocil} width={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <img src={XSocial} width={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>GOODNESS 2024. Copyright and All rights reserved.</p>
        <div className="go-up">
          <a href="#top">GO UP &#x25B2;</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
