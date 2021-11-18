import React from "react";
import DeptComponent from "../components/DeptComponent";

const Departments = () => {
  const pedia = {
    img: "https://live.staticflickr.com/65535/51617906001_2624f6e80b_z.jpg",
    title: "Pediatrics",
    facilities: [
      "All types of fractures",
      "Backache and Sciatica",
      "Joint pains and Arthritis",
      "Spine Injury",
      "Fracture delayed union and non unions",
      "Infected Fractures",
      "Joint Replacement Surgeries",
      "Deformity Correction",
    ],
    doctor: {
      photo: "https://live.staticflickr.com/65535/51609276032_95a6a191e0_s.jpg",
      name: "Dr Ravikiran Shinde",
      qual: "MBBS, DCH",
    },
    timing: "4pm to 8pm",
  };

  const ortho = {
    img: "https://live.staticflickr.com/65535/51618775400_79bb24a5cb_z.jpg",
    title: "Orthopaedics",
    facilities: [
      "All types of fractures",
      "Backache and Sciatica",
      "Joint pains and Arthritis",
      "Spine Injury",
      "Fracture delayed union and non unions",
      "Infected Fractures",
      "Joint Replacement Surgeries",
      "Deformity Correction",
    ],
    doctor: {
      photo: "https://live.staticflickr.com/65535/51609276032_95a6a191e0_s.jpg",
      name: "Dr Anup Padamwar",
      qual: "MBBS, MS Orthopaedics",
    },
    timing: "4pm to 8pm",
  };
  const mental =
    "https://live.staticflickr.com/65535/51618561854_34908cd414_z.jpg";
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <h2 className="text-center my-3 text-uppercase">Our Departments</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-10 mx-auto">
            <div>
              <DeptComponent dept={ortho} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-10 mx-auto">
            <DeptComponent dept={pedia} />
          </div>
        </div>
        <div className="row">
          <div className="col-10 mx-auto">
            <div>Psychiatry</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Departments;
