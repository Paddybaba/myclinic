const mongoose = require("mongoose");
mongoose.set("debug", true);
const questionSchema = new mongoose.Schema({
  type: "object",
  properties: {
    subject: {
      type: "string",
    },
    author: {
      type: "string",
    },
    model: {
      type: "string",
    },
    year: {
      type: Number,
    },
    question: {
      type: "object",
      // required: [quest, options, correct_ans],
      properties: {
        marks: {
          type: Number,
        },
        difficulty: {
          type: "string",
        },
        quest: {
          type: "string",
        },
        options: {
          type: "array",
        },
        correct_ans: {
          type: "string",
        },
      },
    },
  },
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;

//  OBJECT MODEL FOR QUESTIONS ***************************************
// {
//   "_id": {
//       "$oid": "6180e02a4a84ba7e022a662d"
//   },
// "subject": "gk",
// "author": "Anup Kumar",
// "model": "text",
// "question": {
//     "quest": "What is national animal of India?",
//     "options": ["Peacock", "Tiger", "Frog", "Pigeon"],
//     "correct_ans": "Tiger",
//     "marks": "5"
// },
// "difficulty": "medium"
// }
