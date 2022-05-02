import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { counterReducer } from "./Counter/reducer";
import { todosReducer } from "./Todos/reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
});
/*
//Midlleware in Redux (closures or currying)
function middleware(store) {
  return function (next) {
    return function (action) {
      //Code goes here
    };
  };
}
*/

//Short hand using ES6
const middleware = (store) => (next) => (action) => {
  console.log("Action", action);
  next(action);
};

export const store = createStore(
  rootReducer,
  applyMiddleware(middleware)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  console.log("Subscribe : ", store.getState());
});

console.log("State", store.getState());
