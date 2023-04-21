import React from "react";
import '../styles/navbar.css'
import arrow from "../../assets/arrow.svg";

function Footer() {
  function handleTop() {
    document.getElementById("topheader").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }

  return (
    <div className="bg-[#090B0E]">
    <div className="lg:h-[240px] h-fit w-[100%] max-w-[1440px] mx-auto">
      <div className="centre-card p-12">
        <div className="text-[#B2BBC6] font-bold text-[32px]">Hello Again😇</div>
        <div className="text-[#B2BBC6] text-content-nav lg:w-[30%] md:w-[40%]">
          I’m nature-loving artist turned designer who infuses his passion for
          the environment into his work.
        </div>
      </div>
      <div className="w-[90%] mx-auto bottom-border"></div>
      <div className="footer-navs lg:flex-row flex-col w-[90%] mx-auto mt-4">
        <div className="flex lg:ml-2 lg:gap-0 gap-2 order-1">
          <div>icon</div>
          <div>634723588582</div>
        </div>
        <div className="flex lg:flex-row flex-col gap-2 lg:order-2 order-3">
          <div>About Me</div>
          <div>Behance</div>
          <div>LinkedIn</div>
          <div>My Digital Painting</div>
        </div>
        <div className="flex gap-1 lg:mr-2 lg:order-3 order-2">
          <div>Icon</div>
          <div>asfasfdas@sfs.com</div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Footer;
