//Init State
const init = {
  counter: 0,
};

//Action
const incCount = { type: "INC_COUNT", payload: 1 };

//Reducer
const reducer = (store, { type, payload }) => {
  switch (type) {
    case "INC_COUNT":
      return { counter: store.counter + payload };
    default:
      return store;
  }
};

//Store class
class Store {
  constructor(reducer, init) {
    this.reducer = reducer;
    this.store = init;
  }

  //getState method to get the current state of the store
  getState() {
    return this.store;
  }

  //dispatch method to dispatch action to the store
  dispatch(action) {
    this.store = this.reducer(this.store, action);
  }
}

const store = new Store(reducer, init);
console.log(store.getState());

store.dispatch(incCount);

console.log(store.getState());
