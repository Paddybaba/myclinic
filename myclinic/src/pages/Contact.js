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
                  d="M0,320L288,288L576,160L864,288L1152,288L1440,128L1440,320L1152,320L864,320L576,320L288,320L0,320Z"
                ></path>
              </svg>
            </div>
            <div className="row gx-0">
              <div className="col-10 mx-auto">
                <div className="row">
                  <div className="col-sm-6 ">
                    <div className="d-flex flex-row align-items-start mb-4">
                      {/* <Image src={saibaba} className="logo" fluid /> */}
                      <h3 className="fs-1">Shri Sai Clinic</h3>
                    </div>
                    <h5>Near Laxminiwas Chowk, Gokulpur, Dhamtari</h5>
                    <h5>
                      Phone : <a href="tel:9343918036">9343918036</a>
                    </h5>
                    <h5>Website : www.shrisaiclinic.com</h5>
                    <h5>email : shrisaiclinic@gmail.com</h5>
                  </div>
                  <div className="col-sm-6 map-container">
                    <h3>Directions</h3>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m17!1m8!1m3!1d1757.0019191562503!2d81.55055296787522!3d20.689018109926415!3m2!1i1024!2i768!4f13.1!4m6!3e2!4m0!4m3!3m2!1d20.688551099999998!2d81.55211109999999!5e1!3m2!1sen!2sin!4v1634974820292!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowfullscreen=""
                      loading="lazy"
                    ></iframe>
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
