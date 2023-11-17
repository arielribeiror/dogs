import React from "react";
import styles from "./Button.module.css";

interface Button {
  children: string;
  disabled?: boolean;
}

const Button = ({ children, ...props }: Button) => {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
