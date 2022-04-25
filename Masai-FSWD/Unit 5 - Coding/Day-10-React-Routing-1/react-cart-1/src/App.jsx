import "./App.css";
import { NavBar } from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import { Banner } from "./components/Banner";
import { Clothing } from "./components/Clothing";
import { Painting } from "./components/Painting";
import { Electronics } from "./components/Electronics";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Banner />}></Route>
        <Route path="/clothing" element={<Clothing />}></Route>
        <Route path="/painting" element={<Painting />}></Route>
        <Route path="/electronics" element={<Electronics />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
