import React from "react";
import "./details.scss";

export default function Details({
  handleSelectedCountry,
  basicCountryDetails,
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

  const temperatureRate = (
    Math.round(details.weather.April.pAvg * 100) / 100
  ).toFixed(1);

  const vaccinationMarkup =
    details.vaccinations.length > 0 ? (
      details.vaccinations.map((vac) => {
        return (
          <>
            <h5>{vac.name}</h5>
            <p>{vac.message}</p>
          </>
        );
      })
    ) : (
      <p>No Vaccinations</p>
    );

  const languageMarkup =
    details.language.length > 0 ? (
      details.language.map((lan) => {
        return (
          <>
            <h5>{lan.language}</h5>
            <p>
              Official? <h5>{lan.official}</h5>{" "}
            </p>
          </>
        );
      })
    ) : (
      <p>No Official Languages</p>
    );

  const neighboursMarkup =
    details.neighbors.length > 0 ? (
      details.neighbors.map((cou) => {
        return (
          <>
            <h5>{cou.name}</h5>
          </>
        );
      })
    ) : (
      <p>No Neighbouring Countries</p>
    );

  return (
    <>
      <div className="infocard-details__wrapper">
        <div className="infocard-details">
          <span className="title">Capital City</span>

          <span className="value">
            {details.names.name} ({details.names.iso2})
          </span>
        </div>
        <div className="infocard-details">
          <span className="title">Neighbouring Countries</span>
          <span>{neighboursMarkup}</span>
          {/* <span className="title">Population</span>
          <span className="value">{oneCountry.population}</span> */}
        </div>
      </div>
      <div className="infocard-details__wrapper">
        <div className="infocard-details">
          <span className="title">Official Language</span>
          <span className="value">{languageMarkup}</span>
        </div>{" "}
        <div className="infocard-details">
          <span className="title">Timezone</span>
          <span className="value">{details.timezone.name}</span>
        </div>
      </div>
      <div className="infocard-details__wrapper">
        <div className="infocard-details">
          <span className="title">Vaccinations?</span>
          <p className="value">{vaccinationMarkup}</p>
        </div>{" "}
        <div className="infocard-details">
          <span className="title">This Month's Average Temperature</span>
          <span className="value">{temperatureRate}</span>
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
            {conversionRate}
            {details.currency.code}
          </span>
        </div>
      </div>
    </>
  );
}
