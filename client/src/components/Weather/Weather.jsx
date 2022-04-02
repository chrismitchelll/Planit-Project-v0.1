import React from "react";
import "./weather.scss";

export default function Weather({
  handleSelectedCountry,
  basicCountryDetails,
  details,
  chosenCountryFlag,
}) {
  const temperatureRate = (
    Math.round(details.weather.January.pAvg * 100) / 100
  ).toFixed(1);

  const temperatureRate1 = (
    Math.round(details.weather.February.pAvg * 100) / 100
  ).toFixed(1);

  const temperatureRate2 = (
    Math.round(details.weather.March.pAvg * 100) / 100
  ).toFixed(1);

  const temperatureRate3 = (
    Math.round(details.weather.April.pAvg * 100) / 100
  ).toFixed(1);

  const temperatureRate4 = (
    Math.round(details.weather.May.pAvg * 100) / 100
  ).toFixed(1);

  const temperatureRate5 = (
    Math.round(details.weather.June.pAvg * 100) / 100
  ).toFixed(1);

  const temperatureRate6 = (
    Math.round(details.weather.July.pAvg * 100) / 100
  ).toFixed(1);

  const temperatureRate7 = (
    Math.round(details.weather.August.pAvg * 100) / 100
  ).toFixed(1);

  const temperatureRate8 = (
    Math.round(details.weather.September.pAvg * 100) / 100
  ).toFixed(1);

  const temperatureRate9 = (
    Math.round(details.weather.October.pAvg * 100) / 100
  ).toFixed(1);

  const temperatureRate10 = (
    Math.round(details.weather.November.pAvg * 100) / 100
  ).toFixed(1);

  const temperatureRate11 = (
    Math.round(details.weather.December.pAvg * 100) / 100
  ).toFixed(1);

  //create an array with each month of the year
  // for each array item, create a span with the month name and the average temperature

  return (
    <>
      <div className="infocard-details__wrapper">
        <div className="infocard-details">
          <span className="title">January Average Temperature</span>
          <span className="value">{temperatureRate}°F</span>
        </div>{" "}
        <div className="infocard-details">
          <span className="title">February Average Temperature</span>
          <span className="value">{temperatureRate1}°F</span>
        </div>{" "}
      </div>
      <div className="infocard-details__wrapper">
        <div className="infocard-details">
          <span className="title">March Average Temperature</span>
          <span className="value">{temperatureRate1}°F</span>
        </div>{" "}
        <div className="infocard-details">
          <span className="title">April Average Temperature</span>
          <span className="value">{temperatureRate3}°F</span>
        </div>{" "}
      </div>
      <div className="infocard-details__wrapper">
        <div className="infocard-details">
          <span className="title">May Average Temperature</span>
          <span className="value">{temperatureRate4}°F</span>
        </div>{" "}
        <div className="infocard-details">
          <span className="title">June Average Temperature</span>
          <span className="value">{temperatureRate5}°F</span>
        </div>{" "}
      </div>
      <div className="infocard-details__wrapper">
        <div className="infocard-details">
          <span className="title">July Average Temperature</span>
          <span className="value">{temperatureRate6}°F</span>
        </div>{" "}
        <div className="infocard-details">
          <span className="title">August Average Temperature</span>
          <span className="value">{temperatureRate7}°F</span>
        </div>{" "}
      </div>
      <div className="infocard-details__wrapper">
        <div className="infocard-details">
          <span className="title">September Average Temperature</span>
          <span className="value">{temperatureRate8}°F</span>
        </div>{" "}
        <div className="infocard-details">
          <span className="title">October Average Temperature</span>
          <span className="value">{temperatureRate9}°F</span>
        </div>{" "}
      </div>
      <div className="infocard-details__wrapper">
        <div className="infocard-details">
          <span className="title">November Average Temperature</span>
          <span className="value">{temperatureRate10}°F</span>
        </div>{" "}
        <div className="infocard-details">
          <span className="title">December Average Temperature</span>
          <span className="value">{temperatureRate11}°F</span>
        </div>
      </div>
    </>
  );
}
