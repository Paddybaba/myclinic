import React from "react";
import Navbar from "../components/Navbar";
import { Image } from "react-bootstrap";

const Contact = () => {
  var saibaba =
    "https://live.staticflickr.com/65535/51537856857_a459c3a29c_m.jpg";
  return (
    <>
      <div className="container-fluid gx-0">
        <div className="row gx-0">
          <div className="col-12 mx-auto">
            <Navbar />
            <div className="curved-image">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="#fff"
                  fill-opacity="1"
                  d="M0,64L40,106.7C80,149,160,235,240,234.7C320,235,400,149,480,101.3C560,53,640,43,720,37.3C800,32,880,32,960,58.7C1040,85,1120,139,1200,149.3C1280,160,1360,128,1400,112L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                ></path>
              </svg>
            </div>
            <div className="row gx-0">
              <div className="col-10 mx-auto">
                <div className="row">
                  <div className="col-sm-6 ">
                    <div className="d-flex flex-row align-items-start mb-4">
                      <Image src={saibaba} className="logo" fluid />
                      <h3 className="fs-1">Shri Sai Clinic</h3>
                    </div>
                    <h5>Near Laxminiwas Chowk, Gokulpur, Dhamtari</h5>
                    <h5>
                      Phone : <a href="tel:9343918036">9343918036</a>
                    </h5>
                    <h5>Website : www.shrisaiclinic.com</h5>
                    <h5>email : shrisaiclinic@gmail.com</h5>
                  </div>
                  <div className="col-sm-6 sample d-flex align-items-center">
                    Location Map Here
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
