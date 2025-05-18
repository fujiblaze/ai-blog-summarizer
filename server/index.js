// server/index.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

const summarizeRoute = require("./routes/summarize");
const authRoute = require("./routes/auth");

app.use(cors());
app.use(bodyParser.json());

app.use("/api/summarize", summarizeRoute);
app.use("/api/auth", authRoute);

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
