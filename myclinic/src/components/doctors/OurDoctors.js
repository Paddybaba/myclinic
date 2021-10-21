import React from "react";
import DoctorCard from "./DoctorCard";
import DocCard2 from "./DocCard2";
const OurDoctors = () => {
  const anup = {
    photo: "https://live.staticflickr.com/65535/51610320083_cd99cc0c07_s.jpg",
    name: "Dr Anup Padamwar",
    qual: "MBBS, MS Orthopaedics",
    add_qual: "Fellowship Joint Replacement and Trauma Surgery",
    extra:
      "Dr Anup has done his fellowship in Joint Replacement and Trauma surgery under renowned Dr N S Laud and Dr Harish Bhende in Mumbai. He has also worked as Senior Resident in Medanta Medicity,Gurgaon. After finishing his trainig he has been working as consultant in Dhamtari Chritian Hospital and Gupta Hospital since past 10 years. ",
  };
  const rachna = {
    photo: "https://live.staticflickr.com/65535/51610090606_13735b7fcc_s.jpg",
    name: "Dr Rachna Padamwar",
    qual: "MBBS Dip. CMH,Bangalore",
    add_qual: "",
  };
  const ravi = {
    photo: "https://live.staticflickr.com/65535/51609276032_95a6a191e0_s.jpg",
    name: "Dr Ravikiran Shinde",
    qual: "MBBS, DCH",
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
            <div className="col-10 mx-auto ">
              <div className="row">
                <div className="col-sm-4 mx-auto">
                  <DocCard2 doctor={anup} />
                </div>
                <div className="col-sm-4 mx-auto">
                  <DocCard2 doctor={rachna} />
                </div>
                <div className="col-sm-4 mx-auto">
                  <DocCard2 doctor={ravi} />
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
