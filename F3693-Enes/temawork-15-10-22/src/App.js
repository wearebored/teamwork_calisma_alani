import { useState } from "react";
import AddTask from "./components/AddTask/AddTask";
import Header from "./components/Header/Header";
import Button from "./components/Header/Button";
import Task from "./components/Tasks/Task";
import { data } from "./helper/data";
function App() {
  const [toggleShow, setToggleShow] = useState(true);
  const [tasks, setTasks] = useState(data)
  return (
    <div className="App">
      <Header toggleShow={toggleShow} setToggleShow={setToggleShow} />
      <Button toggleShow={toggleShow} setToggleShow={setToggleShow} />
      <AddTask toggleShow={toggleShow} />
      <Task tasks={tasks} />
    </div>
  );
}

export default App;
