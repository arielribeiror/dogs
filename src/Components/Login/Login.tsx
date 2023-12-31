import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";
import { UserContext } from "../../UserContext";

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login) return <Navigate to="/conta" />;
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="perdeu-senha" element={<LoginPasswordLost />} />
        <Route path="resetar-senha" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  );
};

export default Login;
