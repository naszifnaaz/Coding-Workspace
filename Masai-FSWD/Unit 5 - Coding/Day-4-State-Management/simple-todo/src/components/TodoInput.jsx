import React from "react";

const TodoInput = ({ getTodo }) => {
  const [todo, setTodo] = React.useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Todo"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button onClick={() => getTodo(todo)}>Add Todo</button>
    </div>
  );
};

export { TodoInput };
