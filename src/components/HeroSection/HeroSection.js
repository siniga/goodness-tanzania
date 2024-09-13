import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div className="hero-container">
            <div className="overlay">
                <h1>WELCOME TO EXPLORE</h1>
                <h2>THE GOODNESS OF TANZANIA</h2>
                <button className="hero-btn">LEARN MORE</button>
            </div>
        </div>
    );
}

export default HeroSection;
