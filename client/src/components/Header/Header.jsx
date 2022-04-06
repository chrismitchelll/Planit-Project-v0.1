import React, { Component, useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./header.scss";
import sun from "../../assets/icons/dark-mode/sun.png";
import moon from "../../assets/icons/dark-mode/moon.png";
import userIcon from "../../assets/icons/user.png";
import logoIcon from "../../assets/planit.png";
import Exchange from "../../assets/icons/taskbar/exchange.png";
import Itineary from "../../assets/icons/navbar/itineary.png";
import Budget from "../../assets/icons/navbar/budget.png";
import Inform from "../../assets/icons/navbar/inform.png";

const toggleMode = () => {
  document.body.classList.toggle("dark-theme");
};

export default function Darkmode({}) {
  const [icon, setIcon] = useState(0);
  function toggleIcon() {
    toggleMode();
    if (document.body.classList.contains("dark-theme")) {
      setIcon(1);
    } else {
      setIcon(0);
    }
  }

  let scrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="header">
        <div className="header__left">
          <Link to={`/`}>
            {" "}
            <img src={logoIcon} onClick={scrollUp()} id="logoicon" alt="icon" />
            {/* <a href="/">Main</a> */}
          </Link>
        </div>
        <div className="header__middle">
          {/* <div className="section-header"><h2>Homepage</h2></div> */}
          <div className="dropdown">
            <button className="dropbtn">
              {/* <img src={Inform} onClick={scrollUp()} id="dlicon" alt="icon" /> */}
              <a href="/main">Learn</a>
            </button>
          </div>
          <div className="dropdown">
            <button className="dropbtn">
              {/* <img src={Budget} onClick={scrollUp()} id="dlicon" alt="icon" />{" "} */}
              <a href="/budget">Budget</a>
            </button>
            <div className="dropdown-content">
              <a href="/budget">Plan A Trip</a>
              <a href="/plans/trips/">Planned Trips</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">
              {" "}
              {/* <img src={Itineary} onClick={scrollUp()} id="dlicon" alt="icon" /> */}
              Plan
            </button>
            <div className="dropdown-content">
              <a href="/plan">Plan A Trip</a>
              <a href="/plan/trips">View Planned Trips</a>
            </div>
          </div>
        </div>
        <div className="header__right">
          <div className="icon">
            <img
              src={moon}
              className={icon ? "hidden" : ""}
              id="dlicon"
              alt="dark-mode switch"
              onClick={toggleIcon}
            />
            <img
              src={sun}
              className={icon ? "" : "hidden"}
              id="dlicon"
              alt="light-mode switch"
              onClick={toggleIcon}
            />
            <Link to={`/tools`}>
              <img
                src={Exchange}
                onClick={scrollUp()}
                alt="home-icon"
                id="userIcon"
              />
            </Link>{" "}
            <Link to={`/plan/trips`}>
              <img src={userIcon} id="userIcon" alt="user-icon" />
            </Link>{" "}
          </div>
        </div>
      </div>
      <div className="header-break"></div>
    </>
  );
}

// export default Darkmode;
