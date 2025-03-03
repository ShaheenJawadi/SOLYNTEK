import React from "react";
import { useAuthForm } from "../../hooks/forms/useAuthForm";
import InputField from "../elements/input";

const LoginForm: React.FC = () => {
  const { formik, isLoading } = useAuthForm();

  return (
    <form onSubmit={formik.handleSubmit}>
      <InputField
        type="email"
        label="Email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        isError={!!(formik.errors.email && formik.touched.email)}
        errorMessage={formik.errors.email}
      />
     <InputField
        type="password"
        label="Password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        isError={!!(formik.errors.password && formik.touched.password)}
        errorMessage={formik.errors.password}
      />

 
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Logging In..." : "Login"}
      </button>
    </form>
  );
};

export default LoginForm;
