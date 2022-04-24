import "./App.css";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Users } from "./components/Users";
import { UserDetails } from "./components/UserDetails";
import { PrivateRoute } from './components/PrivateRoute'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/about"} element={
          <PrivateRoute><About /></PrivateRoute>}></Route>
        <Route path={"/users"} element={<Users />}></Route>
        <Route path={"/users/:id"} element={
          <PrivateRoute><UserDetails /></PrivateRoute>}></Route>
      </Routes>
    </div>
  );
}

export default App;