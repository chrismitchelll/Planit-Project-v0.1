import React, { Component } from "react";
import { Link } from "react-router-dom";
import ShowItineary from "./ShowItineary";
import EditTrip from "./Edit/EditTrip";
import "./itineary.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Itineary from "../../components/Itineary/Itineary";

const Intineary = ({ trips, getData }) => {
  return (
    <>
      <div className="content-wrapper">
        <div className="planning-wrapper">
          <div className="trip-container__top">
            <div className="add-new">
              <Link to={`/plan/add/`}>
                <div className="trip-container__button" id="hidden">
                  + Add New Trip
                </div>
              </Link>
            </div>

            <h2>Current Trips</h2>
            <div className="add-new">
              <Link to={`/plan/add/`}>
                <div className="trip-container__button">+ Add New Trip</div>
              </Link>
            </div>
          </div>
          <div className="trip-container__main">
            {trips.map((tripsObject) => {
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
    </>
  );
};

export default Intineary;
