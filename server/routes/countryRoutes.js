const express = require("express");
const readFile = require("../utils/helper-functions");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

module.exports = router;

//Get 1 - Get the Full Briefing List
router
  .get("/", (req, res) => {
    const countryData = readFile("./data/countries-data.json");
    if (!countryData) {
      res.status(404).json("Data not found");
    } else {
      res.status(200).json(countryData);
    }
  })
  //Get 1 - Get a specific country ID
  .get("/:code", (req, res) => {
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

//Post new Budget
router.post("/", (req, res) => {
  if (!req.body) {
    req.status(500);
    console.log("incomplete information sent");
  } else {
    console.log(req.body);
    const newHoliday = {
      id: uniqid(),
      title: req.body.title,
      duration: req.body.days,
      cost: req.body.cost,
      flights: req.body.flights,
      accomodation: req.body.accomodation,
      meals: req.body.meals,
      drinks: req.body.drinks,
      transportation: req.body.transportation,
      activities: req.body.activities,
      entertainment: req.body.entertainment,
    };
    const fileContent = JSON.parse(fs.readFileSync("./data/videos.json"));
    fileContent.push(newVideo);
    fs.writeFileSync("./data/videos.json", JSON.stringify(fileContent));
    res.status(201).json(newVideo);
    console.log("Added New Video Successfully");
  }
});
