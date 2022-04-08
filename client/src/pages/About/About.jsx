import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./about.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import htmlcss from "../../assets/techstack/htmlcss.png";
import javascript from "../../assets/techstack/JS.png";
import react from "../../assets/techstack/react.png";
import python from "../../assets/techstack/python.png";
import sass from "../../assets/techstack/sass.png";
import node from "../../assets/techstack/nodejs.png";
import npm from "../../assets/techstack/npm.png";
import axios from "../../assets/techstack/axios.png";
import author from "../../assets/author.png";
import githubIcon from "../../assets/ext-logos/github.png";
import LinkedIn from "../../assets/ext-logos/linkedin.png";
import Email from "../../assets/icons/email.png";
// const Briefing_API = `https://travelbriefing.org/`;

export class About extends Component {
  render() {
    return (
      <>
        <Header />
        {/* <Foot2 /> */}

        <div className="about">
          <div className="about__wrapper">
            <div className="about__section-left">
              <div className="section-header">
                <h2>Author: Christian Mitchell</h2>
              </div>
              <img src={author} alt="author" id="author" />
              <div className="footer__icon--wrapper">
                <div className="footer__icon--container">
                  <Link to={`/about`}>
                    <div className="footer__icon--container">
                      <a
                        href="mailto:christian.tp.mitchell@gmail.com"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <img
                          className="footer__icon"
                          alt="ext-logo"
                          className="about__icons"
                          src={Email}
                        />
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
                    <img
                      className="footer__icon"
                      alt="ext-logo"
                      className="about__icons"
                      src={githubIcon}
                    />
                  </a>
                </div>
                <div className="footer__icon--container">
                  <a
                    href="https://www.linkedin.com/in/christiantpmitchell/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img
                      className="footer__icon"
                      alt="ext-logo"
                      className="about__icons"
                      src={LinkedIn}
                    />
                  </a>
                </div>
              </div>
              {/* <ul className="about-links">
              <li className="about-links__list">
                <a href="https://github.com/chrismitchelll/">Github</a>
              </li>
              <li className="about-links__list">
                <a href="https://www.linkedin.com/in/christiantpmitchell/">
                  LinkedIn
                </a>
              </li>
              <li className="about-links__list">
                <a href="https://github.com/chrismitchelll/">Email</a>
              </li>
            </ul> */}
            </div>
            <div className="about__section-right">
              <div className="section-header">
                <h2>Tech Stack</h2>
              </div>
              <h2>Built by: Christian Mitchell</h2>
              <div className="tech-stack">
                <img src={react} alt="techstack" id="tech-stack" />
                <img src={python} alt="techstack" id="tech-stack" />
                <img src={javascript} alt="techstack" id="tech-stack" />
                <img src={htmlcss} alt="techstack" id="tech-stack" />
              </div>
              <div className="tech-stack">
                <img src={npm} alt="techstack" id="tech-stack" />
                <img src={node} alt="techstack" id="tech-stack" />
                <img src={sass} alt="techstack" id="tech-stack" />
                <img src={axios} alt="techstack" id="tech-stack" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
        {/* <Footer /> */}
      </>
    );
  }
}

export default About;
