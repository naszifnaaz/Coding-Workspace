import { legacy_createStore as createStore, combineReducers } from "redux";
import { authReducer } from "./auth/reducer";
import { todosReducer } from "./todo/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  todos: todosReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  console.log("Subscribe : ", store.getState());
});

console.log("State", store.getState());
