const express = require("express");
const router = express.Router();
const studentLoginHandler = require("./loginController");
const questionHandler = require("./getQuestions");
const jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
  res.send("Hello i am listening for questions");
});

//////// STUDENT LOGIN //////////
router.post("/login", (req, res) => {
  studentLoginHandler.loginHandler(req, res);
});

///////// GET QUESTIOSN //////////
router.post("/getquest", (req, res) => {
  questionHandler.getQuestions(req, res);
});
module.exports = router;
