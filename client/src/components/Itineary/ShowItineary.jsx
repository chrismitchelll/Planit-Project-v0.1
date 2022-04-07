import React, { Component } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal/Modal";
import Delete from "../../assets/icons/remove.png";
import Edit from "../../assets/icons/edit.png";

export class ShowItineary extends Component {
  state = {
    show: false,
    currentID: this.props.trips.id,
  };

  render() {
    return (
      <>
        <span className="trip-summary">
          <div className="trip-summary__title">
            <Link to={`/plan/trips/edit/${this.state.currentID}`}>
              <span>
                <img src={Edit} alt="Edit-Icon" id="edit-icon" />
              </span>
            </Link>
            <h3>{this.props.trips.name}</h3>
            <img
              src={Delete}
              alt="Delete-Icon"
              id="delete-icon"
              onClick={() => {
                this.setState({ show: true });
              }}
            />
            <Modal
              onClose={() => {
                this.setState({ show: false });
              }}
              type="trip"
              show={this.state.show}
              objectID={this.state.currentID}
              objectName={this.props.trips.name}
              getData={this.props.getData}
            />
          </div>

          <div className="trip-summary__row">
            <h3>Destination: </h3> {this.props.trips.country}
            <br></br>
          </div>
          <div className="trip-summary__row">
            <h3>Projected Cost: </h3> {this.props.trips.cost}
            <br></br>
          </div>
          <div className="trip-summary__row">
            <h3>Date: </h3> {this.props.trips.date}
          </div>
        </span>
      </>
    );
  }
}

export default ShowItineary;
