const express = require("express");
const router = express.Router();
const studentLoginHandler = require("./loginController");

router.get("/", (req, res) => {
  res.send("Hello i am listening for questions");
});

//////// STUDENT LOGIN //////////
router.post("/login", (req, res) => {
  studentLoginHandler.loginHandler(req, res);
});

module.exports = router;
