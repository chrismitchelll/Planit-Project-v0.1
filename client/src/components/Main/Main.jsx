import React, { Component } from "react";
import axios from "axios";
import Header from "../Header/Header";
import Home from "../../pages/Home/Home";
import Footer from "../Footer/Footer";

const Briefing_API = `https://travelbriefing.org/`;

export class Main extends Component {
  state = {
    countries: null,
  };

  // Part One. //triggered on first page load
  componentDidMount() {
    this.getAllBasicCountries();
  }

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

  getAllBudget = () => {
    axios
      .get(`http://localhost:8888/countries`)
      .then((response) => {
        console.log(response);
        this.setState({
          budgetCountries: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <>
        <Header />
        {this.state.countries && (
          <Home
            getData={this.getAllBasicCountries}
            basicCountries={this.state.countries}
          />
        )}
        <Footer />
        {/* <Footer /> */}
      </>
    );
  }
}

export default Main;
