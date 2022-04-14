import "./App.css";
import React from "react";
import { Task } from "./task/task.jsx";

function App() {
  const [counter, setCounter] = React.useState(0);

  const handleIncrement = (value) => {
    setCounter(counter + value);
  };

  const handleDecrement = (value) => {
    setCounter(counter - value);
  };
  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={() => handleIncrement(1)}>ADD</button>
      <button onClick={() => handleDecrement(1)}>REDUCE</button>
      <Task />
    </div>
  );
}

export default App;
