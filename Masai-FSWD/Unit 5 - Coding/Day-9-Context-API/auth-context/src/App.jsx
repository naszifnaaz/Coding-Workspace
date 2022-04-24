import "./App.css";
import { NavBar } from "./components/NavBar";
import { AuthContext } from "./contexts/AuthContext";
import { useContext } from "react";
import { Status } from "./components/Status";

function App() {
  const { isAuth } = useContext(AuthContext);
  return (
    <div className="App">
      <NavBar />
      <div>{isAuth ? <Status /> : null}</div>
    </div>
  );
}

export default App;
