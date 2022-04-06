import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class AddNewitineary extends Component {
  state = {
    // itemName: null,
    // description: null,
    // category: null,
    // status: null,
    // quantity: null,
    // warehouse: null,
    // formValid: true,
    // warehouseData: null,
  };

  componentDidMount() {
    axios
      .get(`http://localhost:8888/trips`)
      .then((response) => {
        console.log(response);
        this.setState({
          warehouseData: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleChange = (event) => {
    console.log("handleChange");
    if (
      event.target.name === "status" &&
      event.target.value === "Out Of Stock"
    ) {
      this.setState({
        quantity: 0,
      });
    }
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  resetState = () => {
    console.log("reset state");
    this.setState({
      itemName: null,
      description: null,
      category: null,
      status: null,
      quantity: null,
      warehouse: null,
      formValid: true,
      warehouseData: null,
    });
  };

  isFormValid = () => {
    if (
      !this.state.tripName ||
      !this.state.tripDate ||
      !this.state.tripCost ||
      !this.state.tripDestination
      // (this.state.quantity <= 0 && this.state.status === "In Stock") ||
      // (this.state.quantity > 0 && this.state.status === "Out Of Stock")
    ) {
      console.log("invalid form");
      alert("Please fill out all fields");
      return false;
    }
    console.log("valid form");
    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.isFormValid()) {
      axios
        .post(`http://localhost:8888/trips`, {
          id: "uuidv4",
          name: event.target.tripName.value,
          cost: event.target.tripCost.value,
          date: event.target.tripDate.value,
          country: event.target.tripDestination.value,
        })
        .then((response) => {
          console.log(response);
          alert("Trip Added");
          event.target.reset();
          this.resetState();
        });
      this.setState({ formValid: false });
    } else {
      this.setState({
        formValid: false,
      });
    }
  };

  render() {
    return (
      <div className="add-itineary">
        <Link to={"/plan"} className="add-itineary__back">
          <span>[Arrow]</span>
        </Link>

        <form
          name="additineary"
          onSubmit={this.handleSubmit}
          className="add-itineary__form"
        >
          <div className="add-itineary__form-elements">
            <div className="add-itineary__item-info">
              <label>Trip Name</label>
              <br></br>
              <input
                onChange={this.handleChange}
                className={`${
                  !this.state.itemName && !this.state.formValid
                    ? "add-itineary__input--missing"
                    : "add-itineary__input"
                }`}
                placeholder="Trip Name"
                name="tripName"
                autoComplete="off"
              />
            </div>
            <div className="add-itineary__item-info">
              <label>Destination</label>
              <br></br>
              <input
                onChange={this.handleChange}
                className={`${
                  !this.state.itemName && !this.state.formValid
                    ? "add-itineary__input--missing"
                    : "add-itineary__input"
                }`}
                placeholder="Destination Name"
                name="tripDestination"
                autoComplete="off"
              />
            </div>
            <div className="add-itineary__item-info">
              <label>Estimated Trip Cost</label>
              <br></br>
              <input
                onChange={this.handleChange}
                className={`${
                  !this.state.itemName && !this.state.formValid
                    ? "add-itineary__input--missing"
                    : "add-itineary__input"
                }`}
                placeholder="Estimate Your Trip Costs"
                name="tripCost"
                autoComplete="off"
              />
            </div>
            <div className="add-itineary__item-info">
              <label>Start Date</label>
              <br></br>
              <input
                onChange={this.handleChange}
                className={`${
                  !this.state.itemName && !this.state.formValid
                    ? "add-itineary__input--missing"
                    : "add-itineary__input"
                }`}
                type="date"
                placeholder="Item Name"
                name="tripDate"
                min="2022 - 04 - 09"
              />
            </div>
          </div>

          <div className="add-itineary__buttons">
            <Link className="add-itineary__cancel-link" to="/plan/trips">
              <button className="add-itineary__cancel">Cancel</button>
            </Link>
            <button type="submit" className="add-itineary__add">
              +Add Item
            </button>
          </div>
        </form>
      </div>
    );
  }
}
