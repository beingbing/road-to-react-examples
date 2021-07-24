import React from "react";

const InputWithLabel = ({
  id,
  children,
  onInputChange,
  value,
  type = "text",
}) => (
  <>
    <label htmlFor={id}>{children} </label>
    <input id={id} type={type} onChange={onInputChange} value={value} />
    <p>
      Searching for <strong>{value}</strong>
    </p>
  </>
);

export default InputWithLabel;
