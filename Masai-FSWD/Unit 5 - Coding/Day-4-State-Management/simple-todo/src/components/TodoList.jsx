import "./TodoList.css";

const TodoList = ({ todo }) => {
  return (
    <div className="todo-list">
      <li className="list-items">{todo}</li>
      <button className="btn-danger">DELETE</button>
    </div>
  );
};

export { TodoList };
