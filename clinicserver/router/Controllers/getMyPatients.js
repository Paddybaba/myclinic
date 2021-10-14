const Patient = require("../../database/models/patientSchema");

async function getMyPatientsHandler(req, res) {
  const doctor = req.body.myState.state.user;
  console.log(doctor);
  const list = await Patient.find({ consulting_doctor: doctor });
  res.json(list);
}

module.exports = {
  getMyPatientsHandler: getMyPatientsHandler,
};
