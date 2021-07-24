import React from "react";

const InputWithLabel = ({ id, label, onInputChange, value, type = "text" }) => (
  <>
    <label htmlFor={id}>{label}: </label>
    <input id={id} type={type} onChange={onInputChange} value={value} />
    <p>
      Searching for <strong>{value}</strong>
    </p>
  </>
);

export default InputWithLabel;
