import { useState, useEffect } from "react";

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  //Calling data using useEffect hook
  useEffect(() => {
    getData();
  }, []);

  //Fetch call from dummy server
  async function getData() {
    try {
      let data = await fetch("http://localhost:8080/todos").then((d) =>
        d.json()
      );

      console.log("data", data);
      setTodos(data);
    } catch (err) {
      console.log(err);
    }
  }

  //Adding a new Todo using POST request
  function addTodo(data) {
    fetch("http://localhost:8080/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data),
    }).then(() => {
      getData();
    });
  }
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter Todo"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={() => addTodo({ todo })}>Add Todo</button>
      </div>
      <div>
        {todos.map((el) => {
          return <div>{el.todo}</div>;
        })}
      </div>
    </div>
  );
};
