const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  patient_name: {
    type: String,
    required: true,
  },
  patient_address: {
    type: String,
  },
  patient_age: {
    type: Number,
  },
  patient_gender: {
    type: String,
    required: true,
  },
  patient_fee: {
    type: Number,
  },
  patient_visit: {
    type: String,
    required: true,
  },
  patient_phone: {
    type: Number,
  },
  consulting_doctor: {
    type: String,
    required: true,
  },
});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
