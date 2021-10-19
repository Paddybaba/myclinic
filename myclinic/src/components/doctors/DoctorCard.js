import React from "react";

const DoctorCard = ({ doctor }) => {
  console.log(doctor.name);
  return (
    <>
      <div className="card1">
        <div className="doc-img"></div>
        <div className="doc-name"></div>
        <div className="doc-qual"></div>
        <div className="doc-additional"></div>
      </div>
    </>
  );
};

export default DoctorCard;
