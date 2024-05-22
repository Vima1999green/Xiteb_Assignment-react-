import React, { useState } from "react";
import ServicesComponent from "./ServicesComponent";
import Services01 from "../../assests/Services01.png";
import Services02 from "../../assests/Services02.png";
import Services03 from "../../assests/Services03.png";
import Services04 from "../../assests/Services04.png";

function OurServices() {
  const image = [Services01, Services02, Services03, Services04];
  const [index, setIndex] = useState(0);
  const serviceHeaders = [
    "Air Freight Services",
    "Drone Services",
    "Warehousing Solutions",
    "Supply Chain Management",
  ];
  const descriptions = [
    "Fast and efficient transportation of goods by air, ideal for time-sensitive shipments and long-distance deliveries.",
    "Innovative and cutting-edge delivery solutions using drones, offering quick and environmentally friendly deliveries to remote or hard-to-reach areas.",
    "Secure storage facilities for goods, ensuring proper inventory management and timely delivery to customers.",
    "Comprehensive management of the entire supply chain process, from sourcing raw materials to delivering the final product, ensuring efficiency and cost-effectiveness.",
  ];
  const serviceDetails = {
    image: image[index],
    descriptions: descriptions[index],
    serviceHeaders: serviceHeaders[index],
  };

  const handleNext = () => {
    if (index >= 0 && index < descriptions.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  return (
    <div className="services-Container">
      <div className="Containers">
        <ServicesComponent
          serviceDetails={serviceDetails}
          index={index}
          handleNext={handleNext}
        />
      </div>
    </div>
  );
}

export default OurServices;
