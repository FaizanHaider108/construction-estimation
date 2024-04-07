import React, { useRef, useState } from "react";
import "../../Pages/css/Contac.css"; // Corrected typo in CSS file name
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import emailjs from "@emailjs/browser"; // Corrected import statement

const ContactForm = () => {
  const form = useRef();
  const [submitting, setSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSubmitting(true);

    emailjs
      .sendForm(
        "service_skff12b", // Replace with your actual service ID
        "template_dg89qrl", // Replace with your actual template ID
        form.current,
        "9fXt5OsMnxib8dybY" // Replace with your actual user ID
      )
      .then((result) => {
        setSubmitting(false);
        form.current.reset(); // Reset the form
        // Use toast function or another method to display a success message
        alert("Form received. We will contact you soon 😊");
      })
      .catch((error) => {
        console.error("Error:", error);
        setSubmitting(false);
        alert("An error occurred while submitting the form 😣");
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="Contact-form">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > :not(style)": { m: 1 },
        }}
      >
        <TextField
          sx={{
            width: "80%",
          }}
          name="from_name"
          id="name-input" // Unique ID for name input
          label="Your Name"
          variant="outlined"
        />
        <TextField
          sx={{
            width: "80%",
          }}
          name="email_id"
          id="email-input" // Unique ID for email input
          label="Email"
          variant="outlined"
        />
        <textarea
          name="message"
          placeholder="Tell us about your project"
        ></textarea>
        <Button
          sx={{
            backgroundColor: "red",
          }}
          type="submit"
          variant="contained"
        >
          {submitting ? "Submiting Form..." : "Sumbit"}
        </Button>
      </Box>
    </form>
  );
};

export default ContactForm;
