import React from "react";
import { TaskItems } from "./taskitems.jsx";

function Task() {
  const [query, setQuery] = React.useState("");
  const [tasks, setTask] = React.useState([]);
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const addTask = () => {
    const payload = {
      title: query,
      status: false,
    };
    let newTasks = [...tasks, payload];
    setTask(newTasks);
  };
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter task"
          value={query}
          onChange={handleChange}
        ></input>
        <button onClick={() => addTask()}>ADD TASK</button>
      </div>
      <div>
        {tasks.map((item, index) => {
          return (
            <TaskItems
              title={item.title}
              status={item.status}
              color={index % 2 === 0 ? "red" : "blue"}
            />
          );
        })}
      </div>
    </div>
  );
}
export { Task };
