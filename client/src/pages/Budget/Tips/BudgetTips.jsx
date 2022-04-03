import React, { Component } from "react";
import "./tips.scss";

export default class Tips extends Component {
  render() {
    return (
      <>
        <div className="section-header">
          <h3>Budgeting Tips</h3>
        </div>
        <div className="content-wrapper budget-links__wrapper">
          <div className="budget-overview">
            <div className="budget-overview__summary">
              <p>
                Budget Tips Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Sequi alias adipisci dolorum nesciunt temporibus facere
                laudantium aperiam asperiores dolore vel?
              </p>
            </div>
            <div className="infocard-newslink__wrapper">
              <div className="card-newslink">
                <span className="title">
                  <h4>Name of Country</h4>
                </span>
                <span className="value">Lorem ipsum dolor sit amet.</span>
              </div>
              <div className="card-newslink">
                <span className="title">
                  <h4>Name of Country</h4>
                </span>
                <span className="value">Lorem ipsum dolor sit amet.</span>
              </div>
              <div className="card-newslink">
                <span className="title">
                  <h4>Name of Country</h4>
                </span>
                <span className="value">Lorem ipsum dolor sit amet.</span>
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      </>
    );
  }
}
