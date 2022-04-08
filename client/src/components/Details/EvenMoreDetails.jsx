import React from "react";
import "../Details/details.scss";

import Animal from "../../assets/icons/main/animal.png";
import Cheers from "../../assets/icons/main/cheers.png";
import Beer from "../../assets/icons/main/beer.png";
import Dollar from "../../assets/icons/main/dollar.png";
import Dish from "../../assets/icons/main/dish.png";
import Idea from "../../assets/icons/main/ideas.png";
import Money from "../../assets/icons/main/money.png";

export default function Details({ basicDetails, complexDetails }) {
  const conversionRate = (
    Math.round(basicDetails.currency.rate * 100) / 100
  ).toFixed(2);

  const temperatureRate = (
    Math.round(basicDetails.weather.April.tAvg * 100) / 100
  ).toFixed(1);

  console.log(complexDetails.nationalgetAnimaltype);

  //a function to display a message "Currently Unknown" if {complexDetails.nationalgetAnimal} is empty
  const getAnimal = complexDetails.nationalanimal
    ? complexDetails.nationalanimal
    : "Currently Unknown";
  const getAnimaltype = complexDetails.nationalanimaltype
    ? complexDetails.nationalanimaltype
    : "N/A";
  const dishData = complexDetails.nationaldishes
    ? complexDetails.nationaldishes
    : "Currently Unknown";
  const cheersData = complexDetails.cheers
    ? complexDetails.cheers
    : "Unknown. Ask a Local!";
  const beerData = complexDetails.mostpopularbeer
    ? complexDetails.mostpopularbeer
    : "Unknown. Ask a Local!";
  const pronunciationData = complexDetails.pronunciation
    ? complexDetails.cheers
    : "Unknown. Ask a Local!";

  return (
    <>
      <div className="section-header">
        <h2>More to Know</h2>
      </div>

      <div className="content-wrapper">
        <div className="infocard-details__wrapper">
          <div className="card-details__main ">
            <img src={Idea} alt="weekly-icon" id="budget-icon" />
            <span className="title">More to know</span>
            <span className="summary__paragraph">
              These extra facts should help you be that little extra prepared
              for your trip, and understand more of the culutral background!
            </span>
          </div>
        </div>
        <div className="infocard-details__wrapper">
          <div className="infocard-details">
            <img src={Dish} alt="Dish-icon" id="main-icon" />
            <span className="title">National Dishes</span>
            <p className="value">{dishData}</p>
          </div>
          <div className="infocard-details">
            <img src={Animal} alt="Dish-icon" id="main-icon" />
            <span className="title">National Animal</span>
            <span className="value">
              {getAnimal}
              <br></br>({getAnimaltype})
            </span>
          </div>
        </div>
        <div className="infocard-details__wrapper">
          <div className="infocard-details">
            <img src={Beer} alt="Beer-icon" id="main-icon" />
            <span className="title">Most Popular Beer</span>
            <span className="value">{beerData}</span>
          </div>
          <div className="infocard-details">
            <img src={Cheers} alt="Cheers-icon" id="main-icon" />
            <span className="title">How to Say "Cheers"</span>
            <span className="value">
              {cheersData} <br></br>("{pronunciationData}")
            </span>
          </div>
        </div>
        <div className="infocard-details__wrapper">
          <div className="infocard-details">
            <img src={Dollar} alt="Dollar-icon" id="main-icon" />
            <span className="title">Currency</span>
            <span className="value">{basicDetails.currency.name}</span>
          </div>
          <div className="infocard-details">
            <img src={Money} alt="Conversion-icon" id="main-icon" />
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
