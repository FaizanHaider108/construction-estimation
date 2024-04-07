import React from "react";
import ContactForm from "../Components/ContactForm/ContactForm";
import "./css/Contac.css";
const Contact = () => {
  return (
    <div className="Contact-container">
      <div className="contact-content">
        <h1>Contact us</h1>
        <span>
          If you’re interested in working with us, please fill out <br />
          the form or contact us at:
        </span>
        <div className="email">
          <h3>Email:</h3>
          <h2>info@estibuilder.com</h2>
        </div>
      </div>
      <div className="form">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
