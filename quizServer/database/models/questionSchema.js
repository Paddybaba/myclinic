const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
  },
  difficulty: {
    type: String,
  },
  question: {
    type: Object,
  },
});
