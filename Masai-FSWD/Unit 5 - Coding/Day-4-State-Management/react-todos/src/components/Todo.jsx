import { useState } from "react";
import { TodoList } from "./TodoList";

function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add Todo" onChange={handleChange} />
        <input type="submit" value="Add Todo" />
      </form>

      <div>Active Todos</div>
      <ul>
        {todos.map((el) => {
          return <TodoList el={el} />;
        })}
      </ul>
    </div>
  );
}

export { Todo };
