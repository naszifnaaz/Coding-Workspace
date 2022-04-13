import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//using react api to create element rather than document api
const header = React.createElement(
  "h1",
  { className: "redtext" },
  "Hello React!"
);

const root = document.getElementById("root");
const container = document.getElementById("container");
//rendering elements into DOM using react-dom
ReactDOM.render(header, root);

//we can use babel to write jsx in js
ReactDOM.render(
  <h1>
    Hello Babel <i>JSX</i>
  </h1>,
  container
);
