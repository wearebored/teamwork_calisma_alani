import React, { useState } from "react";
import "./buton.scss";
const Button = ({ toggleShow, setToggleShow }) => {
  let a = "Show Add Task Bar";
  let b = "Close Add Task Bar";
  const [bar, setBar] = useState("bar1");
  const [ab, setAb] = useState(a);
  function abs() {
    setToggleShow(!toggleShow);
    if (ab === a) {
      setAb(b);
      setBar("bar2");
    } else {
      setAb(a);
      setBar("bar1");
    }
  }
  return (
    <button className={bar} onClick={abs}>
      {ab}
    </button>
  );
};

export default Button;
