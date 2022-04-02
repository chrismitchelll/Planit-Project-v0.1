import React from "react";

export default function Countdown() {
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minsEl = document.getElementById("mins");
  const secondsEl = document.getElementById("seconds");

  const newYears = "31 Dec 2020";

  function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
  }

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  // initial call
  countdown();

  setInterval(countdown, 1000);

  return (
    <div>
      <h1>End of Year 2020</h1>
      <div class="countdown-container">
        <div class="countdown-el days-c">
          <p class="big-text" id="days">
            0
          </p>
          <span>days</span>
        </div>
        <div class="countdown-el hours-c">
          <p class="big-text" id="hours">
            0
          </p>
          <span>hours</span>
        </div>
        <div class="countdown-el mins-c">
          <p class="big-text" id="mins">
            0
          </p>
          <span>mins</span>
        </div>
        <div class="countdown-el seconds-c">
          <p class="big-text" id="seconds">
            0
          </p>
          <span>seconds</span>
        </div>
      </div>
    </div>
  );
}
