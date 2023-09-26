import React, { useContext } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { SiSololearn } from "react-icons/si";
import { AuthContext } from "../../context/AuthContext";

const NavBarMenu = () => {
  const {
    authState: { user },
    logoutUser,
  } = useContext(AuthContext);

  const username = user ? user.username : "";

  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("logout");
    logoutUser();
    navigate("/login");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink
            className="navbar-brand fs-3 fw-bold d-flex align-items-center"
            to="/home">
            <SiSololearn className="me-2" />
            LearnIT
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse fs-5 fw-bold ms-4 me-3"
            id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <span className="me-2 fs-6 fw-bold">{username}</span>
              <button
                type="button"
                className="btn btn-outline-danger d-flex align-items-center"
                onClick={handleLogout}>
                <MdLogout size={20} className="me-1" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default NavBarMenu;
