import React from "react";
import "./Founder.css";
import FounderImage from "../../assets/men.png";
const Founder = () => {
  return (
    <div className="founder-section">
      <div className="Founder">
        <div className="Founder-des">
          <p>
            "Most contractors are missing out on over $200,000 per month in
            project contracts and they don’t even know it. They are busy, have
            no time for estimating, and they are leaving money on the table. A
            lot of money. We designed our construction estimating service with
            the goal of helping our clients win projects and ultimately be
            successful"
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
