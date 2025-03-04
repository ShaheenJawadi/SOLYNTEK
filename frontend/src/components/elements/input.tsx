import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
  isError?: boolean;
}

const InputField: React.FC<InputProps> = ({ label, errorMessage, className,isError, ...props }) => {
  return (
    <div className={`input_container ${className}` }>
      {label && <label className="input_label" >{label}</label>}
      <input
        className={`input_field ${isError ? "input_error" : ""}`} 
        {...props}
      />
      {isError && <p className="error_message">{errorMessage}</p>}
    </div>
  );
};

export default InputField;
