import React from "react";
import "./Number.css";
import { BsFillBuildingsFill } from "react-icons/bs";
import { BiSolidHappyBeaming } from "react-icons/bi";
import { FaArrowsDownToPeople } from "react-icons/fa6";
import CountUp from "react-countup";
// Use inView from react
import { useInView } from "react-intersection-observer";
const Number = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <div className="number">
      <div className="number-content">
        <div ref={ref} className="content-boxes">
          <BsFillBuildingsFill size={60} color="red" />
          <h2>
            +{inView ? <CountUp start={0} end={8000} duration={3} /> : null}
          </h2>
          <h1>Projects Completed</h1>
        </div>
        <div ref={ref} className="content-boxes">
          <BiSolidHappyBeaming size={60} color="red" />
          <h2>
            +{inView ? <CountUp start={0} end={1000} duration={3} /> : null}{" "}
          </h2>
          <h1>Happy Customers</h1>
        </div>
        <div ref={ref} className="content-boxes">
          <FaArrowsDownToPeople size={60} color="red" />
          <h2>
            +{inView ? <CountUp start={0} end={250} duration={3} /> : null}
          </h2>
          <h1>Estimators</h1>
        </div>
      </div>
    </div>
  );
};

export default Number;
