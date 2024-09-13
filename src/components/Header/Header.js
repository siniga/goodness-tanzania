import React from 'react';
import './Header.css';
import logo from '../../assets/icons/LOGO.png'; // Make sure to replace this with your actual logo path

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-menu">
          <li className="nav-item active">
            <a href="#home" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#destinations" className="nav-link">Destinations</a>
          </li>
          <li className="nav-item">
            <a href="#activities" className="nav-link">Activities</a>
          </li>
        </ul>
        <div className="logo">
          <img src={logo} alt="Goodness Tours & Safaris" />
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#about" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="#contacts" className="nav-link">Contacts</a>
          </li>
          <li className="nav-item">
            <a href="#blog" className="nav-link">Blog</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
