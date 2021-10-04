async function adminHandler(req, res) {
  res.send("Hi I am Admin login server");
}

module.exports = {
  adminHandler: adminHandler,
};
