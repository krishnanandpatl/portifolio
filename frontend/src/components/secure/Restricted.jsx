import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/restricted.css";
import close from "../../assets/close.svg";
import lock from "../../assets/lock.svg";
import back from "../../assets/homeBK.svg";
import { toast, Toaster } from "react-hot-toast";

function Restricted() {
  const [password, setPassword] = useState("");
  const Nav = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const LinkFn = (URL) => {
    Nav(URL);
    document.getElementById("topheader").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  function handleEnter(e) {
    if (e.key == "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  }

  const handleSubmit = async () => {
    const valid = import.meta.env.VITE_PASSWORD;
    if (valid === password) {
      localStorage.setItem("validation", "true");
      Nav(from, { replace: true });
      document.getElementById("topheader").scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    } else {
      toast.error("Password Incorrect", {
        duration: 1000,
      });
    }
  };

  return (
    <>
      <Toaster toastOptions={{ position: "top-center" }}></Toaster>
      <div className="max-w-[1440px] mx-auto">
        <div className="main-container-re my-[10%]">
          <p className="back-to-home mb-3" onClick={() => LinkFn("/")}>
            <img src={back} alt="" /> Back to Home
          </p>
          <div className="access-card">
            <div
              className="w-fit close-button cursor-pointer"
              onClick={() => LinkFn("/")}
            >
              <img src={close} alt="" />
            </div>
            <div className="centre-card">
              <div className="lock-container-re">
                <img src={lock} alt="" />
              </div>
              <div className="centre-card centre-card-re">
                <div>Sorry Folks!😶</div>
                <div>This project is under lock and key!</div>
                <p>This project is locked due to NDA</p>
              </div>
              <div>
                <div className="password-p-re">
                  Please enter the password for case study
                </div>
                <input
                  className="password-input text-white"
                  type="password"
                  name=""
                  id=""
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => handleEnter(e)}
                />
                <div
                  className="submit-button py-[12px] cursor-pointer"
                  onClick={() => handleSubmit()}
                >
                  Submit
                </div>
              </div>
              <div
                className="request-access cursor-pointer"
                onClick={() => LinkFn("/request-access")}
              >
                Request access
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Restricted;
