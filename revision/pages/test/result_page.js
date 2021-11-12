import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import TopBar from "../../src/components/TopBar";

//////
//  make an array of correct answers
//  display correct answer in green
//  display marked answer in green border if correct and red border if incorrect

const result_page = (props) => {
  const data = props.questBank;
  const [progress, setProgress] = useState(
    JSON.parse(localStorage.getItem("score"))
  );
  const [activeQ, setActiveQ] = useState(0);
  const [clickedOption, setClickedOption] = useState(progress.clickedAnsList);

  const onNextClick = () => {
    setActiveQ(activeQ + 1);
    setProgress({ ...progress, clickedAnsList: clickedOption });
  };

  const onPreviousClick = () => {
    setActiveQ(activeQ - 1);
    setProgress({ ...progress, clickedAnsList: clickedOption });
  };

  try {
    let currentQuestion = data[activeQ].question;
    return (
      <>
        <TopBar />
        <div className="container-fluid test-page gx-0 ">
          <div className="row gx-0 main-container">
            <div className="col-10 mx-auto">
              <div className="row ">
                <div className="col-8 mx-auto quest-box">
                  <div className="row quest-toprow">
                    <div className="col-6"> Question No. {activeQ + 1}</div>
                    <div className="col-6 text-center">Marks : 5</div>
                  </div>
                  <div className="row ">
                    <div className="col-12 quest-question mt-2 mr-3">
                      {currentQuestion.quest}
                    </div>

                    <ol>
                      {currentQuestion.options.map((element, index) => {
                        return (
                          <li
                            key={index}
                            position={index}
                            className="options"
                            onClick={(e) => onOptionClick(e)}
                            style={{
                              border:
                                index == progress.clickedAnsList[activeQ]
                                  ? "1px solid green"
                                  : "none",
                            }}
                          >
                            {element}
                          </li>
                        );
                      })}
                    </ol>
                  </div>
                </div>
                <div className="col-4 mx-auto navi-box">
                  <p>Total Questions : {progress.total}</p>
                  {data.map((element, index) => {
                    return (
                      <div
                        key={index}
                        className="question-number-box"
                        style={
                          (activeQ === index
                            ? { backgroundColor: "grey", color: "white" }
                            : {},
                          progress.answered.includes(index)
                            ? { backgroundColor: "greenyellow" }
                            : {})
                        }
                        onClick={() => {
                          setActiveQ(index);
                          setProgress({
                            ...progress,
                            clickedAnsList: clickedOption,
                          });
                        }}
                      >
                        {index + 1}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="row mx-auto">
                <div className="col-10 mx-auto footer-box">
                  <button
                    className="previous-next"
                    onClick={() => onPreviousClick()}
                    // style={{ visibility: activeQ == 0 ? "hidden" : "visible" }}
                    disabled={activeQ === 0}
                  >
                    Previous
                  </button>
                  <button
                    className="previous-next"
                    onClick={() => onNextClick()}
                    // style={{
                    //   visibility:
                    //     // activeQ == data.length - 1 ? "hidden" : "visible",
                    // }}
                    disabled={activeQ == data.length - 1}
                  >
                    Next
                  </button>
                  <button
                    className=" previous-next finish-button"
                    onClick={() => setModalShow(true)}
                  >
                    Finish
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } catch (err) {
    console.log(err);

    return <div>Error occured</div>;
  }
};

function addAfter(array, index, newItem) {
  return [...array.slice(0, index), newItem, ...array.slice(index)];
}

const mstp = (state) => {
  return {
    questBank: state.studentReducer.questions,
    student_record: state.studentReducer.user.progress,
  };
};
export default connect(mstp)(result_page);
