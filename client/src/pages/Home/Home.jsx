import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import logoIcon from "../../assets/planit.png";
import "./home.scss";

export class Home extends Component {
  state = {
    countries: null,
  };

  render() {
    return (
      <>
        <Header />

        <div className="page" id="welcome-page">
          {/* <Converter /> */}

          <div className="homescreen-wrapper">
            <img src={logoIcon} alt="" srcset="" />
            <p>
              <h3>Plan It. Budget It. Enjoy It.</h3>
              <br></br>Vacations & Travelling create some of our most enjoyable
              moments & memories. Nowadays, booking a vacation is simpler than
              ever before. Which is what we like. <br></br>
              <br></br>A great way to keep vacations as an enjoyable experience
              is to arrive prepared. Preparation is easier said than done at
              times, as every country is different to one another. This makes
              Budgeting for a vacation difficult.<br></br> What isn't always so
              easy for some of us, is budgeting for that next holiday. After
              all, the more you can budget for your vacation, the easier it is
              to start saving for the next one! Being prepared for the little
              things, from which adapters to bring for your plugs, to knowing
              which phone number to dial for help if the worst ever happens.{" "}
              <br></br>Furthermore, arriving prepared is one thing. Arriving
              with knowledge of the country you are visiting can really enhance
              your experience. How do the locals say hi? What's the best dish to
              try, and the most popular beer to drink as you soak up the
              culture? This is where Planit steps in. <br></br>
              <h4>
                This tool has been designed for travellers to prepare themselves
                best for their next trip. And once they are there, enjoy it to
                the maximum!
              </h4>
            </p>
            <div className="button-wrapper">
              <Link to="/main">
                <div className="homescreen-button">
                  <a href="/main">Learn</a>
                </div>
              </Link>
              <Link to="/budget">
                <div className="homescreen-button">
                  <a href="/main">Budget</a>
                </div>
              </Link>
              <Link to="/plan">
                <div className="homescreen-button">
                  <a href="/main">Plan</a>
                </div>
              </Link>
            </div>
          </div>
        </div>
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

export default Home;
