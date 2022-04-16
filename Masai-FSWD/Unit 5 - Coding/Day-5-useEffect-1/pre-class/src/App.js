import "./App.css";
import React from "react";

function App() {
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    document.title = `You have clicked ${counter} times`;
  }, [counter]);

  return (
    <div className="App">
      <h3>{counter}</h3>
      <button onClick={() => setCounter(counter + 1)}> ADD</button>
    </div>
  );
}

export default App;
