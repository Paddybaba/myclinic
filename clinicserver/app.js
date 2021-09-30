const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
dotenv.config({ path: "./config.env" });
const app = express();
require("./database/conn");
// import Patient model from database patientSchema
const Patient = require("./database/models/patientSchema");
app.use(express.json());

app.use(require("./router/paths"));

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
