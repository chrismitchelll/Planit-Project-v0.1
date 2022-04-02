import React from "react";

export default function Convert() {
  return (
    <div>
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
    </div>
  );
}
