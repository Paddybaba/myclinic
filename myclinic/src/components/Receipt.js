import React from "react";
import "../components/components.css";
const Receipt = ({ patientData }) => {
  const {
    patient_name,
    patient_age,
    patient_address,
    patient_phone,
    patient_gender,
    date,
    consulting_doctor,
    patient_fee,
    patient_visit,
  } = patientData;

  return (
    <div>
      <h2 className="text-center heading-1 ">Receipt</h2>
      <div className="line" />
      <div className="row">
        <div className="col-6 hospital-name">
          <div className="d-flex align-items-center ">
            <img
              src="https://live.staticflickr.com/65535/51537856857_a459c3a29c_m.jpg"
              alt="Logo"
            />
            <p className="fs-2 mb-0">Sri Sai Hospital</p>
          </div>
          <p style={{ marginBottom: 1 }}>Near Laxmi Niwas,</p>
          <p>Gokulpur, Rudri Road, Dhamtari</p>
        </div>
        <div className="col-5 ms-auto">
          <h4>Date : </h4>
          <h4>Dr Anup Padamwar</h4>
        </div>
      </div>
      <div className="line"></div>
      <div className="row patient-data">
        <p>Name : {patient_name}</p>
        <p>
          Age : {patient_age} Gender : {patient_gender}
        </p>
        <p>Address :{patient_address}</p>
        <p>Phone : {patient_phone}</p>
        <p>Fees : {patient_fee}</p>
      </div>
    </div>
  );
};

export default Receipt;
