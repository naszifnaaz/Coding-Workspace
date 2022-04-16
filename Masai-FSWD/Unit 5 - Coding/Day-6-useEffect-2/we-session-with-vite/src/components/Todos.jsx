import { useState, useEffect } from "react";

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  //Calling data using useEffect hook
  useEffect(() => {
    console.log("Mounting Todos...");
    getData();

    //this function is called cleanup function (currying function / closures)
    return () => {
      console.log("Unmounting Todos...");
    };
  }, [page]);

  //Fetch call from dummy server
  async function getData() {
    try {
      let data = await fetch(
        `http://localhost:8080/todos?_page=${page}&_limit=3`
      ).then((d) => d.json());
      setTodos(data);
      setLoading(false);
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

  //Handling pagination requests
  function handlePage(value) {
    if (page + value == 0 || page + value >= todos.length) return;
    setPage(page + value);
  }
  return loading ? (
    " Loading . . . "
  ) : (
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
          return <div key={el.id}>{el.todo}</div>;
        })}
      </div>
      <button onClick={() => handlePage(-1)}>Prev</button>
      <button onClick={() => handlePage(1)}>Next</button>
    </div>
  );
};
