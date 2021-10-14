import React from "react";
import Navbar from "../components/Navbar";
import MainCarousel from "../components/MainCarousel";
import DepartmentX from "../components/DepartmentX";

const Home = () => {
  return (
    <>
      <div className="">
        <div className="row">
          <div className="col-12 mx-auto">
            <Navbar />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 mx-auto">
            <MainCarousel />
          </div>
          <div className="col-sm-6 mx-auto sample">
            <DepartmentX />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
