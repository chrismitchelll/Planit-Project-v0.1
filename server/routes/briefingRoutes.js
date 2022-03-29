const express = require("express");
const readFile = require("../utils/helper-functions");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

module.exports = router;

const API = "https://travelbriefing.org/";

//Get 1 - Get the Full Briefing List
router.get(API + "/", (req, res) => {
  const countryBriefingData = readFile(API);
  res.status(200).json(fileContent);
  console.log(countryBriefingData);
});
