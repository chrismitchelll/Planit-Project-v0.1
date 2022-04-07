import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./plan.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Selector from "../../components/Selector/Selector";
import Total from "../../components/Total/Total";
import Conditions from "../../components/Conditions/Conditions";
import Itineary from "../../components/Itineary/Itineary";
import Delete from "../../assets/icons/remove.png";
import Edit from "../../assets/icons/edit.png";
import Affiliates from "../../components/Affiliates/Affiliates";
import ShowItineary from "../../components/Itineary/ShowItineary";

export default class Plan extends Component {
  state = {
    trips: "",
    countries: "",
    complexCountryDetails: "",
    basicCountryDetails: "",
    noOfPeople: "",
    days: "",
    month: "",
    show: false,
  };

  componentDidMount() {
    this.getAllBasicCountries();
    this.getAllTrips();
  }

  getAllTrips = () => {
    axios
      .get(`http://localhost:8888/trips`)
      .then((response) => {
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
  };

  setNumber = (event) => {
    this.setState({ noOfPeople: event.target.value });
  };
  setDays = (event) => {
    this.setState({ days: event.target.value });
  };
  setMonth = (event) => {
    this.setState({ month: event.target.value });
  };

  render() {
    return (
      <>
        <Header />
        <div className="page" id="plan">
          <div className="section-header">
            <h1>Plan </h1>
          </div>

          <div className="content-wrapper" id="main-selector">
            <div className="plan__wrapper">
              <div className="infocard-details__wrapper">
                <Selector handleSelectedCountry={this.handleSelectedCountry} />
              </div>
            </div>

            <Conditions
              setNumber={this.setNumber}
              setMonth={this.state.month}
              setDays={this.setDays}
            />
            {/* // )} */}
            {(!this.state.days ||
              !this.state.noOfPeople ||
              !this.state.complexCountryDetails) && (
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
        </div>
        <div className="page" id="sub-page">
          {this.state.trips && (
            <Itineary trips={this.state.trips} getData={this.getAllTrips} />
          )}
        </div>
        <Affiliates />

        <Footer />
      </>
    );
  }
}
