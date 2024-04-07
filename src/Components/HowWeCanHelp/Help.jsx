import React from "react";
import "./Help.css";
import Callender from "../../assets/Cal.jpeg";
import Map from "../../assets/map.jpg";
import Track from "../../assets/track.jpg";
import OIP from "../../assets/OIP.jpeg";
import { Link } from "react-router-dom";
const Help = () => {
  return (
    <div className="help-section">
      <div className="help-container">
        <h1 className="help-heading">HOW CAN WE HELP YOU WIN MORE PROJECTS?</h1>
        <div className="box">
          <img src={Callender} alt="" />
          <div className="box-desc">
            <h1>I have no time to estimate projects</h1>
            <h2>-Every Contractor in America</h2>
            <p>
              The biggest challenge for contractors is often the scarcity of
              time. Many find themselves deeply entrenched in the day-to-day
              operations of their business, leaving little room to strategize
              and grow. If this sounds familiar, know that you're not alone.
              We've partnered with over 1,400 contractors nationwide, providing
              construction estimating services and consulting, and this struggle
              is common. You may have attempted to handle it all on your own,
              burning the midnight oil after a long day's work, or sacrificing
              weekends at the kitchen table. Let us take the burden off your
              shoulders by preparing your entire bid, allowing you to focus on
              steering your business forward and reclaiming your evenings and
              weekends. Don't let time constraints cost you valuable bids any
              longer.
            </p>
          </div>
        </div>
        <div className="box">
          <img src={Map} alt="" style={{ width: "400px" }} />
          <div className="box-desc">
            <h1>
              We can estimate your entire project for you based on your LOCAL
              PRICING so the numbers will be accurate
            </h1>

            <p>
              ESTI Builder is a US-based, licensed General Contractor, ensuring
              that we bring real-world building experience to the table. Unlike
              others, our team comprises individuals with hands-on construction
              expertise, not just theoretical knowledge or "paper estimating."
              By leveraging a blend of industry cost databases and our field
              experience, we accurately price your projects based on the
              specific zip code of your location
            </p>
          </div>
        </div>
        <div className="box">
          <img src={Track} alt="" />
          <div className="box-desc">
            <h1>
              We can assist you in negotiating and finalizing deals using proven
              strategies.
            </h1>
            <p>
              Estimating is only a small part of what it takes to win a job. We
              like to see this as a TEAM EFFORT. What do you do after the
              estimate to give yourself the best chance of winning? We can help
              you work the numbers when you’re negotiating, and even jump on a
              conference call with your client (as your estimating team) to help
              you close. We can even advise you on EXACTLY WHAT TO DO to have
              them wanting to USE YOU instead of your competitor. Over the last
              10 years, and after speaking and working with THOUSANDS of
              Contractors, we get to see what WORKS and what DOESN’T. We have
              some clients landing 50% of their bids by implementing some of the
              strategies we can easily show you. These aren’t strategies we made
              up – we listened to our clients and created our blueprint based on
              what they are doing right, and avoiding what they were doing
              wrong. Best of all….. it works for ANY CONSTRUCTION BUSINESS.
            </p>
          </div>
        </div>
        <div className="box">
          <img src={OIP} alt="" />
          <div className="box-desc">
            <h1>
              AND IF YOU’RE SERIOUS ABOUT GROWING YOUR BUSINESS, WE CAN HELP YOU
              GET MORE PROJECT LEADS AND CLOSE MORE SALES.
            </h1>
            <p>
              After working on the estimating side of things, we help many of
              our clients get more leads so they can keep growing their
              business.
            </p>
          </div>
        </div>
        <div className="button">
          <Link to="/Contact">
            <button>Get A Qoute</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Help;
