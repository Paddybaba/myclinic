import React from "react";
import TopBar from "../../src/components/TopBar";
import { connect } from "react-redux";
import router, { useRouter } from "next/router";

const StartTest = (props) => {
  console.log("props from start test", props);
  return (
    <>
      <div className="container-fluid test-page">
        <div className="row">
          <div className="col-12 mx-auto">
            <TopBar />
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="welcome text-center">
                  All the best, <strong>{props.student.student}</strong>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-10 mx-auto ">
                <div
                  className="start-button mx-auto mt-3"
                  onClick={() => router.push("/test/test_page")}
                >
                  Start Test
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mstp = (state) => ({
  student: state.studentReducer.user,
});
export default connect(mstp)(StartTest);
