import React from "react";
import "./hero.css";
import TravelOptions from "../../components/TravelOptions/travelOptions";

const Hero = () => {
  return (
    <section className="hero">
      <div className="heroImgWrapper">
        <img src="images/home-header-bg.png" alt="header-image" />
        <div className="heroImgOverlay"></div>
      </div>

      <nav className="heroNav">
        <div className="heroFindOptionsContainer">
          <button className="heroFindButtonStyles">
            
            <img src="images/airplane.png" alt="icon" /> <p> Find Flight </p>
          </button>
          <button className="heroFindButtonStyles">
            
            <img src="images/stay.png" alt="icon" /> <p> Find Stay </p>
          </button>
        </div>

        <div className="heroLogo">
          <img src="/images/Logo.png" alt="logo" />
        </div>

        <div className="heroButtonsWrapper">
          <button className="heroLoginButton heroButtonsCommonStyles">
            Login
          </button>
          <button className="heroSignupButton heroButtonsCommonStyles">
            Sign up
          </button>
        </div>
      </nav>

      <div className="heroTextWrapper">
        <h2>Helping Others</h2>
        <h1>LIVE & TRAVEL</h1>
        <p>Special offers to suit your plan</p>
      </div>
      
     <TravelOptions />

    </section>
  );
};

export default Hero;
