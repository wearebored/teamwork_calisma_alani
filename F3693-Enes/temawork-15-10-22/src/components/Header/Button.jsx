import React from 'react'

const Button = ({ toggleShow, setToggleShow }) => {
  return (
    <button onClick={()=>setToggleShow(!toggleShow)}>Show Add Task Bar</button>
  );
};

export default Button