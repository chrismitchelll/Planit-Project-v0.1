import React from "react";

export default function Conditions({ setNumber }) {
  return (
    <>
      <div className="infocard-details__wrapper">
        <p>
          For How Many Days? ;<button>1 Day</button>
          <button>2 Days</button>
          <button>3 Days</button>
          <button>4 Days</button>
          <button>5 Days</button>
        </p>
        <p>
          How Many People Are Travelling?{" "}
          <button onClick={{ setNumber }} value="1">
            One
          </button>
          <button onClick={{ setNumber }} value="2">
            Two
          </button>
          <button onClick={{ setNumber }} value="3">
            Three
          </button>
          <button onClick={{ setNumber }} value="4">
            Four
          </button>
          <button onClick={{ setNumber }} value="5">
            Five
          </button>
        </p>
        <p>
          When Will You Travel?
          <select name="" id="">
            <option value="months"></option>
          </select>
        </p>
      </div>
    </>
  );
}
