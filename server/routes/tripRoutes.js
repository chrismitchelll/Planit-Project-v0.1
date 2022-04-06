const express = require("express");
const readFile = require("../utils/helper-functions");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

module.exports = router;

//GET itinearies
router.get("/", (req, res) => {
  const tripData = readFile("./data/trips.json");
  res.status(200).json(tripData);
});

router.get("/:tripId", (req, res) => {
  const itinearyData = readFile("./data/trips.json");
  const tripId = req.params.tripId;
  const itinearyItem = itinearyData.find((item) => item.id === tripId);

  if (!itinearyItem) {
    res.status(400).json("Please provide a valid itineary item ID");
  }
  res.status(200).json(itinearyItem);
});

// ///------Trip Data GET------///
// router.get("/:id", (req, res) => {
//   const tripContent = readFile("./data/trips.json");
//   const selectedTrip = tripContent.find((trip) => trip.id == req.params.id);
//   res.status(200).json(selectedTrip);
// });

// DELETE trip AND CORRESPONDING itineary
router.delete("/:tripId", (req, res) => {
  const tripId = req.params.tripId;
  const tripData = readFile("./data/trips.json");
  console.log("tData" + tripId);
  let itinearyData = readFile("./data/trips.json");
  console.log("iData" + tripId);

  const trip = tripData.find((object) => object.id == tripId);
  if (!trip) {
    res.status(400).json("Please provide a valid ID");
  }

  const tripIndex = tripData.findIndex((object) => object.id === tripId);

  const filteredTrips = itinearyData.filter(
    (object) => object.tripID != trip.id
  );

  console.log(tripIndex);

  tripData.splice(tripIndex, 1);
  itinearyData = filteredTrips;

  fs.writeFileSync("./data/trips.json", JSON.stringify(tripData));
  fs.writeFileSync("./data/inventories.json", JSON.stringify(itinearyData));

  res.status(200).json(trip);
});

module.exports = router;

//Post new Trip
router.post("/", (req, res) => {
  if (!req.body) {
    req.status(500);
    console.log("incomplete information sent");
  } else {
    console.log(req.body);
    const newTrip = {
      id: uuidv4(),
      name: req.body.name,
      cost: req.body.cost,
      date: req.body.date,
      country: req.body.country,
    };
    const fileContent = JSON.parse(fs.readFileSync("./data/trips.json"));
    fileContent.push(newTrip);
    fs.writeFileSync("./data/trips.json", JSON.stringify(fileContent));
    res.status(201).json(newTrip);
    console.log("Added New Trip Successfully");
  }
});

//*EDIT-trip
router.post("/:tripId", (req, res) => {
  const tripId = req.params.tripId;
  const tripData = JSON.parse(fs.readFileSync("./data/trips.json"));

  const trip = tripData.find((object) => object.id == tripId);
  if (!trip) {
    res.status(400).json("Please provide a valid ID");
  }
  const editedtrip = { id: tripId, ...req.body };

  //* This function finds the index of the desired trip
  const findIndex = () => {
    for (let i = 0; tripData.length; i++) {
      if (tripData[i].id == tripId) {
        return i;
      }
    }
  };

  tripData.splice(findIndex(), 1, editedtrip);

  fs.writeFileSync("./data/trips.json", JSON.stringify(tripData));
  res.status(201).json(tripData);
});
