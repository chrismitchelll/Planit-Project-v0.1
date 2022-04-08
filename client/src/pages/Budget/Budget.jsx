import React, { useState, Component } from "react";
import Selector from "../../components/Selector/Selector";
import Budgeter from "../../components/Budgeter/Budgeter";
import Costs from "../../components/Costs/Costs";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Tips from "../../components/Tips/BudgetTips";
import BYT from "../../assets/bytlogo.png";

import "./budget.scss";
import axios from "axios";

export default class Budget extends Component {
  state = {
    countries: null,
    complexCountryDetails: null,
    basicCountryDetails: null,
    budgetLevel: null,
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

  handleSelectedBudget = (event) => {
    const budgetNumber = parseFloat(event.target.value);
    this.setState({ budgetLevel: budgetNumber });
  };

  //could combine called functiosn into 1.
  handleSelectedCountry = (event) => {
    this.loadComplexCountryDetails(event.target.value);
    this.loadBasicCountryDetails(event.target.value);
  };

  render() {
    return (
      <>
        <Header />

        <div className="page">
          <div className="section-header">
            <h1>Budget </h1>
          </div>

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
            </div>
          </div>
          <div className="content-wrapper">
            <div className="country-selector">
              {this.state.countries && (
                <Selector
                  basicDetails={this.state.basicCountryDetails}
                  complexDetails={this.state.complexCountryDetails}
                  countries={this.state.countries}
                  handleSelectedCountry={this.handleSelectedCountry}
                />
              )}

              {this.state.countries && (
                <Budgeter
                  budget={this.state.budgetLevel}
                  handleSelectedBudget={this.handleSelectedBudget}
                />
              )}
            </div>

            {this.state.basicCountryDetails &&
              this.state.complexCountryDetails &&
              this.state.budgetLevel && (
                <Costs
                  basicDetails={this.state.basicCountryDetails}
                  complexDetails={this.state.complexCountryDetails}
                  handleSelectedCountry={this.handleSelectedCountry}
                  budget={this.state.budgetLevel}
                />
              )}
          </div>
        </div>
        <div className="page">
          <div className="content-wrapper">
            <div className="budget-background">
              <h2>Behind the Data</h2>
              <div className="budget-background__section">
                Planit allows users to view typical and average travel costs for
                thousands of cities and hundreds of countries around the world
                to help you plan your next trip's budget. All of the average
                travel costs and budgets come from real travelers, with some
                help from Budget Your Trip.
              </div>
              {/* <div>
              <h3>Data</h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              veniam voluptas repellat cumque doloribus dolore omnis sit minus
              ea atque.
            </div> */}
              <div className="budget-background__section">
                <h3>Why a BigMac Index?</h3>
                The Big Mac index refers to the cost of a burger in McDonald's
                network. Every BigMac sold requires meat, vegetables, cheese,
                bread and other foods. It also includes the cost of renting
                space and equipment, labor, and other factors.<br></br> If the
                price of a Big Mac is lower, then we can say that the overall
                prices in that country are relatively low, even if the higher
                prices are relatively high.
              </div>
            </div>
          </div>
        </div>
        <div className="page" id="sub-page">
          <Tips />
        </div>
        <div className="page">{/* <Itineary /> */}</div>

        <Footer />
      </>
    );
  }
}
