import React, { useState, Component } from "react";
import "./main.scss";
import axios from "axios";
import Selector from "../../components/Selector/Selector";
import Details from "../../components/Details/Details";
import MoreDetails from "../../components/Details/MoreDetails";
import EvenMoreDetails from "../../components/Details/EvenMoreDetails";
import Weather from "../../components/Weather/Weather";
import Inspire from "../../components/Buttons/InspireButton/Inspire";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

export default class Home extends Component {
  state = {
    countries: null,
    complexCountryDetails: null,
    basicCountryDetails: null,
  };

  // componentDidMount() {
  // }

  loadComplexCountryDetails = (countryId) => {
    axios
      .get(`http://localhost:8888/countries` + "/" + countryId)
      .then((response) => {
        const loadedCountry = response.data;
        this.setState({ complexCountryDetails: loadedCountry });
        console.log(this.state.complexCountryDetails);
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

  //could combine called functions into 1.
  handleSelectedCountry = (event) => {
    this.loadComplexCountryDetails(event.target.value);
    this.loadBasicCountryDetails(event.target.value);
  };

  confirmSelectedCountry = (event) => {
    const targetSelection = document.getElementsByClassName(
      "country-selector__dropdown"
    );
    console.log(targetSelection);
    this.loadComplexCountryDetails(targetSelection.value);
    this.loadBasicCountryDetails(targetSelection.value);
  };

  render() {
    return (
      <>
        <Header />
        <div className="page" id="page">
          <div className="section-header">
            <h2>Where Are You Going? </h2>
          </div>
          <div className="content-wrapper" id="main-selector">
            <div className="country-selector">
              <Selector
                countries={this.state.countries}
                handleSelectedCountry={this.handleSelectedCountry}
                handleRandomCountry={this.handleRandomCountry}
                confirmSelectedCountry={this.confirmSelectedCountry}
              />
            </div>

            {this.state.basicCountryDetails &&
              this.state.complexCountryDetails && (
                <Details
                  basicDetails={this.state.basicCountryDetails}
                  complexDetails={this.state.complexCountryDetails}
                  chosenCountry={this.state.country}
                  handleSelectedCountry={this.handleSelectedCountry}
                />
              )}
          </div>

          {this.state.basicCountryDetails &&
            this.state.complexCountryDetails && (
              <MoreDetails
                basicDetails={this.state.basicCountryDetails}
                complexDetails={this.state.complexCountryDetails}
                chosenCountry={this.state.country}
                handleSelectedCountry={this.handleSelectedCountry}
              />
            )}
          {this.state.basicCountryDetails &&
            this.state.complexCountryDetails && (
              <EvenMoreDetails
                basicDetails={this.state.basicCountryDetails}
                complexDetails={this.state.complexCountryDetails}
                chosenCountry={this.state.country}
                handleSelectedCountry={this.handleSelectedCountry}
              />
            )}

          {this.state.basicCountryDetails && (
            <Weather
              details={this.state.basicCountryDetails}
              chosenCountry={this.state.country}
              handleSelectedCountry={this.handleSelectedCountry}
            />
          )}
        </div>

        <Footer />
      </>
    );
  }
}
