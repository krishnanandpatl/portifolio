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

  console.log(location);
  const handleSubmit = () => {
    Nav(location.state.to, { state: { password: password } });
    document.getElementById("topheader").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  return (
    <div className="max-w-[1440px] border  mx-auto">
      <div className="flex flex-col justify-center items-center">
        <div className="access-card centre-card bc:my-[240px] bc:mx-[405px] bc:h[549px] bc:py-[64px] bc:px-[168px] border">
          <div className="w-fit top-0 right-0 dark:text-white mr-1">x</div>
          <div className="border centre-card">
            <div>Lock icon</div>
            <div className="centre-card">
              <div>Sorry Folks</div>
              <div>This project is under lock and key!</div>
              <div>This project is locked due to NDA</div>
            </div>
            <div>
              <div className="text-[12px] mt-[45px]">
                Please enter the password for case study
              </div>
              <input
                className="w-[100%]"
                type="text"
                name=""
                id=""
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                className="submit-button text-center py-[13px] text-[18px] cursor-pointer"
                onClick={() => handleSubmit()}
              >
                Submit
              </div>
            </div>
            <div className="mb-[64px] request-access">Request access</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Restricted;
