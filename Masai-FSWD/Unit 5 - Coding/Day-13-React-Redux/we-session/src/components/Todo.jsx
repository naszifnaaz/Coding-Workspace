import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/action";
export const Todo = () => {
  const [todo, setTodo] = useState("");
  const todos = useSelector((store) => store.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(
      addTodo({
        title: todo,
        status: false,
      })
    );
  };
  return (
    <div>
      <h3>TODO</h3>
      <input
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
