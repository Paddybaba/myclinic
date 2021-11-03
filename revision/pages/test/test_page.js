import React from "react";
import TopBar from "../../src/components/TopBar";

const test_page = () => {
  return (
    <>
      <div className="container-fluid test-page">
        <div className="row">
          <div className="col-12 mx-auto">
            <TopBar />
            <div className="row">
              <div className="col-8 mx-auto quest-box box">
                <div className="row">
                  <div className="col-6"> Question No. 2</div>
                  <div className="col-6 text-center">Marks : 5</div>
                </div>
                <div className="row">
                  <div className="col-12">
                    Question : Who is prime minister of India?
                  </div>
                  <hr></hr>
                  <div>A. Mr Narendra Modi</div>
                  <div>A. Mr Neerav Modi</div>
                  <div>A. Mr Yatin Modi</div>
                  <div>A. Mr Alex Modi</div>
                </div>
              </div>
              <div className="col-4 mx-auto navi-box box"></div>
            </div>
            <div className="row">
              <div className="col-12 mx-auto footer-box box"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default test_page;
