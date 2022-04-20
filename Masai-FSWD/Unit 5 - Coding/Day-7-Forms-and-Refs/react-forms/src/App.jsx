import "./App.css";
import { Form } from "./components/Form";
import { ShowData } from "./components/ShowData";

function App() {
  return (
    <div className="App">
      <div>
        <Form />
        <ShowData />
      </div>
    </div>
  );
}

export default App;
