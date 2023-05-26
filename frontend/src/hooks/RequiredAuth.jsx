import React, { useEffect, useState } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function RequiredAuth() {
  const [valid, setValid] = useState("");
  const location = useLocation();

  useEffect(() => {
    const auth = async () => {
      const toastId = toast.loading("Validating", { duration: 1000 });
      const data = await fetch("/api/authChecker", {
        credentials: "same-origin",
      });
      const resData = await data.json();
      if (resData.success) {
        toast.dismiss(toastId);
        setValid(true);
      } else {
        toast.dismiss(toastId);
        setValid(false);
      }
    };
    auth();
  }, []);

  return (
    <>
      <Toaster toastOptions={{ position: "top-center" }}></Toaster>
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
