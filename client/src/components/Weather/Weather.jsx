import React from "react";
import "./weather.scss";
import WeatherIcon from "../../assets/icons/sun.png";
import UmbrellaIcon from "../../assets/icons/umbrella.png";

export default function Weather({
  handleSelectedCountry,
  basicCountryDetails,
  details,
  chosenCountryFlag,
}) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  //mapping months into each variable
  const monthsMap = months.map((month) => {
    return {
      month: month,
      avgTemp: Math.round(details.weather[month].tAvg).toFixed(0),
      minTemp: Math.round(details.weather[month].tMin).toFixed(0),
      maxTemp: Math.round(details.weather[month].tMax).toFixed(0),
      avgRain: Math.round(details.weather[month].pAvg).toFixed(0),
      minRain: Math.round(details.weather[month].pMin).toFixed(0),
      maxRain: Math.round(details.weather[month].pMax).toFixed(0),
    };
  });

  //mapping variables on forecast parameter
  const weatherElements = monthsMap.map((forecast) => {
    return (
      <div className="infocard-details__wrapper">
        <div className="infocard-details weatherCard">
          <span className="title">
            <h4>{forecast.month}</h4>
          </span>
          <span className="value">Temperature</span>
          <span className="value">Average: {forecast.avgTemp}°C</span>
          <span className="value">Highs: {forecast.maxTemp}°C</span>
          <span className="value">Lows: {forecast.minTemp}°C</span>
          <div></div>
          <span className="title">Rainfall</span>
          <span className="value">Average: {forecast.avgRain}mm</span>
          <span classNmae="value">Highs: {forecast.maxRain}mm</span>
          <span className="value">Lows: {forecast.minRain} mm</span>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="section-header">
        <h2>Forecast</h2>
      </div>
      <div className="content-wrapper">
        <div className="country-selector">
          {" "}
          <div className="card-details__main">
            <span className="title">
              <h3>Forecast Data</h3>
            </span>
            <img src={WeatherIcon} alt="weekly-icon" id="budget-icon" />
            <span className="title">Temperature Data</span>
            <img src={UmbrellaIcon} alt="rain-icon" id="budget-icon" />
            <span className="title">Expected Rainfall</span>
            <span className="value">
              {/* {basicDetails.currency.code}
            {weeklyCost} */}
            </span>
          </div>
        </div>
        {weatherElements};
      </div>
    </>
  );
}
