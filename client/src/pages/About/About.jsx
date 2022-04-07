import React, { Component } from "react";
import "./about.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import techStack from "../../assets/techstack.png";
import author from "../../assets/author.png";

// const Briefing_API = `https://travelbriefing.org/`;

export class About extends Component {
  render() {
    return (
      <>
        <Header />
        {/* <Foot2 /> */}
        <div className="about">
          <h1>About This Website</h1>
          <div className="section-right">
            <div className="section-header">
              <h2>Tech Stack</h2>
            </div>
            This website was built using:
            <img src={techStack} alt="techstack" id="tech-stack" />
          </div>
          <div className="section-header">
            <h2>About The Author</h2>
          </div>
          <div className="section-left">
            <img src={author} alt="author" id="author" />
            <ul className="about-links">
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
            </ul>
          </div>
        </div>
        <Footer />
        {/* <Footer /> */}
      </>
    );
  }
}

export default About;
