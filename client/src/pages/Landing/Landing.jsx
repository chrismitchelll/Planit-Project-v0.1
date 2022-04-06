import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./landing.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import logoIcon from "../../assets/planit.png";

export class Landing extends Component {
  render() {
    return (
      <>
        <Header />

        <div className="page welcome-page">
          <div className="landing-card">
            <img src={logoIcon} alt="" srcset="" />
            {/* <h1>Welcome</h1> */}
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              consequatur repellat, porro quae distinctio natus qui dolor. At,
              neque tempore.
            </p>
            <Link to="/">
              <div className="next-button">Enter</div>
            </Link>
          </div>
        </div>
        {/* <Footer /> */}
      </>
    );
  }
}

export default Landing;
