import React from "react";
import Taskitem from "./Taskitem";

function Task({ tasks }) {
  return (
    <div>
      {tasks.map((taskItem) => (
        <Taskitem taskItem={taskItem} />
      ))}
    </div>
  );
}

export default Task;
