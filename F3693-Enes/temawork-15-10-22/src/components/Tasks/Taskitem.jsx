import React from "react";
import { data } from "../../helper/data";
import "./task.scss";

function Taskitem({ taskItem, setTasks }) {
  function onClickdelet(e) {
    let count = 0;
    for (let i of e.nativeEvent.path[3].childNodes) {
      if (i.id === e.nativeEvent.path[2].id) {
        setTasks(data.splice(count, 1));
      } else {
        count++;
      }
    }
  }
  return (
    <div className="taskitem" id={taskItem.id}>
      <div className="textday">
        <p className="kalin">{taskItem.text}</p>
        <p>{taskItem.day}</p>
      </div>
      <div>
        <button onClick={onClickdelet}>x</button>
      </div>
    </div>
  );
}

export default Taskitem;
