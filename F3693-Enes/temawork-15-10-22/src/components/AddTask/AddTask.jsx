import React, { useState } from "react";
import { data } from "../../helper/data";

const AddTask = ({ toggleShow,setTasks}) => {
  const [day, setDay] = useState("");
  const [text, setText] = useState("");
  
  const handelTextChange = (e) => {
    setText(e.target.value);
  };
  const handelDayChange = (e) => {
    setDay(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setTasks(data.push({
      day: day,
      text: text,
      id: Date.now(),
    }))
    
  };

  return (
    <>
      {toggleShow ? (
        <form onSubmit={onSubmit} action="">
          <div>
            <label htmlFor="task">Task</label>
            <input
              onChange={handelTextChange}
              type="text"
              id="task"
              required
              placeholder="Add Task"
            />
          </div>
          <div>
            <label htmlFor="day">Day& Time</label>
            <input
              onChange={handelDayChange}
              type="text"
              id="task"
              required
              placeholder="Add Day & Time"
            />
          </div>
          <button type="submit">Save Task</button>
        </form>
      ) : (
        <p>No Tasks to Show</p>
      )}
    </>
  );
};

export default AddTask;
