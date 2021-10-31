export const userLogin = (user) => {
  // console.warn("data received in action", user);
  return {
    type: "USER_LOGIN",
    payload: user,
  };
};
