import { useState } from "react";
import "./form.css";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    address: "",
    department: "",
    salary: "",
    marital: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(" http://localhost:8080/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(formData),
    });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          id="name"
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Enter your age"
          id="age"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter your address"
          id="address"
          onChange={handleChange}
        />
        <select value={""} id="department" onChange={handleChange}>
          <option value="developer">Developer</option>
          <option value="tester">Tester</option>
          <option value="analyst">Analyst</option>
          <option value="manager">Manager</option>
          <option value="hr">HR</option>
        </select>
        <input
          type="number"
          id="salary"
          placeholder="Enter your salary"
          onChange={handleChange}
        />
        <label htmlFor="marital">Marital Status</label>
        <span>Married</span>
        <input
          type="checkbox"
          id="marital"
          value="married"
          onChange={handleChange}
        />
        <span>Single</span>
        <input
          type="checkbox"
          id="marital"
          value="single"
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export { Form };
