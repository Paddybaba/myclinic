import React from "react";
import { NavLink } from "react-router-dom";
import "../components/components.css";
import { useSelector } from "react-redux";
const AdminDashboard = () => {
  // const { user } = props.location.state.data;
  // console.log(user);
  const myState = useSelector((state) => state.myReducer);
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
                <strong>{myState.state.user}</strong>
              </div>
              <div className="admin-title">Administrator Dashboard</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <NavLink to="/opd" className="col-5 box box-1">
                <div className="">Register New Patient</div>
              </NavLink>
              <NavLink to="/statistics" className="col-5 box box-2">
                <div>Statistics</div>
              </NavLink>
            </div>
            <div className="row ">
              <div className="col-5 box box-3">Inventory</div>
              <div className="col-5 box box-4">Blank</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
