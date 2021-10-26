const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

dotenv.config({ path: "./config.env" });

const app = express();
app.use(cors());
app.use(express.json());
app.use(require("./controllers/paths"));
app.listen(process.env.PORT, () => {
  console.log(`Listening successfully at port ${process.env.PORT}`);
});
