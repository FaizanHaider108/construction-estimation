import React from "react";
import "../../Pages/css/Contac.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const ContactForm = () => {
  return (
    <div className="Contact-form">
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
          id="outlined-basic"
          label="Your Name"
          variant="outlined"
        />
        <TextField
          sx={{
            width: "80%",
          }}
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />
        <textarea placeholder="Tell us about your project"></textarea>
        <Button
          sx={{
            backgroundColor: "red",
          }}
          variant="contained"
        >
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default ContactForm;
