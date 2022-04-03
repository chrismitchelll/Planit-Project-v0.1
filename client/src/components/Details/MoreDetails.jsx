import React from "react";
import "../Details/details.scss";

export default function Details({ basicDetails, complexDetails }) {
  const conversionRate = (
    Math.round(basicDetails.currency.rate * 100) / 100
  ).toFixed(2);

  const temperatureRate = (
    Math.round(basicDetails.weather.April.tAvg * 100) / 100
  ).toFixed(1);

  const vaccinationMarkup =
    basicDetails.vaccinations.length > 0 ? (
      basicDetails.vaccinations.map((vac) => {
        return (
          <>
            <h5>{vac.name}</h5>
          </>
        );
      })
    ) : (
      <p>No Vaccinations</p>
    );

  return (
    <>
      <div className="section-header">
        <h2>Need to Know</h2>{" "}
      </div>
      <div className="content-wrapper">
        <div className="infocard-details__wrapper">
          <div className="infocard-details">
            <span className="title">Vaccinations?</span>
            <p className="value">{vaccinationMarkup}</p>
          </div>{" "}
          <div className="infocard-details">
            <span className="title">This Month's Average Temperature</span>
            <span className="value">{temperatureRate}°C</span>
          </div>{" "}
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
        <div className="infocard-details__wrapper">
          <div className="infocard-details">
            <span className="title">Currency</span>
            <span className="value">{basicDetails.currency.name}</span>
          </div>{" "}
          <div className="infocard-details">
            <span className="title">$1:</span>
            <span className="value">
              {conversionRate}
              {basicDetails.currency.code}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
