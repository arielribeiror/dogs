import React from "react";

const validator: Record<string, { regex: RegExp; message: string }> = {
  email: {
    regex: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    message: "Preencha com um email válido",
  },
};

const useForm = (type: string) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState("");

  function validate(value: string) {
    if (type === "false") return true;
    if (value.length === 0) {
      setError("Preencha um valor.");
      return false;
    } else if (validator[type] && !validator[type].regex.test(value)) {
      setError(validator[type].message);
      return false;
    } else {
      setError("");
      return true;
    }
  }

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (error) validate(event.target.value);
    setValue(event.target.value);
  }

  return {
    value,
    error,
    setValue,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
