import logo from "./logo.svg";
import "./App.css";

function App() {
  const os = ["Android", "Blackberry", "iPhone", "Windows Phone"];
  const manufacturer = ["Samsung", "HTC", "Micromax", "Apple"];
  return (
    <div className="App">
      <Heading title="Mobile Operating System" />
      <ul>
        {os.map((el) => {
          return <Subheading item={el} />;
        })}
      </ul>
      <Heading title="Mobile Manufacturer" />
      <ul>
        {manufacturer.map((el) => {
          return <Subheading item={el} />;
        })}
      </ul>
    </div>
  );
}

function Heading(props) {
  return <h2 className="heading">{props.title}</h2>;
}

function Subheading(props) {
  return <li className="list-items">{props.item}</li>;
}

export default App;
