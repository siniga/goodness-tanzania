import React from "react";
import "./SafariTripsBanner.css"; // Import the stylesheet

const SafariTripsBanner = () => {
  return (
    <div className="safari-banner">
      <div className="safari-text">
        <h1 className="safari-heading">ULTIMATE SAFARI TRIPS IN AFRICA</h1>
        <p className="safari-description">
          We seek to provide the authentic experiences from travel, exploration
          and adventures around Tanzania. Our long term mission is to educate,
          inspire and enable all people to experience and protect the
          wilderness.
        </p>
        <div className="safari-destinations">
        <h2 className="destinations-number">200+</h2>
        <p className="destinations-label">Destinations</p>
      </div>
      </div>
      
    </div>
  );
};

export default SafariTripsBanner;
