import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
import githubIcon from "../../assets/ext-logos/github.png";
import LinkedIn from "../../assets/ext-logos/linkedin.png";
import About from "../../assets/icons/taskbar/info.png";

export default function PageFooter() {
  let scrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <Link className="footer__link" to="/">
          <p className="footer__text footer__title">
            <span className="span--bold">© 2022 Planit</span> All rights
            reserved.
          </p>
        </Link>
        <div className="footer__centrebox">
          <div className="footer__textbox">
            <a
              className="footer__anchor"
              rel="noreferrer"
              href="mailto:christian.tp.mitchell@gmail.com"
              target="_blank"
            >
              <p className="footer__text">Get in Touch</p>
            </a>
          </div>

          <Link className="footer__link" to="/about">
            <div className="footer__textbox">
              <p className="footer__text">About</p>
            </div>
          </Link>
          <Link className="footer__link" to="/about">
            <div className="footer__textbox">
              <p className="footer__text">by Christian Mitchell</p>
            </div>
          </Link>
        </div>

        <div className="footer__icon--wrapper">
          <div className="footer__icon--container">
            <Link to={`/about`}>
              <div className="footer__icon--container">
                <a href="/about" rel="noreferrer" target="_blank">
                  <img className="footer__icon" alt="ext-logo" src={About} />
                </a>
              </div>
            </Link>
          </div>
          <div className="footer__icon--container">
            <a
              href="https://github.com/chrismitchelll"
              rel="noreferrer"
              target="_blank"
            >
              <img className="footer__icon" alt="ext-logo" src={githubIcon} />
            </a>
          </div>
          <div className="footer__icon--container">
            <a
              href="https://www.linkedin.com/in/christiantpmitchell/"
              rel="noreferrer"
              target="_blank"
            >
              <img className="footer__icon" alt="ext-logo" src={LinkedIn} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
