import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { Validator } from "./Validator";

function RequiredAuth() {
  const location = useLocation();

  return Validator(location.state?.password) ? (
    <Outlet />
  ) : (
    <Navigate to="/unauthorized" replace />
  );
}

export default RequiredAuth;
