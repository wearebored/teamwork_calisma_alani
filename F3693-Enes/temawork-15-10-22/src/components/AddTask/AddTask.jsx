import React, { useState } from "react";
import { data } from "../../helper/data";
import "./addtask.scss";

const AddTask = ({ toggleShow, setTasks }) => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [day, setDay] = useState("");
  const [text, setText] = useState("");

  const handelTextChange = (e) => {
    setValue1(e.target.value);
    setText(e.target.value);
  };
  const handelDayChange = (e) => {
    setValue2(e.target.value);
    setDay(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setTasks(
      data.push({
        day: day,
        text: text,
        id: Date.now(),
      })
    );
    setValue1("");
    setValue2("");
  };

  return (
    <>
      {toggleShow && (
        <form onSubmit={onSubmit} action="">
          <div>
            <label htmlFor="task">Task</label>
            <input
              value={value1}
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
              value={value2}
              onChange={handelDayChange}
              type="text"
              id="task"
              required
              placeholder="Add Day & Time"
            />
          </div>
          <button type="submit">Save Task</button>
        </form>
      )}
    </>
  );
};

export default AddTask;
