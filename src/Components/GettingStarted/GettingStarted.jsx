import React from "react";
import "./GettingStarted.css";
import Row from "../../assets/Row.png";
import Row1 from "../../assets/Row1.svg";
import { Link } from "react-router-dom";
const GettingStarted = () => {
  return (
    <div className="getting-started">
      <div className="getting-started-heading">
        <h1>How DO I GET STARTED ?</h1>
      </div>
      <div className="getting-started-box">
        <div className="getting-started-imag">
          <img src={Row1} alt="Steps" />
        </div>
        <div className="getting-started-desc">
          <div className="decs-1">
            <h3>You Send in Your Plans</h3>
            <p>
              You can upload your plans here or email us at
              <a>info@iambuilders.com.</a> Whichever is more convenient for you.
              Be sure to let us know your scope of work and any details
              regarding your project.
            </p>
          </div>
          <div className="decs-1">
            <h3>We Send you a Quote for Our Services</h3>
            <p>
              Before starting, we’ll send you a detailed quote for our services.
              Every client is unique so we take the time to review each
              situation individually. We’ll factor in things like project range,
              difficulty, trades, and more.
            </p>
          </div>
          <div className="decs-1">
            <h3>We Estimate and Deliver Your Cost Estimate</h3>
            <p>
              Our team will takeoff and estimate your project. When we deliver
              you’ll receive a PDF and an Excel file of your estimate. We can
              also offer construction lead generation services for the jobs
              you’d like to pursue further.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
