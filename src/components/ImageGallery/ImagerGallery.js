import React, { useState } from "react";
import Modal from "react-modal";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ImageGallery.css"; // Create a CSS file for custom styles
import DestinationImg1 from "../../assets/images/ngorongoro.jpg";
import DestinationImg2 from "../../assets/images/zanzibar.jpg";
import DestinationImg3 from "../../assets/images/kilimanjaro.jpg";
import DestinationImg4 from "../../assets/images/manyara.jpg";
import DestinationImg5 from "../../assets/images/kigamboni.jpg";
import DestinationImg6 from "../../assets/images/magoroto.jpg";

// Add your images into an array
const images = [
  {
    id: 1,
    src: DestinationImg1,
    alt: "Ngorongoro",
  },
  {
    id: 2,
    src: DestinationImg2,
    alt: "Zanzibar",
  },
  {
    id: 3,
    src: DestinationImg3,
    alt: "Kilimanjaro",
  },
  {
    id: 4,
    src: DestinationImg4,
    alt: "Manyara",
  },
  {
    id: 5,
    src: DestinationImg5,
    alt: "Kigamboni",
  },
  {
    id: 6,
    src: DestinationImg6,
    alt: "Magoroto",
  },
];

const ImageGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // Function to split images into pairs for two-column display
  const renderRows = () => {
    let rows = [];
    for (let i = 0; i < images.length; i += 2) {
      rows.push(
        <div className="gallery-row" key={i}>
          {images[i] && (
            <div className="gallery-item" onClick={() => openModal(i)}>
              <img
                src={images[i].src}
                alt={images[i].alt}
                className="gallery-image"
              />
              <div className="image-label">{images[i].alt}</div>
            </div>
          )}
          {images[i + 1] && (
            <div className="gallery-item" onClick={() => openModal(i + 1)}>
              <img
                src={images[i + 1].src}
                alt={images[i + 1].alt}
                className="gallery-image"
              />
              <div className="image-label">{images[i + 1].alt}</div>
            </div>
          )}
        </div>
      );
    }
    return rows;
  };

  return (
    <div className="gallery-container">
      {renderRows()}

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Image Viewer"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <button className="close-btn" onClick={closeModal}>
          Close
        </button>

        <Carousel
          selectedItem={currentImageIndex}
          onChange={(index) => setCurrentImageIndex(index)}
          showThumbs={false}
          infiniteLoop
          autoFocus
          swipeable
        >
          {images.map((image, index) => (
            <div key={index}>
              <img src={image.src} alt={image.alt} className="modal-image" />
              <p className="legend">{image.alt}</p>
            </div>
          ))}
        </Carousel>
      </Modal>
    </div>
  );
};

export default ImageGallery;
