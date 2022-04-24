import "./App.css";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Products } from "./components/Products";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/about"} element={<About />}></Route>
        <Route path={"/product/:id"} element={<Products />}></Route>
      </Routes>
    </div>
  );
}

export default App;
