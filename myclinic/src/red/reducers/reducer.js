const initialState = {
  user: {
    username: "",
    user: "Dr Anup Padamwar",
  },
  changeUser: { change: false, working: true },
};

const myReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case "USER_LOGIN": {
      return { state: action.payload };
    }
    case "UPDATE_USER": {
      return { ...state, user: action.payload.user };
    }
    default:
      return { state };
  }
};

export default myReducer;
