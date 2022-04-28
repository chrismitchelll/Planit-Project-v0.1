///-----------------------------------///
//Note: this is for Phase 2//
///-----------------------------------///

import React from "react";
import "./weather.scss";
import WeatherIcon from "../../assets/icons/sun.png";
import UmbrellaIcon from "../../assets/icons/umbrella.png";

export default function Weather({ details }) {
  const h1months = ["January", "February", "March", "April", "May", "June"];

  const h2months = [
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  //mapping months into each variable
  const h1monthsMap = h1months.map((month) => {
    return {
      month: month,
      avgTemp: Math.round(details.weather[month].tAvg).toFixed(0),
      minTemp: Math.round(details.weather[month].tMax).toFixed(0),
      maxTemp: Math.round(details.weather[month].tMin).toFixed(0),
      avgRain: Math.round(details.weather[month].pAvg).toFixed(0),
      minRain: Math.round(details.weather[month].pMin).toFixed(0),
      maxRain: Math.round(details.weather[month].pMax).toFixed(0),
    };
  });

  //mapping months into each variable
  const h2monthsMap = h2months.map((month) => {
    return {
      month: month,
      avgTemp: Math.round(details.weather[month].tAvg).toFixed(0),
      minTemp: Math.round(details.weather[month].tMax).toFixed(0),
      maxTemp: Math.round(details.weather[month].tMin).toFixed(0),
      avgRain: Math.round(details.weather[month].pAvg).toFixed(0),
      minRain: Math.round(details.weather[month].pMin).toFixed(0),
      maxRain: Math.round(details.weather[month].pMax).toFixed(0),
    };
  });

  //mapping variables on forecast parameter
  const h1weatherElements = h1monthsMap.map((forecast) => {
    return (
      // <div className="infocard-details__wrapper">
      <div className="infocard-details weather-card">
        <span className="title">
          <h3>{forecast.month}</h3>
        </span>
        <span className="value">Temperature</span>
        <span className="value">Average: {forecast.avgTemp}°C</span>
        {/* <span className="value">Highs: {forecast.maxTemp}°C</span>
          <span className="value">Lows: {forecast.minTemp}°C</span> */}
        <div></div>
        <span className="title">Rainfall</span>
        <span className="value">Average: {forecast.avgRain}mm</span>
        {/* <span classNmae="value">Highs: {forecast.maxRain}mm</span>
          <span className="value">Lows: {forecast.minRain} mm</span> */}
      </div>
      // </div>
    );
  });

  //mapping variables on forecast parameter
  const h2weatherElements = h2monthsMap.map((forecast) => {
    return (
      // <div className="infocard-details__wrapper">
      <div className="infocard-details weather-card">
        <span className="title">
          <h3>{forecast.month}</h3>
        </span>
        <span className="value">Temperature</span>
        <span className="value">Average: {forecast.avgTemp}°C</span>
        {/* <span className="value">Highs: {forecast.maxTemp}°C</span>
          <span className="value">Lows: {forecast.minTemp}°C</span> */}
        <div></div>
        <span className="title">Rainfall</span>
        <span className="value">Average: {forecast.avgRain}mm</span>
        {/* <span classNmae="value">Highs: {forecast.maxRain}mm</span>
          <span className="value">Lows: {forecast.minRain} mm</span> */}
      </div>
      // </div>
    );
  });

  return (
    <>
      <div className="section-header" id="subpage">
        <h2>Forecast</h2>
      </div>
      <div className="content-wrapper">
        <div className="weather-card__main weather-card">
          <div className="card-details__main">
            <span className="title">
              <h3>Forecast Data</h3>
            </span>
            <img src={WeatherIcon} alt="weekly-icon" id="budget-icon" />
            <span className="title">Temperature Data</span>
            <img src={UmbrellaIcon} alt="rain-icon" id="budget-icon" />
            <span className="title">Expected Rainfall</span>
            <span className="value"></span>
          </div>
        </div>
        {h1weatherElements}
      </div>
      <div className="content-wrapper">
        <div className="weather-card__main">
          <div className="card-details__main">
            <span className="title">
              <h3>Forecast Data</h3>
            </span>
            <img src={WeatherIcon} alt="weekly-icon" id="budget-icon" />
            <span className="title">Temperature Data</span>
            <img src={UmbrellaIcon} alt="rain-icon" id="budget-icon" />
            <span className="title">Expected Rainfall</span>
            <span className="value"></span>
          </div>
        </div>
        {h2weatherElements}
      </div>
    </>
  );
}
