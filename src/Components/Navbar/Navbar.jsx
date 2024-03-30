import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.png";
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [ToggleMenu, setToggleMenu] = useState(true);

  const handleToggleMenu = () => {
    setToggleMenu(!ToggleMenu);
  };
  return (
    <div className="navbar-container">
      <div className="uppernavbar">
        <div className="navbar-number">
          <h3>Call us Today!</h3>
          <span>1- 875-987-0987</span>
          <span>info@iambuilder.com</span>
        </div>
      </div>
      <div className="lower-nav">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <a href="/experience">Project Experience</a>
          </li>
          <li class="dropdown">
            <Link to="/services" class="dropbtn">
              Estimating Services
            </Link>
            <div class="dropdown-content">
              <li>Developer Esitmating Services</li>
              <li>Developer Residentail Services</li>
              <li>Commercial Estimating Services</li>
              <li>Construction Takeoff Services</li>
              <li>Construction Lead Generation Services</li>
              <li>Construction Estimating Consultant</li>
            </div>
          </li>
          <li>
            <Link to="/About">About us</Link>
          </li>
          <li>
            <Link to="/Contact">Contact us</Link>
          </li>
          <li>
            <Link to="/faq">FAQ's</Link>
          </li>
        </ul>
      </div>

      <div className="mobile-nav">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="mobile-menu">
          <TiThMenu
            onClick={handleToggleMenu}
            size={32}
            style={{
              cursor: "pointer",
            }}
          />
          {/* Mobile Navbar */}
          <div className={`mobile-links ${ToggleMenu ? "open" : ""}`}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <hr />
            <li>
              <Link to="/experience">Project Experiences</Link>
            </li>
            <hr />

            <li>
              <Link to="/services">Estimating Services</Link>
            </li>
            <hr />

            <li>
              <Link to="/About">About us</Link>
            </li>
            <hr />

            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <hr />

            <li>
              <Link to="/faq">Faq's</Link>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
