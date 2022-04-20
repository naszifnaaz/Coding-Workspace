import { useState, useRef } from "react";

function Timer() {
  const [counter, setCounter] = useState(0);
  const [milli, setMilli] = useState(0.0);
  const idRef = useRef(null);
  const msRef = useRef(null);

  const startTimer = () => {
    idRef.current = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);

    // msRef.current = setInterval(() => {
    //   setMilli((prev) => prev + 1);
    // }, 10);
    msRef.current = setInterval(() => {
      setMilli((prev) => {
        if (prev >= 99) {
          return 0;
        }
        return prev + 1;
      });
    }, 10);
  };

  const stopTimer = () => {
    clearInterval(idRef.current);
    clearInterval(msRef.current);
  };

  const resetTimer = () => {
    setCounter(0);
    setMilli(0);
  };

  return (
    <div>
      <h1>
        {counter}.{milli}
      </h1>
      <button onClick={startTimer}>START</button>
      <button onClick={stopTimer}>STOP</button>
      <button onClick={resetTimer}>RESET</button>
    </div>
  );
}

export { Timer };
