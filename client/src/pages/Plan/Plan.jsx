import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./plan.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Budgeter from "../../components/Budgeter/Budgeter";
import Selector from "../../components/Selector/Selector";
import Total from "../../components/Total/Total";
import Conditions from "../../components/Conditions/Conditions";
import Itineary from "../../components/Itineary/Itineary";
import ViaTour from "../../assets/ext-logos/viatour.png";
import AtlasObscura from "../../assets/ext-logos/atlasobscura.jpg";
import MuchBetterAdventures from "../../assets/ext-logos/muchbetteradventures.svg";
import Booking from "../../assets/ext-logos/bookingcom.png";
import Couchsurfers from "../../assets/ext-logos/couchsurfing.jpg";
import Hostelworld from "../../assets/ext-logos/hostelworld.png";
import Kayak from "../../assets/ext-logos/kayak.png";
import Momondo from "../../assets/ext-logos/momondo.png";
import SkyScanner from "../../assets/ext-logos/skyscanner.png";

export default class Plan extends Component {
  state = {
    trips: "",
    countries: "",
    complexCountryDetails: "",
    basicCountryDetails: "",
    noOfPeople: "",
    days: "",
    month: "",
  };

  componentDidMount() {
    this.getAllBasicCountries();
    this.getAllTrips();
  }

  getAllTrips = () => {
    axios
      .get(`http://localhost:8888/trips`)
      .then((response) => {
        console.log(response);
        this.setState({
          trips: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  loadComplexCountryDetails = (countryId) => {
    axios
      .get(`http://localhost:8888/countries` + "/" + countryId)
      .then((response) => {
        const loadedCountry = response.data;
        this.setState({ complexCountryDetails: loadedCountry });
        console.log(this.state.complexCountryDetails);
      });
  };

  getAllBasicCountries = () => {
    axios
      .get(`https://travelbriefing.org/countries.json`)
      .then((response) => {
        this.setState({ countries: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  loadBasicCountryDetails = (countryCode) => {
    axios
      .get(`https://travelbriefing.org/` + `${countryCode}` + `?format=json`)
      .then((response) => {
        this.setState({ basicCountryDetails: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //could combine called functiosn into 1.
  handleSelectedCountry = (event) => {
    this.loadComplexCountryDetails(event.target.value);
    this.loadBasicCountryDetails(event.target.value);
  };

  // setState to a random item in from an array of countries
  handleRandomCountry = () => {
    this.setState({
      countries: Math.floor(Math.random() * this.state.countries.length),
    });
    console.log(this.state.countries);
  };

  setNumber = (event) => {
    this.setState({ noOfPeople: event.target.value });
    console.log(this.state.noOfPeople);
  };
  setDays = (event) => {
    this.setState({ days: event.target.value });
    console.log(this.state.days);
  };
  setMonth = (event) => {
    this.setState({ month: event.target.value });
    console.log(this.state.month);
  };

  render() {
    return (
      <>
        <Header />
        <div className="page" id="plan">
          <div className="trip-container__top">
            <div className="add-new">
              <Link to={`/plan/trips/`}>
                <div className="trip-container__button">Planned Trips</div>{" "}
              </Link>
            </div>

            <h2>Plan</h2>
            <div className="add-new">
              <Link to={`/plan/add/`}>
                <div className="trip-container__button">Add New Trip</div>{" "}
              </Link>
            </div>
          </div>{" "}
          <div className="content-wrapper" id="main-selector">
            <div className="plan__wrapper">
              {/* <Converter /> */}
              <div className="infocard-details__wrapper">
                <h1>Plan</h1>
                <Selector handleSelectedCountry={this.handleSelectedCountry} />
              </div>
            </div>
            {/* <div className="page">
              <div className="trip-container__top">
                {this.state.trips && (
                  <Itineary
                    trips={this.state.trips}
                    getData={this.getAllTrips}
                  />
                )}
              </div>
            </div> */}
            <Conditions
              setNumber={this.setNumber}
              setMonth={this.state.month}
              setDays={this.setDays}
            />
            {/* // )} */}
            {!this.state.basicCountryDetails &&
              !this.state.complexCountryDetails &&
              !this.state.complexCountryDetails && (
                <div className="plan__wrapper"> </div>
              )}

            {this.state.days &&
              this.state.noOfPeople &&
              // this.state.month &&
              this.state.complexCountryDetails && (
                <Total
                  noOfPeople={this.state.noOfPeople}
                  days={this.state.days}
                  month={this.state.month}
                  basicDetails={this.state.basicCountryDetails}
                  complexDetails={this.state.complexCountryDetails}
                />
              )}
          </div>
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

        <Footer />
      </>
    );
  }
}
