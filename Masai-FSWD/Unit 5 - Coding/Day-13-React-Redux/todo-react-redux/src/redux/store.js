import { legacy_createStore as createStore } from "redux";
import { todosReducer } from "./Todos/reducer";

export const store = createStore(
  todosReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  console.log("Subscribe : ", store.getState());
});

console.log("State", store.getState());
