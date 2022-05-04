import { store } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../redux/auth/action";
import { Navigate } from "react-router-dom";

export const Logout = () => {
  const dispatch = useDispatch();
  dispatch(userLogout());
  console.log(store.getState());
  return <Navigate to={"/"} />;
};
