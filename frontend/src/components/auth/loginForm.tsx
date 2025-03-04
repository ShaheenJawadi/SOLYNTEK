import React from "react";
import { useAuthForm } from "../../hooks/forms/useAuthForm";
import InputField from "../elements/input";

const LoginForm: React.FC = () => {
  const { formik, isLoading } = useAuthForm();

  return (
    <form onSubmit={formik.handleSubmit} className="form_holder">
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

 
    <div className="auth_links">
            <a href="/register" className="auth_link">Don't have an account?</a>
    </div>
      <button type="submit" className="submit_btn" disabled={isLoading}>
        {isLoading ? "Logging In..." : "Login"}
      </button>
    </form>
  );
};

export default LoginForm;
