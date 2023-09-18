import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="loginForm">
      <h2 className="w-100 text-center mb-3">LOGIN</h2>
      <form>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="username" />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="password"
          />
        </div>
        <div className="w-100 d-flex justify-content-center mb-3">
          <button type="submit" className="btn btn-success">
            Login
          </button>
        </div>
        <div className="text-center">
          If you don't have an account? &nbsp;
          <Link
            to="/register"
            className="text-info link-underline link-underline-opacity-0">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
