const express = require("express");
const readFile = require("../utils/helper-functions");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

module.exports = router;

//Get 1 - Get the Full Briefing List
router.get("/", (req, res) => {
  const countryData = readFile("./data/countries-data.json");
  if (!countryData) {
    res.status(404).json("Data not found");
  } else {
    res.status(200).json(countryData);
  }
});

router.get("/", (req, res) => {
  const warehouseData = readFile("./data/warehouses.json");
  res.status(200).json(warehouseData);
});

//Get 1 - Get a specific country ID
router.get("/:code", (req, res) => {
  const countryData = readFile("./data/countries-data.json");
  console.log(countryData);
  const countryId = req.params.code;
  console.log(countryId);
  const selectedCountry = countryData.find(
    (country) => country.code == countryId
  );
  console.log(countryId);
  if (!selectedCountry) {
    res.status(400).json("Please provide a valid Country Code");
  } else {
    res.status(200).json(selectedCountry);
  }
});
