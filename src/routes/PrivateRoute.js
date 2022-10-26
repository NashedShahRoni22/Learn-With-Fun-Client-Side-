import React, { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <p className="text-center py-5">
      <span className="me-3">Loading</span> 
      <Spinner animation="grow" variant="info" size="sm"/>
      <Spinner animation="grow" variant="info" size="sm"/>
      <Spinner animation="grow" variant="info" size="sm"/>     
      </p>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
