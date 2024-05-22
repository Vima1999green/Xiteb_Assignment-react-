import React, { useState } from "react";
import "../../styles/Testimonials.css";

function Testimonials() {
  const [index, setIndex] = useState(0);
  const messageArray = [
    "Working with Cargo has been an absolute pleasure. Their attention to detail, professionalism, and dedication to delivering results are unmatched. We look forward to continuing our partnership for years to come.",
    "Choosing Cargo was one of the best decisions we made. Their communication, transparency, and commitment to quality are commendable. We are thrilled with the results and would gladly recommend them to others.",
    "From start to finish, Cargo has been a reliable partner. Their professionalism, responsiveness, and ability to deliver on time and within budget are truly impressive. We look forward to future projects with them.",
  ];
  const clientnames = [
    { name: "John Smith", position: "CEO, XYZ Corporation" },
    { name: "Sarah Johnson", position: "Operations Director, 123 Industries" },
    { name: "Emily Davis", position: "CFO, Acme Corp" },
  ];

  const handleNext = () => {
    if (index >= 0 && index < messageArray.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const handlePrev = () => {
    if (index > 0 && index <= messageArray.length - 1) {
      setIndex(index - 1);
    } else {
      setIndex(messageArray.length - 1);
    }
  };

  return (
    <div className="testimonials-Container">
      <div className="client-Side">
        <h3 style={{ textAlign: "justify", marginLeft: "45px" }}>
          TRUSTED CLIENTS
        </h3>
        <p
          style={{
            textAlign: "justify",
            marginLeft: "45px",
            fontSize: "10px",
            color: "gray",
          }}
        >
          HERE ARE SOME EXAMPLE MESSEGES FROM TRUSTED CLIENTS:
        </p>
        <div className="text-Container-background">
          <p className="Messeages">{messageArray[index]}</p>
        </div>
        <div className="client-Name">
          <h5>{clientnames[index].name}</h5>
          <p style={{ fontSize: "10px", marginTop: "-20px" }}>
            {clientnames[index].position}
          </p>
        </div>
        <div className="move-Button">
          <button onClick={handlePrev}>&lt;</button>
          <button onClick={handleNext}>&gt;</button>
        </div>
      </div>
      <div className="choose-Side">
        <h3 style={{ textAlign: "justify", marginLeft: "45px" }}>
          WHY CHOOSE US
        </h3>
        <p
          style={{
            textAlign: "justify",
            marginLeft: "45px",
            fontSize: "10px",
            color: "gray",
          }}
        >
          HERE ARE SOME EXAMPLE MESSEGES FROM WHY YOU SHOULD CHOOSE US:
        </p>
        <div className="sentence-Container">
          <div className="sentence01">
            <div className="pharagraph-container">
              <p className="pharagraphs">
                we have developed the expertise to handle all your needs
                efficiently.
              </p>
            </div>
            <div className="plus-Button-Container">
              <button className="plus-button">+</button>
            </div>
          </div>
          <div className="sentence01">
            <div className="pharagraph-container">
              <p className="pharagraphs">
                we have developed the expertise to handle all your needs
                efficiently.
              </p>
            </div>
            <div className="plus-Button-Container">
              <button className="plus-button">+</button>
            </div>
          </div>
          <div className="sentence01">
            <div className="pharagraph-container">
              <p className="pharagraphs">
                we have developed the expertise to handle all your needs
                efficiently.
              </p>
            </div>
            <div className="plus-Button-Container">
              <button className="plus-button">+</button>
            </div>
          </div>
          <div className="sentence01">
            <div className="pharagraph-container">
              <p className="pharagraphs">
                we have developed the expertise to handle all your needs
                efficiently.
              </p>
            </div>
            <div className="plus-Button-Container">
              <button className="plus-button">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
