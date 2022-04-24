import "./App.css";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Users } from "./components/Users";
import { UserDetails } from "./components/UserDetails";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/about"} element={<About />}></Route>
        <Route path={"/users"} element={<Users />}></Route>
        <Route path={"/users/:id"} element={<UserDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;