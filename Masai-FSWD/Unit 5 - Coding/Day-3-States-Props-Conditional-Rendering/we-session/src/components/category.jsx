import React from "react";
import "./category.css";

function Category(props) {
  return (
    <div className="category">
      <img src={props.image} />
      <p>{props.label}</p>
    </div>
  );
}

export { Category };
