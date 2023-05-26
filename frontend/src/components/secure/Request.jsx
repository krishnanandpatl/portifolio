import React, { useState } from "react";
import "../styles/restricted.css";
import mailP from "../../assets/mailP.svg";
import close from "../../assets/close.svg";
import { useNavigate } from "react-router-dom";

function Request() {
  const Nav = useNavigate();
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

  fetch("/api/validator/" + password, {
    method: "POST",
    Headers: {
      Accept: "application.json",
      "Content-Type": "application/json",
    },
    body: {
      email: email,
      body: body,
    },
  })
    .then((data) => {
      data.json();
    })
    .then((finaldata) => {
      console.log(finaldata);
      toast.success("Request Sent", { duration: 1000 });
    })
    .catch((err) => {
      toast.error(err.message, {
        duration: 1000,
      });
    });

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
      <div className="main-container-re my-[10%]">
        <div className="access-card centre-card-req">
          <div
            className="w-fit cursor-pointer close-button"
            onClick={() => LinkFn("/restricted")}
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
          />
          <input
            type="text"
            className="my-[12px] text-white"
            placeholder="Your Comment (optional)"
            value={(e) => setBody(e.target.value)}
          />
          <div className="submit-button py-[12px] w-full">Send Request</div>
        </div>
      </div>
    </div>
  );
}

export default Request;
