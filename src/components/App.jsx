import React, { useState } from "react";
import List from "./List";

function App() {
  const [text, setText] = useState("");
  const [arr, setArr] = useState([]);
  function handleClick() {
    setArr([...arr, text]);
  }
  function handleChange(event) {
    const { value } = event.target;
    setText(value);
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      {arr.map((item, index) => (
        <List key={index} text={item} />
      ))}
    </div>
  );
}

export default App;
