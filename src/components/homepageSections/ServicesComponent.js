import React, { useState } from "react";
import { HiArrowCircleRight } from "react-icons/hi";
import "../../styles/ServiceComponent.css";
function ServicesComponent(props) {
  const handleReadMore = () => {
    alert(
      "functionalities are not set to read more. please 'click move to next solution' to see next solution"
    );
  };
  return (
    <div className="services-container" style={{ marginLeft: "-100px" }}>
      <div className="images-Container ">
        <img
          className="service-Images"
          src={props.serviceDetails.image}
          alt={props.serviceDetails.serviceHeader}
        />
      </div>
      <div className="details-Container">
        <h5 style={{ padding: "10px", color: "lightgreen" }}>
          Real Solution, Real Fast!
        </h5>
        <h2 style={{ padding: "10px" }}>Best Global Logistics Solutions.</h2>
        <h3 style={{ padding: "10px" }}>
          {props.serviceDetails.serviceHeaders}
        </h3>
        <p style={{ paddingRight: "80px", paddingLeft: "10px" }}>
          {props.serviceDetails.descriptions}
        </p>
        <HiArrowCircleRight
          onClick={handleReadMore}
          className="arrow-Button"
          style={{ color: "lightgreen" }}
        />
        <div
          className="additional-content"
          style={{
            color: "lightgreen",
            marginLeft: "60px",
            marginTop: "-30px",
          }}
        >
          Read More
        </div>

        <br></br>
        <HiArrowCircleRight
          className="arrow-Button"
          onClick={props.handleNext}
        />

        <div
          className="additional-content"
          style={{
            color: "#f09530",
            marginLeft: "60px",
            marginTop: "-30px",
          }}
        >
          Move to Next Solution
        </div>
      </div>
    </div>
  );
}

export default ServicesComponent;
