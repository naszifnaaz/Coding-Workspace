//Creating action types

export const ADD_COUNT = "ADD_COUNT";
export const RED_COUNT = "RED_COUNT";

export const ADD_TODO = "ADD_TODO";

//Creating action creator for each action type
export const addCount = (payload) => {
  return {
    type: ADD_COUNT,
    payload: payload,
  };
};

export const redCount = (payload) => {
  return {
    type: RED_COUNT,
    payload,
  };
};

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};
