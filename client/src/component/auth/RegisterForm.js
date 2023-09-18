import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="loginForm">
        <h2 className="w-100 text-center mb-3">REGISTER</h2>
        <form>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="username"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="password"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="re-password"
            />
          </div>
          <div className="w-100 d-flex justify-content-center mb-3">
            <button type="submit" className="btn btn-success">
              Register
            </button>
          </div>
          <div className="text-center">
            If you already have an account? &nbsp;
            <Link
              to="/login"
              className="text-info link-underline link-underline-opacity-0">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
