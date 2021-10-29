const initialState = {
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
function myReducer(state = initialState, action) {
  switch (action.type) {
    case "USER_LOGIN": {
      return {
        ...state,
        user: action.payload,
        questions: { ...state.questions, total: 50 },
      };
    }
    case "USER_LOGOUT": {
    }
    case "SUBMIT_ANSWER": {
    }
    default:
      return { ...state };
  }
}

export default myReducer;
