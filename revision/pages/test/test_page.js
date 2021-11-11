import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import TopBar from "../../src/components/TopBar";
import PopModal from "../../src/components/PopModal";
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

  const [modalShow, setModalShow] = useState(false);
  function addToAnswered() {
    var answeredQuest = progress.answered;
    answeredQuest.indexOf(activeQ) === -1
      ? answeredQuest.push(activeQ)
      : console.log("already answered");
    // console.log(activeQ, " is present in ", answeredQuest);
    setProgress({ ...progress, answered: answeredQuest });
    console.log(progress);
  }

  function addToResult(clicked, correct) {
    var correctArray = progress.correct;
    var incorrectArray = progress.incorrect;
    if (clicked === correct) {
      correctArray.indexOf(activeQ) === -1 ? correctArray.push(activeQ) : {};
      incorrectArray.indexOf(activeQ) !== -1
        ? incorrectArray.splice(incorrectArray.indexOf(activeQ), 1)
        : {};
      setProgress({ ...progress, correct: correctArray });
    } else {
      incorrectArray.indexOf(activeQ) === -1
        ? incorrectArray.push(activeQ)
        : {};
      correctArray.indexOf(activeQ) !== -1
        ? correctArray.splice(correctArray.indexOf(activeQ), 1)
        : {};
      setProgress({ ...progress, incorrect: incorrectArray });
    }
  }

  // console.log(clickedOption);

  const onOptionClick = (e) => {
    const tempArray = [...clickedOption];
    tempArray[activeQ] = e.target.getAttribute("position");
    setClickedOption([...tempArray]);
    // console.log(clickedOption);

    addToAnswered();
    const clickedAnswer = e.target.innerHTML.toLowerCase();
    const correctAns = data[activeQ].question.correct_ans.toLowerCase();
    addToResult(clickedAnswer, correctAns);
  };

  const onNextClick = () => {
    setActiveQ(activeQ + 1);
  };

  const onPreviousClick = () => {
    setActiveQ(activeQ - 1);
  };

  const onFinishClick = () => {
    var numberOfCorrects = progress.correct.length;
    alert("Finish", numberOfCorrects);
  };
  try {
    let currentQuestion = data[activeQ].question;
    return (
      <>
        <div className="container-fluid test-page gx-0">
          <TopBar />
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
                  <PopModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    progress={progress}
                  />
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
