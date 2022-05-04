import { LOGIN, LOGOUT } from "./action";

const initState = {
  isAuth: false,
};

export const authReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return { ...store, isAuth: payload };
    case LOGOUT:
      return { ...store, isAuth: payload };
    default:
      return store;
  }
};
