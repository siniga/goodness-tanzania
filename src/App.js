import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import Footer from './components/Footer/Footer';
import ServicePage from './pages/Service/ServicePage';
import TestimonySlider from './components/Testimony/TestimonySlider';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ServicePage />
      <TestimonySlider />
      <Footer />
    </div>
  );
}

export default App;
