import React from "react";
import WelcomeSectionImage01 from "../../assests/WelcomeSectionImage01.png";
import WelcomeSectionImage02 from "../../assests/WelcomeSectionImage02.png";
import "../../styles/WelcomeSection.css";
function WelcomeSection() {
  return (
    <div className="welcomeSection-Container">
      <div className="welcomeSection-image-Container">
        <img
          className="img01"
          src={WelcomeSectionImage01}
          alt="working Engineer"
        />
        <img
          className=" img02"
          src={WelcomeSectionImage02}
          alt="working Engineer"
        />
      </div>
      <div className="text-Container">
        <h2>
          TransMax Logistics Around{" "}
          <span style={{ color: "red" }}>the World</span>
        </h2>
        <p style={{ paddingRight: "80px" }}>
          Welcome to TransMax Logistics, your premier global shipping partner.
          With our extensive network of carriers and industry-leading
          technology, we ensure that your goods reach their destination safely
          and on time, every time. Whether you're shipping across town or around
          the world, trust TransMax Logistics to deliver excellence in every
          shipment.
        </p>
        <button
          style={{
            backgroundColor: "transparent",
            border: "0.5px solid gray",
            color: "blue",
            borderRadius: "4px",
          }}
        >
          MORE ABOUT US
        </button>
      </div>
    </div>
  );
}

export default WelcomeSection;
