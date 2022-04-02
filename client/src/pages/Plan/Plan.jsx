import React, { Component } from "react";
import axios from "axios";
import "./plan.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Selector from "../../components/Selector/Selector";
import Total from "../../components/Total/Total";
import Conditions from "../../components/Conditions/Conditions";

export default class Plan extends Component {
  state = {
    countries: null,
    complexCountryDetails: null,
    basicCountryDetails: null,
    multiple: "",
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

  setNumber = (event) => {
    this.setState({ multiple: event.target.value });
    console.log(this.state.multiple);
  };

  render() {
    return (
      <>
        <Header />
        <div className="page" id="plan">
          <div className="content-wrapper">
            <div className="plan-wrapper">
              <h1>Plan</h1>
              {/* <Converter /> */}
              <div className="infocard-details__wrapper">
                <Selector handleSelectedCountry={this.handleSelectedCountry} />
              </div>
            </div>
            <Conditions setNumber={this.setNumber} />

            {this.state.basicCountryDetails &&
              this.state.complexCountryDetails && (
                <Total
                  multiple={this.state.basicCountryDetails.multiple}
                  basicDetails={this.state.basicCountryDetails}
                  complexDetails={this.state.complexCountryDetails}
                />
              )}
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
