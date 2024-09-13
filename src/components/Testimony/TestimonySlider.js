// TestimonySlider.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TestimonySlider.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import TsImg1 from "../../assets/images/ts1.jpg";
import TsImg2 from "../../assets/images/ts2.jpg";
import TsImg3 from "../../assets/images/ts3.jpg";
import TsImg4 from "../../assets/images/ts4.jpg";

const testimonies = [
  {
    id: 1,
    name: "Jane Doe",
    image: TsImg1,
    testimony:
      "We seek to provide authentic experiences from travel, exploration, and adventures around Tanzania. Our long-term mission is to educate, inspire, and enable all people.",
  },
  {
    id: 2,
    name: "John Smith",
    image: TsImg2,
    testimony:
      "An amazing experience exploring the wonders of Tanzania. A trip full of knowledge and inspiration.",
  },
  {
    id: 3,
    name: "Emily Johnson",
    image:
      TsImg3,
    testimony:
      "A unique opportunity to connect with nature and gain deep insights into the culture and beauty of Tanzania.",
  },
  {
    id: 4,
    name: "Michael Brown",
    image: TsImg4,
    testimony:
      "This journey changed my perspective on life. I felt so connected to the world and learned so much from the local communities.",
  },
];

const TestimonySlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className="slider-container">
      <h2 className="slider-title">TESTIMONY</h2>
      <Slider {...settings}>
        {testimonies.map((testimony) => (
          <div key={testimony.id} className="testimony-slide">
            <div className="testimony-content">
              <img
                src={testimony.image}
                alt={testimony.name}
                className="testimony-image"
              />
              <h3 className="testimony-name">{testimony.name}</h3>
              <p className="testimony-text">{testimony.testimony}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Custom arrow components for navigation
const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow next-arrow" onClick={onClick}>
      <IoIosArrowForward />
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow prev-arrow" onClick={onClick}>
      <IoIosArrowBack />
    </div>
  );
};

export default TestimonySlider;
