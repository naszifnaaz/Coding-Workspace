import React from "react";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

const Todo = () => {
  const [Todos, setTodos] = React.useState([]);
  const getTodo = (todo) => {
    console.log("Recieved", todo);
    setTodos([...Todos, todo]);
  };
  return (
    <div>
      <TodoInput getTodo={getTodo} />
      <ul>
        {Todos.map((el) => {
          return <TodoList todo={el} />;
        })}
      </ul>
    </div>
  );
};

export { Todo };
