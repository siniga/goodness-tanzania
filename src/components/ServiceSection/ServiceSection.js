import React from "react";
import "./ServiceSection.css";
import { FaMapMarkerAlt, FaPlane, FaHotel } from "react-icons/fa"; // Assuming you are using Font Awesome for icons
import ServiceCard from "../ServiceCard/ServiceCard";
import SafariTripsBanner from "../TripBanner/SafariTripsBanner";
import ClickToPlay from "../PlayLayout/ClickToPLay";

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
