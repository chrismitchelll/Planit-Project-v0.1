import React, { useState, Component } from "react";
import Selector from "../../components/Selector/Selector";
import Costs from "../../components/Costs/Costs";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BYT from "../../assets/bytlogo.png";

import "./budget.scss";
import axios from "axios";

export default class Budget extends Component {
  state = {
    countries: null,
    complexCountryDetails: null,
    basicCountryDetails: null,
  };

  componentDidMount() {
    this.getAllBasicCountries();
  }

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

  render() {
    return (
      <>
        <Header />

        <div className="page">
          <h2>Budget </h2>
          <div className="budget-overview">
            <p>
              Calculating a budget for a trip can be complicated. Here are some
              tips to help you to estimate how much you may spend on your
              vacation. These estimates are Per person.
            </p>
            <div className="budgetyourtrip-banner">
              Powered by: <img src={BYT}></img> <br></br>
              <span className="budgetyourtrip-banner__text">
                Budget Your Trip
              </span>
            </div>{" "}
          </div>
          <div className="content-wrapper">
            <div className="country-selector">
              {this.state.countries && (
                <Selector
                  countries={this.state.countries}
                  handleSelectedCountry={this.handleSelectedCountry}
                />
              )}
            </div>
            {this.state.basicCountryDetails &&
              this.state.complexCountryDetails && (
                <Costs
                  basicDetails={this.state.basicCountryDetails}
                  complexDetails={this.state.complexCountryDetails}
                  handleSelectedCountry={this.handleSelectedCountry}
                />
              )}
          </div>
          <div className="next-button">Next</div>
        </div>
        <Footer />
      </>
    );
  }
}
