import { useEffect, useState } from "react";
import React from "react";
import "./showStudents.css";
import { Student } from "./Student";

export const ShowStudents = () => {
  const [Stud, setStud] = useState([]);
  const [Sortby, setSortby] = useState("");
  const [Order, setOrder] = useState("");

  useEffect(() => {
    getData();
  }, []);

  //fetch call to get student data from server
  async function getData() {
    try {
      let data = await fetch("http://localhost:8080/students");
      data = await data.json();
      // renderTable(data);
      setStud(data);
    } catch (err) {
      console.log("Something went wrong", err);
    }
  }

  //sort functionality
  function handleSort() {
    console.log("Sorting", Sortby, Order);

    if (Order === "asc") {
      Stud.sort(function (a, b) {
        return a.age - b.age;
      });
    }

    if (Order === "desc") {
      Stud.sort(function (a, b) {
        return b.age - a.age;
      });
    }
  }

  return (
    <div>
      <div className="controls">
        <div>
          Sort By:{" "}
          <select
            // select dropdown needs both value and onChange
            className="sortby"
            onChange={(e) => setSortby(e.target.value)}
          >
            <option value="first_name">First Name</option>
            <option value="gender">Gender</option>
            <option value="age">Age</option>
            <option value="tenth_score">10th Score</option>
            <option value="twelth_score">12th Score</option>
          </select>
        </div>
        <div>
          Order:
          <select
            // select dropdown needs both value and onChange
            className="sortorder"
            onChange={(e) => setOrder(e.target.value)}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <button className="sort" onClick={() => handleSort()}>
          sort
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>10th Score</th>
            <th>12th Score</th>
            <th>Branch</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {/* populate all rows like below: */}
          {/* <tr className="row">
            <td className="first_name"></td>
            <td className="last_name"></td>
            <td className="email"></td>
            <td className="gender"></td>
            <td className="age"></td>
            <td className="tenth_score"></td>
            <td className="twelth_score"></td>
            <td className="preferred_branch"></td>
          </tr> */}
          {Stud.map((el) => {
            return <Student el={el} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
