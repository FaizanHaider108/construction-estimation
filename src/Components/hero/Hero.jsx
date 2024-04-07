import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-section">
        <h1>Construction Estimating Services For Busy Contractors</h1>
        <p>We help busy contractors estimate and win projects</p>
        <Link to="/Contact">
          <button>Contact Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
