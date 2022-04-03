import { useState, useEffect } from "react";
import axios from "axios";
import CurrencyInput from "./CurrencyInput";

function CurrencyConverter() {
  const [baseAmount, setBaseAmount] = useState(1);
  const [resultamount, setResultAmount] = useState(1);
  const [currency1, setCurrency1] = useState("USD");
  const [currency2, setCurrency2] = useState("EUR");
  const [rates, setRates] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://data.fixer.io/api/latest?access_key=0ce522574c9b9c51f85813161ed6c284"
      )
      .then((response) => {
        setRates(response.data.rates);
      });
  }, []);

  useEffect(() => {
    if (!!rates) {
      function init() {
        handlebaseAmountChange(1);
      }
      init();
    }
  }, [rates]);

  function formatTo2Digits(number) {
    return number.toFixed(4);
  }

  function handlebaseAmountChange(baseAmount) {
    setResultAmount(
      formatTo2Digits((baseAmount * rates[currency2]) / rates[currency1])
    );
    setBaseAmount(baseAmount);
  }

  function handleCurrency1Change(currency1) {
    setResultAmount(
      formatTo2Digits((baseAmount * rates[currency2]) / rates[currency1])
    );
    setCurrency1(currency1);
  }

  function handleresultAmountChange(resultamount) {
    setBaseAmount(
      formatTo2Digits((resultamount * rates[currency1]) / rates[currency2])
    );
    setResultAmount(resultamount);
  }

  function handleCurrency2Change(currency2) {
    setBaseAmount(
      formatTo2Digits((resultamount * rates[currency1]) / rates[currency2])
    );
    setCurrency2(currency2);
  }

  return (
    <>
      <div className="currency-converter__wrapper">
        <h2>Currency Converter</h2>
        <div className="currency-converter">
          <CurrencyInput
            onAmountChange={handlebaseAmountChange}
            onCurrencyChange={handleCurrency1Change}
            currencies={Object.keys(rates)}
            amount={baseAmount}
            currency={currency1}
          />
        </div>
        <div className="currency-converter">
          <CurrencyInput
            onAmountChange={handleresultAmountChange}
            onCurrencyChange={handleCurrency2Change}
            currencies={Object.keys(rates)}
            amount={resultamount}
            currency={currency2}
          />
        </div>
      </div>
    </>
  );
}

export default CurrencyConverter;
