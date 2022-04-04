import React, { Component } from "react";
import axios from "axios";
import Main from "../../pages/Main/Main";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import logoIcon from "../../assets/planit.png";
export class Home extends Component {
  state = {
    countries: null,
  };

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
        Home
        <img src={logoIcon} alt="" srcset="" />
        {/* {this.state.countries && (
          <Main
            getData={this.getAllBasicCountries}
            basicCountries={this.state.countries}
          />
        )} */}
        <Footer />
      </>
    );
  }
}

export default Main;
