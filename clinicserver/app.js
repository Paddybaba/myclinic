const mongoose = require("mongoose");
const express = require("express");

const app = express();
const db =
  "mongodb+srv://srisaihospital:pacemaker@cluster0.qt1ml.mongodb.net/myClinicDB?retryWrites=true&w=majority";
mongoose
  .connect(db)
  .then(() => {
    console.log("Connected successfully to the database");
  })
  .catch((err) => {
    console.log("Error connecting to the database");
  });
app.get("/", (req, res) => {
  res.send("This is my server home page");
});

app.listen(3001, () => {
  console.log("server running on port 3001");
});
