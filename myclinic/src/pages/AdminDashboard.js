import React from "react";

const AdminDashboard = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg">
            <div className="row ">
              <div className="col-3">
                <a href="/">
                  <img
                    src="https://live.staticflickr.com/65535/51537856857_a459c3a29c_m.jpg"
                    alt="Logo"
                    className="logo"
                  />
                </a>
              </div>
              <div className="col-9 welcome-doctor">
                <strong>Dr Anup Padamwar</strong>
              </div>
              <div className="admin-title">Administrator Dashboard</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-10 mx-auto box">
            <div className="row">
              <div className="col-6 box"></div>
              <div className="col-6 box"></div>
            </div>
            <div className="row box">
              <div className="col-6 box"></div>
              <div className="col-6 box"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
