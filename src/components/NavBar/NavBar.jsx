import React from "react";
import "./NavBar.css";
import logo from "../../assets/logo.png";

const NavBar = () => {
  return (
    <div>
      <nav className="nav-container">
        <div>
          <img src={logo} alt="" className="logo" />
        </div>
        <div className="menu">
          <p>Home</p>
          <p>Services</p>
          <p>About</p>
          <p>Pages</p>
          <p>Testimonials</p>
        </div>
        <div className="button-container">
          <button className="contact ">Contact Support</button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
