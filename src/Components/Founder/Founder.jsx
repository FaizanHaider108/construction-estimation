import React from "react";
import "./Founder.css";
import FounderImage from "../../assets/men.png";
const Founder = () => {
  return (
    <div className="founder-section">
      <div className="Founder">
        <div className="Founder-des">
          <p>
            "Many contractors are unknowingly forfeiting over $200,000 in
            potential project contracts each month due to their busy schedules
            and lack of time for estimating. Our construction estimating service
            aims to bridge this gap by assisting clients in securing projects
            and achieving success."
          </p>
          <h1>Founder (Construction Estimation)</h1>
        </div>
        <div className="Founder-image">
          <img src={FounderImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Founder;
