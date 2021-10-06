const express = require("express");
const router = express.Router();
const Patient = require("../database/models/patientSchema");
const adminHandler = require("./Controllers/adminLogin");
const patientRegistrationHandler = require("./Controllers/registerPatient");

router.get("/", (req, res) => {
  res.send("Hello from from my server router");
});

// REGISTERING PATIENTS /////////////////
router.post("/patientregistration", (req, res) => {
  console.log(req.body);
  patientRegistrationHandler.patientRegistrationHandler(req, res);
});
// ADMIN AUTHENTICATION///////////////
router.post("/adminLogin", (req, res) => {
  adminHandler.adminHandler(req, res);
});

module.exports = router;
