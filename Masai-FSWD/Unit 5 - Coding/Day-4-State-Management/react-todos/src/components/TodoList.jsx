import "./TodoList.css";

function TodoList({ el }) {
  const handleDone = (e) => {
    const el = e.target;
    el.style.textDecoration = "line-through";
  };
  return (
    <div>
      <li className="todo-items" onClick={handleDone}>
        {el}
      </li>
    </div>
  );
}

export { TodoList };
