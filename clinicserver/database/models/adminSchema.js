const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  user: {
    type: String,
  },
});

const User = mongoose.model("User", adminSchema);

module.exports = User;
