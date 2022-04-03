import React, { useState } from "react";
import "./inspire.scss";

export default function SelectorBtn({ handleRandomCountry }) {
  return (
    <>
      <div className="country-selector">
        Not Sure Where to Go?
        <div className="confirm-button" onClick={handleRandomCountry}>
          Inspire Me
        </div>
      </div>
    </>
  );
}
