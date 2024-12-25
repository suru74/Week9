// Button.js
import React from 'react';

const Button = (props) => {
  // Correct way to handle the event in the onClick callback
  const handleClick = (e) => {
    props.ClickHandle(e); // Passing the event object to the parent handler
  };

  return (
    <button className="ButtonStyle" value={props.label} onClick={handleClick}>
      {props.label}
    </button>
  );
};

export default Button;
