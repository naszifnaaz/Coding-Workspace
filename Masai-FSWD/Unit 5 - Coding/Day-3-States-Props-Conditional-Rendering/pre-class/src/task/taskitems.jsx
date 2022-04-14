import React from "react";

function TaskItems(props) {
  const color = props.color;
  return <div style={{ color }}>{`${props.title} - ${props.status}`}</div>;
}

export { TaskItems };
