import React from "react";
import { useAuthForm } from "../hooks/forms/useAuthForm";

const Login: React.FC = () => {
  const { formik, isLoading } = useAuthForm();

  return (
    <div className="auth_page">
      <div className="auth_box">
        <div className="auth_box_logo">
          <img src="/logo.png" alt="" />
        </div>
        <div className="auth_box_title">
        <h2>Login</h2>
        </div>
        <div className="form_holder">
          <form onSubmit={formik.handleSubmit}>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.email && formik.touched.email && (
                <p>{formik.errors.email}</p>
              )}
            </div>

            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.password && formik.touched.password && (
                <p>{formik.errors.password}</p>
              )}
            </div>

            <button type="submit" disabled={isLoading}>
              {isLoading ? "Logging In..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
