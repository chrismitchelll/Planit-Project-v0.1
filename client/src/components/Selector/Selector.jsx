import React, { useState } from "react";
import Confirm from "../Buttons/ConfirmButton/Confirm";
import "./selector.scss";

export default function Selector({ handleSelectedCountry, chosenCountry }) {
  return (
    <>
      <div className="flag"></div> <h3>Where To?</h3>
      <select
        className="country-selector__dropdown"
        name="countries"
        id="countries"
        onChange={handleSelectedCountry}
        value={chosenCountry}
      >
        <option value="-">Choose a Destination</option>
        <option value="AT">🇦🇹 Austria</option>
        <option value="BE">🇧🇪 Belgium</option>
        {/* <option value="Bulgaria">🇧🇬 Bulgaria</option> NOT ADDED */}
        <option value="HR">🇭🇷 Croatia</option>
        <option value="CY">🇨🇾 Cyprus</option>
        <option value="CZ">🇨🇿 Czechia</option>
        <option value="DK">🇩🇰 Denmark</option>
        <option value="EE">🇪🇪 Estonia</option>
        <option value="FI">🇫🇮 Finland</option>
        <option value="FR">🇫🇷 France</option>
        <option value="DE">🇩🇪 Germany</option>
        <option value="GR">🇬🇷 Greece</option>
        <option value="HU">🇭🇺 Hungary</option>
        <option value="IE">🇮🇪 Ireland</option>
        <option value="IT">🇮🇹 Italy</option>
        <option value="LV">🇱🇻 Latvia</option>
        <option value="LT">🇱🇹 Lithuania</option>
        <option value="LU">🇱🇺 Luxembourg</option>
        {/* <option value="Malta">🇲🇹 Malta</option> NEEDS ADDING */}
        {/* <option value="Montenegro">🇲🇹 Montenegro</option> NOT ADDED */}
        <option value="NL">🇳🇱 Netherlands</option>
        <option value="NO">🇳o Norway</option>
        {/* <option value="N. Macedonia">🇳🇱 N. Macedonia</option> */}
        {/* <option value="">🇵🇱 Poland</option> */}
        <option value="PT">🇵🇹 Portugal</option>
        <option value="RO">🇷🇴 Romania</option>
        {/* <option value="Serbia">🇷🇸 Serbia</option> */}
        <option value="SK">🇷🇸 Slovakia</option>
        <option value="SI">🇸🇰 Slovenia</option>
        <option value="ES">🇪🇸 Spain</option>
        <option value="SE">🇸🇪 Sweden</option>
        <option value="CH">🇸🇪 Switzerland</option>
        <option value="TR">🇸🇪 Turkey</option>
        <option value="GB">🇬🇧 United Kingdom</option>
        <option value="CA">🇨🇦 Canada</option>
        {/* <option value="US">
            🇺🇸 United States of America
          </option> */}
      </select>
      {/* <Confirm confirmSelectedCountry={this.confirmSelectedCountry} /> */}
    </>
  );
}
