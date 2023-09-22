import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import AlertMessage from "../layout/AlertMessage";

const Register = () => {
  //Context
  const { registerUser } = useContext(AuthContext);

  //Loacl state
  const [registerFrom, setRegisterForm] = useState({
    username: "",
    password: "",
    rePassword: "",
  });

  const { username, password, rePassword } = registerFrom;
  const [alert, setAlert] = useState("");

  const handleChangeRegister = (e) => {
    setRegisterForm({ ...registerFrom, [e.target.name]: e.target.value });
  };

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    try {
      if (password !== rePassword) {
        setAlert({ type: "danger", message: "Passwords do not match" });
        setTimeout(() => setAlert(""), 3000);
      } else {
        try {
          const registerData = await registerUser(registerFrom);
          if (!registerData.success) {
            setAlert({ type: "danger", message: registerData.message });
            setTimeout(() => setAlert(""), 3000);
          } else {
            setRegisterForm({
              username: "",
              password: "",
              rePassword: "",
            });
            setAlert({ type: "success", message: registerData.message });
            setTimeout(() => setAlert(""), 3000);
          }
        } catch (error) {}
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="loginForm">
        <form onSubmit={handleSubmitRegister}>
          <h2 className="w-100 text-center mb-3">REGISTER</h2>
          <AlertMessage info={alert} />
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="username"
              name="username"
              value={username}
              onChange={handleChangeRegister}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="password"
              name="password"
              value={password}
              onChange={handleChangeRegister}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="re-password"
              name="rePassword"
              value={rePassword}
              onChange={handleChangeRegister}
            />
          </div>
          <div className="w-100 d-flex justify-content-center mb-3">
            <button type="submit" className="btn btn-success">
              Register
            </button>
          </div>
          <div className="text-center">
            If you already have an account?&nbsp;
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
