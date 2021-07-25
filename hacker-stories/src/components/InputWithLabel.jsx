import React from "react";
import styles from "../App.module.css";

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
      <label htmlFor={id} className={styles.label}>
        {children}
      </label>
      <input
        ref={inputRef}
        id={id}
        type={type}
        onChange={onInputChange}
        value={value}
        autoFocus={isFocused}
        className={styles.input}
      />
    </>
  );
};

export default InputWithLabel;
