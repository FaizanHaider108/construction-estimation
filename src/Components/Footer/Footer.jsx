import React from "react";
import "./Footer.css";
import FooterLogo from "../../assets/logo.png";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-content">
        <div className="quick-links">
          <h1>Links</h1>
          <ul>
            <li>
              <Link to="/services">Commercial Estimating Services</Link>
            </li>
            <li>
              <Link to="/services">Residentail Estimating Services</Link>
            </li>
            <li>
              <Link to="/services">Construction Takeoff Services</Link>
            </li>
            <li>
              <Link to="/services">Construction Estimating Consultant</Link>
            </li>
          </ul>
        </div>

        <div className="quick-links">
          <h1>Terms</h1>

          <ul>
            <li>
              <Link to="/Privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/Contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/About">About us</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
        </div>

        <div className="quick-links">
          <h1>Contact</h1>
          <div className="email">
            <MdEmail style={{ color: "red" }} />
            <span>info@estibuilder.com</span>
          </div>
          <div className="email">
            <FaPhoneAlt style={{ color: "red" }} />
            <span>1- 875-987-0987</span>
          </div>
          <h3 style={{ paddingTop: "20px" }}>Follow us</h3>
          <div className="email">
            <FaInstagram size={20} style={{ color: "red" }} />
            <FaFacebook size={20} style={{ color: "red" }} />
          </div>
        </div>

        <div className="quick-links">
          <h1>Our Office</h1>
          <ul>
            <li>
              355 S. Grand Ave, Suite 2450,
              <br /> Los Angeles, CA
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
