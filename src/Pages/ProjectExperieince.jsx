import React from "react";
import "./css/ProjectExp.css";
import Accordian from "../Components/Accordian/Accordian";
const ProjectExperieince = () => {
  return (
    <div className="experience2-section">
      <div className="project-experince-content">
        <div className="main-image-content-section">
          <h1>Our Team’s Project Experience</h1>
          <p>
            Our team has been a part of the construction of the following
            projects. They’ve served as either an Owner Representative, Project
            Manager, or Superintendent
          </p>
          <a href="/Contact">
            <button>Get a Qoute</button>
          </a>
        </div>
      </div>
      <Accordian />
    </div>
  );
};

export default ProjectExperieince;
