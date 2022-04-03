import React, { Component } from "react";
import axios from "axios";
import "./plan.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Selector from "../../components/Selector/Selector";
import Total from "../../components/Total/Total";
import Conditions from "../../components/Conditions/Conditions";
import EditInventoryItem from "../../components/Itineary/EditInventoryContainer";

export default class Plan extends Component {
  state = {
    countries: null,
    complexCountryDetails: null,
    basicCountryDetails: null,
    noOfPeople: "",
    days: "",
    month: "",
  };

  componentDidMount() {
    this.getAllBasicCountries();
    console.log(this.state.noOfPeople);
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
          <div className="content-wrapper">
            <div className="plan-wrapper">
              <h1>Plan</h1>
              {/* <Converter /> */}
              <div className="infocard-details__wrapper">
                <Selector handleSelectedCountry={this.handleSelectedCountry} />
              </div>
            </div>
            {!this.state.basicCountryDetails &&
              !this.state.complexCountryDetails && (
                <div className="plan-wrapper"></div>
              )}
            {this.state.basicCountryDetails &&
              this.state.complexCountryDetails && (
                <Conditions
                  setNumber={this.setNumber}
                  setMonth={this.state.month}
                  setDays={this.setDays}
                />
              )}
            {!this.state.basicCountryDetails &&
              !this.state.complexCountryDetails &&
              !this.state.complexCountryDetails && (
                <div className="plan-wrapper"></div>
              )}
          </div>
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
        <EditInventoryItem />
        <Footer />
      </>
    );
  }
}
