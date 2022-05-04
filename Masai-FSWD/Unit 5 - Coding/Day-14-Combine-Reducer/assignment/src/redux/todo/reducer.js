import { ADD_TODO } from "./action";

const initState = {
  todos: [],
};

export const todosReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return { ...store, todos: [...store.todos, payload] };
    default:
      return store;
  }
};
