import React from "react";
import { Line } from "react-chartjs-2";

function Chart() {
  const data = {
    labels: [
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
    ],
    datasets: [
      {
        label: "Temperature",
        data: [20, 19, 18, 17, 16, 15, 14, 23, 22, 21, 10, 19],
      },
    ],
  };

  // return <Line data={} />
}

export default Chart;
