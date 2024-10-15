import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import Header from "../../components/Header/Header";
import "./ActivitiesScreen.css"; // Import the CSS file for styling
import safariImage from '../../assets/images/baloon.jpg'; // Replace this with the actual path to your image
import Footer from "../../components/Footer/Footer";
import { FaHiking, FaSwimmer, FaCanoe } from 'react-icons/fa';
import Hiking from '../../assets/images/hiking.png'
import Diver from '../../assets/images/scuba.png'
import Canoe from '../../assets/images/canoeing.png' 


const BalloonSafari = () => {
  return (
    <div className="balloon-safari-container">
      <div className="text-container">
        <h2>BALLOON SAFARI</h2>
        <p>
          We seek to provide the authentic experiences from travel, exploration
          and adventures around Tanzania. Our long term mission is to educate,
          inspire and enable all people to experience and protect the wilderness.
        </p>
      </div>
      <div className="activit-image-container ">
        <img src={safariImage} alt="Balloon Safari" />
      </div>
    </div>
  );
};



const ActivityBanner = () => {
  return (
    <div className="activity-banner">
      <div className="text-content">
        <p>
          We seek to provide the authentic experiences from travel, exploration
          and adventures around Tanzania. Our long term mission is to educate
          inspire and enable all people to experience and protect the wilderness.
        </p>
      </div>
      <div className="activities-count">
        <h2>50+</h2>
        <p>Activities</p>
      </div>

    </div>
  );
};


const hobbies = [
  { icon: Hiking, label: 'Hiking' },
  { icon: Diver, label: 'Scuba' },
  { icon: Canoe, label: 'Canoeing' },
  { icon: Hiking, label: 'Hiking' },
  { icon: Diver, label: 'Scuba' },
  { icon: Canoe, label: 'Canoeing' },
];

const ActivitiesListComponent = () => {
  return (
    <div className="hobby-container">
   
      <div className="hobby-grid">
        {hobbies.map((hobby, index) => (
         <div className="hobby-card">
         <img src={hobby.icon} alt={`${hobby.label} icon`} className="hobby-icon" />
         <span className="hobby-label">{hobby.label}</span>
       </div>
        ))}
      </div>
    </div>
  );
}

const ActivitiesScreen = () => {
    
  return (
    <div>
      <Header />
      <PageHeader header={"Activities"} />
     <BalloonSafari />
     <ActivityBanner />
     <ActivitiesListComponent  />
     <Footer />
    </div>
  );
};

export default ActivitiesScreen;
