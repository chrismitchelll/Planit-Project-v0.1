import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./tools.scss";
import Converter from "../../components/Converter/Converter";

export class Tools extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="page">
          <h1>Tools</h1>
          {/* <Converter /> */}
          <div className="infocard-details__wrapper">
            <div className="infocard-details">
              <span className="infocard__title">Capital City</span>
              <span className="infocard__value">X</span>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Tools;
