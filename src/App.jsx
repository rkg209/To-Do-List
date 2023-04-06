import React, { useState } from "react";
import ToDo from "./ToDo";

function App() {
  const [inputList, setInputList] = useState(""); // new task
  const [items, setItems] = useState([]); //array of task

  function keyEvent(event) {
    setInputList(event.target.value);
  }

  function list() {
    setItems((preItems) => {
      return [...preItems, inputList];
    });
    setInputList("");
  }

  function deleteItem(id) {
    // alert("deleted");
    setItems((preTasks) => {
      return preTasks.filter((arrElem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>To-Do List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a Task"
            onChange={keyEvent}
            value={inputList}
          ></input>
          <button onClick={list}> + </button>

          <ol>
            {/* <li>{inputList}</li> */}

            {items.map((itemval, index) => {
              console.log(itemval);
              return (
                <ToDo
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={deleteItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
