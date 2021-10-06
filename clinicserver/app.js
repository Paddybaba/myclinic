const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

dotenv.config({ path: "./config.env" });
const app = express();
app.use(cors());
require("./database/conn");
// import Patient model from database patientSchema
const Patient = require("./database/models/patientSchema");
app.use(express.json());

app.use(require("./router/paths"));

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
