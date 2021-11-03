import React from "react";

const TopBar = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 mx-auto">
            <div className="topbar">
              <div className="d-flex">
                <div>Image</div>
                <div>Student</div>
              </div>
              <div>Timer</div>
              <div>Date and time</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
