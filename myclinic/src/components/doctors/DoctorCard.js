import React from "react";

const DoctorCard = ({ doctor }) => {
  if (doctor) {
    console.log(doctor.name);
  }
  return (
    <>
      <div className="card card1 mx-auto">
        <div className="doc-img">
          <img src={doctor.photo} alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title doc-name">{doctor.name}</h5>
          <p className="doc-qual">{doctor.qual}</p>
          <p className="doc-additional">{doctor.add_qual}</p>
        </div>
      </div>
    </>
  );
};

export default DoctorCard;
