import { useState, useEffect } from "react";

function Form() {
  const [formState, setFormState] = useState({
    username: "",
    age: "",
  });

  //Handling form state
  const handleChange = (e) => {
    if (e.target.id === "username") {
      setFormState({
        ...formState,
        username: e.target.value,
      });
    }

    if (e.target.id === "age") {
      setFormState({
        ...formState,
        age: e.target.value,
      });
    }
  };

  //handling fom submit
  const handleSubmit = (e) => {
    e.preventDefault();
    //To do form validation
    //and do a api call to backend
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter username"
          id="username"
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Enter age"
          id="age"
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export { Form };
