import React from "react";
import Printable from "../components/Printable";

const About = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div id="printme">
              <p>lorem ipsum </p>
            </div>

            <Printable />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
