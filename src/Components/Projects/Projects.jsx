import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <div className="Project-section">
      <div className="project-box">
        <div className="Description">
          <h1>Full Projects</h1>
          <span>General Contractors and Developer</span>
          <ul>
            <li>Commerce - $4M</li>
            <li>Appartments - $6.6M</li>
            <li>Mission Temple - $11M</li>
          </ul>
        </div>
        <div className="image-side">
          <img
            src="https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?cs=srgb&dl=pexels-sevenstorm-juhaszimrus-439416.jpg&fm=jpg"
            alt=""
          />
        </div>
      </div>
      <div className="project-box">
        <div className="Description">
          <h1>Drywall & Framing</h1>
          <span>Metal Framing, Wood Framing, & Drywall</span>
          <ul>
            <li>Clinic - $312k</li>
            <li>Fru by hilton - $5.90M</li>
            <li>Bank - $10.9M</li>
          </ul>
        </div>
        <div className="image-side">
          <img
            src="https://img.freepik.com/free-photo/construction-site-silhouettes_1127-3253.jpg?size=626&ext=jpg&ga=GA1.1.1887574231.1711843200&semt=sph"
            alt=""
          />
        </div>
      </div>
      <div className="project-box">
        <div className="Description">
          <h1>Paint and WallCovering</h1>
          <span>Paint Contractors</span>
          <ul>
            <li>Appartments - $271K</li>
            <li>Business Center</li>
            <li>East Appartments</li>
          </ul>
        </div>
        <div className="image-side">
          <img
            src="https://proest.com/wp-content/uploads/2022/11/Building-Construction-Process-From-Start-To-Finish.jpg"
            alt=""
          />
        </div>
      </div>
      <Link className="getAQOute" to="/Contact">
        <button>Get a Qoute</button>
      </Link>
    </div>
  );
};

export default Projects;
