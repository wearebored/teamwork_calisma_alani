import Taskitem from "./Taskitem";
import { data } from "../../helper/data";

function Task({ setTasks }) {
  if (data.length === 0) {
    return <p>No Tasks to Show</p>;
  } else {
    return (
      <div>
        {data.map((taskItem) => (
          <Taskitem key={taskItem.id} taskItem={taskItem} setTasks={setTasks} />
        ))}
      </div>
    );
  }
 
}

export default Task;
