import React, { Component } from "react";
import axios from "axios";
import Itineary from "../../../components/Itineary/Itineary";

export default class MyTrips extends Component {
  state = {
    trips: null,
  };

  componentDidMount() {
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

  render() {
    return (
      <>
        {this.state.trips && (
          <Itineary trips={this.state.trips} getData={this.getAllTrips} />
        )}
      </>
    );
  }
}
