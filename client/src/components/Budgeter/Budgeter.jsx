import React, { useState } from "react";
import Confirm from "../Buttons/ConfirmButton/Confirm";
import "./budgeter.scss";

export default function Budgeter({ handleSelectedBudget, budgetLevel }) {
  return (
    <>
      <div className="budgeter-wrapper">
        <h3>Spending Level</h3>
        <select
          className="country-selector__dropdown"
          name="budget"
          id="budget"
          onChange={handleSelectedBudget}
          value={budgetLevel}
        >
          <option value="1">Regular</option>
          <option value="0.7">Backpacker</option>
          <option value="1.5">Relaxed</option>
          <option value="2.5">Luxury</option>
        </select>
      </div>
    </>
  );
}
