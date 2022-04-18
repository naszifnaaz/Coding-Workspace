import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";
import { useState } from "react";
import "./App.css";

function App() {
  const [toggle, setToggle] = useState("true");

  //handling toggle change
  function handleToggle() {
    setToggle(!toggle);
  }
  return (
    <div className="App">
      <button className="togglebtn" onClick={() => handleToggle()}>
        {toggle ? "Add Student" : "Show Students"}
      </button>
      <div>{toggle ? <ShowStudents /> : <AddStudent />}</div>
      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
    </div>
  );
}

export default App;
