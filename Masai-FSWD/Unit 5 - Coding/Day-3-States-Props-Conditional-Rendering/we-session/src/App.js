import "./App.css";
import { Category } from "./components/category.jsx";

function App() {
  const data = [
    {
      image:
        "https://rukminim2.flixcart.com/flap/128/128/image/3c0ed3a475254040.png?q=100",
      label: "Mobile",
    },
    {
      image:
        "https://rukminim2.flixcart.com/flap/128/128/image/176346e6dd7d4c19.png?q=100",
      label: "Fashion",
    },
  ];
  return (
    <div className="App">
      <div className="nav">
        {data.map((el) => {
          return <Category {...el} />;
        })}
      </div>
    </div>
  );
}

export default App;
