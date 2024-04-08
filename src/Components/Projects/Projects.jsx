import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
import Pdf1 from "../../assets/1.pdf";
import Pdf2 from "../../assets/2.pdf";
import Pdf3 from "../../assets/3.pdf";
import Pdf4 from "../../assets/4.pdf";
import Pdf5 from "../../assets/5.pdf";
import Pdf6 from "../../assets/6.pdf";
import Pdf7 from "../../assets/7.pdf";
import Pdf8 from "../../assets/8.pdf";
import Pdf9 from "../../assets/9.pdf";
import Pdf10 from "../../assets/10.pdf";
import Pdf11 from "../../assets/11.pdf";
import Pdf12 from "../../assets/12.pdf";

const Projects = () => {
  return (
    <div className="Project-section">
      <div className="project-box">
        <div className="Description">
          <h1>Full Projects</h1>
          <span>General Contractors and Developer</span>
          <ul className="un-list">
            <li>
              <a href={Pdf1} target="_blank" rel="noopener noreferrer">
                Tamiami Commerce 4 - Phase 1 <span>$3.9M</span>
              </a>
            </li>
            <li>
              <a href={Pdf10} target="_blank" rel="noopener noreferrer">
                Dunkin Donuts <span>$390k</span>
              </a>
            </li>
            <li>
              <a href={Pdf11} target="_blank" rel="noopener noreferrer">
                Chinmaya Mission of Columbus <span>$6.5M</span>
              </a>
            </li>
            <li>
              <a href={Pdf12} target="_blank" rel="noopener noreferrer">
                Zacarias at Tamiami Commerce 4 - Phase 1<span>$10.5M</span>
              </a>
            </li>
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
          <ul className="un-list">
            <li>
              <a href={Pdf2} target="_blank" rel="noopener noreferrer">
                Westford South - Building <span>$1.6M</span>
              </a>
            </li>
            <li>
              <a href={Pdf3} target="_blank" rel="noopener noreferrer">
                Tru by Hilton <span>$600k</span>
              </a>
            </li>
            <li>
              <a href={Pdf4} target="_blank" rel="noopener noreferrer">
                Ethos Veterinary Clinic <span>$300k</span>
              </a>
            </li>
            <li>
              <a href={Pdf5} target="_blank" rel="noopener noreferrer">
                Cape Code Savings Bank <span>$290k</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="image-side">
          <img
            src="https://cdn-aoadm.nitrocdn.com/KuVfinkzGFVaEOfMOIsLUKmwNnxwFguR/assets/images/optimized/rev-a3d16ff/www.qtoestimating.com/wp-content/uploads/2020/12/Starting-your-own-drywall-business.jpg"
            alt="Drywall and Farming"
          />
        </div>
      </div>
      <div className="project-box">
        <div className="Description">
          <h1>Paint & Wallcovering</h1>
          <span>Paint Contractors</span>
          <ul className="un-list">
            <li>
              <a href={Pdf6} target="_blank" rel="noopener noreferrer">
                Parkway 400 <span>$300K</span>
              </a>
            </li>
            <li>
              <a href={Pdf7} target="_blank" rel="noopener noreferrer">
                Sheridan Palms Business Park Building
              </a>
            </li>
            <li>
              <a href={Pdf8} target="_blank" rel="noopener noreferrer">
                Automation Ford <span>$50k</span>
              </a>
            </li>
            <li>
              <a href={Pdf9} target="_blank" rel="noopener noreferrer">
                Legions East Parcel
                <span>$1.2M</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="image-side">
          <img
            src="https://img.freepik.com/free-photo/liquid-abstract-colorful-texture-background-ai-generative_123827-23912.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1712448000&semt=ais"
            alt="Paint and Wallcovering"
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
