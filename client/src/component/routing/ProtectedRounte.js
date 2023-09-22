import React, { useContext } from "react";
import { Navigate, Route } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Spinner from "react-bootstrap/esm/Spinner";

const ProtectedRount = ({ element: Element, ...rest }) => {
  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);

  if (authLoading) {
    return (
      <div className="d-flex justify-content-center">
        <Spinner animation="border" variant="info" />
      </div>
    );
  }
  return (
    <div>
      <Route
        {...rest}
        element={
          isAuthenticated ? (
            <>
              <Element {...rest} />
            </>
          ) : (
            <>
              <Navigate to="/login" />
            </>
          )
        }
      />
    </div>
  );
};

export default ProtectedRount;
