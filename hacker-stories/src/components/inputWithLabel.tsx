import React from "react";
import { InputWithLabelProps } from "../interfaces/types";

const InputWithLabel = ({ id, children, onInputChange, value, type = "text", isFocused }: InputWithLabelProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null!);

  React.useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <>
      <label htmlFor={id} className="label">{children}</label>
      <input ref={inputRef} id={id} type={type} onChange={onInputChange} value={value}
        autoFocus={isFocused}
        className="input"
      />
    </>
  );
};

export default InputWithLabel;
