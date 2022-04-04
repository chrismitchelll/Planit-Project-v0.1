import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
// import arrow from "../../assets/icons/arrow-back-24px.svg";
// import ValidationMessage from "../../components/ValidationMessage/ValidationMessage";
// import Swal from "sweetalert2/dist/sweetalert2.js";
// import "sweetalert2/src/sweetalert2.scss";

export default class EditTrip extends Component {
  state = {
    name: "",
    cost: "",
    date: "",
    formValid: true,
  };

  getTripData = () => {
    axios
      .get(`http://localhost:8888/trips/2966c286-16cd-4d43-ab67-c79f698aeab0`)
      // .get(`http://localhost:8888/trips/${this.props.match.params.warehouseId}`)
      .then((response) => {
        console.log(response);
        this.setState({
          name: response.data.name,
          cost: response.data.cost,
          date: response.data.date,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getTripData();
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  isFormValid = () => {
    if (
      this.state.name === "" ||
      this.state.cost === "" ||
      this.state.date === ""
    ) {
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    console.log("hey");
    event.preventDefault();
    if (this.isFormValid()) {
      axios
        .post(
          `http://localhost:8888/trips/2966c286-16cd-4d43-ab67-c79f698aeab0`,
          // `http://localhost:8888/trips/${this.props.match.params.tripId}`,
          {
            name: event.target.name.value,
            cost: event.target.cost.value,
            date: event.target.date.value,
          }
        )
        .then((response) => {
          alert("Updated successfully");
          this.props.history.push("/plan");
        });
    } else {
      alert("unsuccessful");
      this.setState({
        formValid: false,
      });
    }
  };

  render() {
    return (
      <>
        {/* <Header /> */}
        <div className="edit-warehouse">
          <h1 className="edit-warehouse__header">
            <Link to={`/plan`} className="edit-warehouse__back">
              {/* <img src={arrow} alt="" /> */}
            </Link>
            Edit Trip
          </h1>
          <form
            name="addWarehouse"
            onSubmit={this.handleSubmit}
            className="edit-warehouse__form"
          >
            <div className="edit-warehouse__form-elements">
              <div className="edit-warehouse__warehouse-info">
                <h2 className="edit-warehouse__section-header">Trip Details</h2>
                <label>Trip Name</label>
                <input
                  onChange={this.handleChange}
                  className={`${
                    !this.state.name && !this.state.formValid
                      ? "edit-warehouse__input--missing"
                      : "edit-warehouse__input"
                  }`}
                  value={`${this.state.name}`}
                  name="name"
                />
                {this.state.name === "" &&
                  !this.state.formValid &&
                  console.log("incomplete")}
                <label>Estimated Budget</label>
                <input
                  onChange={this.handleChange}
                  className={`${
                    !this.state.streetAdress && !this.state.formValid
                      ? "edit-warehouse__input--missing"
                      : "edit-warehouse__input"
                  }`}
                  value={`${this.state.cost}`}
                  name="cost"
                />
                {/* {this.state.cost === "" && !this.state.formValid && (
                <ValidationMessage message={"Estimated Budget Required"} />
              )} */}

                <label>date</label>
                <input
                  type="date"
                  onChange={this.handleChange}
                  className={`${
                    !this.state.date && !this.state.formValid
                      ? "edit-warehouse__input--missing"
                      : "edit-warehouse__input"
                  }`}
                  value={`${this.state.date}`}
                  name="date"
                />
                {/* {this.state.date === "" && !this.state.formValid && (
                <ValidationMessage message={"date Required"} />
              )} */}
              </div>
            </div>

            <div className="edit-warehouse__buttons">
              <Link className="add-warehouse__cancel-link" to="/plan">
                <button className="add-warehouse__cancel">Cancel</button>
              </Link>
              <button type="submit" className="edit-warehouse__add">
                Save
              </button>
            </div>
          </form>
        </div>
        {/* <Footer /> */}
      </>
    );
  }
}
