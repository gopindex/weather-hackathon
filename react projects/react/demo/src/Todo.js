import React from "react";
export default function Todo(props) {
  return (
    <div>
      <p>{props.task}</p>
      <button onClick={() => {
        props.tasks.filter(ele => {return ele!==props.task});
    }}>Delete the task</button>
    </div>
  );
}