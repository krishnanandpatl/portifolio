import React, { useState } from "react";
import arrow from "../../assets/arrow.svg";
import "../styles/navbar.css";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  function handleTop() {
    document.getElementById("topheader").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }

  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      <div
        className="cursor-pointer back-to-top"
        onClick={() => handleTop()}
        style={{display: visible ? 'inline' : 'none'}}
      >
        <img src={arrow} alt="" />
        <p className="whitespace-nowrap mx-auto">Back To Top</p>
      </div>
    </>
  );
};

export default ScrollButton;
