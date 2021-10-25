import React from "react";
import "../components/cssFiles/dept.css";
const DeptComponent = ({ dept }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <h2 className="text-center fw-bold mb-4">{dept.title}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-5 gx-0 box-left">
            <img src={dept.img}></img>
          </div>
          <div className="col-sm-6 box-right">
            <h5 className="fw-bold">Facilities Available</h5>
            {dept.facilities.map((value, index) => {
              return <p>{value}</p>;
            })}
          </div>
          <div className="row">
            <div className="col-8 mx-auto mt-3 box-doc">
              <div className="row">
                <div className="col-3 box-doc-left">
                  <img src={dept.doctor.photo}></img>
                </div>
                <div className="col-9 box-doc-right">
                  <h4>{dept.doctor.name}</h4>
                  <h5>{dept.doctor.qual}</h5>
                  <h6>Consultation timing : {dept.timing}</h6>
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
        </div>
      </div>
    </>
  );
};

export default DeptComponent;
