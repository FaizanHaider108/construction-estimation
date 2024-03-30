import React from "react";
import "./AccuracyBanner.css";
import Banner from "../../assets/banner.svg";
const AccuracyBanner = () => {
  return (
    <div className="AccuracyBanner">
      <div className="accuracy-banner">
        <img src={Banner} alt="100% Guarentee" />
      </div>
      <div className="desc">
        <p>
          All projects are covered under our Errors and Omissions Insurance so
          you can have peace of mind with our estimates. We backup up our <br />
          construction estimating services.
        </p>
        <a href="/Contact">
          <button>Get in Touch</button>
        </a>
      </div>
    </div>
  );
};

export default AccuracyBanner;
