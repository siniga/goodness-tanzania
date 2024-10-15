import React from "react";
import Header from "../../components/Header/Header";
import HeroSection from "../../components/HeroSection/HeroSection";
import Footer from "../../components/Footer/Footer";
import ServiceSection from '../../components/ServiceSection/ServiceSection'

import TestimonySlider from "../../components/Testimony/TestimonySlider";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ServiceSection />
      <TestimonySlider />
      <Footer />
    </div>
  );
};

export default HomePage;
