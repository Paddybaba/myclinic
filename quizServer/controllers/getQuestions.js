const Question = require("../database/models/questionSchema");

async function getQuestions(req, res) {
  const options = req.body;
  console.log(options.author);
  try {
    if (!options) {
      console.log("valid options not received");
      return;
    } else {
      const questions = await Question.find({ author: "ritesh" });
      res.json(questions);
      //   console.log(questions);
    }
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = {
  getQuestions: getQuestions,
};
