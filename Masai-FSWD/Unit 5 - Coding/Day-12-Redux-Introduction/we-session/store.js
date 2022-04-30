//Setting up the Store

import { legacy_createStore as createStore } from "redux";

//Make action types
const ADD_TODO = "ADD_TODO";
const ADD_COUNT = "ADD_COUNT";


//Make action Creators
const addTodo = (title) => {
    return {
        type: ADD_TODO,
        payload: {
            title: title,
            status: false
        }
    }
}

//how to update store
//always return something
const reducer = (store, action) => {
    // if (action.type === "ADD_COUNT")
    //     return { ...store, counter: store.counter + action.payload }

    // if (action.type === "ADD_TODO")
    //     return { ...store, todos: [...store.todos, action.payload] }

    // return store;

    switch (action.type) {
        case "ADD_TODO": return { ...store, todos: [...store.todos, action.payload] };
        case "ADD-COUNT": return { ...store, counter: store.counter + action.payload };
        default: return store;
    }
}

//Initial State
const initState = {
    counter: 0,
    todos: [],
    theme: "light"
}

const store = createStore(reducer, initState);

//Initial state
console.log("Initial State", store.getState());

//dispatch function
store.dispatch({ type: "ADD_COUNT", payload: 1 })

//Current State
console.log("Current State after dispatching counter", store.getState());

store.dispatch({ type: "ADD_TODO", payload: { title: "Learn Redux", status: false } })
console.log("Current State after dispatching todo", store.getState());


store.dispatch({ type: "ADD_TODO", payload: { title: "Learn Typescript", status: false } })
console.log("Current State after dispatching todo", store.getState());


//using action types and action creators for more cleaner code
store.dispatch(addTodo("Learn FLUX"));
console.log("Current State after dispatching todo", store.getState());