import React from "react";
import Confirm from "../../components/Buttons/ConfirmButton/Confirm";
import Budget from "../../assets/icons/budget/budget.png";
import Weather from "../../assets/icons/sun.png";
import Rain from "../../assets/icons/umbrella.png";
import "./total.scss";

export default function Total({
  basicDetails,
  complexDetails,
  currency,
  setCurrency,
  noOfPeople,
  days,
  month,
}) {
  //can change to this.props. for above values
  let budgetCalculator = 0;

  if (complexDetails) {
    budgetCalculator = parseFloat(
      (
        (complexDetails.daily +
          complexDetails.entertainment +
          complexDetails.meals +
          complexDetails.transportation +
          complexDetails.alcohol) *
        days *
        noOfPeople
      ).toFixed(0)
    );
  }

  let temperatureRate = 0;

  if (basicDetails.weather) {
    ///when accessing object keys dynamically, use [brackets]
    temperatureRate = (
      Math.round(basicDetails.weather[month].tAvg * 100) / 100
    ).toFixed(1);
  }

  ///when accessing object keys dynamically, use [brackets]
  let rainRate = 0;
  if (basicDetails.weather) {
    rainRate = (
      Math.round(basicDetails.weather[month].pAvg * 100) / 100
    ).toFixed(1);
  }

  let currencyRate = 0;
  if (basicDetails.currency) {
    currencyRate = (Math.round(basicDetails.currency.rate * 100) / 100).toFixed(
      2
    );
  }

  let currencyValue = "-";
  if (basicDetails.currency && budgetCalculator !== 0) {
    currencyValue = basicDetails.currency.code + " " + budgetCalculator;
  }

  return (
    <>
      <div className="plan-wrapper">
        <div className="infocard-details__wrapper" id="total">
          <div className="card-details">
            <img src={Budget} alt="budget-icon" id="budget-icon" />
            <span className="title">Estimated Trip Cost:</span>
            <span>{currencyValue}</span>
          </div>

          {/* <div className="infocard-details">
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
              {currencyRate}, {basicDetails.currency.code}
            </span>
          </div> */}
          <div className="card-details">
            <img src={Weather} alt="weather-icon" id="budget-icon" />
            <span className="title">Temperature Estimate</span>
            <span className="value">{temperatureRate ?? "..."}°C</span>
          </div>

          <div className="card-details">
            <img src={Rain} alt="weather-icon" id="budget-icon" />
            <span className="title">Precipitation Estimate</span>
            <span className="value">{rainRate ? `${rainRate} mm` : "..."}</span>
          </div>
        </div>
        {/* <div className="card-details">
          <div className="confirm-button">Confirm</div>
        </div> */}
      </div>
    </>
  );
}
