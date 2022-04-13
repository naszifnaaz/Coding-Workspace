import logo from "./logo.svg";
import "./App.css";

function App() {
  const items = ["Services", "Projects", "About"];
  return (
    <div className="App">
      <nav>
        <div id="logo">LOGOBACKERY</div>
        <ul id="nav-links">
          {items.map((el) => {
            return <Services item={el} />;
          })}
        </ul>
        <button id="contact-btn">Contact</button>
      </nav>
    </div>
  );
}

function Services(props) {
  return <li className="nav-link">{props.item}</li>;
}

export default App;
