import { useState, useEffect } from "react";
import { Employee } from "./Employee";
import "./showData.css";
function ShowData() {
  const [Data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      let data = await fetch("http://localhost:8080/employees");
      data = await data.json();
      setData(data);
    } catch (err) {
      console.log("Something went wrong", err);
    }
  }
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Gender</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Marital Status</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {Data.map((el) => {
            console.log(el);
            return <Employee el={el} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export { ShowData };
