import React from "react";

export default function Conditions({ setNumber, setDays, setMonth }) {
  //create an array of every month
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <>
      <div className="plan-wrapper">
        <p>
          <h5>For How Many Days?</h5>
          <select onChange={setDays}>
            <option value="0">-</option>
            <option value="1">One Day</option>
            <option value="2">Two Days</option>
            <option value="3">Three Days</option>
            <option value="7">One Week</option>
            <option value="14">Two Weeks</option>
            <option value="30">One Month (30 Days)</option>
          </select>
        </p>

        <p>
          <h5>How Many People Are Travelling?</h5>
          <input onChange={setNumber} name="quantity" type="number" />
        </p>
        <p>
          <h5>When Will You Travel?</h5>
          <select onChange={setMonth}>
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </p>
      </div>
    </>
  );
}
