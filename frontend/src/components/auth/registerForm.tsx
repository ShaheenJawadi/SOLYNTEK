import React from "react";
import { useAuthForm } from "../../hooks/forms/useAuthForm";
import InputField from "../elements/input";

const RegisterForm: React.FC = () => {
  const { formik, isLoading } = useAuthForm();

  return (
    <form onSubmit={formik.handleSubmit} className="form_holder">
      <InputField
        type="text"
        label="Username"
        name="username"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        isError={!!(formik.errors.email && formik.touched.email)}
        errorMessage={formik.errors.email}
      />
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

      <InputField
        type="password"
        label="Repeat Password"
        name="password_2"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        isError={!!(formik.errors.password && formik.touched.password)}
        errorMessage={formik.errors.password}
      />

      <div className="auth_links">
         
        <a href="/login" className="auth_link">
          You have an account?
        </a>
      </div>
      <button type="submit" className="submit_btn" disabled={isLoading}>
        {isLoading ? "Signing Up..." : "Sign up"}
      </button>
    </form>
  );
};

export default RegisterForm;
