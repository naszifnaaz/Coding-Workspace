import React from "react";

function Counter() {
  const [counter, setCounter] = React.useState(0);
  const handleChange = (value) => {
    setCounter(counter + value);
  };
  const double = () => {
    setCounter(counter + counter);
  };
  return (
    <div>
      <h1 style={{ color: counter % 2 == 0 ? "green" : "red" }}>{counter}</h1>
      <button onClick={() => handleChange(1)}>ADD</button>
      <button onClick={() => handleChange(-1)}>REDUCE</button>
      <button onClick={() => double()}>DOUBLE</button>
    </div>
  );
}

export { Counter };
