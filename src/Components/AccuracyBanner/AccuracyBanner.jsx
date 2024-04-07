import React from "react";
import "./AccuracyBanner.css";
import Banner from "../../assets/Banner.png";
import { Link } from "react-router-dom";
const AccuracyBanner = () => {
  return (
    <div className="AccuracyBanner">
      <div className="accuracy-banner-container">
        <div className="accuracy-banner">
          <img src={Banner} alt="100% Guarentee" />
          <div className="accuracy-desc">
            <h1>$100,000</h1>
            <p>Accuracy Gauranteed</p>
          </div>
        </div>
        <div className="desc">
          <p>
            All projects are covered under our Errors and Omissions Insurance so
            you can have peace of mind with our estimates. We backup up our
            construction estimating services.
          </p>
          <Link to="/Contact">
            <button>Get in Touch</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccuracyBanner;
