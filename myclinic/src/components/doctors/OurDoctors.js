import React from "react";
import DoctorCard from "./DoctorCard";
import DocCard2 from "./DocCard2";
const OurDoctors = () => {
  const anup = {
    photo:
      "https://lh3.googleusercontent.com/OVxFpKa9YE0XRm6YiRFBw8My5KaU0JHgPKC8aCRmPJFpB4v4v9F0cngzNwprI8Z5ujA2xRBeSXEatIuBuhc0NReNBt8nobdTZKn3GtoRC55QUe3vlwhOf200gPU1EbOQW9llU-Tr_Be0FnLy0P91jonpgXWbYuOHtCkGdRSC0suspzCKC8TflyJ6qLVUb7ys5FsllNjVNDQ72-ioUJLuMDxnHZusb_Qw9yWrZLyGsrOSqOZfgEF3PLshfOG-vylSetTRkXXmJzTOeFxZUIMGwVQWvDKJ6MEv1KVeZJCR4WddvC9JkTU6HDx2dbo_6wLD5wjNpEuGMmPvRHftM_EXGpP9tRFzcoqborv1JwK3RzFDtjAuWfk8Iz_TkJSGEo8m7zhEBOA0VOjY3wUWNEyJ2Fclo9TKlHYOIphzSmAJMWIoT2eqxzjAksO6GwbCGpPP-OkvP-9OeCDAjzwKFwmDNjO4ntv8bc1Kw9jYA5E8hSuX4sL_GmR3wxLlnPXdo_H_cxH5S6me_pN0iIkBxo5_J_IJFRXNhBFBCX9DCdOhs_YBoQk_iS-C7I8ymNU-stwjvnxHDB75qjBbd-zlHmNVfkr9K61pvSrWOcN8D2LENMkdEexkzo5ALtfqsbsN4TFaC_neRMJ1W1lyGNwsMwk_Uz0l0zvfhknydAawv8f3ETlML834_w8gYyUi0BbKnmeTnYF8JbRKLw-avpWU8Rx046qJ=s625-no?authuser=0",
    name: "Dr Anup Padamwar",
    qual: "MBBS, MS Orthopaedics",
    add_qual: "Fellowship Joint Replacement and Trauma Surgery",
    extra:
      "Dr Anup has done his fellowship in Joint Replacement and Trauma surgery under renowned Dr N S Laud and Dr Harish Bhende in Mumbai. He has also worked as Senior Resident in Medanta Medicity,Gurgaon. After finishing his trainig he has worked as Consultant at Dhamtari Chritian Hospital and currently working in Gupta Hospital since past 6 years. ",
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
      <div className="container-fluid gradient-1">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="text-center fs-1 text-uppercase my-4">
              Our Doctors
            </div>
          </div>
          <div className="row mx-auto">
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
