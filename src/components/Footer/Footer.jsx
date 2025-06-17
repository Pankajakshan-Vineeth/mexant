import React from "react";
import "./Footer.css";
import footerlogo from "../../assets/client-01.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="light-blue-container">
        <div className="logo-container">
          <img src={footerlogo} alt="" className="company-name" />
          <img src={footerlogo} alt="" className="company-name" />
          <img src={footerlogo} alt="" className="company-name" />
          <img src={footerlogo} alt="" className="company-name" />
          <img src={footerlogo} alt="" className="company-name" />
          <img src={footerlogo} alt="" className="company-name" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
