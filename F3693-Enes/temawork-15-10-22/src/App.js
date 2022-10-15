import { useState } from "react";
import AddTask from "./components/AddTask/AddTask";
import Header from "./components/Header/Header";
import Button from "./components/Header/Button";
import Task from "./components/Tasks/Task";
import { data } from "./helper/data";
function App() {
  const [toggleShow, setToggleShow] = useState(true);
  const [tasks, setTasks] = useState([])
  return (
    <div className="App">
      <Header toggleShow={toggleShow} setToggleShow={setToggleShow} />
      <Button toggleShow={toggleShow} setToggleShow={setToggleShow} />
      <AddTask toggleShow={toggleShow} setTasks={setTasks} />
      <Task tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
