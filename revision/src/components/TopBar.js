import React from "react";
import { connect } from "react-redux";
const TopBar = (props) => {
  // console.log("props from topbar", props);
  return (
    <>
      <div className="">
        <div className="row">
          <div className="mx-auto">
            <div className="topbar">
              <div className="d-flex">
                <div></div>
                <div>{props.student.student}</div>
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
const mstp = (state) => {
  return {
    student: state.studentReducer.user,
  };
};
export default connect(mstp)(TopBar);
