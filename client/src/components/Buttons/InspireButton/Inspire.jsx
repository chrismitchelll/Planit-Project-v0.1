import React, { useState } from "react";
import "./inspire.scss";

export default function Selector({
  handleSelectedCountry,
  handleRandomCountry,
  confirmSelectedCountry,
  chosenCountry,
}) {
  return (
    <>
      <div className="country-selector">
        Not Sure Where to Go?
        <div className="confirm-button" onClick={handleRandomCountry}>
          Inspire Me
        </div>
        {/* <div className="next-button">Inspire Me</div> */}
      </div>
    </>
  );
}
