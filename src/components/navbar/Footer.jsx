import React from "react";
import '../styles/navbar.css'
// import arrow from "../../assets/arrow.svg";

function Footer() {
  function handleTop() {
    document.getElementById("topheader").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }

  return (
    <div className="footer">
    <div className="footer-MainBox">
      <div className="footer-TopBox">
        <div className="footer-TopBox-Heading">Hello Again😇</div>
        <div className="footer-TopBox-Text">
          I’m nature-loving artist turned designer who infuses his passion for
          the environment into his work.
        </div>
      </div>
      <div className="Footer-Hr"></div>
      <div className="footer-BottomBox">
        <div className="footer-BottomBox-Box1">
          <div className="footer-BottomBox-Box1-Icon">I</div>
          <div className="footer-BottomBox-Box1-Text">634723588582</div>
        </div>
        <div className="footer-BottomBox-Box2">
          <div className="footer-BottomBox-Box2-B1">About Me</div>
          <div className="footer-BottomBox-Box2-B2">Behance [Old work]</div>
          <div className="footer-BottomBox-Box2-B3">LinkedIn</div>
          <div className="footer-BottomBox-Box2-B4">My Digital Painting</div>
        </div>
        <div className="footer-BottomBox-Box3">
          <div className="footer-BottomBox-Box1-Icon">I</div>
          <div className="footer-BottomBox-Box1-Text">kshitijsrivastava0389@gmail.com</div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Footer;
