import React from "react";
import "./ServiceCard.css";
import TourPackageIcon from "../../assets/icons/tour.png";
import FlightBookingIcon from "../../assets/icons/flights.png";
import HotelPackageIcon from "../../assets/icons/hotels.png";

const ServiceCard = () => {
  return (
    <div className="services">
      <div className="service-box">
        <div className="service-header-wrapper">
          {/* <div className="icon"> */}
            {/* Use an appropriate icon for Tour Packages */}
            <img src={TourPackageIcon} alt="Tour Packages Icon" width={100} />
          {/* </div> */}
          <h3 className="service-header">TOUR PACKAGES</h3>
        </div>
        <p className="service-text">
          We seek to provide the authentic experiences from travel, exploration
          and adventures around Tanzania.
        </p>
      </div>

      <div className="service-box">
        <div className="service-header-wrapper">
          {/* <div className="icon"> */}
            {/* Use an appropriate icon for Flight Bookings */}
            <img src={FlightBookingIcon} alt="Flight Bookings Icon" />
          {/* </div> */}
          <h3 className="service-header">FLIGHT BOOKINGS</h3>
        </div>
        <p className="service-text">
          We seek to provide the authentic experiences from travel, exploration
          and adventures around Tanzania.
        </p>
      </div>

      <div className="service-box">
        <div className="service-header-wrapper">
          {/* <div className="icon"> */}
            {/* Use an appropriate icon for Hotel Bookings */}
            <img src={HotelPackageIcon} alt="Hotel Bookings Icon" />
          {/* </div> */}
          <h3 className="service-header">HOTEL BOOKINGS</h3>
        </div>
        <p className="service-text">
          We seek to provide the authentic experiences from travel, exploration
          and adventures around Tanzania.
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
