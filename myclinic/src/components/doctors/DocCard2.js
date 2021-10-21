import React from "react";

const DocCard2 = ({ doctor }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 mx-auto">
          <div className="a-box">
            <div className="img-container">
              <div className="img-inner">
                <div className="inner-skew">
                  <img src={doctor.photo} />
                </div>
              </div>
            </div>
            <div className="text-container2">
              <h3>{doctor.name}</h3>
              <div>{doctor.qual}</div>
              <div>{doctor.add_qual}</div>
            </div>
            <div className="text-container">
              <h3>{doctor.name}</h3>
              <div className="fw-bold">{doctor.qual}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocCard2;
