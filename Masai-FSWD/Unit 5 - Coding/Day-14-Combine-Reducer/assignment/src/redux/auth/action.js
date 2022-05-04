export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const userLogin = () => {
  return {
    type: LOGIN,
    payload: true,
  };
};

export const userLogout = () => {
  return {
    type: LOGOUT,
    payload: false,
  };
};
