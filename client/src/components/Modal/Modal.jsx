// import React from "react";
// import "./modal.scss";
// import axios from "axios";

import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Modal extends Component {
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

// const Modal = ({ onClose, show, objectID, getData, objectName, type }) => {
//   // FUNCTION TO DELETE WAREHOUSE FROM API
//   const deleteTripAPI = async (id) => {
//     try {
//       const deletedWarehouse = await axios.delete(
//         `http://localhost:8888/trips/${id}`
//       );
//       getData();
//       console.log(deletedWarehouse);
//     } catch (err) {
//       console.log(`ERROR: ${err}`);
//     }
//   };

//   const deleteHandler = (event) => {
//     event.preventDefault();
//     console.log(objectID, "objectID through props");
//     deleteTripAPI(objectID);
//     onClose();
//   };

//   if (!show) {
//     return null;
//   }
//   return (
//     <aside className="modal" onClick={onClose}>
//       <section
//         className="modal__container"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="modal__close">
//           {/* <img
//             className="modal__icon"
//             src={closeIcon}
//             alt="close icon"
//             // onClick={onClose}
//           /> */}
//           Close
//         </div>
//         <div className="modal__header">
//           <h1 className="modal__title">{`Delete ${objectName} ${type}?`}</h1>
//           {type === "inventory" ? (
//             <h1 className="modal__title">{`Delete ${objectName} ${type} item?`}</h1>
//           ) : null}
//         </div>
//         <article className="modal__content">
//           {`Please confirm that you'd like to delete ${objectName} from the list of ${type}s.`}
//           <br></br>
//           {`This action cannot be undone.`}
//         </article>
//         <div className="modal__footer">
//           <button onClick={onClose} className="modal__cancel">
//             Cancel
//           </button>
//           <button onClick={deleteHandler} className="modal__delete">
//             Delete
//           </button>
//         </div>
//       </section>
//     </aside>
//   );
// };

// export default Modal;
