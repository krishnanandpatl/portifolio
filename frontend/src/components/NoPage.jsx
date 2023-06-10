import { useNavigate } from "react-router-dom";
import React from "react";
import noimg from "../assets/nopage.svg";

function NoPage() {
  const Nav = useNavigate();

  const LinkFn = (URL) => {
    Nav(URL);
    document.getElementById("topheader").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  return (
    <div className="h-[70vh] nopage">
      <div>
        <img src={noimg} alt="" />
        <h2>Oh no. We lost this page</h2>
        <p>
          We searched everywhere but couldn’t find what you’re looking for.
          Let’s find a better place for you to go.
        </p>
        <button onClick={() => LinkFn("/")}>Back to Homepage</button>
      </div>
    </div>
  );
}

export default NoPage;
