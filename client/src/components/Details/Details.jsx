import React from "react";
import "./details.scss";

export default function Details({
  handleSelectedCountry,
  chosenCountryDetails,
  oneCountry,
  details,
  chosenCountryFlag,
}) {
  // const oneCountryData = oneCountry.map((data) => {
  //   console.log(data);
  // });

  const conversionRate = (
    Math.round(details.currency.rate * 100) / 100
  ).toFixed(2);

  return (
    <>
      <div className="infocard-details__wrapper">
        <div className="infocard-details">
          <span className="title">Capital City</span>

          <span className="value">
            {details.names.full} ({details.names.iso2})
          </span>
        </div>
        <div className="infocard-details">
          <span className="title">Population</span>
          <span className="value">{oneCountry.population}</span>
        </div>
      </div>
      <div className="infocard-details__wrapper">
        <div className="infocard-details">
          <span className="title">Official Language</span>
          <span className="value">{details.language.language}</span>
        </div>{" "}
        <div className="infocard-details">
          <span className="title">Timezone</span>
          <span className="value">{details.timezone.name}</span>
        </div>
      </div>
      <div className="infocard-details__wrapper">
        <div className="infocard-details">
          <span className="title">Vaccinations?</span>
          <span className="value">{details.vaccinations}</span>
        </div>{" "}
        <div className="infocard-details">
          <span className="title">Average Temperature</span>
          <span className="value">{details.weather.April.pAvg}</span>
        </div>{" "}
      </div>
      <div className="infocard-details__wrapper">
        <div className="infocard-details">
          <span className="title">Currency</span>
          <span className="value">{details.currency.name}</span>
        </div>{" "}
        <div className="infocard-details">
          <span className="title">$1:</span>
          <span className="value">
            {details.currency.rate}
            {details.currency.code}
          </span>
        </div>
      </div>
    </>
  );
}
