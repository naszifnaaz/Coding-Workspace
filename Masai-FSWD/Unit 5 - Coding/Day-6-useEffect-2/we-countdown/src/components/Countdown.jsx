import { useState, useEffect } from "react";

function Countdown() {
  const [count, setCount] = useState(15);

  //Countdown Timer
  useEffect(() => {
    const id = setInterval(() => {
      setCount((prev) => {
        if (prev <= 0) {
          clearInterval(id);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    //cleanup to prevent memory leaks
    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <div>
      <h3>Countdown</h3>
      <h2>{count}</h2>
    </div>
  );
}

export { Countdown };
