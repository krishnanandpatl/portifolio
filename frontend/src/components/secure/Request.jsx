import React, { useState } from "react";
import "../styles/restricted.css";
import mailP from "../../assets/mailP.svg";
import back from "../../assets/homeBK.svg";
import close from "../../assets/close.svg";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function Request() {
  const Nav = useNavigate();
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

  async function handleRequest(e) {
    const data=`${email} is requesting access. ${body}`
    window.location.href=`mailto:kshitijsrivastava0389@gmail.com?subject=RequestAccess&body=${data}`
    e.preventDefault();
  }

  function handleEnter(e) {
    e.preventDefault();
    if (e.key == "Enter") {
      handleRequest(e);
    }
  }

  const LinkFn = (URL) => {
    Nav(URL);
    document.getElementById("topheader").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <div className="max-w-[1440px] mx-auto">
      <Toaster toastOptions={{ position: "top-center" }}></Toaster>
      <div className="main-container-re my-[10%]">
        <p className="back-to-home mb-3" onClick={() => LinkFn("/")}>
          <img src={back} alt="" /> Back to Home
        </p>
        <div className="access-card centre-card-req">
          <div
            className="w-fit cursor-pointer close-button"
            onClick={() => LinkFn("/")}
          >
            <img src={close} alt="" />
          </div>
          <div className="lock-container-re mb-[14px]">
            <img src={mailP} alt="" />
          </div>
          <h2>Request Access</h2>
          <p>Enter your Email</p>
          <input
            type="email"
            className="text-white"
            onChange={(e) => setEmail(e.target.value)}
            // onKeyDown={(e) => handleEnter(e)}
          />
          <input
            type="text"
            className="my-[12px] text-white"
            placeholder="Your Comment (optional)"
            onChange={(e) => setBody(e.target.value)}
          />
          <div
            className="submit-button py-[12px] w-full cursor-pointer"
            onClick={(e) => handleRequest(e)}
          >
            Send Request
          </div>
        </div>
      </div>
    </div>
  );
}

export default Request;
