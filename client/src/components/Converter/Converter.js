import React, { Component } from "react";

export default function Converter() {
  // include api for currency change
  const api = "https://api.exchangerate-api.com/v4/latest/USD";

  // for selecting different controls
  var search = document.querySelector(".searchBox");
  var convert = document.querySelector(".convert");
  var fromCurrecy = document.querySelector(".from");
  var toCurrecy = document.querySelector(".to");
  var finalValue = document.querySelector(".finalValue");
  var finalAmount = document.getElementById("finalAmount");
  var resultFrom;
  var resultTo;
  var searchValue;

  // Event when currency is changed
  fromCurrecy.addEventListener("change", (event) => {
    resultFrom = `${event.target.value}`;
  });

  // Event when currency is changed
  toCurrecy.addEventListener("change", (event) => {
    resultTo = `${event.target.value}`;
  });

  search.addEventListener("input", updateValue);

  // function for updating value
  function updateValue(e) {
    searchValue = e.target.value;
  }

  // when user clicks, it calls function getresults
  convert.addEventListener("click", getResults);

  // function getresults
  function getResults() {
    fetch(`${api}`)
      .then((currency) => {
        return currency.json();
      })
      .then(displayResults);
  }

  // display results after convertion
  function displayResults(currency) {
    let fromRate = currency.rates[resultFrom];
    let toRate = currency.rates[resultTo];
    finalValue.innerHTML = ((toRate / fromRate) * searchValue).toFixed(2);
    finalAmount.style.display = "block";
  }

  // when user click on reset button
  function clearVal() {
    window.location.reload();
    document.getElementsByClassName("finalValue").innerHTML = "";
  }

  return (
    <div>
      <h1 class="heading text-center display-2">Currency Converter</h1>

      <div class="container">
        <div class="main">
          <div class="form-group">
            <label for="oamount">Amount to Convert :</label>
            <input
              type="text"
              class="form-control searchBox"
              placeholder="0.00"
              id="oamount"
            ></input>
          </div>

          <div class="row">
            <div class="col-sm-6">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">From</span>
                </div>
                <select class="form-control from" id="sel1">
                  <option value="">Select One …</option>
                  <option value="USD">USD</option>
                  <option value="AED">AED</option>
                  <option value="ARS">ARS</option>
                  <option value="AUD">AUD</option>
                  <option value="BGN">BGN</option>
                  <option value="BRL">BRL</option>
                  <option value="BSD">BSD</option>
                  <option value="CAD">CAD</option>
                  <option value="CHF">CHF</option>
                  <option value="CLP">CLP</option>
                  <option value="CNY">CNY</option>
                  <option value="COP">COP</option>
                  <option value="CZK">CZK</option>
                  <option value="DKK">DKK</option>
                  <option value="DOP">DOP</option>
                  <option value="EGP">EGP</option>
                  <option value="EUR">EUR</option>
                  <option value="FJD">FJD</option>
                  <option value="GBP">GBP</option>
                  <option value="GTQ">GTQ</option>
                  <option value="HKD">HKD</option>
                  <option value="HRK">HRK</option>
                  <option value="HUF">HUF</option>
                  <option value="IDR">IDR</option>
                  <option value="ILS">ILS</option>
                  <option value="INR">INR</option>
                  <option value="ISK">ISK</option>
                  <option value="JPY">JPY</option>
                  <option value="KRW">KRW</option>
                  <option value="KZT">KZT</option>
                  <option value="MVR">MVR</option>
                  <option value="MXN">MXN</option>
                  <option value="MYR">MYR</option>
                  <option value="NOK">NOK</option>
                  <option value="NZD">NZD</option>
                  <option value="PAB">PAB</option>
                  <option value="PEN">PEN</option>
                  <option value="PHP">PHP</option>
                  <option value="PKR">PKR</option>
                  <option value="PLN">PLN</option>
                  <option value="PYG">PYG</option>
                  <option value="RON">RON</option>
                  <option value="RUB">RUB</option>
                  <option value="SAR">SAR</option>
                  <option value="SEK">SEK</option>
                  <option value="SGD">SGD</option>
                  <option value="THB">THB</option>
                  <option value="TRY">TRY</option>
                  <option value="TWD">TWD</option>
                  <option value="UAH">UAH</option>
                  <option value="UYU">UYU</option>
                  <option value="ZAR">ZAR</option>
                </select>
              </div>
            </div>

            <div class="col-sm-6">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">To</span>
                </div>
                <select class="form-control to" id="sel2">
                  <option value="">Select One …</option>
                  <option value="USD">USD</option>
                  <option value="AED">AED</option>
                  <option value="ARS">ARS</option>
                  <option value="AUD">AUD</option>
                  <option value="BGN">BGN</option>
                  <option value="BRL">BRL</option>
                  <option value="BSD">BSD</option>
                  <option value="CAD">CAD</option>
                  <option value="CHF">CHF</option>
                  <option value="CLP">CLP</option>
                  <option value="CNY">CNY</option>
                  <option value="COP">COP</option>
                  <option value="CZK">CZK</option>
                  <option value="DKK">DKK</option>
                  <option value="DOP">DOP</option>
                  <option value="EGP">EGP</option>
                  <option value="EUR">EUR</option>
                  <option value="FJD">FJD</option>
                  <option value="GBP">GBP</option>
                  <option value="GTQ">GTQ</option>
                  <option value="HKD">HKD</option>
                  <option value="HRK">HRK</option>
                  <option value="HUF">HUF</option>
                  <option value="IDR">IDR</option>
                  <option value="ILS">ILS</option>
                  <option value="INR">INR</option>
                  <option value="ISK">ISK</option>
                  <option value="JPY">JPY</option>
                  <option value="KRW">KRW</option>
                  <option value="KZT">KZT</option>
                  <option value="MVR">MVR</option>
                  <option value="MXN">MXN</option>
                  <option value="MYR">MYR</option>
                  <option value="NOK">NOK</option>
                  <option value="NZD">NZD</option>
                  <option value="PAB">PAB</option>
                  <option value="PEN">PEN</option>
                  <option value="PHP">PHP</option>
                  <option value="PKR">PKR</option>
                  <option value="PLN">PLN</option>
                  <option value="PYG">PYG</option>
                  <option value="RON">RON</option>
                  <option value="RUB">RUB</option>
                  <option value="SAR">SAR</option>
                  <option value="SEK">SEK</option>
                  <option value="SGD">SGD</option>
                  <option value="THB">THB</option>
                  <option value="TRY">TRY</option>
                  <option value="TWD">TWD</option>
                  <option value="UAH">UAH</option>
                  <option value="UYU">UYU</option>
                  <option value="ZAR">ZAR</option>
                </select>
              </div>
            </div>
          </div>

          <div class="text-center">
            {/* <>!-- convert button -- */}
            <button class="btn btn-primary convert m-2" type="submit">
              Convert
            </button>

            {/* <!-- reset button --> */}
            <button class="btn btn-primary m-2" onclick="clearVal()">
              Reset
            </button>
          </div>
        </div>

        <div id="finalAmount" class="text-center">
          {/* <!-- Display the converted amount --> */}
          <div className="section-header">
            <h2>
              Converted Amount :
              <span class="finalValue" style="color:green;"></span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
