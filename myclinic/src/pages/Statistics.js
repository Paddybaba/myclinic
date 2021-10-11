import React from "react";
import PatientList from "../components/PatientList";
import Toprow from "../components/Toprow";
const Statistics = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 mx-auto">
            <Toprow />
            <div className="col-12 text-center fs-2">Statistics</div>
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
