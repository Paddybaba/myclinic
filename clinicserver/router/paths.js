const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello from from my server router");
});

router.post("/patientregistration", (req, res) => {
  console.log(req.body);
  res.send("data received");
});
module.exports = router;
