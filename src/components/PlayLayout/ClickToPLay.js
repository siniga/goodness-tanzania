import React from 'react';
import './ClickToPlay.css'; // Importing the CSS file for styling
import CircleplayIcon  from "../../assets/icons/play-button.png";

const ClickToPlay = () => {
  return (
    <div className="click-to-play-container">
      <div className="click-text">
        <span>CLICK TO PLAY</span>
      </div>
      <div className="play-button">
      <img src={CircleplayIcon} />
      </div>
      <div className="description">
        <span>
          We seek to provide the authentic experiences from travel, exploration and
        </span>
      </div>
    </div>
  );
};

export default ClickToPlay;
