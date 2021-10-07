const Patient = require("../../database/models/patientSchema");

async function getPatientsHandler(req, res) {
  const list = await Patient.find();
  res.json(list);
}

module.exports = {
  getPatientsHandler: getPatientsHandler,
};
