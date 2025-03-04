import React from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  errorMessage?: string;
  isError?: boolean;
  options: { value: string; label: string }[];
}

const SelectField: React.FC<SelectProps> = ({ label, errorMessage, isError, options, className, ...props }) => {
  return (
    <div className={`select_container ${className}`}>
      {label && <label className="select_label">{label}</label>}
      <select className={`select_field ${isError ? "select_error" : ""}`} {...props}>
        <option value="" disabled>Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {isError && <p className="error_message">{errorMessage}</p>}
    </div>
  );
};

export default SelectField;
