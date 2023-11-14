import React from "react";
import styles from "./Input.module.css";

interface Input {
  label: string;
  type: string;
  name: string;
  value: string;
  error: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  onBlur(event: React.ChangeEvent<HTMLInputElement>): void;
}

const Input = ({
  label,
  type,
  name,
  value,
  error,
  onChange,
  onBlur,
}: Input) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        className={styles.input}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
