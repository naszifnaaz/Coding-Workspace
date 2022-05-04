import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import "antd/dist/antd.css";
import { Login } from "./components/Login";
import { Todo } from "./components/Todo";
import { Logout } from "./components/Logout";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/login"} element={<Login />}></Route>
        <Route path={"/logout"} element={<Logout />}></Route>
        <Route path={"/todo"} element={<Todo />}></Route>
      </Routes>
    </div>
  );
}

export default App;
