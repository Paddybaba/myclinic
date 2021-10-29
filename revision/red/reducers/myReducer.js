const initalState = {
  user: "",
  questions: {
    total: "",
    anwered: [],
    unanswered: [],
    marked: [],
    correct: [],
    incorrect: [],
  },
};

const myReducer = (state = initalState, action) => {
  switch (action.type) {
    case "USER_LOGIN": {
      console.log(action.payload);
      return { ...state, user: action.payload };
    }
    case "USER_LOGOUT": {
    }
    case "SUBMIT_ANSWER": {
    }
    default:
      return { state };
  }
};

export default myReducer;
