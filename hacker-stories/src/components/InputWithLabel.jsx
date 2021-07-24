import React from "react";

const InputWithLabel = ({
  id,
  children,
  onInputChange,
  value,
  type = "text",
  isFocused,
}) => {
  const inputRef = React.useRef();

  React.useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <>
      <label htmlFor={id}>{children} </label>
      <input
        ref={inputRef}
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
};

export default InputWithLabel;
