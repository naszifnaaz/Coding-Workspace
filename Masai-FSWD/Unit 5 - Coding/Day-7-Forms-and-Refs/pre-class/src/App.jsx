import "./App.css";
import { Form } from "./components/Form";

function App() {
  return (
    <div className="App">
      <div>
        <Form />
      </div>
    </div>
  );
}

export default App;

/*
useRef hook

const xRef = useRef(10); 
this will be always stored as an object {current : 10}
to access the xRef -> current.xRef = current.xRef + 1
*/
