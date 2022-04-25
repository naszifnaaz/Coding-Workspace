import "./App.css";
import { NavBar } from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import { Banner } from "./components/Banner";
import { Clothing } from "./components/Clothing";
import { Jewellery } from "./components/Jewellery";
import { Electronics } from "./components/Electronics";
import { Footer } from "./components/Footer";
import { NotFound } from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Banner />}></Route>
        <Route path="/clothing" element={<Clothing />}></Route>
        <Route path="/jewellery" element={<Jewellery />}></Route>
        <Route path="/electronics" element={<Electronics />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
