import React, { Component } from "react";
import ViaTour from "../../assets/ext-logos/viatour.png";
import AtlasObscura from "../../assets/ext-logos/atlasobscura.jpg";
import MuchBetterAdventures from "../../assets/ext-logos/muchbetteradventures.svg";
import Booking from "../../assets/ext-logos/bookingcom.png";
import Couchsurfers from "../../assets/ext-logos/couchsurfing.jpg";
import Hostelworld from "../../assets/ext-logos/hostelworld.png";
import Kayak from "../../assets/ext-logos/kayak.png";
import Momondo from "../../assets/ext-logos/momondo.png";
import SkyScanner from "../../assets/ext-logos/skyscanner.png";

export default class Affiliates extends Component {
  render() {
    return (
      <div>
        <div className="content-wrapper" id="suggestion">
          <div className="infocard-details__wrapper" id="total">
            <div className="card-details__suggestion">
              <div className="title">
                <h4>Need To Book Flights?</h4>
              </div>
              <div className="title">Try Our Favourites:</div>
            </div>

            <div className="infocard-details">
              <img src={Momondo} alt="weather-icon" id="plan-icon" />
              <div className="title">Momondo</div>
            </div>
            <div className="infocard-details">
              <img src={Kayak} alt="weather-icon" id="plan-icon" />
              <div className="title">Kayak</div>
            </div>
            <div className="infocard-details">
              <img src={SkyScanner} alt="weather-icon" id="plan-icon" />
              <div className="title">SkyScanner</div>
            </div>
          </div>
        </div>
        <div className="content-wrapper" id="suggestion">
          <div className="infocard-details__wrapper" id="total">
            <div className="card-details__suggestion">
              <div className="title">
                <h4>Sorting Accomodation?</h4>
              </div>
              <div className="title">We'd Recommend:</div>
            </div>

            <div className="infocard-details">
              <img src={Hostelworld} alt="weather-icon" id="plan-icon" />
              <div className="title">Hostelworld</div>
            </div>
            <div className="infocard-details">
              <img src={Booking} alt="weather-icon" id="plan-icon" />
              <div className="title">Booking.com</div>
            </div>
            <div className="infocard-details">
              <img src={Couchsurfers} alt="weather-icon" id="plan-icon" />
              <div className="title">Couchsurfers</div>
            </div>
          </div>
        </div>
        <div className="content-wrapper" id="suggestion">
          <div className="infocard-details__wrapper" id="total">
            <div className="card-details__suggestion">
              <div className="title">
                <h4>Want to Keep Busy?</h4>
              </div>
              <div className="title">Make memories with:</div>
            </div>

            <div className="infocard-details">
              <img src={ViaTour} alt="weather-icon" id="plan-icon" />
              <div className="title">ViaTour</div>
            </div>
            <div className="infocard-details">
              <img
                src={MuchBetterAdventures}
                alt="weather-icon"
                id="plan-icon"
              />
              <div className="title">MuchBetterAdventures</div>
            </div>
            <div className="infocard-details">
              <img src={AtlasObscura} alt="weather-icon" id="plan-icon" />
              <div className="title">AtlasObscura</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
