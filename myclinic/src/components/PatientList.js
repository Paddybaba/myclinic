import axios from "axios";
import React, { useEffect } from "react";

const PatientList = async () => {
  let data = [];
  useEffect(async () => {
    const response = await axios.post("http://localhost:3030/getpatients");
    data = await response.data;
  }, []);

  //   const getAllPatients = async () => {
  //     const response = await axios.post("http://localhost:3030/getpatients");
  //     // console.log(response.data[0]);
  //     const data = await response.data;
  //     return data;
  //   };

  //   const patientList = await getAllPatients();
  //   console.log(patientList);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div>List of Patients</div>
            <table class="table">
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
                {data.length ? (
                  <p>Loading patients ...</p>
                ) : (
                  data.map((patient) => {
                    return (
                      <tr>
                        <th scope="row">1</th>
                        <td>{patient.patient_name}</td>
                        <td>{patient.patient_age}</td>
                        <td>{patient.patient_phone}</td>
                        <td>{patient.patient_address}</td>
                        <td>{patient.patient_visit}</td>
                      </tr>
                    );
                  })
                )}
                {/* <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo klasjdloj salkdj asldkja</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientList;
