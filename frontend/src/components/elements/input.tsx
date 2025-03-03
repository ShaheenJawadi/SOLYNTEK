import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
  isError?: boolean;
}

const InputField: React.FC<InputProps> = ({ label, errorMessage, className,isError, ...props }) => {
  return (
    <div  >
      {label && <label  >{label}</label>}
      <input
        className={`${className}`}
        {...props}
      />
      {isError && <p>{errorMessage}</p>}
    </div>
  );
};

export default InputField;
