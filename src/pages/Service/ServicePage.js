import React from "react";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import "./ServicePage.css";
import { FaMapMarkerAlt, FaPlane, FaHotel } from "react-icons/fa"; // Assuming you are using Font Awesome for icons
import SafariTripsBanner from "../../components/TripBanner/SafariTripsBanner";
import ClickToPlay from "../../components/PlayLayout/ClickToPLay";

const ServicePage = () => {
  return (
    <div className="services-container">
      <SafariTripsBanner />
    
        <ServiceCard />
        <ClickToPlay />
  
    </div>
  );
};

export default ServicePage;
