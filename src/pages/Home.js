import React from "react";
import WelcomeImageSlider from "../components/homepageSections/WelcomeImageSlider";
import "../styles/Home.css";
import Description from "../components/homepageSections/Description";
import WelcomeSection from "../components/homepageSections/WelcomeSection";
import OurServices from "../components/homepageSections/OurServices";
import StatBar from "../components/homepageSections/StatBar";
import Testimonials from "../components/homepageSections/Testimonials";
import NewsSection from "../components/homepageSections/NewsSection";
import ClientLogoSection from "../components/homepageSections/ClientLogoSection";
function Home() {
  return (
    <div className="homePage">
      <div className="header-Section">
        <WelcomeImageSlider />
        <Description />
      </div>
      <div className="welcome-Section">
        <WelcomeSection />
      </div>
      <div className="services-Section">
        <OurServices />
      </div>
      <div className="statBar-Section">
        <StatBar />
      </div>
      <div className="testimonials-Section">
        <Testimonials />
      </div>
      <div className="clientLogo-Section">
        <ClientLogoSection />
      </div>
      <div className="latestNews-Section">
        <NewsSection />
      </div>
    </div>
  );
}

export default Home;
