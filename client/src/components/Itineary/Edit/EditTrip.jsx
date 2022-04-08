import EditTripContainer from "./EditTripContainer";
import React, { Component } from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";

export default class EditTrip extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="page itineary">
          <EditTripContainer
            history={this.props.history}
            match={this.props.match}
          />
        </div>
        <Footer />
      </>
    );
  }
}
