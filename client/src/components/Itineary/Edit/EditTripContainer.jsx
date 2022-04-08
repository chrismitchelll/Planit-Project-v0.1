import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import arrow from "../../../assets/icons/arrow-back-24px.svg";
import Arrow from "../../../components/Arrow/Arrow";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
// Author's Note -- Will add below in phase 2
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
    axios
      //  .get(`http://localhost:8888/trips/2966c286-16cd-4d43-ab67-c79f698aeab0`)
      .get(`http://localhost:8888/trips/${this.props.match.params.tripsId}`)
      .then((response) => {
        this.setState({
          name: response.data.name,
          country: response.data.country,
          cost: response.data.cost,
          date: response.data.date,
        });
      })
      .catch((error) => {});
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
        <Header />
        <div className="page itineary">
          <div className="add-itineary__wrapper">
            <div className="add-itineary">
              <div className="section-header">
                <h1>Edit Trip </h1>
              </div>
              <div className="add-itineary__form--body">
                <Link to={`/plan`} className="itineary__back">
                  {/* <img src={arrow} alt="back arrow" /> */}
                  <Arrow />
                </Link>

                <form
                  name="additineary"
                  onSubmit={this.handleSubmit}
                  className="itineary__form"
                >
                  <div className="add-itineary__form--elements">
                    <div className="add-itineary__item--info">
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
                      <div className="add-itineary__item--info">
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
                      </div>
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

                  <div className="add-itineary__buttons">
                    <Link className="add-itineary__cancel-link" to="/plan/">
                      <button className="add-itineary__cancel">Cancel</button>
                    </Link>
                    <button type="submit" className="add-itineary__add">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
