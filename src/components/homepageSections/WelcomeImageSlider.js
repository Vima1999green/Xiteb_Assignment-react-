import React, { useState, useEffect } from "react";
import "../../styles/WelcomeImageSlider.css";

import welcomeImage1 from "../../assests/welcomeImage1.png";
import welcomeImage2 from "../../assests/welcomeImage2.png";
import welcomeImage3 from "../../assests/welcomeImage3.png";

function WelcomeImageSlider() {
  const images = [welcomeImage1, welcomeImage2, welcomeImage3];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      gotoNextImage();
    }, 3000); // Change image every 3 seconds (3000 milliseconds)

    return () => clearInterval(interval);
  }, [index]);

  const gotoNextImage = () => {
    if (index >= 0 && index < images.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const gotoPreviousImage = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(images.length - 1);
    }
  };

  return (
    <div className="image-Slider">
      <div className="image-content">
        <img
          className="welcomeImages"
          src={images[index]}
          alt="Welcome Images"
        />
      </div>
      <div className="buttonContainer">
        <button className="buttons" onClick={gotoPreviousImage}>
          Prev
        </button>
        <button className="buttons" onClick={gotoNextImage}>
          Next
        </button>
      </div>
    </div>
  );
}

export default WelcomeImageSlider;
