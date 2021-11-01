const initialState = {
  user: {
    student: "",
    username: "",
    options: {
      subject: "",
      author: "",
      year: "",
    },
    progress: {
      total: "",
      anwered: [],
      unanswered: [],
      marked: [],
      correct: [],
      incorrect: [],
    },
  },
  questions: [{}],
};
function studentReducer(state = initialState, action) {
  // console.log("action received in reducer", action);
  switch (action.type) {
    case "USER_LOGIN": {
      return {
        ...state,
        user: {
          ...state.user,
          student: action.payload.student,
          username: action.payload.username,
        },
      };
    }
    case "USER_LOGOUT": {
    }
    case "SELECT_OPTIONS": {
      return {
        ...state,
        options: action.payload,
      };
    }
    default:
      return { ...state };
  }
}

export default studentReducer;
