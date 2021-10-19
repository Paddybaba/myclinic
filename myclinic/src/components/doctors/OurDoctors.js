import React from "react";
import DoctorCard from "./DoctorCard";
const OurDoctors = () => {
  const anup = {
    photo: "https://live.staticflickr.com/65535/51587786049_143c045943_m.jpg",
    name: "Dr Anup Padamwar",
    qual: "MBBS MS Ortho",
    add_qual: "Fellowship Joint Replacement and Trauma Surgery",
  };
  const rachna = {
    photo: "https://live.staticflickr.com/65535/51587786049_143c045943_m.jpg",
    name: "Dr Rachna Padamwar",
    qual: "MBBS Dip. CMH, NIMHANS Bangalore",
    add_qual: "",
  };
  const ravi = {
    photo: "https://live.staticflickr.com/65535/51587786049_143c045943_m.jpg",
    name: "Dr Ravikiran Shinde",
    qual: "MBBS DCH",
    add_qual: "Fellowship Neonatology",
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="text-center fs-1 text-uppercase my-4">
              Our Doctors
            </div>
          </div>
          <div className="row">
            <div className="col-12 mx-auto d-flex">
              <div className="row">
                <div className="col-sm-4">
                  <DoctorCard doctor={anup} />
                </div>
                <div className="col-sm-4">
                  <DoctorCard doctor={rachna} />
                </div>
                <div className="col-sm-4">
                  <DoctorCard doctor={ravi} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurDoctors;
