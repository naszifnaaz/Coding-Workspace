import logo from "./logo.svg";
import "./App.css";

function App() {
  const food = "Pizza";
  const age = 19;
  const skills = ["mongo", "express", "react", "node", "dsa"];
  const hobbies = ["gaming", "cycling", "reading", "yoga"];
  return (
    <div className="App">
      <h1>
        Your favourite food is {food} and you are {age} years old.{" "}
      </h1>
      <h2>You are {age > 18 ? "ELIGIBLE" : "NOT ELIGIBLE"} for license.</h2>
      <div>
        <h3>My skills are</h3>
        <ul>
          {skills.map((skill) => {
            return <li className="skill-items">{skill}</li>;
          })}
        </ul>
      </div>
      <div>
        <h3>My hobbies are</h3>
        <ul>
          {hobbies.map((el) => {
            return <Hobby hobbies={el} />;
          })}
        </ul>
      </div>
    </div>
  );
}

//Functional component
function Hobby({ hobbies }) {
  return <li className="skill-items">{hobbies}</li>;
}

export default App;
