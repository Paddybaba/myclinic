import React from "react";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 mx-auto">
            <Navbar />
            <div className="curved-image">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="#ff5500"
                  fill-opacity="1"
                  d="M0,64L40,106.7C80,149,160,235,240,234.7C320,235,400,149,480,101.3C560,53,640,43,720,37.3C800,32,880,32,960,58.7C1040,85,1120,139,1200,149.3C1280,160,1360,128,1400,112L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
