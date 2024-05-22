import React from "react";
import { HiAnnotation } from "react-icons/hi";
import "../../styles/NewsSection.css";
import newsImage1 from "../../assests/Services01.png";
import newsImage2 from "../../assests/Services02.png";
import newsImage3 from "../../assests/welcomeImage1.png";
import newsImage4 from "../../assests/welcomeImage2.png";

function NewsSection() {
  return (
    <div className="NewsSection-Container">
      <h3>LATEST NEWS</h3>
      <label style={{ color: "gray", fontSize: "11px", marginTop: "-8px" }}>
        <input type="radio" style={{ backgroundColor: "#00c0e4" }} />
        SELECT NEW NEWS
      </label>

      <div className="news-Container1">
        <div className="image-Section">
          <img className="newsImage" src={newsImage1} alt="news 1" />
          <div className="overlayImage" style={{ backgroundColor: "#00c0e4" }}>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              26
            </p>
            <p style={{ fontSize: "12px", marginTop: "-7px" }}>May</p>
          </div>
        </div>
        <div
          className="texts-Section"
          style={{
            backgroundColor: "#00c0e4",
            color: "white",
            textAlign: "justify",
          }}
        >
          <h3 className="news-header">NEWS OF LOGISTICS</h3>
          <div className="messege-icon">
            Admin{" "}
            <HiAnnotation
              className="messege-icon-icon"
              style={{ color: "white" }}
            />{" "}
          </div>
          <p className="news-pharagraph">
            Stay updated with the latest in the world of logistics with our news
            section. From industry trends to technological advancements, we
            bring you insightful articles and updates to keep you informed.{" "}
          </p>
        </div>
      </div>
      <div className="news-Container2">
        <div className="image-Section">
          <img className="newsImage" src={newsImage2} alt="news 2" />
          <div className="overlayImage" style={{ backgroundColor: "#3f4f59" }}>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              22
            </p>
            <p style={{ fontSize: "12px", marginTop: "-7px" }}>May</p>
          </div>
        </div>
        <div className="texts-Section">
          <h3 className="news-header">NEWS OF LOGISTICS</h3>
          <div className="messege-icon">
            Admin <HiAnnotation className="messege-icon-icon" />{" "}
          </div>
          <p className="news-pharagraph">
            Stay updated with the latest in the world of logistics with our news
            section. From industry trends to technological advancements, we
            bring you insightful articles and updates to keep you informed.{" "}
          </p>
        </div>
      </div>
      <div className="news-Container3">
        <div className="image-Section">
          <img className="newsImage" src={newsImage3} alt="news 3" />
          <div className="overlayImage" style={{ backgroundColor: "#3f4f59" }}>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              17
            </p>
            <p style={{ fontSize: "12px", marginTop: "-7px" }}>May</p>
          </div>
        </div>
        <div className="texts-Section">
          <h3 className="news-header">NEWS OF LOGISTICS</h3>
          <div className="messege-icon">
            Admin <HiAnnotation className="messege-icon-icon" />{" "}
          </div>
          <p className="news-pharagraph">
            Stay updated with the latest in the world of logistics with our news
            section. From industry trends to technological advancements, we
            bring you insightful articles and updates to keep you informed.{" "}
          </p>
        </div>
      </div>
      <div className="news-Container4">
        <div className="image-Section">
          <img className="newsImage" src={newsImage4} alt="news 4" />
          <div className="overlayImage" style={{ backgroundColor: "#3f4f59" }}>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              15
            </p>
            <p style={{ fontSize: "12px", marginTop: "-7px" }}>May</p>
          </div>
        </div>
        <div className="texts-Section">
          <h3 className="news-header">NEWS OF LOGISTICS</h3>
          <div className="messege-icon">
            Admin <HiAnnotation className="messege-icon-icon" />{" "}
          </div>
          <p className="news-pharagraph">
            Stay updated with the latest in the world of logistics with our news
            section. From industry trends to technological advancements, we
            bring you insightful articles and updates to keep you informed.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsSection;
