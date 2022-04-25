import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const StatContext = createContext();

export const StatContextProvider = ({ children }) => {
  let count = 0;
  useEffect(() => {
    axios.get(" http://localhost:8080/employee").then((res) => {
      count = res.data.length;
      console.log(count);
    });
  }, []);
  const [total, setTotal] = useState(10);
  const [terminated, setTerminated] = useState(0);
  const [promoted, setPromoted] = useState(0);
  const [total_new, setTotalNew] = useState(0);
  return (
    <StatContext.Provider
      value={{
        total,
        setTotal,
        terminated,
        setTerminated,
        promoted,
        setPromoted,
        total_new,
        setTotalNew,
      }}
    >
      {children}
    </StatContext.Provider>
  );
};
