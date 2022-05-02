function reducer(store, { type, payload }) {
  switch (type) {
    case "ADD_TODO":
      return { ...store, todos: [...store.todos, payload] };
    default:
      return store;
  }
}

let initState = {
  todos: [],
};

let store = Redux.createStore(reducer, initState);
console.log(store.getState());

function addTodo() {
  let value = document.getElementById("todo").value;
  let payload = {
    type: "ADD_TODO",
    payload: {
      title: value,
      status: false,
    },
  };
  store.dispatch(payload);
  console.log(store.getState());
  render();
}

function render() {
  document.getElementById("todoList").innerHTML = "";
  let val = store.getState();
  val = val.todos;

  val.map((el) => {
    let div = document.createElement("div");
    let li = document.createElement("p");
    li.innerHTML = el.title;
    li.setAttribute("class", "list-item");

    let button = document.createElement("button");
    if (el.status == false) button.innerHTML = "DONE";
    else button.innerHTML = "UNDO";
    div.append(li, button);
    document.getElementById("todoList").append(div);
  });
}
