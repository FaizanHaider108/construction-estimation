import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/hero/Hero";
import TrustedCompany from "../Components/trusted/TrustedCompany";
import WorkWith from "../Components/WorkWith/WorkWith";
import Founder from "../Components/Founder/Founder";
import WhoAreWe from "../Components/WhorAreWe/WhoAreWe";
import Help from "../Components/HowWeCanHelp/Help";
import GettingStarted from "../Components/GettingStarted/GettingStarted";
import AccuracyBanner from "../Components/AccuracyBanner/AccuracyBanner";
import Experience from "../Components/Experienc/Experience";
import About from "../Components/About/About";
import Accordian from "../Components/Accordian/Accordian";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <TrustedCompany />
      <WorkWith />
      <Founder />
      <WhoAreWe />
      <Help />
      <GettingStarted />
      <AccuracyBanner />
      <Experience />
      <About />
      <Accordian />
    </>
  );
};

export default Home;
