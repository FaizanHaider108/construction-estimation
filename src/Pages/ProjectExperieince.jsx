import React from "react";
import "./css/ProjectExp.css";
import Accordian from "../Components/Accordian/Accordian";
import Projects from "../Components/Projects/Projects.jsx";
const ProjectExperieince = () => {
  return (
    <div className="experience2-section">
      <div className="project-experince-content">
        <div className="main-image-content-section">
          <h1>We Estimate All CSI Trades</h1>
          <p>
            At estibuilder, our expertise lies in delivering thorough cost
            estimating solutions encompassing a diverse array of CSI trades,
            such as Commercial Building, Residential Building, Industrial work,
            as well as Public or Private and Civil Work.
          </p>
          <a href="/Contact">
            <button>Get a Qoute</button>
          </a>
        </div>
      </div>

      <Projects />
      <Accordian />
    </div>
  );
};

export default ProjectExperieince;
