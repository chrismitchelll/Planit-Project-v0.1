import React from "react";
import "./details.scss";

export default function Details({ basicDetails, complexDetails }) {
  return (
    <>
      <div className="infocard-details__wrapper">
        <div className="filler-card" id="flag">
          <div className="infocard-details__wrapper">
            <div className="flag-container">
              <img src={complexDetails.flag} alt="country-flag" />
            </div>
            <div className="infocard-details__title">
              <h3>{complexDetails.country}</h3>
            </div>
            <p>{complexDetails.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
