import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../../assets/icons/LOGO.png"; // Make sure to replace this with your actual logo path
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [activeLink, setActiveLink] = useState("/");
  const location = useLocation(); // get the current route

  useEffect(() => {
    setActiveLink(location.pathname); // update active link based on the current route
  }, [location]);

  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-menu">
          <li className={`nav-item ${activeLink === "/" ? "active" : ""}`}>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li
            className={`nav-item ${
              activeLink === "/destination" ? "active" : ""
            }`}
          >
            <Link className="nav-link" to="/destination">
              Destinations
            </Link>
          </li>
          <li
            className={`nav-item ${
              activeLink === "/activities" ? "active" : ""
            }`}
          >
            <Link className="nav-link" to="/activities">
              Activities
            </Link>
          </li>
        </ul>
        <div className="logo">
          <img src={logo} alt="Goodness Tours & Safaris" />
        </div>
        <ul className="nav-menu">
          <li 
           className={`nav-item ${
            activeLink === "/about" ? "active" : ""
          }`}>
             <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className={`nav-item ${
            activeLink === "/contact" ? "active" : ""
          }`}>
            <Link className="nav-link" to="/contact">
              Contacts
              </Link>
          </li>
          <li className={`nav-item ${
            activeLink === "/blog" ? "active" : ""
          }`}>
           <Link className="nav-link" to="/blog">
              Blog
              </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
