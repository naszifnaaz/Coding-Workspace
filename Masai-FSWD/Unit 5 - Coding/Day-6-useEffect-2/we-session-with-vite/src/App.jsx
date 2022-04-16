import { useState } from "react";
import "./App.css";
import { Todos } from "./components/Todos";

function App() {
  const [show, setShow] = useState(true);

  //Toggling Show and Hide
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="App">
      {show ? <Todos /> : null}
      <button
        onClick={() => {
          handleShow();
        }}
      >
        {show ? "HIDE" : "SHOW"}
      </button>
    </div>
  );
}

export default App;
