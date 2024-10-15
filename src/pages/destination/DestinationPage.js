import React from "react";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import SafariTripsBanner from "../../components/TripBanner/SafariTripsBanner";
import ClickToPlay from "../../components/PlayLayout/ClickToPLay";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PageHeader from "../../components/PageHeader/PageHeader";
import ImageGallery from "../../components/ImageGallery/ImagerGallery";

const DestinationPage = () => {
  return (
    <div className="destination-container">
       <Header />
       <PageHeader header={"Destinations"} />
       <ImageGallery />
       <Footer />
    </div>
  );
};

export default DestinationPage;
