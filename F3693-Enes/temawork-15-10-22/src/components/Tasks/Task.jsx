import Taskitem from "./Taskitem";
import { data } from "../../helper/data";
import "./task.scss"
function Task({ setTasks }) {
  if (data.length === 0) {
    return <p className="notask">No Tasks to Show</p>;
  } else {
    return (
      <div className="task">
        {data.map((taskItem) => (
          <Taskitem key={taskItem.id} taskItem={taskItem} setTasks={setTasks} />
        ))}
      </div>
    );
  }
 
}

export default Task;
