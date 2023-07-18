import React, { useEffect, useState } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";

function RequiredAuth() {
  const [valid, setValid] = useState("");
  const location = useLocation();

  useEffect(() => {
    const validprev = localStorage.getItem("validation");
    if (validprev == "true") {
      setValid(true);
    } else {
      setValid(false);
    }
  }, []);

  return (
    <>
      {valid === "" ? (
        <></>
      ) : valid ? (
        <Outlet />
      ) : (
        <Navigate
          to="/restricted"
          state={{ from: location }}
          replace
        ></Navigate>
      )}
      ;
    </>
  );
}

export default RequiredAuth;
