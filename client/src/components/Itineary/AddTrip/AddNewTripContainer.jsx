import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class AddNewInventory extends Component {
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
    // if (
    //   !this.state.itemName ||
    //   !this.state.description ||
    //   !this.state.category ||
    //   !this.state.status ||
    //   !this.state.warehouse ||
    //   (this.state.quantity <= 0 && this.state.status === "In Stock") ||
    //   (this.state.quantity > 0 && this.state.status === "Out Of Stock")
    // ) {
    //   console.log("invalid form");
    //   return false;
    // }
    console.log("valid form");
    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault(); // if (this.isFormValid())
    axios
      .post(`http://localhost:8888/trips`, {
        id: "uuidv4",
        name: "Trip to Mars",
        cost: "$500,000,000,000",
        date: "2029-04-01",
        country: "None",
        contact: {
          name: "Elon Musk",
          position: "CEO",
          phone: "+1 (646) 123-1234",
          email: "elon@spacex.com",
        },
      })
      .then((response) => {
        console.log(response);
        event.target.reset();
        this.resetState();
      });
  };

  render() {
    return (
      <div className="add-inventory">
        <h1 className="add-inventory__header">
          <Link to={"/inventory"} className="add-inventory__back">
            <span>[Arrow]</span>
          </Link>
          Add New Trip
        </h1>
        <form
          name="addInventory"
          onSubmit={this.handleSubmit}
          className="add-inventory__form"
        >
          <div className="add-inventory__form-elements">
            <div className="add-inventory__item-info">
              <h2 className="add-inventory__section-header">Item Details</h2>
              <label>Item Name</label>
              <input
                onChange={this.handleChange}
                className={`${
                  !this.state.itemName && !this.state.formValid
                    ? "add-inventory__input--missing"
                    : "add-inventory__input"
                }`}
                placeholder="Item Name"
                name="itemName"
              />
            </div>
          </div>

          <div className="add-inventory__buttons">
            <Link className="add-inventory__cancel-link" to="/inventory">
              <button className="add-inventory__cancel">Cancel</button>
            </Link>
            <button type="submit" className="add-inventory__add">
              +Add Item
            </button>
          </div>
        </form>
      </div>
    );
  }
}
