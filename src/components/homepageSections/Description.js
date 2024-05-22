import React from "react";
import "../../styles/Description.css";

function Description() {
  return (
    <div className="description-Container">
      <div className="header-Container">
        <h4 style={{ fontFamily: "sans-serif", fontSize: "11px" }}>
          LOGISTICS
        </h4>
        <h2
          style={{ fontSize: "30px", marginTop: "-9px", fontWeight: "lighter" }}
        >
          Best Shipping
        </h2>
        <h2
          style={{
            fontSize: "30px",
            color: "#f09530",
            marginTop: "-20px",
            fontWeight: "Bolder",
          }}
        >
          Partner
        </h2>
      </div>
      <div className="body-Container">
        <p style={{ fontSize: "12px" }}>
          Welcome to Cargo, your trusted shipping solution for all your business
          needs. Our website offers a seamless shipping experience, providing
          reliable and efficient services to businesses of all sizes
        </p>
      </div>
      <div className="discover-More-Button">
        <button
          style={{
            backgroundColor: "#f09530",
            border: "0px",
            padding: "5px",
            borderRadius: "4px",
            color: "white",
          }}
        >
          DISCOVER MORE
        </button>
      </div>
    </div>
  );
}

export default Description;
