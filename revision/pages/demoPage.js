import React from "react";
import { userLogin } from "../redux/actions";
import { connect } from "react-redux";

const demoPage = (props) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div>
              <h3>I am demo page</h3>
              <button onClick={() => props.loginHandler("Clciked")}>
                Click me
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mdpt = (dispatch) => {
  return {
    loginHandler: (data) => dispatch(userLogin(data)),
  };
};
const mstp = (state) => {
  return {};
};
export default connect(mstp, mdpt)(demoPage);
