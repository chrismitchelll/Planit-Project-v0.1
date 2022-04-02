const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8888;
const countryRoutes = require("./routes/countryRoutes");
require("dotenv").config();
// const briefingRoutes = require("./routes/briefingRoutes");

app.use(express.json());
app.use(cors());
app.use("/countries", countryRoutes);

app.listen(PORT, () => {
  console.log(`Server Listening at http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send(
    "If you can see this message, then the server is working. Please refer to the README documentation for more information."
  );
});
