import React from "react";
import "./Hero.css";
import next from "../../assets/next.png";
import prev from "../../assets/prev.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>
          Get <span>ready</span> for your business
        </h1>
        <h1>
          & upgrade <span>all aspects</span>
        </h1>
        <hr className="line" />
        <p className="paragraph">
          Mexant HTML5 Template is provided for free of charge. This layout is
          based on Bootstrap 5 CSS <br />
          framework. Anyone can download and edit for any professional website.
          Thank you for visiting <br/>TemplateMo website.
        </p>
        <div className="buttons">
          <button className="button-one">Discover More</button>
          <button className="button-two">Contact Us</button>
        </div>
        <div className="arrowbuttons">
          <img src={prev} alt="" className="prev-icon" />
          <img src={next} alt="" className="next-icon" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
