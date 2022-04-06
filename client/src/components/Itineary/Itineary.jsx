import React, { Component } from "react";
import { Link } from "react-router-dom";
import ShowItineary from "./ShowItineary";
import EditTrip from "./Edit/EditTrip";
import "./itineary.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Itineary from "../../components/Itineary/Itineary";

const Intineary = ({ trips, getData }) => {
  // console.log(trips);
  // trips.map((trips) => {
  //   return <ShowItineary trips={trips} />;
  // });

  // const getTrips = () => {
  //   if (this.props.complexDetails.nationalgetAnimal) {
  //     return this.props.complexDetails.nationalgetAnimal;
  //   } else {
  //     return "No Trips to Display";
  //   }
  // };

  return (
    <>
      <Header />
      <div className="page">
        <div className="planning-wrapper">
          <div className="trip-container__top">
            <div id="blank"></div>

            <h2>Current Trips</h2>
            <div className="add-new">
              <Link to={`/plan/add/`}>
                <div className="trip-container__button">+ Add New Trip</div>{" "}
              </Link>
            </div>
          </div>{" "}
          <div className="trip-container__main">
            {trips.map((tripsObject) => {
              console.log(tripsObject.id);
              return (
                <ShowItineary
                  getData={getData}
                  trips={tripsObject}
                  key={tripsObject.id}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Intineary;
