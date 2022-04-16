import { useState, useEffect } from "react";

function Timer({ start, end }) {
  const [count, setCount] = useState(start);

  //   Increment Timer
  useEffect(() => {
    const id = setInterval(() => {
      setCount((prev) => {
        if (prev >= end) {
          clearInterval(id);
          return end;
        }
        return prev + 1;
      });
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <div>
      <p>timer starting from 5 till 20</p>
      <h1>{count}</h1>
    </div>
  );
}

export { Timer };
