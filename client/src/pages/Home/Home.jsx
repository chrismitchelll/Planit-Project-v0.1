import React, { useState, Component } from "react";
import "./home.scss";
import axios from "axios";
import Selector from "../../components/Selector/Selector";
import Details from "../../components/Details/Details";
import Weather from "../../components/Weather/Weather";
import Inspire from "../../components/Buttons/InspireButton/Inspire";

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
    // this.setState({
    //   complexCountryDetails: event.target.value,
    //   basicCountryDetails: event.target.value,
    // });
    // console.log(
    //   this.state.complexCountryDetails,
    //   "and" + this.state.basicCountryDetails
    // );
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
        <div className="page">
          <h2>Where Are You Going? </h2>
          <div className="content-wrapper">
            <div className="country-selector">
              <Selector
                countries={this.state.countries}
                handleSelectedCountry={this.handleSelectedCountry}
                handleRandomCountry={this.handleRandomCountry}
                confirmSelectedCountry={this.confirmSelectedCountry}
              />
              <Inspire />
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

          {/* {this.state.basicCountryDetails && (
            <Weather
              details={this.state.basicCountryDetails}
              chosenCountry={this.state.country}
              handleSelectedCountry={this.handleSelectedCountry}
            />
          )} */}
          {/* <div className="next-button">Next</div> */}
        </div>
      </>
    );
  }
}

//-------Hooks---------//
// const [setCountry] = useState(false);

// console.log(this.state);

//   handleChange(event) {
//     let value = event.target.value;
//     this.setState({
//         disabled: value == '2'
//     });
// }

// revealName() {
//   // setCountry(countryOptions);
//   // console.log("reveal name");
// }

// setCountry() {
//   // setCountry(countryOptions);
//   console.log(this.country.name);
// }
