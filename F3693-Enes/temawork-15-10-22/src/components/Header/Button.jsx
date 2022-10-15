import React, { useState } from "react";

const Button = ({ toggleShow, setToggleShow }) => {
  let a = "Show Add Task Bar";
  let b = "Close Add Task Bar";
  const [ab, setAb] = useState(a);
  function abs() {
    setToggleShow(!toggleShow);
    if (ab == a) {
      setAb(b);
    } else {
      setAb(a);
    }
  }
  return <button onClick={abs}>{ab}</button>;
};

export default Button;
