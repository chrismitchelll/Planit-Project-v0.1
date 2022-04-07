import React, { Component } from "react";
import "./addtrip.scss";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import AddNewTripContainer from "./AddNewTripContainer";

export default class AddTrip extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="page itineary">
          <AddNewTripContainer
          //   match={this.props.match}
          />
        </div>
        <Footer />
      </>
    );
  }
}
