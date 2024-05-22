import React from "react";
import "../styles/Footer.css";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { TfiHandPointRight } from "react-icons/tfi";
import img01 from "../assests/Services01.png";
import img02 from "../assests/Services02.png";
import img03 from "../assests/Services03.png";
import img04 from "../assests/Services04.png";
import img05 from "../assests/welcomeImage3.png";
import img06 from "../assests/welcomeImage2.png";

import { FaFacebook } from "react-icons/fa";
import { TiSocialVimeoCircular } from "react-icons/ti";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { IoDiscOutline } from "react-icons/io5";
function Footer() {
  return (
    <div className="footer-Container">
      <div className="division01">
        <div className="divsion01-section01">
          <div className="text-classes">
            <h2>Weekly Newsletter</h2>
            <p>Subscribe for getting news letter!</p>
          </div>
        </div>
        <div className="divsion01-section02">
          <div className="input-email">
            <input
              type="text"
              placeholder="Enter your Email"
              className="input-field"
            />
          </div>
          <div className="subscribe-button-division">
            <button className="subscribe-button">SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <div className="division02">
        <div className="aboutUs-container">
          <h3 className="text-classes">About Us</h3>
          <p className="text-classes">
            This is about us and our contact numbers
          </p>
          <p>
            <IoCall style={{ paddingLeft: "20px" }} /> | (+94) 11 434 7575|
          </p>
          <p>
            <FaLocationDot style={{ paddingLeft: "20px" }} /> | 42 Lily
            Ave,Colombo 05
          </p>
        </div>
        <div className="latestnews-container">
          <h3 className="text-classes">Latest News</h3>
          <ul className="custom-list">
            <li>this is a latest news.read this</li>
            <p className="text-classes">5 minitues ago</p>
            <li>We are constantly innovating to provide you with the best</li>
            <p className="text-classes">5 minitues ago</p>
          </ul>
        </div>
        <div className="customerService-container">
          <div className="customerService-text-container">
            <h3 className="text-classes">Customer Services</h3>
            <div className="Services-list">
              <p>
                <TfiHandPointRight /> Support Forums
              </p>
              <p>
                <TfiHandPointRight />
                Communication
              </p>
              <p>
                <TfiHandPointRight /> FAQS
              </p>
              <p>
                <TfiHandPointRight /> Privacy Popcy
              </p>
              <p>
                <TfiHandPointRight />
                Rules & Condition
              </p>
              <p>
                <TfiHandPointRight />
                Contct Us
              </p>
            </div>
          </div>
          <div className="custmoerService-image-container">
            <h4 className="text-classes">Customer Services</h4>
            <div className="image-container1">
              <img className="footer-images" src={img01} alt="footer" />
            </div>
            <div className="image-container2">
              <img className="footer-images" src={img02} alt="footer" />
            </div>
            <div className="image-container3">
              <img className="footer-images" src={img03} alt="footer" />
            </div>
            <div className="image-container4">
              <img className="footer-images" src={img04} alt="footer" />
            </div>
            <div className="image-container5">
              <img className="footer-images" src={img05} alt="footer" />
            </div>
            <div className="image-container6">
              <img className="footer-images" src={img06} alt="footer" />
            </div>
          </div>
        </div>
      </div>
      <div className="division03">
        <div className="social-media-container">
          <div className="socialmedia-images-container1">
            <TiSocialVimeoCircular className="adjust-sizes" />
          </div>
          <div className="socialmedia-images-container2">
            <FaFacebook className="adjust-sizes" />
          </div>
          <div className="socialmedia-images-container3">
            <AiFillTwitterCircle className="adjust-sizes" />
          </div>
          <div className="socialmedia-images-container4">
            <TiSocialLinkedinCircular className="adjust-sizes" />
          </div>
          <div className="socialmedia-images-container5">
            <IoDiscOutline className="adjust-sizes" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
