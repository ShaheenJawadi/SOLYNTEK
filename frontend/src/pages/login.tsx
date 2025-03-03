import React from 'react';
import { useAuthForm } from '../hooks/forms/useAuthForm';

const Login: React.FC = () => {
  const { formik, isLoading } = useAuthForm();

  return (
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
        {formik.errors.email && formik.touched.email && <p>{formik.errors.email}</p>}
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
        {formik.errors.password && formik.touched.password && <p>{formik.errors.password}</p>}
      </div>

      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Logging In...' : 'Login'}
      </button>
    </form>
  );
};

export default Login;
