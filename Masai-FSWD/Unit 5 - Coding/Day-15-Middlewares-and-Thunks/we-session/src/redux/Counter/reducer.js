import { ADD_COUNT } from "./action";

const initState = {
  counter: 0,
};

export const counterReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case ADD_COUNT:
      return { ...store, counter: store.counter + payload };
    default:
      return store;
  }
};
