import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./footer.scss";
import Home from "../../assets/icons/taskbar/home.png";
import Wallet from "../../assets/icons/taskbar/wallet.png";
import Holiday from "../../assets/icons/taskbar/holidays.png";
import Exchange from "../../assets/icons/taskbar/exchange.png";
import List from "../../assets/icons/taskbar/list.png";
import About from "../../assets/icons/taskbar/info.png";
import Welcome from "../../assets/icons/taskbar/welcome.png";

let scrollUp = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

export class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer">
          <ul className="footer__list">
            <Link to={`/welcome`}>
              <li className="footer__list--li">
                <img
                  src={Welcome}
                  onClick={scrollUp()}
                  alt="home-icon"
                  id="footer-icon"
                />
                <a href="/">Landing</a>
              </li>
            </Link>
            <Link to={`/`}>
              <li className="footer__list--li">
                {" "}
                <img
                  src={Home}
                  onClick={scrollUp()}
                  alt="home-icon"
                  id="footer-icon"
                />
                <a href="/">Home</a>
              </li>
            </Link>{" "}
            <Link to={`/main`}>
              <li className="footer__list--li">
                {" "}
                <img
                  src={Holiday}
                  onClick={scrollUp()}
                  alt="home-icon"
                  id="footer-icon"
                />
                <a href="/">Main</a>
              </li>
            </Link>
            <Link to={`/budget`}>
              <li className="footer__list--li">
                {" "}
                <img
                  src={Wallet}
                  onClick={scrollUp()}
                  alt="home-icon"
                  id="footer-icon"
                />
                <a href="/">Budget</a>
              </li>
            </Link>{" "}
            <Link to={`/plan`}>
              <li className="footer__list--li">
                {" "}
                <img
                  src={List}
                  onClick={scrollUp()}
                  alt="home-icon"
                  id="footer-icon"
                />
                <a href="/">My Trips</a>
              </li>
            </Link>{" "}
            <Link to={`/about`}>
              <li className="footer__list--li">
                {" "}
                <img
                  src={About}
                  onClick={scrollUp()}
                  alt="home-icon"
                  id="footer-icon"
                />
                <a href="/">About </a>
              </li>
            </Link>
          </ul>
        </div>
      </>
    );
  }
}

export default Footer;
