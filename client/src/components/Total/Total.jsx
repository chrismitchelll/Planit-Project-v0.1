import React from "react";
import Budget from "../../assets/icons/budget/budget.png";
import Weather from "../../assets/icons/sun.png";

export default function Total({
  basicDetails,
  complexDetails,
  currency,
  setCurrency,
}) {
  // state = {
  //   currency: null,
  // };

  const budgetCalculator = (
    (complexDetails.daily +
      complexDetails.entertainment +
      complexDetails.meals +
      complexDetails.transportation +
      complexDetails.alcohol) *
    7
  ).toFixed(0);

  const temperatureRate = (
    Math.round(basicDetails.weather.April.pAvg * 100) / 100
  ).toFixed(1);

  const conversionRate = (
    Math.round(basicDetails.currency.rate * 100) / 100
  ).toFixed(2);

  //function to set state of currency to 'euros' on click

  //   const months = [
  //     "January",
  //     "February",
  //     "March",
  //     "April",
  //     "May",
  //     "June",
  //     "July",
  //     "August",
  //     "September",
  //     "October",
  //     "November",
  //     "December",
  //   ];

  //   const monthsMarkup = months.map;

  return (
    <>
      {" "}
      <div className="infocard-details__wrapper">
        <div className="budgetcard-details">
          <img src={Budget} alt="budget-icon" id="budget-icon" />
          <span className="title">Estimated Trip Cost:</span>
          <span>
            {basicDetails.currency.code}
            {budgetCalculator}
          </span>
        </div>
        <div className="infocard-details__wrapper">
          Converter
          <div className="infocard-details">
            <button value="gbp" onClick={setCurrency}>
              £
            </button>
            <button value="eur" onClick={setCurrency}>
              €
            </button>
            <button value="usd" onClick={setCurrency}>
              $
            </button>
            <span className="title">$1:</span>
            <span className="value">
              {conversionRate}, {basicDetails.currency.code}
            </span>
          </div>
        </div>
        <div className="budgetcard-details">
          <img src={Weather} alt="weather-icon" id="budget-icon" />
          <span className="title">Weather Estimate</span>
          <span className="value">{temperatureRate}°F</span>
        </div>
      </div>
    </>
  );
}
