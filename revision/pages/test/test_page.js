import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import TopBar from "../../src/components/TopBar";
import PopModal from "../../src/components/PopModal";

function saveProgress(score) {
  localStorage.setItem("score", JSON.stringify(score));
}

const test_page = (props) => {
  // console.log(props.student_record);
  const data = props.questBank;
  const arrayofNulls = new Array(data.length).fill("x");
  const score = {
    total: data.length,
    answered: [],
    unanswered: [],
    marked: [],
    correct: [],
    incorrect: [],
    clickedAnsList: arrayofNulls,
    correctAnsList: [],
  };
  const [progress, setProgress] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("score")
        ? JSON.parse(localStorage.getItem("score"))
        : score
      : score
  );
  const [activeQ, setActiveQ] = useState(0);
  const [clickedOption, setClickedOption] = useState(progress.clickedAnsList);

  const [modalShow, setModalShow] = useState(false);
  function addToAnswered() {
    var answeredQuest = progress.answered;
    answeredQuest.indexOf(activeQ) === -1
      ? answeredQuest.push(activeQ)
      : console.log("already answered");
    // console.log(activeQ, " is present in ", answeredQuest);
    setProgress({ ...progress, answered: answeredQuest });
    // console.log(progress);
  }
  function addToClicked(value) {
    var clickedList = progress.clickedAnsList;
    clickedList[activeQ] = value;
    // console.log("new Array", clickedList);
    setProgress({ ...progress, clickedAnsList: clickedList });
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
    // const tempArray = [...clickedOption];
    // tempArray[activeQ] = e.target.getAttribute("position");
    // setClickedOption([...tempArray]);
    // setClickedOption({
    //   ...clickedOption,
    //   [activeQ]: e.target.getAttribute("position"),
    // });
    // console.log("clickedOPtion", clickedOption);
    // setProgress({ ...progress, clickedAnsList: clickedOption });
    addToClicked(e.target.getAttribute("position"));
    addToAnswered();
    const clickedAnswer = e.target.innerHTML.toLowerCase();
    const correctAns = data[activeQ].question.correct_ans.toLowerCase();
    addToResult(clickedAnswer, correctAns);
    saveProgress(progress);
  };

  const onNextClick = () => {
    setActiveQ(activeQ + 1);
    setProgress({ ...progress, clickedAnsList: clickedOption });
  };

  const onPreviousClick = () => {
    setActiveQ(activeQ - 1);
    setProgress({ ...progress, clickedAnsList: clickedOption });
  };

  const onFinishClick = () => {
    var numberOfCorrects = progress.correct.length;
    alert("Finish", numberOfCorrects);
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
                <div className="col-sm-8 mx-auto quest-box">
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
                <div className="col-sm-4 mx-auto navi-box">
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
                            ? { backgroundColor: "rgb(128, 192, 33)" }
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

function addAfter(array, index, newItem) {
  return [...array.slice(0, index), newItem, ...array.slice(index)];
}

const mstp = (state) => {
  return {
    questBank: state.studentReducer.questions,
    student_record: state.studentReducer.user.progress,
  };
};
export default connect(mstp)(test_page);
