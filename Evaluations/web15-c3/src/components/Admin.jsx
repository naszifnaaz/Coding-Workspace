import axios from "axios";
import { useState } from "react";

export const Admin = () => {
  const [formData, setFormData] = useState({
    employee_name: "",
    employee_id: "",
    title: "",
    salary: 0,
    image: "",
    username: "",
    password: "",
    tasks: [],
    status: "",
    team: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    fetch("http://localhost:8080/employee", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="createEmployee"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "30%",
        textAlign: "center",
        margin: " 5% 40%",
        padding: "10px",
      }}
    >
      <input
        type="text"
        placeholder="Employee Name"
        name="employee_name"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Employee id"
        name="employee_id"
        onChange={handleChange}
      />
      <select name="title" onChange={handleChange}>
        <option value="intern">Intern</option>
        <option value="Jr Software Developer">Jr Software Developer</option>
        <option value="Sr Software Developer">Sr Software Developer</option>
        <option value="Team Lead">Team Lead</option>
      </select>
      <input
        type="number"
        placeholder="Salary"
        name="salary"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Image"
        name="image"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="User Name"
        name="username"
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Enter tasks separated by commas"
        name="tasks"
        onChange={handleChange}
      />
      <select name="status" id="status" onChange={handleChange}>
        <option value="">Select Status</option>
        <option value="terminated">Terminated</option>
        <option value="working">Working</option>
      </select>
      <select name="team" id="team" onChange={handleChange}>
        <option value="">Select team</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="qa">QA</option>
      </select>
      <input className="createUser" type="submit" value={"submit"} />
    </form>
  );
};
