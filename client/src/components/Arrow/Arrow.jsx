import React, { Component } from "react";
import "./arrow.scss";
import chevron from "../../assets/icons/back-button.png";

export class Arrow extends Component {
  render() {
    return (
      <>
        <img alt="chevron-right" src={chevron} className="arrow" />
      </>
    );
  }
}

export default Arrow;
