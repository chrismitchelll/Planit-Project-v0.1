import React from "react";
import "./details.scss";

export default function Details({ basicDetails, complexDetails }) {
  const languageMarkup =
    basicDetails.language.length > 0 ? (
      basicDetails.language.map((lan) => {
        return (
          <>
            <h5>{lan.language}</h5>
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
        <div className="infocard-details" id="flag">
          <div className="flag-container">
            {/* <img src={complexDetails.flag} alt="flag" /> */}
            FLAG
          </div>
        </div>
        <div className="infocard-details">
          <span className="title">Capital City</span>

          <span className="value">
            {complexDetails.capital} ({basicDetails.names.iso2})
          </span>
        </div>
      </div>
      <div className="infocard-details__wrapper">
        <div className="infocard-details">
          <span className="title">Official Language</span>
          <span className="value">{languageMarkup}</span>
        </div>{" "}
        <div className="infocard-details">
          <span className="title">Neighbouring Countries</span>
          <span>{neighboursMarkup}</span>
        </div>
        {/* <div className="infocard-details">
          <span className="title">Timezone</span>
          <span className="value">{basicDetails.timezone.name}</span>
        </div> */}
      </div>
    </>
  );
}
