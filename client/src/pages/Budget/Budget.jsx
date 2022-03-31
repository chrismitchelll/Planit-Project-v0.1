import React, { useState, Component } from "react";
import Selector from "../../components/Selector/Selector";
import Costs from "../../components/Costs/Costs";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./budget.scss";
import axios from "axios";

export default class Budget extends Component {
  state = {
    countries: null,
    countryDetails: null,
    chosenCountryDetails: null,
    userCountry: null,
  };
  //Part One. //triggered on first page load
  componentDidMount() {
    this.getAllCountries();
    this.getACountry();
  }

  componentDidUpdate() {
    console.log("countries" + " = ", this.state.countries);
    console.log("countryDetails" + " = ", this.state.countryDetails);
    console.log(
      "chosenCountryDetails" + " = ",
      this.state.chosenCountryDetails
    );
    console.log("userCountry" + " = ", this.state.userCountry);
  }

  getAllCountries = () => {
    axios
      .get(`https://travelbriefing.org/countries.json`)
      .then((response) => {
        this.setState({ countries: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  getACountry = () => {
    axios
      .get(`https://travelbriefing.org/Czech?format=json`)
      .then((response) => {
        this.setState({ chosenCountryDetails: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleSelectedCountry = (event) => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
      countries: event.target.value,
      countryDetails: event.target.value,
    });
  };

  render() {
    return (
      <>
        <Header />
        <div className="page">
          <h2>Budget </h2>
          <div className="content-wrapper">
            {this.state.countries && (
              <Selector
                countries={this.state.countries}
                handleSelectedCountry={this.handleSelectedCountry}
              />
            )}
            {this.state.chosenCountryDetails && (
              <Costs
                details={this.state.chosenCountryDetails}
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
