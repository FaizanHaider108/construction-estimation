import React from "react";
import "./TrustedCompany.css";
import Company1 from "../../assets/image-1.jpg";
const TrustedCompany = () => {
  return (
    <div className="trusted-section">
      <div className="company-cotent">
        <h1 className="company-heading">Our Clients</h1>
        <div className="images-container">
          <img src={Company1} alt="Our clients" />
        </div>
      </div>
    </div>
  );
};

export default TrustedCompany;
