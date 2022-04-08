import React from "react";
import "../Details/details.scss";
import Language from "../../assets/icons/main/language.png";
import TapWater from "../../assets/icons/main/water.png";
import Emergency from "../../assets/icons/main/emergency.png";
import Socket from "../../assets/icons/main/socket.png";
import Sun from "../../assets/icons/sun.png";
import Vaccine from "../../assets/icons/main/vaccine.png";
import Neighbours from "../../assets/icons/main/neighborhood.png";
import Capital from "../../assets/icons/main/capital.png";

export default function Details({ basicDetails, complexDetails }) {
  const conversionRate = (
    Math.round(basicDetails.currency.rate * 100) / 100
  ).toFixed(2);

  // 👇️ Get Name of Current Month
  const nameOfMonth = new Date().toLocaleString("default", { month: "long" });
  console.log(nameOfMonth);

  const temperatureRate = (
    Math.round(basicDetails.weather[nameOfMonth].tAvg * 100) / 100
  ).toFixed(1);

  const vaccinationMarkup =
    basicDetails.vaccinations.length > 0 ? (
      basicDetails.vaccinations.map((vac) => {
        return (
          <>
            <h5>{vac.name}</h5>
          </>
        );
      })
    ) : (
      <p>No Vaccinations</p>
    );

  const emergencyMarkup = (
    <>
      <h5>Police</h5>
      <p>{basicDetails.telephone.police}</p>
      <h5>Ambulance/Fire</h5>
      <p>{basicDetails.telephone.ambulance}</p>
    </>
  );

  // );
  //   })
  // ) : (
  //   <p>No Data Availible</p>

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

  const plugsData = basicDetails.electricity.plugs
    ? basicDetails.electricity.plugs
    : "Currently Unknown";

  const waterData = complexDetails.water
    ? complexDetails.water
    : "Unknown. Remain Cautious";

  return (
    <>
      <div className="section-header">
        <h2>Need to Know</h2>
      </div>
      <div className="content-wrapper">
        <div className="infocard-details__wrapper">
          <div className="infocard-details">
            <img src={Capital} alt="capital-icon" id="main-icon" />
            <span className="title">Capital City</span>

            <span className="value">
              {complexDetails.capital} ({basicDetails.names.iso2})
            </span>
          </div>
          <div className="infocard-details">
            <img src={Language} alt="Language-icon" id="main-icon" />

            <span className="title">Official Language</span>
            <span className="value">{languageMarkup}</span>
          </div>
          {/* <div className="infocard-details">
          <span className="title">Timezone</span>
          <span className="value">{basicDetails.timezone.name}</span>
        </div> */}
        </div>
        <div className="infocard-details__wrapper">
          <div className="infocard-details">
            <img src={Emergency} alt="Emergency-icon" id="main-icon" />
            <span className="title">Emergency Contacts</span>
            <p className="value">{emergencyMarkup}</p>
          </div>
          <div className="infocard-details">
            <img src={Neighbours} alt="Neighbours-icon" id="main-icon" />
            <span className="title">Neighbours</span>
            <span>{neighboursMarkup}</span>
          </div>
        </div>
        <div className="infocard-details__wrapper">
          <div className="infocard-details">
            <img src={TapWater} alt="TapWater-icon" id="main-icon" />
            <span className="title">Tap Water</span>
            <span className="value"> {waterData} </span>
          </div>
          <div className="infocard-details">
            <img src={Vaccine} alt="Vaccine-icon" id="main-icon" />
            <span className="title">Vaccinations?</span>
            <p className="value">{vaccinationMarkup}</p>
          </div>
        </div>
        <div className="infocard-details__wrapper">
          <div className="infocard-details">
            <img src={Sun} alt="Temp-icon" id="main-icon" />
            <span className="title">This Month's Average Temperature</span>
            <span className="value">{temperatureRate}°C</span>
          </div>
          <div className="infocard-details">
            <img src={Socket} alt="Socket-icon" id="main-icon" />
            <span className="title">Plug Type[s]</span>
            <span className="value">{plugsData}</span>
          </div>
        </div>
      </div>
    </>
  );
}
