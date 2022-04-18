import { useState, useEffect } from "react";
export const AddStudent = () => {
  const [formState, setFormState] = useState({
    first_name: "",
    last_name: " ",
    email: "",
    gender: "",
    age: "",
    tenth_score: "",
    twelth_score: "",
    preferred_branch: "",
  });

  //handling form state
  function handleChange(e) {
    if (e.target.name == "first_name") {
      setFormState({
        ...formState,
        first_name: e.target.value,
      });
    }
    if (e.target.name == "last_name") {
      setFormState({
        ...formState,
        last_name: e.target.value,
      });
    }
    if (e.target.name == "email") {
      setFormState({
        ...formState,
        email: e.target.value,
      });
    }
    if (e.target.name == "gender") {
      setFormState({
        ...formState,
        gender: e.target.value,
      });
    }
    if (e.target.name == "age") {
      setFormState({
        ...formState,
        age: e.target.value,
      });
    }
    if (e.target.name == "tenth_score") {
      setFormState({
        ...formState,
        tenth_score: e.target.value,
      });
    }
    if (e.target.name == "twelth_score") {
      setFormState({
        ...formState,
        twelth_score: e.target.value,
      });
    }
    if (e.target.name == "preferred_branch") {
      setFormState({
        ...formState,
        preferred_branch: e.target.value,
      });
    }
  }

  //handling submit button
  async function handleSubmit(e) {
    e.preventDefault();

    //validating user data
    if (formState.age > 50) alert("age should be greater than 50");
    if (formState.tenth_score > 100 || formState.twelth_score > 100)
      alert("tenth and twelth score should be greater than 100");
    if (formState.first_name == "") alert("First name is required");
    if (formState.last_name == "") alert("Last name is required");
    if (formState.email == "") alert("Email is required");
    if (formState.age == "") alert("age is required");

    //adding data to backend
    addData(formState);
  }

  //adding data to backenb
  async function addData(formState) {
    const payload = JSON.stringify(formState);
    fetch("http://localhost:8080/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
    }).then(() => {
      alert("Student Details Added Successfully");
    });
  }
  return (
    <form className="addstudent" onSubmit={handleSubmit}>
      <div>
        Firstname:{" "}
        <input
          type="text"
          name="first_name"
          className="first_name"
          placeholder="enter first name"
          onChange={handleChange}
        />
      </div>
      <div>
        {" "}
        Last Name:
        <input
          type="text"
          name="last_name"
          className="last_name"
          placeholder="enter last name"
          onChange={handleChange}
        />
      </div>
      <div>
        {" "}
        Email:
        <input
          type="email"
          name="email"
          className="email"
          placeholder="enter email"
          onChange={handleChange}
        />
      </div>

      <div>
        Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
        <div>
          Male
          <input
            name="gender"
            className="male"
            type="radio"
            value={"male"}
            onChange={handleChange}
          />{" "}
          Female{" "}
          <input
            name="gender"
            className="female"
            type="radio"
            value={"female"}
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        Age{" "}
        <input
          type="number"
          name="age"
          className="age"
          placeholder="enter age"
          onChange={handleChange}
        />
      </div>
      <div>
        Tenth Score:{" "}
        <input
          type="number"
          name="tenth_score"
          className="tenth_score"
          placeholder="enter 10th score"
          onChange={handleChange}
        />{" "}
      </div>
      <div>
        Twelth Score:{" "}
        <input
          type="number"
          name="twelth_score"
          className="twelth_score"
          placeholder="enter 12th score"
          onChange={handleChange}
        />{" "}
      </div>
      <div>
        <select
          value={""} // select dropdown needs both value and onChange attributes
          name="preferred_branch"
          className="preferred_branch"
          onChange={handleChange}
        >
          <option value="law">law</option>
          <option value="commerce">commerce</option>
          <option value="science">science</option>
          <option value="sports">sports</option>
          <option value="arts">arts</option>
          <option value="acting">acting</option>
        </select>
      </div>

      <input className="submit" type="submit" value="Submit" />
      {
        // <div className="error"></div>
        // show this div with proper error before submitting form, if there's anything not provided
        // eg: first name missing, age cannot be greater than 100 etc
      }
    </form>
  );
};
