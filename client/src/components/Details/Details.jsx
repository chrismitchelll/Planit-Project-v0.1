import React from "react";
import "./details.scss";
import Capital from "../../assets/icons/main/capital.png";

export default function Details({ basicDetails, complexDetails }) {
  return (
    <>
      <div className="infocard-details__wrapper">
        <div className="filler-card" id="flag">
          <div className="infocard-details__wrapper">
            <div className="flag-container">
              <img src={complexDetails.flag} alt="flag" id="flag-background" />
            </div>
            <div className="infocard-details__title">
              {" "}
              <h3>{complexDetails.country}</h3>
            </div>
            <p>{complexDetails.Description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
