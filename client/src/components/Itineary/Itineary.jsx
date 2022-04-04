import React, { Component } from "react";
import { Route } from "react-router-dom";
import ShowItineary from "./ShowItineary";
import EditTrip from "./Edit/EditTrip";
import "./itineary.scss";

const Intineary = ({ trips, getData }) => {
  console.log(trips);
  trips.map((trips) => {
    return <ShowItineary trips={trips} />;
  });

  return (
    <>
      <div className="testbox">
        <h2>Current Trips</h2>

        <Route
          // path="/warehouses/edit/:warehouseId"
          render={(routerProps) => <EditTrip {...routerProps} />}
        />

        <h2>Current Trips</h2>
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
    </>
  );
};

export default Intineary;
