import React from "react";
import Confirm from "../../components/Buttons/ConfirmButton/Confirm";
import Budget from "../../assets/icons/budget/budget.png";
import Weather from "../../assets/icons/sun.png";
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
  // state = {
  //   currency: null,
  // };

  const budgetCalculator = (
    (complexDetails.daily +
      complexDetails.entertainment +
      complexDetails.meals +
      complexDetails.transportation +
      complexDetails.alcohol) *
    days *
    noOfPeople
  ).toFixed(0);

  const temperatureRate = (
    Math.round(basicDetails.weather.April.tAvg * 100) / 100
  ).toFixed(1);

  const conversionRate = (
    Math.round(basicDetails.currency.rate * 100) / 100
  ).toFixed(2);

  return (
    <>
      {" "}
      <div className="content-wrapper">
        <div className="infocard-details__wrapper" id="total">
          <div className="card-details">
            <img src={Budget} alt="budget-icon" id="budget-icon" />
            <span className="title">Estimated Trip Cost:</span>
            <span>
              {basicDetails.currency.code}
              {budgetCalculator}
            </span>
          </div>

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
          <div className="card-details">
            <img src={Weather} alt="weather-icon" id="budget-icon" />
            <span className="title">Temperature Estimate</span>
            <span className="value">{temperatureRate}°C</span>
          </div>
        </div>
        {/* <div className="card-details">
          <div className="confirm-button">Confirm</div>
        </div> */}
      </div>
      <div className="content-wrapper">
        <div className="infocard-details__wrapper" id="total">
          <div className="card-details">
            <span className="title">Need To Book Flights?</span>
            <span className="title">Try Our Favourites:</span>
          </div>

          <div className="infocard-details">
            <img src={Weather} alt="weather-icon" id="budget-icon" />
            <span className="title">Momomdo</span>
          </div>
          <div className="card-details">
            <img src={Weather} alt="weather-icon" id="budget-icon" />
            <span className="title">Kayak</span>
          </div>
          <div className="infocard-details">
            <img src={Weather} alt="weather-icon" id="budget-icon" />
            <span className="title">SkyScanner</span>
          </div>
        </div>
      </div>
      <div className="content-wrapper">
        <div className="infocard-details__wrapper" id="total">
          <div className="card-details">
            <span className="title">Sorting Accomodation?</span>
            <span className="title">We'd Recommend:</span>
          </div>

          <div className="infocard-details">
            <img src={Weather} alt="weather-icon" id="budget-icon" />
            <span className="title">Hostelworld</span>
          </div>
          <div className="card-details">
            <img src={Weather} alt="weather-icon" id="budget-icon" />
            <span className="title">Booking.com</span>
          </div>
          <div className="infocard-details">
            <img src={Weather} alt="weather-icon" id="budget-icon" />
            <span className="title">Couchsurfers</span>
          </div>
        </div>
      </div>
      <div className="content-wrapper">
        <div className="infocard-details__wrapper" id="total">
          <div className="card-details">
            <span className="title">Want to Keep Busy?</span>
            <span className="title">Make memories with:</span>
          </div>

          <div className="infocard-details">
            <img src={Weather} alt="weather-icon" id="budget-icon" />
            <span className="title">ViaTour</span>
          </div>
          <div className="card-details">
            <img src={Weather} alt="weather-icon" id="budget-icon" />
            <span className="title">MuchBetterAdventures</span>
          </div>
          <div className="infocard-details">
            <img src={Weather} alt="weather-icon" id="budget-icon" />
            <span className="title">TripAdvisor</span>
          </div>
        </div>
      </div>
    </>
  );
}
