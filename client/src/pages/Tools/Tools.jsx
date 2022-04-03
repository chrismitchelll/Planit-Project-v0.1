import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CurrencyConverter from "../../components/CurrencyConverter/CurrencyConverter";
import "./tools.scss";

export default function Tools({ basicDetails, complexDetails }) {
  // const conversionRate = (
  //   Math.round(basicDetails.currency.rate * 100) / 100
  // ).toFixed(2);
  return (
    <>
      <Header />
      <div className="page">
        <h1>Tools</h1>
        {/* <Converter /> */}

        <div className="infocard-details__wrapper">
          <div className="infocard-details">
            <span className="infocard__title"></span>
            <span className="infocard__value">X</span>
          </div>
        </div>
        <div className="infocard-details__wrapper">
          <div className="infocard-details">
            <CurrencyConverter />
          </div>
          <div className="infocard-details"></div>
        </div>
      </div>

      <Footer />
    </>
  );
}
