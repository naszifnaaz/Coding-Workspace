import { useState, useRef } from "react";

function Form() {
  const [formState, setFormState] = useState({
    name: "",
    age: "",
  });

  //Using refs, when we dont want to lose a value of re render
  //and changing ref value does not cause a re render by itself
  const x = useRef(1);
  function handleChange(e) {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
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
        <input type="submit" value="Submit" />
      </form>
      <div>
        {/* <h3>{x}</h3> */}

        <button
          onClick={() => {
            x.current += 1;
            console.log(x.current);
          }}
        >
          Change X
        </button>
      </div>
    </div>
  );
}

export { Form };
