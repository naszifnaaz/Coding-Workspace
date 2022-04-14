import "./App.css";
import React from "react";

function App() {
  const data = 10;
  const [message, setMessage] = React.useState("");
  const cb = (data) => {
    console.log("Recieved from child!", { data });
    setMessage(data);
  };
  return (
    <div className="App">
      <First data={data} />
      <Second func={cb} />
      <Third message={message} />
    </div>
  );
}

function First({ data }) {
  console.log("Recieved from parent!");
  return <div>First Child {data}</div>;
}

function Second({ func }) {
  const test = "recieved";
  func(test);
  return <div>Second Child</div>;
}

//recieving data from first sibling
function Third({ message }) {
  console.log("Recieved data from first child");
  return <div>Third Child- {message}</div>;
}

export default App;

/*
To pass data from child to parent, we would make use of a callback function,
which is defined inside the parent, which is then passed as a prop to the child component, which then calls the callback function with the data.
*/

/*
Similarly, if we want to pass data from one sibling to another, there is not direct way to do that, we should do a double communincation in such a way that Firstly, the sibling will send the data to the parent and then the parent will send the same data to the other sibling.
*/
