import React, { useContext } from "react";
import LoginForm from "../component/auth/LoginFomr";
import RegisterFomr from "../component/auth/RegisterForm";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

const Auth = ({ authRouter }) => {
  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);

  let body;

  if (authLoading) {
    body = (
      <div className="d-flex justify-content-center">
        <Spinner animation="border" variant="info" />
      </div>
    );
  } else {
    if (isAuthenticated) {
      body = <Navigate to="/home" replace />;
    } else {
      body = (
        <div>
          {authRouter === "login" && <LoginForm />}
          {authRouter === "register" && <RegisterFomr />}
        </div>
      );
    }
  }

  return (
    <div className="authForm">
      <div className="header text-center">
        <h1>LearnIT</h1>
        <h4>Keep track of what you are learing</h4>
      </div>
      <div className="mt-4">{body}</div>
    </div>
  );
};

export default Auth;
