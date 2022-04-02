import React from "react";
import "./details.scss";

export default function Details({ basicDetails, complexDetails }) {
  const conversionRate = (
    Math.round(basicDetails.currency.rate * 100) / 100
  ).toFixed(2);

  const temperatureRate = (
    Math.round(basicDetails.weather.April.pAvg * 100) / 100
  ).toFixed(1);

  const vaccinationMarkup =
    basicDetails.vaccinations.length > 0 ? (
      basicDetails.vaccinations.map((vac) => {
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
    basicDetails.language.length > 0 ? (
      basicDetails.language.map((lan) => {
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
    basicDetails.neighbors.length > 0 ? (
      basicDetails.neighbors.map((cou) => {
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
        {/* <div className="infocard-details" id="flag">
          <img src={complexDetails.flag} alt="flag" />
        </div>
        <div className="infocard-details">
          <span className="title">Neighbouring Countries</span>
          <span>{neighboursMarkup}</span>
        </div> */}
        <div className="infocard-details">
          <span className="title">Capital City</span>

          <span className="value">
            {complexDetails.capital} ({basicDetails.names.iso2})
          </span>
        </div>
        <div className="infocard-details">
          <span className="title">Neighbouring Countries</span>
          <span>{neighboursMarkup}</span>
        </div>
      </div>
      <div className="infocard-details__wrapper">
        <div className="infocard-details">
          <span className="title">Official Language</span>
          <span className="value">{languageMarkup}</span>
        </div>{" "}
        <div className="infocard-details">
          <span className="title">Timezone</span>
          <span className="value">{basicDetails.timezone.name}</span>
        </div>
      </div>
      <div className="infocard-details__wrapper">
        <div className="infocard-details">
          <span className="title">Vaccinations?</span>
          <p className="value">{vaccinationMarkup}</p>
        </div>{" "}
        <div className="infocard-details">
          <span className="title">This Month's Average Temperature</span>
          <span className="value">{temperatureRate}°F</span>
        </div>{" "}
      </div>
      <div className="infocard-details__wrapper">
        <div className="infocard-details">
          <span className="title">Currency</span>
          <span className="value">{basicDetails.currency.name}</span>
        </div>{" "}
        <div className="infocard-details">
          <span className="title">$1:</span>
          <span className="value">
            {conversionRate}
            {basicDetails.currency.code}
          </span>
        </div>
      </div>
      <div className="infocard-details__wrapper">
        <div className="infocard-details">
          <span className="title">Tap Water</span>
          <span className="value"> {complexDetails.water} </span>
        </div>{" "}
        <div className="infocard-details">
          <span className="title">Plug Type[s]</span>
          <span className="value">{basicDetails.plugs}</span>
        </div>
      </div>
    </>
  );
}
