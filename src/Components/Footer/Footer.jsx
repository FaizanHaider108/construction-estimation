import React from "react";
import "./Footer.css";
import FooterLogo from "../../assets/logo.png";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-content">
        <div className="footer-logo">
          <img src={FooterLogo} alt="logo" />
        </div>
        <div className="quick-links">
          <h1>Links</h1>
          <ul>
            <li>
              <a href="">Commercial Estimating Services</a>
            </li>
            <li>
              <a href="">Residentail Estimating Services</a>
            </li>
            <li>
              <a href="">Construction Takeoff Services</a>
            </li>
            <li>
              <a href="">Construction Estimating Consultant</a>
            </li>
          </ul>
        </div>

        <div className="quick-links">
          <h1>Terms</h1>

          <ul>
            <li>
              <a href="">Terms of Use</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="/Contact">Contact Us</a>
            </li>
            <li>
              <a href="/About">About us</a>
            </li>
            <li>
              <a href="/faq">FAQ</a>
            </li>
          </ul>
        </div>

        <div className="quick-links">
          <h1>Contact</h1>
          <div className="email">
            <MdEmail style={{ color: "red" }} />
            <span>info@iambuilder.com</span>
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
      </div>
    </div>
  );
};

export default Footer;
