const Student = require("../database/models/studentSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function loginHandler(req, res) {
  const { username, password } = req.body;
  try {
    if (!username || !password) {
      return res
        .status(400)
        .json({ error: "Please fill the data", code: "err" });
    } else {
      const userData = await Student.findOne({ username: username });
      if (!userData) {
        res.status(400).json({ error: "Invalid username", code: "err" });
      } else {
        const passwordMatch = await bcrypt.compare(password, userData.password);
        if (!passwordMatch) {
          res.status(400).json({ error: "Invalid password", code: "err" });
        } else {
          res.json({
            message: `${userData.username} signin successfully`,
            code: "successful",
            token: "empty",
            // user: { user: userData.user, username: userData.username },
          });
        }
      }
    }
  } catch (err) {
    console.log(err.message);
  }
}

const createJWT = async (username) => {
  const token = await jwt.sign(username, "mynameislakhan");
};

module.exports = {
  loginHandler: loginHandler,
};
