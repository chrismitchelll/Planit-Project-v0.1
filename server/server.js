const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8888;
require("dotenv").config();
// const briefingRoutes = require("./routes/briefingRoutes");

app.use(express.json());
app.use(cors());
app.use("./briefings", briefingRoutes);

app.listen(PORT, () => {
  console.log(`Server Listening at http://localhost:${PORT}`);
});
