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
            <div className="text-container gradient-1">
              <h3>{doctor.name}</h3>
              <h4 className="">{doctor.qual}</h4>
              <h5>{doctor.add_qual}</h5>
              <p>{doctor.extra}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocCard2;
