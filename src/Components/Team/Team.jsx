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
            ESTIBuilder was founded by John Smith, a Licensed General Contractor
            with over a decade of experience in the design and construction
            industry.
          </p>

          <p>
            Established in 2015, ESTIBuilder was born from John's vision to
            revolutionize the construction sector. Recognizing the time
            constraints faced by contractors, particularly in areas like
            estimating and sales, John launched ESTIBuilder to provide essential
            support to busy professionals.
          </p>

          <p>
            John holds a Bachelor's Degree in Architecture, is LEED Certified,
            and is an active member of the American Society of Professional
            Estimators. Throughout his career, he has contributed to significant
            projects for prestigious clients such as Bacardi, the University of
            Miami, Private Developers, and more recently, the US Embassy in
            Jerusalem.
          </p>

          <p>
            Leading our team at ESTIBuilder, John oversees a group of
            professionals including engineers, architects, and civil engineers.
            Every member of our team brings valuable construction experience and
            professional training to the table.
          </p>

          <p>
            At ESTIBuilder, we employ a Double Verification system wherein our
            Estimators conduct initial estimates, followed by review and
            finalization by our Senior team. This meticulous process ensures
            that each project benefits from the expertise of at least two sets
            of eyes, providing comprehensive pricing and takeoffs
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
