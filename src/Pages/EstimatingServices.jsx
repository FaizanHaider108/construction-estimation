import React from "react";
import "../Pages/css/EstimatinServices.css";
import ServicesImage from "../assets/Services.svg";
import { MdConstruction } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import { BsHouseCheckFill } from "react-icons/bs";
import { BsRocketTakeoffFill } from "react-icons/bs";
import { FaPeopleArrows } from "react-icons/fa";
import { SiGotomeeting } from "react-icons/si";
import { Link } from "react-router-dom";
import Accordian from "../Components/Accordian/Accordian";
const EstimatingServices = () => {
  return (
    <div className="estimating-services">
      <div className="heading-section">
        <h1 className="heading">Our Services</h1>
      </div>
      <div className="estimation-services-box">
        <div className="estimation-contant">
          <div className="estimation-box">
            <MdConstruction size={50} />
            <h2>Developer Estimating Services</h2>
            <p>
              Our team of experienced estimators is dedicated to delivering
              precise and detailed estimates tailored to meet the unique needs
              of each client.
            </p>
          </div>
          <div className="estimation-box">
            <FaBuilding size={50} />
            <h2>Residential Estimating Services</h2>
            <p>
              Our team of experienced estimators is dedicated to delivering
              precise and detailed estimates tailored to meet the unique needs
              of each client.
            </p>
          </div>
          <div className="estimation-box">
            <BsRocketTakeoffFill size={50} />
            <h2>Construction Takeoff Services</h2>
            <p>
              Our team of experienced estimators is dedicated to delivering
              precise and detailed estimates tailored to meet the unique needs
              of each client.
            </p>
          </div>
          <div className="estimation-box">
            <BsHouseCheckFill size={50} />
            <h2>Commercial Estimating Services</h2>
            <p>
              Our team of experienced estimators is dedicated to delivering
              precise and detailed estimates tailored to meet the unique needs
              of each client.
            </p>
          </div>
          <div className="estimation-box">
            <FaPeopleArrows size={50} />
            <h2>Construction Lead Generation Services</h2>
            <p>
              Our team of experienced estimators is dedicated to delivering
              precise and detailed estimates tailored to meet the unique needs
              of each client.
            </p>
          </div>
          <div className="estimation-box">
            <SiGotomeeting size={50} />
            <h2>Construction Consultation</h2>
            <p>
              Our team of experienced estimators is dedicated to delivering
              precise and detailed estimates tailored to meet the unique needs
              of each client.
            </p>
          </div>
        </div>
        <Link className="Cta">
          <Link to="/Contact">Discuss your project</Link>
        </Link>
      </div>
      <Accordian />
    </div>
  );
};

export default EstimatingServices;
