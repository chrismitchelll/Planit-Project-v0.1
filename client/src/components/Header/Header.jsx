import React, { Component, useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./header.scss";
import sun from "../../assets/icons/dark-mode/sun.png";
import moon from "../../assets/icons/dark-mode/moon.png";
import userIcon from "../../assets/icons/user.png";
import logoIcon from "../../assets/planit.png";

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
  return (
    <>
      <div className="header">
        <div className="header__left">
          <img src={logoIcon} id="logoIcon" alt="logo" />
          <h2>Planit</h2>
        </div>
        <div className="header__middle">
          <h2>Homepage</h2>
          <div className="dropdown">
            <button className="dropbtn">Dropdown</button>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
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
            <Link to={`/profile`}>
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
