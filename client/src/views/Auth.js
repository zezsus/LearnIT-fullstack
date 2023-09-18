import React from "react";
import LoginForm from "../component/auth/LoginFomr";
import RegisterFomr from "../component/auth/RegisterForm";

const Auth = ({ authRouter }) => {
  let body = (
    <div>
      {authRouter === "login" && <LoginForm />}
      {authRouter === "register" && <RegisterFomr />}
    </div>
  );
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
