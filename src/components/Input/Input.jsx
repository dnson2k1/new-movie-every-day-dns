import React from "react";
import "./Input.scss";

const Input = ({ value, type = "text", onChange, placeholder }) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
