import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/Todos/action";
export const Todo = () => {
  const [todo, setTodo] = useState("");
  const todos = useSelector(
    (store) => store.todos.todos,
    (prev, curr) => {
      /*
      check equality using callback functions
      incase there is unneccessary or no renders happening
      particularly helpful incase of objects, since they are reference types
      check equality and return true or false
      false - renders
      true - not render
      */
    }
  );
  const dispatch = useDispatch();

  const handleAdd = () => {
    const payload = {
      title: todo,
      status: false,
    };

    fetch("http://localhost:8080/todos", {
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      method: "POST",
    })
      .then(setTodo(""))
      .then(getData());
  };

  //getting data from json server
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let data = await fetch("http://localhost:8080/todos");
    data = await data.json();
    console.log(data);
    dispatch(addTodo(data));
  }
  return (
    <div>
      <h3>TODO</h3>
      <input
        value={todo}
        type="text"
        placeholder="add todo"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handleAdd}>Add Todo</button>

      <div>
        <h3>Todo List</h3>
        {todos.map((el, index) => {
          return <div key={index}>{el.title}</div>;
        })}
      </div>
    </div>
  );
};
