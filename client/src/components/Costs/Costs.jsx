import React from "react";
import "./costs.scss";

export default function Details({
  handleSelectedCountry,
  chosenCountryDetails,
}) {
  return (
    <>
      {" "}
      <div className="infocard-details__wrapper">
        <div className="infocard-details">
          <span className="title">Daily Budget</span>
          <span className="value">X</span>
        </div>
        <div className="infocard-details">
          <span className="title">Weekly Budget</span>
          <span className="value">X</span>
        </div>
      </div>
      <div className="infocard-details__wrapper">
        <div className="infocard-details">
          <span className="title">Accomodation Cost</span>
          <span className="value">X</span>
        </div>{" "}
        <div className="infocard-details">
          <span className="title">Transportation Cost</span>
          <span className="value">X</span>
        </div>
      </div>
      <div className="infocard-details__wrapper">
        <div className="infocard-details">
          <span className="title">Flight Cost</span>
          <span className="value">X</span>
        </div>{" "}
        <div className="infocard-details">
          <span className="title">Food Cost</span>
          <span className="value">X</span>
        </div>
      </div>
    </>
  );
}
