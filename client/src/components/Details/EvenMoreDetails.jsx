import React from "react";
import "../Details/details.scss";

export default function Details({ basicDetails, complexDetails }) {
  const conversionRate = (
    Math.round(basicDetails.currency.rate * 100) / 100
  ).toFixed(2);

  const temperatureRate = (
    Math.round(basicDetails.weather.April.tAvg * 100) / 100
  ).toFixed(1);

  console.log(complexDetails.nationalanimaltype);

  return (
    <>
      <div className="section-header">
        <h2>More to Know</h2>
      </div>
      <div className="content-wrapper">
        <div className="infocard-details__wrapper">
          <div className="infocard-details">
            <span className="title">National Dishes</span>
            <p className="value">{complexDetails.nationaldishes}</p>
          </div>{" "}
          <div className="infocard-details">
            <span className="title">How to Say "Cheers"</span>
            <span className="value">
              {complexDetails.cheers} ("{complexDetails.pronunciation}")
            </span>
          </div>{" "}
        </div>
        <div className="infocard-details__wrapper">
          <div className="infocard-details">
            <span className="title">National Animal</span>
            <span className="value">
              {complexDetails.nationalanimal}({complexDetails.nationalanimal})
            </span>
          </div>{" "}
          <div className="infocard-details">
            <span className="title">$1:</span>
            <span className="value">
              {conversionRate}
              {basicDetails.currency.code}
            </span>
          </div>
        </div>
        <div className="infocard-details__wrapper">
          <div className="infocard-details">
            <span className="title">Tap Water</span>
            <span className="value"> {complexDetails.water} </span>
          </div>{" "}
          <div className="infocard-details">
            <span className="title">Plug Type[s]</span>
            <span className="value">{basicDetails.plugs}</span>
          </div>
        </div>
      </div>
    </>
  );
}
