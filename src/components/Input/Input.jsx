import React from "react";
import "./Input.css";

function Input(props) {
  const { size = "small", ...rest } = props;
  return (
    <div>
      <input className={`input ${size}`} {...rest} />
    </div>
  );
}

export default Input;
