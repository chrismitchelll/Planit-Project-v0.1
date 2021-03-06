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
        <option value="AT">đŚđš Austria</option>
        <option value="BE">đ§đŞ Belgium</option>
        {/* <option value="Bulgaria">đ§đŹ Bulgaria</option> NOT ADDED */}
        <option value="HR">đ­đˇ Croatia</option>
        <option value="CY">đ¨đž Cyprus</option>
        <option value="CZ">đ¨đż Czechia</option>
        <option value="DK">đŠđ° Denmark</option>
        <option value="EE">đŞđŞ Estonia</option>
        <option value="FI">đŤđŽ Finland</option>
        <option value="FR">đŤđˇ France</option>
        <option value="DE">đŠđŞ Germany</option>
        <option value="GR">đŹđˇ Greece</option>
        <option value="HU">đ­đş Hungary</option>
        <option value="IE">đŽđŞ Ireland</option>
        <option value="IT">đŽđš Italy</option>
        <option value="LV">đąđť Latvia</option>
        <option value="LT">đąđš Lithuania</option>
        <option value="LU">đąđş Luxembourg</option>
        {/* <option value="Malta">đ˛đš Malta</option> NEEDS ADDING */}
        {/* <option value="Montenegro">đ˛đš Montenegro</option> NOT ADDED */}
        <option value="NL">đłđą Netherlands</option>
        <option value="NO">đło Norway</option>
        {/* <option value="N. Macedonia">đłđą N. Macedonia</option> */}
        {/* <option value="">đľđą Poland</option> */}
        <option value="PT">đľđš Portugal</option>
        <option value="RO">đˇđ´ Romania</option>
        {/* <option value="Serbia">đˇđ¸ Serbia</option> */}
        <option value="SK">đˇđ¸ Slovakia</option>
        <option value="SI">đ¸đ° Slovenia</option>
        <option value="ES">đŞđ¸ Spain</option>
        <option value="SE">đ¸đŞ Sweden</option>
        <option value="CH">đ¸đŞ Switzerland</option>
        <option value="TR">đ¸đŞ Turkey</option>
        <option value="GB">đŹđ§ United Kingdom</option>
        <option value="CA">đ¨đŚ Canada</option>
        {/* <option value="US">
            đşđ¸ United States of America
          </option> */}
      </select>
      {/* <Confirm confirmSelectedCountry={this.confirmSelectedCountry} /> */}
    </>
  );
}
