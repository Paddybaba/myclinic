import React from "react";
import { connect } from "react-redux";

const selectTest = (props) => {
  //   console.log(props);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div>
              <h3>Welcome : {props.student.student}</h3>
              <h3>Select your test paper</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mdtp = (dispatch) => ({});
const mstp = (state) => ({
  student: state.studentReducer.user,
});
export default connect(mstp, mdtp)(selectTest);
