import React from "react";
import PatientList from "../components/PatientList";

const Statistics = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div>Stats Page</div>
          </div>
        </div>
        <div className="row">
          <div className="col-10 mx-auto">
            <PatientList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;
