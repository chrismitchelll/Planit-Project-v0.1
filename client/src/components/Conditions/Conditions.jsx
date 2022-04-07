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
      <div className="plan__wrapper ">
        <div className="plan__conditions">
          <div className="plan__conditions--form">
            <h5>For How Many Days?</h5>
            <select onChange={setDays} className="plan-card__select">
              <option value="0">-</option>
              <option value="1">One Day</option>
              <option value="2">Two Days</option>
              <option value="3">Three Days</option>
              <option value="7">One Week</option>
              <option value="14">Two Weeks</option>
              <option value="30">One Month (30 Days)</option>
            </select>
          </div>
        </div>

        <div className="plan__conditions">
          {" "}
          <div className="plan__conditions--form">
            <h5>How Many Travelers?</h5>
            <input
              className="plan-card__input"
              onChange={setNumber}
              name="quantity"
              type="number"
              min="1"
              max="99"
            />
          </div>
        </div>

        <div className="plan__conditions">
          {" "}
          <div className="plan__conditions--form">
            <h5>When Will You Travel?</h5>
            <select onChange={setMonth} className="plan-card__select">
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
