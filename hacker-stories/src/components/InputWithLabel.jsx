import React from "react";

const InputWithLabel = ({
  id,
  children,
  onInputChange,
  value,
  type = "text",
  isFocused,
}) => (
  <>
    <label htmlFor={id}>{children} </label>
    <input
      id={id}
      type={type}
      onChange={onInputChange}
      value={value}
      autoFocus={isFocused}
    />
    <p>
      Searching for <strong>{value}</strong>
    </p>
  </>
);

export default InputWithLabel;
