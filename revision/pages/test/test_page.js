import React, { useState } from "react";
import { connect } from "react-redux";
import TopBar from "../../src/components/TopBar";

const test_page = (props) => {
  const data = props.questBank;
  const [activeQ, setActiveQ] = useState(0);
  // console.log(data[0].question.correct_ans);

  const onOptionClick = (e) => {
    // console.log("you clicked on : ", e.target.innerHTML.toLowerCase());
    const clickedAnswer = e.target.innerHTML.toLowerCase();
    const correctAns = data[activeQ].question.correct_ans.toLowerCase();
    if (clickedAnswer === correctAns) {
      console.log("Your answer is correct");
    } else {
      console.log("incorrect answer");
    }
    // console.log("correct ans is ", correctAns);
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
                            className="options"
                            onClick={(e) => onOptionClick(e)}
                          >
                            {element}
                          </li>
                        );
                      })}
                    </ol>
                  </div>
                </div>
                <div className="col-4 mx-auto navi-box box"></div>
              </div>
              <div className="row">
                <div className="col-12 mx-auto footer-box box"></div>
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
  };
};
export default connect(mstp)(test_page);
