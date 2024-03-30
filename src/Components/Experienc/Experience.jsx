import React from "react";
import "./Experience.css";
import image from "../../assets/Clients.jpg";
const Experience = () => {
  return (
    <div className="experience-section">
      <div className="expereince-heading">
        <h2>CONTRACTOR EXPERIENCE</h2>
      </div>
      <div className="EXPREINCE-IMAGE">
        <img src={image} alt="EXPERIENCE" />
      </div>
      <a href="" className="call-btn">
        <button>Schedual A Call</button>
      </a>
    </div>
  );
};

export default Experience;
