import "./App.css";
import { Timer } from "./components/Timer";

function App() {
  const start = 5;
  const end = 20;
  return (
    <div className="App">
      <div>
        <Timer start={start} end={end} />
      </div>
    </div>
  );
}

export default App;
