import { legacy_createStore as createStore } from "redux";
import { counterReducer } from "./reducer";

const initState = {
  counter: 0,
  todos: [],
};

export const store = createStore(counterReducer, initState);

store.subscribe(() => {
  console.log("Subscribe : ", store.getState());
});
