import React, { useState, Component } from "react";
import "./home.scss";
import axios from "axios";
import Selector from "../Selector/Selector";
import Details from "../Details/Details";

export default class Home extends Component {
  state = {
    countries: null,
    // countryDetails: null,
    chosenCountryDetails: null,
    userCountry: null,
    oneCountry: null,
    selectedCountry: null,
  };

  componentDidMount() {
    this.getAllCountries();
    this.getChosenCountryDetails();
    this.getOneCountry();
  }

  componentDidUpdate() {
    console.log("countries" + " = ", this.state.countries);
    // console.log("countryDetails" + " = ", this.state.countryDetails);
    console.log(
      "chosenCountryDetails" + " = ",
      this.state.chosenCountryDetails
    );
    // console.log("userCountry" + " = ", this.state.userCountry);
    // console.log("oneCountry" + " = ", this.state.oneCountry);
    this.getSpecificCountry();
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

  getOneCountry = () => {
    axios
      .get(`https://www.placesapi.dev/api/v1/countries/AD`)
      .then((response) => {
        this.setState({ oneCountry: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  getChosenCountryDetails = () => {
    axios
      .get(`https://travelbriefing.org/Czech?format=json`)
      .then((response) => {
        this.setState({ chosenCountryDetails: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  getSpecificCountry = () => {
    axios
      .get(
        `https://travelbriefing.org/` +
          `${this.state.countries}` +
          `?format=json`
      )
      .then((response) => {
        this.setState({ chosenCountryDetails: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
    // axios
    //   .get(
    //     `https://restcountries.com/v3.1/name/` +
    //       `${this.state.countries}` +
    //       `?fields=capital`
    //   )
    //   .then((response) => {
    //     console.log(response);
    //   });
  };

  handleSelectedCountry = (event) => {
    this.setState({
      // [event.target.name]: event.target.value,
      countries: event.target.value,
      countryDetails: event.target.value,
    });
  };

  // countries = ["Italy", "Greece", "France", "Serbia", "Luxembourg"];

  handleRandomCountry = () => {
    this.setState({
      countries: "Italy",
      countryDetails: "Italy",
    });
  };

  render() {
    return (
      <>
        <div className="page">
          <h2>Where Are You Going? </h2>
          <div className="content-wrapper">
            {/* {this.state.countries && ( */}
            <Selector
              countries={this.state.countries}
              oneCountry={this.oneCountry}
              handleSelectedCountry={this.handleSelectedCountry}
              handleRandomCountry={this.handleRandomCountry}
            />
            {/* )
            } */}
            {this.state.chosenCountryDetails && this.state.oneCountry && (
              // {this.oneCountry}.map((oneCountry) => {
              //   return (
              <Details
                details={this.state.chosenCountryDetails}
                oneCountry={this.state.oneCountry}
                chosenCountry={this.state.country}
                handleSelectedCountry={this.handleSelectedCountry}
              />
            )}
          </div>
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
