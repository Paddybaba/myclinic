import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import TopBar from "../../src/components/TopBar";

const test_page = (props) => {
  // console.log(props.student_record);
  const data = props.questBank;
  const score = {
    total: data.length,
    answered: [],
    unanswered: [],
    marked: [],
    correct: [],
    incorrect: [],
  };
  const [activeQ, setActiveQ] = useState(0);
  const [clickedOption, setClickedOption] = useState([]);
  const [progress, setProgress] = useState(score);

  // console.log(clickedOption);
  useEffect(() => {
    console.log("total questions :", progress.total);
  }, []);
  const onOptionClick = (e) => {
    const tempArray = [...clickedOption];
    tempArray[activeQ] = e.target.getAttribute("position");
    setClickedOption([...tempArray]);
    const clickedAnswer = e.target.innerHTML.toLowerCase();
    const correctAns = data[activeQ].question.correct_ans.toLowerCase();
    if (clickedAnswer === correctAns) {
      console.log("Your answer is correct");
    } else {
      console.log("incorrect answer");
    }
  };

  const onNextClick = () => {
    setActiveQ(activeQ + 1);
  };

  const onPreviousClick = () => {
    setActiveQ(activeQ - 1);
  };

  try {
    let currentQuestion = data[activeQ].question;
    return (
      <>
        <div className="container-fluid test-page">
          <TopBar />
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-8 mx-auto quest-box">
                  <div className="row quest-toprow">
                    <div className="col-6"> Question No. {activeQ + 1}</div>
                    <div className="col-6 text-center">Marks : 5</div>
                  </div>
                  <div className="row ">
                    <div className="col-12 quest-question">
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
                                index == clickedOption[activeQ]
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
                <div className="col-4 mx-auto navi-box box">
                  <p>Total Questions : {progress.total}</p>
                  {data.map((element, index) => {
                    return (
                      <div style={{ float: "left", margin: 5 }}>
                        {index + 1}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="row">
                <div className="col-12 mx-auto footer-box box">
                  <button
                    onClick={() => onPreviousClick()}
                    style={{ visibility: activeQ == 0 ? "hidden" : "visible" }}
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => onNextClick()}
                    style={{
                      visibility:
                        activeQ == data.length - 1 ? "hidden" : "visible",
                    }}
                  >
                    Next
                  </button>
                  <button>Finish</button>
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

const mstp = (state) => {
  return {
    questBank: state.studentReducer.questions,
    student_record: state.studentReducer.user.progress,
  };
};
export default connect(mstp)(test_page);
