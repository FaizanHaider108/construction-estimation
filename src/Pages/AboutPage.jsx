import React from "react";
import WhoAreWe from "../Components/WhorAreWe/WhoAreWe";
import "./css/AboutPage.css";
import Team from "../Components/Team/Team";
import AccuracyBanner from "../Components/AccuracyBanner/AccuracyBanner";

import Reasons from "../Components/Reasons/Reasons";
import Accordian from "../Components/Accordian/Accordian";
import Experience from "../Components/Experienc/Experience";
import GettingStarted from "../Components/GettingStarted/GettingStarted";

const AboutPage = () => {
  return (
    <div className="About-page">
      <div className="about-content">
        <WhoAreWe />
        <Team />
        {/* <Reasons /> */}
        <AccuracyBanner />

        <Experience />
        <GettingStarted />
        <Accordian />
      </div>
    </div>
  );
};

export default AboutPage;
