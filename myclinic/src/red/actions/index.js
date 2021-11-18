export const userLogin = (user) => {
  return {
    type: "USER_LOGIN",
    payload: user,
  };
};

export const updateUser = () => {
  return {
    type: "UPDATE_USER",
  };
};
