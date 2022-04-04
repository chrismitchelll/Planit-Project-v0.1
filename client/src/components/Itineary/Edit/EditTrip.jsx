import EditTripContainer from "./EditTripContainer";
import React, { Component } from "react";

export default class EditTrip extends Component {
  render() {
    return (
      <div className="page">
        <EditTripContainer
          history={this.props.history}
          match={this.props.match}
        />
      </div>
    );
  }
}
