import React from "react";
import "./WorkWith.css";
const WorkWith = () => {
  return (
    <div className="work-with">
      <div className="work-with-heading">
        <h1>We Work with</h1>
      </div>
      <div className="work-with-list">
        <ul className="list-1">
          <li>General Contractors</li>
          <li>Subcontractors</li>
          <li>Remodeling Contractors</li>
        </ul>
        <ul className="list-1">
          <li>Homebuilders</li>
          <li>Developers</li>
          <li>Architects</li>
        </ul>
      </div>
    </div>
  );
};

export default WorkWith;
