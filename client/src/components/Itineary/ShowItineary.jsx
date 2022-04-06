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
              {/* <img src={editIcon} alt="Edit-Icon" /> */}
            </Link>
            <h4>{this.props.trips.name}</h4>
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
            <h4>Destination: </h4> {this.props.trips.country}
            <br></br>
          </div>
          <div className="trip-summary__row">
            <h4>Projected Cost: </h4> {this.props.trips.cost}
            <br></br>
          </div>
          <div className="trip-summary__row">
            <h4>Date: </h4> {this.props.trips.date}
          </div>
          {/* <Link id="flex" to={`/trips/details/${this.state.currentID}`}>
              View
            </Link> */}
          <br></br>
        </span>
      </>
    );
  }
}

export default ShowItineary;
