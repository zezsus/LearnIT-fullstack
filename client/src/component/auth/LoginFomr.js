import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import AlertMessage from "../layout/AlertMessage";

const Login = () => {
  //Context
  const { loginUser } = useContext(AuthContext);

  //Local state
  const [loginForm, setLoginFomr] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const { username, password } = loginForm;

  const [alert, setAlert] = useState("");

  const handleChangeLogin = (e) => {
    setLoginFomr({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const loginData = await loginUser(loginForm);
      if (loginData.success) {
        navigate("/home");
      } else {
        setAlert({ type: "danger", message: loginData.message });
        setTimeout(() => setAlert(""), 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="loginForm">
      <form onSubmit={handleLogin}>
        <h2 className="w-100 text-center mb-3">LOGIN</h2>
        <AlertMessage info={alert} />
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={username}
            name="username"
            onChange={handleChangeLogin}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            name="password"
            onChange={handleChangeLogin}
          />
        </div>
        <div className="w-100 d-flex justify-content-center mb-3">
          <button type="submit" className="btn btn-success">
            Login
          </button>
        </div>
        <div className="text-center">
          If you don't have an account?&nbsp;
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
