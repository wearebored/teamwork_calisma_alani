import React from "react";
import Taskitem from "./Taskitem";

function Task({ tasks }) {
  return (
    <div>
      {tasks.map((taskItem) => (
        <Taskitem key={taskItem.id} taskItem={taskItem} />
      ))}
    </div>
  );
}

export default Task;
