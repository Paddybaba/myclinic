import axios from "axios";
import React, { useEffect, useState } from "react";
import Toprow from "./Toprow";

const PatientList = () => {
  const [patientList, updateList] = useState([]);

  const getAllPatients = async () => {
    const response = await axios.post("http://localhost:3030/getpatients");
    const data = await response.data;
    return data;
  };

  useEffect(async () => {
    updateList(await getAllPatients());
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 mx-auto">
            <Toprow />
            <div className="text-center fs-2">List of Patients</div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">S No</th>
                  <th scope="col">Name</th>
                  <th scope="col">Age</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Address</th>
                  <th scope="col">Visit</th>
                </tr>
              </thead>
              <tbody>
                {patientList.reverse().map((patient, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{patient.patient_name}</td>
                      <td>{patient.patient_age}</td>
                      <td>{patient.patient_phone}</td>
                      <td>{patient.patient_address}</td>
                      <td>{patient.patient_visit}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientList;
