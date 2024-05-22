import React from "react";
import "../../styles/ClientLogoSection.css";
import image01 from "../../assests/Client01.png";
import image02 from "../../assests/Client02.png";
import image03 from "../../assests/Client03.png";
import image04 from "../../assests/Client04.png";
import image05 from "../../assests/Client05.png";

function ClientLogoSection() {
  return (
    <div className="clientlogo-container">
      <h2>Our Clients</h2>
      <div className="clientLogo-images-container1">
        <img src={image01} alt="image01" className="Images-of-clients" />
      </div>
      <div className="clientLogo-images-container2">
        <img src={image02} alt="image02" className="Images-of-clients" />
      </div>
      <div className="clientLogo-images-container3">
        <img src={image03} alt="image03" className="Images-of-clients" />
      </div>
      <div className="clientLogo-images-container4">
        <img src={image04} alt="image04" className="Images-of-clients" />
      </div>
      <div className="clientLogo-images-container5">
        <img src={image05} alt="image05" className="Images-of-clients" />
      </div>
    </div>
  );
}

export default ClientLogoSection;
