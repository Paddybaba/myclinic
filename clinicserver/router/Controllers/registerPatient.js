const Patient = require("../../database/models/patientSchema");

async function patientRegistrationHandler(req, res) {
  const {
    patient_name,
    patient_address,
    patient_age,
    patient_gender,
    patient_fee,
    patient_visit,
    patient_phone,
    consulting_doctor,
    consult_date,
  } = req.body;

  if (!patient_name || !patient_visit || !consulting_doctor) {
    res.status(422).json({ error: "Please fill the required fields !!" });
    return;
  }

  const patient = new Patient({
    patient_name,
    patient_address,
    patient_age,
    patient_gender,
    patient_fee,
    patient_visit,
    patient_phone,
    consulting_doctor,
    consult_date,
  });

  const saved = patient.save();
  try {
    if (saved) {
      res
        .status(200)
        .json({ message: "Patient details saved succesfully", data: patient });
    } else {
      res
        .status(500)
        .json({ error: "Error while genrating patient record !!" });
    }
  } catch {
    res.json({ error: "Some error occurred" });
  }
}

module.exports = {
  patientRegistrationHandler: patientRegistrationHandler,
};
