export const userLogin = (user) => {
  // console.warn("data received in action", user);
  return {
    type: "USER_LOGIN",
    payload: user,
  };
};

export const selectOptions = (options) => {
  return {
    type: "SELECT_OPTIONS",
    payload: options,
  };
};

export const setQuestions = (questions) => {
  return {
    type: "SET_QUESTIONS",
    payload: questions,
  };
};

export const setTotalQuestions = (length) => {
  return {
    type: "SET_TOTAL_QUESTIONS",
    payload: length,
  };
};
