import React from "react";
import "./index.css";

function App() {
  const [score, setScore] = React.useState(76);
  let [wicket, setWicket] = React.useState(2);
  const [ball, setBall] = React.useState(50);

  const addScore = (value) => {
    if (score + value > 100) {
      alert("India Won");
    }
    setScore(score + value);
  };

  const addWicket = (value) => {
    if (wicket + value > 12) setWicket(12);
    else setWicket(wicket + value);
  };

  const addBall = (value) => {
    setBall(ball + value);
  };

  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score: <h1 className="scoreCount">{score}</h1>
        </div>
        <div>
          Wicket: <h1 className="wicketCount">{wicket}</h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {((ball % 6) / 10 + Math.floor(ball / 6)).toFixed(1)}
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={() => addScore(1)}>
          Add 1
        </button>
        <button className="addScore4" onClick={() => addScore(4)}>
          Add 4
        </button>
        <button className="addScore6" onClick={() => addScore(6)}>
          Add 6
        </button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={() => addWicket(1)}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={() => addBall(1)}>Add 1</button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
    </div>
  );
}

export default App;
