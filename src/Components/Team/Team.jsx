import React from "react";
import "./team.css";
import teamImage from "../../assets/Team.jpg";
const Team = () => {
  return (
    <div className="team-section">
      <div className="team-content">
        <h1>Our Team</h1>
        <span className="team-para">
          <p>
            Daniel Quindemil is founder of I AM Builders. He is a Licensed
            General Contractor with over 10 years of experience in the design
            and construction field.
          </p>

          <p>
            He started I AM Builders in 2015 with a vision of changing the
            construction industry. When he was in the field he realized
            contractors were busy and didn’t have time to focus on the important
            parts of their business like estimating and sales, so he launched I
            AM Builders to help busy contractors.
          </p>

          <p>
            He has a Bachelor Degree in Architecture, LEED Certified, a member
            of the American Society of Professional Estimators, and has been
            part of some notable projects for Bacardi, University of Miami,
            Private Developers, and most recently the US Embassy in Jerusalem.
          </p>

          <p>
            Daniel manages our team which includes professional engineers,
            architects, and civil engineers. Everyone at I AM Builders has a
            background in construction and has actual field experience and
            professional training.
          </p>

          <p>
            We use a Double Verification system where our Estimators perform the
            estimates and our Senior team which reviews and finalizes. This
            ensures you get a minimum of two sets of eyes on your project and
            two opinions regarding pricing and takeoffs.
          </p>
        </span>
      </div>
      <div className="team-image">
        <img src={teamImage} alt="" />
      </div>
    </div>
  );
};

export default Team;
