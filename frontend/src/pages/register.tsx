import React from "react"; 
import AuthHolder from "../components/auth/authHolder";
import RegisterForm from "../components/auth/registerForm";

const Register: React.FC = () => {
  return (
    <AuthHolder title="Register">
      <RegisterForm />
    </AuthHolder>
  );
};

export default Register;
