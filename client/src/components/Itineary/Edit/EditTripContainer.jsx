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
    country: "",
    date: "",
    formValid: true,
  };

  getTripData = () => {
    console.log(this.props.match.params.id);
    axios
      //  .get(`http://localhost:8888/trips/2966c286-16cd-4d43-ab67-c79f698aeab0`)
      .get(`http://localhost:8888/trips/${this.props.match.params.tripsId}`)
      .then((response) => {
        console.log(response);
        this.setState({
          name: response.data.name,
          country: response.data.country,
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
    console.log(event.target.value);
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
          // `http://localhost:8888/trips/2966c286-16cd-4d43-ab67-c79f698aeab0`,
          `http://localhost:8888/trips/${this.props.match.params.tripsId}`,
          {
            name: event.target.name.value,
            country: event.target.country.value,
            cost: event.target.cost.value,
            date: event.target.date.value,
          }
        )
        .then((response) => {
          alert("Updated successfully");
          this.props.history.push("/plan/trips");
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
        <div className="itineary">
          <h1 className="itineary__header">
            <Link to={`/plan`} className="itineary__back">
              {/* <img src={arrow} alt="" /> */}
            </Link>
            Edit Trip
          </h1>
          <form
            name="additineary"
            onSubmit={this.handleSubmit}
            className="itineary__form"
          >
            <div className="itineary__form-elements">
              <div className="itineary__itineary-info">
                <h2 className="itineary__section-header">Trip Details</h2>
                <label>Trip Name</label>
                <input
                  onChange={this.handleChange}
                  className={`${
                    !this.state.name && !this.state.formValid
                      ? "edit-itineary__input--missing"
                      : "edit-itineary__input"
                  }`}
                  value={`${this.state.name}`}
                  name="name"
                />
                {this.state.name === "" &&
                  !this.state.formValid &&
                  console.log("incomplete")}
                <label>Destination</label>
                <input
                  onChange={this.handleChange}
                  className={`${
                    !this.state.streetAdress && !this.state.formValid
                      ? "edit-itineary__input--missing"
                      : "edit-itineary__input"
                  }`}
                  value={`${this.state.country}`}
                  name="country"
                />
                {this.state.name === "" &&
                  !this.state.formValid &&
                  console.log("incomplete")}
                <label>Estimated Budget</label>
                <input
                  onChange={this.handleChange}
                  className={`${
                    !this.state.streetAdress && !this.state.formValid
                      ? "edit-itineary__input--missing"
                      : "edit-itineary__input"
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
                      ? "edit-itineary__input--missing"
                      : "edit-itineary__input"
                  }`}
                  value={`${this.state.date}`}
                  name="date"
                />
                {/* {this.state.date === "" && !this.state.formValid && (
                <ValidationMessage message={"date Required"} />
              )} */}
              </div>
            </div>

            <div className="itineary__buttons">
              <Link className="itineary__buttons__cancel-link" to="/plan">
                <button className="itineary__buttons__cancel">Cancel</button>
              </Link>
              <button type="submit" className="itineary__add">
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
