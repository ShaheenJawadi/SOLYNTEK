import React from "react"; 
import AuthHolder from "../components/auth/authHolder";
import LoginForm from "../components/auth/loginForm";

const Login: React.FC = () => {
  return (
    <AuthHolder title="Login">
      <LoginForm />
    </AuthHolder>
  );
};

export default Login;
