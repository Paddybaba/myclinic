const User = require("../../database/models/adminSchema");
const bcrypt = require("bcryptjs");

async function adminHandler(req, res) {
  const { username, password } = req.body;
  try {
    if (!username || !password) {
      return res
        .status(400)
        .json({ error: "Please fill the data", code: "err" });
    } else {
      const userData = await User.findOne({ username: username });
      if (!userData) {
        res.status(400).json({ error: "Invalid username", code: "err" });
      } else {
        const passwordMatch = await bcrypt.compare(password, userData.password);
        if (!passwordMatch) {
          res.status(400).json({ error: "Invalid password", code: "err" });
        } else {
          res.json({
            message: `${userData.username} signin successfully`,
            code: "success",
            user: { user: userData.user, username: userData.username },
          });
        }
      }
    }
  } catch (err) {
    console.log(err.message);
  }
}
module.exports = {
  adminHandler: adminHandler,
};
