import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class SetAnItineary extends Component {
  state = {
    trips: this.props.trips,
    warehouse: null,
    formValid: true,
    warehouseData: null,
    Flights: "",
    Accomodation: "",
    Transportation: "",
    Entertainment: "",
    Meals: "",
    Drinks: "",
    Accomodation: "",
    Expenses: "",
    Unassigned: "",
  };

  componentDidMount() {
    console.log(this.props.trips);
  }

  // getItinearyItem = () => {
  //   axios
  //     .get(`http://localhost:8080/itineary/${this.props.match.params.id}`)
  //     .then((response) => {
  //       console.log(response);
  //       this.setState({
  //         itemName: response.data.itemName,
  //         description: response.data.description,
  //         category: response.data.category,
  //         status: response.data.status,
  //         quantity: response.data.quantity,
  //         warehouse: response.data.warehouseName,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // getWarehouseList = () => {
  //   axios
  //     .get(`http://localhost:8080/warehouses`)
  //     .then((response) => {
  //       console.log(response);
  //       this.setState({
  //         warehouseData: response.data,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // updateItem = (event) => {
  //   if (this.isFormValid()) {
  //     let nameAndId = event.target.warehouse.value.split(" "); //*Takes value target from warehouse drop down
  //     let warehouseID = String(nameAndId.slice(-1)[0]); //*grabs last item in array, always ID
  //     let warehouseNameArr = nameAndId.filter(
  //       (element) => element !== warehouseID
  //     ); //* filters out ID so only warehouse name elements remain
  //     let warehouseName = warehouseNameArr.join(" "); //*adds remaining elements together in a string
  //     axios
  //       .post(
  //         `http://localhost:8080/itineary/${this.props.match.params.id}/${warehouseID}`,
  //         {
  //           warehouseID: warehouseID,
  //           warehouseName: warehouseName,
  //           itemName: event.target.itemName.value,
  //           description: event.target.description.value,
  //           category: event.target.category.value,
  //           status: event.target.status.value,
  //           quantity: String(this.state.quantity),
  //         }
  //       )
  //       .then((response) => {
  //         Swal.fire({
  //           icon: "success",
  //           title: "Success!",
  //           text: "Itineary item has been updated!",
  //           confirmButtonColor: "#2e66e5",
  //         });
  //         this.props.history.push("/itineary");
  //       });
  //   } else {
  //     console.log("else statment");
  //     this.setState({
  //       formValid: false,
  //     });
  //   }
  // };

  isFormValid = () => {
    if (
      this.state.itemName === "" ||
      this.state.description === "" ||
      (this.state.quantity <= 0 && this.state.status === "In Stock") ||
      (this.state.quantity > 0 && this.state.status === "Out Of Stock")
    ) {
      return false;
    }

    return true;
  };

  componentDidMount() {
    // this.getItinearyItem();
    // this.getWarehouseList();
  }

  handleChange = (event) => {
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

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    // this.updateItem(event);
  };

  render() {
    const toBudgetFor = [
      "Flights",
      "Accomodation",
      "Transportation",
      "Entertainment",
      "Tours",
      "Meals",
      "Drinks",
      "Accomodation",
      "Expenses",
      "Cash/Unassigned Money",
    ];

    const toBudgetForMap = toBudgetFor.map((costs) => {
      return {
        costs: costs,
      };
    });

    const budgetCriteria = toBudgetForMap.map((cost) => {
      // console.log(cost);

      return (
        <div>
          <label>
            <h5>{cost.costs}</h5>
          </label>
          <input
            onChange={this.handleChange}
            // className={`${
            //   !this.state.{cost} && !this.state.formValid
            //     ? "edit-itineary__quantity edit-itineary__input--missing"
            //     : "edit-itineary__quantity edit-itineary__input"
            // }`}
            name={cost}
            type="number"
            value={this.state.quantity}
          />
        </div>
      );
    });
    return (
      <div className="page" id="plan">
        <div className="content-wrapper">
          <div className="plan__wrapper">
            <div className="edit-itineary">
              <h1 className="edit-itineary__header">
                <Link to={"/itineary"} className="edit-itineary__back">
                  {/* <img src={arrow} alt="" /> */}
                </Link>
                Track Your Trip
              </h1>
              <form
                name="editItineary"
                onSubmit={this.handleSubmit}
                className="edit-itineary__form"
              >
                <div className="edit-itineary__item-info">
                  <h2>Details</h2>
                  <label>Trip Name</label>
                  <input
                    onChange={this.handleChange}
                    className={`${
                      !this.state.itemName && !this.state.formValid
                        ? "edit-itineary__input--missing"
                        : "edit-itineary__input"
                    }`}
                    placeholder="Item Name"
                    name="itemName"
                    value={`${this.state.itemName}`}
                  />
                  {/* {!this.state.itemName && !this.state.formValid && (
                <ValidationMessage message={"Item Name Required"} />
              )} */}
                  <br></br>
                  <label>Description</label>
                  <textarea
                    onChange={this.handleChange}
                    className={`${
                      !this.state.description && !this.state.formValid
                        ? "edit-itineary__input--missing"
                        : "edit-itineary__input"
                    }`}
                    placeholder="Name Your Trip"
                    name="description"
                    value={`${this.state.description}`}
                  />
                  {/* {!this.state.description && !this.state.formValid && (
                <ValidationMessage message={"Description Required"} />
              )} */}

                  <label>Category</label>
                  <select
                    onChange={this.handleChange}
                    className={`${
                      !this.state.category && !this.state.formValid
                        ? "edit-itineary__input--missing"
                        : "edit-itineary__input"
                    }`}
                    placeholder="Please select"
                    name="category"
                    value={`${this.state.category}`}
                  >
                    <option value="City-Break">City Break</option>
                    <option value="Travels">Travels</option>
                    <option value="Family">Family</option>
                    <option value="Business">Business</option>
                    <option value="Other">Other</option>
                  </select>
                  {/* {!this.state.category && !this.state.formValid && (
                <ValidationMessage message={"Category Required"} />
              )} */}
                </div>
                <label>Date</label>
                <select
                  onChange={this.handleChange}
                  className={`${
                    !this.state.category && !this.state.formValid
                      ? "edit-itineary__input--missing"
                      : "edit-itineary__input"
                  }`}
                  placeholder="Please select"
                  name="dates"
                  value={`${this.state.dates}`}
                >
                  <option value="City-Break">City Break</option>
                  <option value="Travels">Travels</option>
                  <option value="Family">Family</option>
                  <option value="Business">Business</option>
                  <option value="Other">Other</option>
                </select>
                dates
                <div className="edit-itineary__item-availablity">
                  <label htmlFor="">Dates</label>
                  <input
                    type="date"
                    id="start"
                    name="trip-start"
                    value="2022-04-08"
                    min="2022-04-08"
                    max="2099-12-31"
                  ></input>

                  <label>Status</label>
                  <fieldset className="edit-itineary__in-stock" id="status">
                    <input
                      onChange={this.handleChange}
                      type="radio"
                      value="In Stock"
                      name="status"
                      checked={this.state.status === "In Stock"}
                    />

                    <label>In Stock</label>
                    <input
                      onChange={this.handleChange}
                      type="radio"
                      value="Out Of Stock"
                      name="status"
                      checked={this.state.status === "Out Of Stock"}
                    />
                    <label>Out of Stock</label>
                  </fieldset>
                  {/* {this.state.status === "In Stock" &&
                this.state.quantity === 0 &&
                !this.state.formValid && (
                  <ValidationMessage message={"Stock Status Required"} />
                )} */}

                  {this.state.status !== "Out Of Stock" && (
                    <>
                      <label>Travellers</label>
                      <input
                        onChange={this.handleChange}
                        className={`${
                          !this.state.quantity && !this.state.formValid
                            ? "edit-itineary__quantity edit-itineary__input--missing"
                            : "edit-itineary__quantity edit-itineary__input"
                        }`}
                        name="persons"
                        type="number"
                        value={this.state.quantity}
                      />
                      <br></br>
                      <label>Quantity</label>
                      <input
                        onChange={this.handleChange}
                        className={`${
                          !this.state.quantity && !this.state.formValid
                            ? "edit-itineary__quantity edit-itineary__input--missing"
                            : "edit-itineary__quantity edit-itineary__input"
                        }`}
                        name="quantity"
                        type="number"
                        value={this.state.quantity}
                      />
                      {/* {this.state.quantity < 0 && (
                    <ValidationMessage
                      message={"Quantity cannot be less than zero"}
                    />
                  )} */}
                    </>
                  )}
                  {/* {this.state.quantity === 0 &&
                this.state.status === "true" &&
                !this.state.formValid && (
                  <ValidationMessage message={"Quantity Required"} />
                )} */}
                  <label>Warehouse</label>
                  <select
                    onChange={this.handleChange}
                    className={`${
                      !this.state.category && !this.state.formValid
                        ? "edit-itineary__input--missing"
                        : "edit-itineary__input"
                    }`}
                    name="warehouse"
                  >
                    {this.state.warehouseData &&
                      this.state.warehouseData.map((warehouse) => {
                        return (
                          <option
                            key={warehouse.id}
                            value={`${warehouse.name} ${warehouse.id}`}
                            selected={warehouse.name === this.state.warehouse}
                          >{`${warehouse.name}`}</option>
                        );
                      })}
                  </select>
                  {/* {!this.state.category && !this.state.formValid && (
                <ValidationMessage message={"Warehouse Required"} />
              )} */}
                </div>
                <div className="plan__wrapper">
                  Costs<br></br>
                  {budgetCriteria}
                </div>
                <div className="edit-itineary__buttons">
                  <Link className="edit-itineary__cancel-link" to="/plan">
                    <button className="edit-itineary__cancel">Cancel</button>
                  </Link>
                  <button type="submit" className="edit-itineary__add">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
