import React, { Component } from "react";
import axios from "axios";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";

const Briefing_API = `https://travelbriefing.org/`;

export class Main extends Component {
  state = {
    countries: null,
    // countryDetails: null,
  };

  //Part One. //triggered on first page load
  componentDidMount() {
    this.getAllCountries();
  }

  getAllCountries = () => {
    axios
      .get(`https://travelbriefing.org/countries.json`)
      // .get(`http://localhost:8888/countries.json`)
      .then((response) => {
        this.setState({ countries: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <>
        <Header />
        {/* <Foot2 /> */}
        {this.state.countries && (
          <Home
            getData={this.getAllCountries}
            countries={this.state.countries}
          />
        )}
        <Footer />
        {/* <Footer /> */}
      </>
    );
  }
}

export default Main;
