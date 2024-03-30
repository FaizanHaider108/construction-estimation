import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact";
import AboutPage from "./Pages/AboutPage";
import FaqPage from "./Pages/FaqPage";
import ProjectExperieince from "./Pages/ProjectExperieince";
import EstimatingServices from "./Pages/EstimatingServices";
const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/experience" element={<ProjectExperieince />} />
        <Route path="/services" element={<EstimatingServices />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
