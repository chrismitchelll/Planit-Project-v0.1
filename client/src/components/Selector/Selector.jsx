import React, { useState } from "react";
import "./selector.scss";

export default function Selector({
  handleSelectedCountry,
  handleRandomCountry,
  chosenCountry,
  countries,
  oneCountry,
}) {
  //   const setCountry = console.log(countries);
  //   const [count, setCount] = useState(0);
  return (
    <>
      <div className="country-selector">
        <div className="flag"></div>{" "}
        {/* <select onChange={state.onCharSelect}> */}
        <select
          className="country-selector__dropdown"
          name="countries"
          id="countries"
          onChange={handleSelectedCountry}
          value={chosenCountry}
          //   onClick={() => this.setState({})}
        >
          <option value="default">Choose A Destination</option>
          {/* {countries.map((country) => (
            <option key={country.name} value={country.name}>
              {country.name}
            </option>
          ))} */}
          <option value="Austria" key="Austria">
            🇦🇹 Austria
          </option>
          <option value="Belgium">🇧🇪 Belgium</option>
          <option value="Bulgaria">🇧🇬 Bulgaria</option>
          <option value="Croatia">🇭🇷 Croatia</option>
          <option value="Cyprus">🇨🇾 Cyprus</option>
          <option value="Czechia">🇨🇿 Czechia</option>
          <option value="Denmark">🇩🇰 Denmark</option>
          <option value="Estonia">🇪🇪 Estonia</option>
          <option value="Finland">🇫🇮 Finland</option>
          <option value="France">🇫🇷 France</option>
          <option value="Germany">🇩🇪 Germany</option>
          <option value="Greece">🇬🇷 Greece</option>
          <option value="Hungary">🇭🇺 Hungary</option>
          <option value="Ireland">🇮🇪 Ireland</option>
          <option value="Italy">🇮🇹 Italy</option>
          <option value="Latvia">🇱🇻 Latvia</option>
          <option value="Lithuania">🇱🇹 Lithuania</option>
          <option value="Luxembourg">🇱🇺 Luxembourg</option>
          <option value="Malta">🇲🇹 Malta</option>
          <option value="Montenegro">🇲🇹 Montenegro</option>
          <option value="Netherlands">🇳🇱 Netherlands</option>
          <option value="N. Macedonia">🇳🇱 N. Macedonia</option>
          <option value="Poland">🇵🇱 Poland</option>
          <option value="Portugal">🇵🇹 Portugal</option>
          <option value="Romania">🇷🇴 Romania</option>
          <option value="Serbia">🇷🇸 Serbia</option>
          <option value="Slovakia">🇷🇸 Slovakia</option>
          <option value="Slovenia">🇸🇰 Slovenia</option>
          <option value="Spain">🇪🇸 Spain</option>
          <option value="Sweden">🇸🇪 Sweden</option>
          <option value="Turkey">🇸🇪 Turkey</option>
          <option value="United Kingdom">🇬🇧 United Kingdom</option>
          <option value="Canada">🇨🇦 Canada</option>
          <option value="United States of America">
            🇺🇸 United States of America
          </option>
        </select>
        <div className="confirm-button">Confirm</div>
        Not Sure Where to Go?
        <div className="confirm-button" onClick={handleRandomCountry}>
          Inspire Me
        </div>
        {/* <div className="next-button">Inspire Me</div> */}
      </div>
    </>
  );
}
