import React from "react";
import "./costs.scss";
import Bed from "../../assets/icons/budget/bed.png";
import Beer from "../../assets/icons/budget/beer.png";
import Calculator from "../../assets/icons/budget/calculator.png";
import Food from "../../assets/icons/budget/cutlery.png";
import Booze from "../../assets/icons/budget/drinks.png";
import BigMac from "../../assets/icons/budget/hamburger.png";
import Transport from "../../assets/icons/budget/public-transport.png";
import Theatre from "../../assets/icons/budget/theater.png";
import Week from "../../assets/icons/budget/week.png";

export default function Details({
  handleSelectedCountry,
  basicDetails,
  complexDetails,
  budget,
}) {
  // multiply a number by 7 to get the weekly cost
  const weeklyCost = (
    (complexDetails.daily +
      complexDetails.entertainment +
      complexDetails.meals +
      complexDetails.transportation +
      complexDetails.alcohol) *
    budget *
    7
  ).toFixed(0);

  const dailyCost = (
    (complexDetails.daily +
      complexDetails.entertainment +
      complexDetails.meals +
      complexDetails.transportation +
      complexDetails.alcohol) *
    budget
  ).toFixed(0);

  return (
    <>
      <div className="infocard-details__wrapper">
        <div className="card-details__main" id="weeklyprice">
          <img src={Week} alt="weekly-icon" id="budget-icon" />
          <span className="title">Weekly Budget:</span>
          {/* <span className="value"> */}
          <h3>
            {basicDetails.currency.code}
            {weeklyCost}
          </h3>{" "}
          <h4>
            ({basicDetails.currency.code}
            {dailyCost} per day)
          </h4>
          {/* <br></br>
          Through combining data from BudgetMyTrip with your planned budget
          level, you can expect to spend around
          {basicDetails.currency.code}
          {weeklyCost} per week of your stay in {complexDetails.country}. */}
          {/* </span> */}
        </div>
      </div>
      <div className="infocard-details__wrapper">
        <div className="card-details">
          <img src={Calculator} alt="weekly-icon" id="budget-icon" />
          <span className="title">Daily Budget Estimate</span>
          <span className="value">
            {basicDetails.currency.code}
            {complexDetails.daily}
          </span>
        </div>
        <div className="card-details">
          <img src={Transport} alt="weekly-icon" id="budget-icon" />
          <span className="title">Transportation Costs</span>
          <span className="value">
            {basicDetails.currency.code}
            {complexDetails.transportation}
          </span>
        </div>
      </div>
      <div className="infocard-details__wrapper">
        <div className="card-details">
          <img src={Bed} alt="accomodation-icon" id="budget-icon" />
          <span className="title">Accomodation Costs</span>
          <span className="value">
            {basicDetails.currency.code}
            {complexDetails.hotel}
          </span>
        </div>
        <div className="card-details">
          <img src={Theatre} alt="entertainment-icon" id="budget-icon" />
          <span className="title">Entertainment Costs</span>
          <span className="value">
            {basicDetails.currency.code}
            {complexDetails.entertainment}
          </span>
        </div>
      </div>
      <div className="infocard-details__wrapper">
        <div className="card-details">
          <img src={Food} alt="meals-icon" id="budget-icon" />
          <span className="title">Meals Costs</span>
          <span className="value">
            {basicDetails.currency.code}
            {complexDetails.meals}
          </span>
        </div>
        <div className="card-details">
          <img src={Booze} alt="Drinks-icon" id="budget-icon" />
          <span className="title">Drinks Costs</span>
          <span className="value">
            {basicDetails.currency.code}
            {complexDetails.alcohol}
          </span>
        </div>
      </div>
      <div className="infocard-details__wrapper">
        <div className="card-details">
          <img src={BigMac} alt="bigmac-icon" id="budget-icon" />
          <span className="title">A Big Mac Costs:</span>
          <span className="value">${complexDetails.bigmac}</span>
          {/* Big Mac index - the cost of a burger in McDonald's network. Big Mac
          contains meat, vegetables, cheese, bread and other foods. It also
          includes the cost of renting space and equipment, labor, and other
          factors. If the price of a Big Mac low then we can say that the prices
          in the country are low, even if the high prices are relatively high. */}
        </div>
        <div className="card-details">
          <img src={Beer} alt="beer-icon" id="budget-icon" />
          <span className="title">0.5L of Beer Costs:</span>
          <span className="value">${complexDetails.beer}</span>
        </div>
      </div>
    </>
  );
}
