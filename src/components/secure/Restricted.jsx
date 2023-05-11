import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/restricted.css";

function Restricted() {
  const [password, setPassword] = useState("");
  const Nav = useNavigate();
  const location = useLocation();

  const LinkFn = (URL) => {
    Nav(URL);
    document.getElementById("topheader").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    // if (nav) setNav(!nav);
  };

  const handleSubmit = () => {
    Nav(location.state.to, { state: { password: password } });
    document.getElementById("topheader").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };


  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="main-container-re">
        <div className="access-card">
          <div className="">x</div>
          <div className="centre-card">
            <div>Lock icon</div>
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
                className="password-input"
                type="text"
                name=""
                id=""
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                className="submit-button cursor-pointer"
                onClick={() => handleSubmit()}
              >
                Submit
              </div>
            </div>
            <div className="request-access">Request access</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Restricted;
