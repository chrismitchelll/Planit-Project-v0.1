import React, { Component } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";

export class ShowItineary extends Component {
  state = {
    show: false,
    trips: this.props.tripsObject,
  };

  render() {
    // console.log(this.state.trips);

    return (
      <>
        <div className="table-row__column">
          <div className="row-1 mobile">
            <div>
              <h3>Trip</h3>
            </div>
            Name: {this.props.trips.name}
            Cost: {this.props.trips.cost}
            Date: {this.props.trips.date}
            <Link id="flex" to={`/trips/details/${this.state.currentID}`}>
              View
            </Link>
            <Link to={`/trips/edit/${this.state.currentID}`}>
              <span>Edit</span>
              {/* <img src={editIcon} alt="Edit-Icon" /> */}
            </Link>
            <div className="row-5 mobile">
              <button
                alt="Delete-Icon"
                id="row5"
                onClick={() => {
                  this.setState({ show: true });
                }}
              >
                Delete{" "}
              </button>
              <Modal
                onClose={() => {
                  this.setState({ show: false });
                }}
                type="warehouse"
                show={this.state.show}
                objectID={this.state.currentID}
                // objectName={this.props.warehouses.name}
                getData={this.props.getData}
              />
            </div>
            <br></br>
          </div>
        </div>
      </>
    );
  }
}

export default ShowItineary;
