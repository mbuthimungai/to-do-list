import React from "react";

export default function List(props) {
  return (
    <div>
      <ul>
        <li>{props.text}</li>
      </ul>
    </div>
  );
}
