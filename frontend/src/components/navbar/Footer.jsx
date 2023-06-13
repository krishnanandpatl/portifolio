import React from "react";
import "../styles/navbar.css";
import call from "../../assets/callfoot.svg";
import mail from "../../assets/mail.svg";
import { NavLink } from "react-router-dom";

function Footer() {
  const LinkFn = () => {
    document.getElementById("topheader").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  return (
    <div className="bg-[#090B0E]">
      <div className="footer-contents pt-12">
        <div className="centre-card mb-7">
          <h2>Hello Again😇</h2>
          <p>
            I’m nature-loving artist turned designer who infuses his passion for
            the environment into his work.
          </p>
        </div>
        <div className="secondnav-foot">
          <div className="partition-line-sbsa"></div>
          <div>
            <div className="contact-foot">
              <div>
                <img src={call} alt="" />
              </div>
              <div>
                <a href="tel:+919619386916">(+91) 9619 386 916</a>
              </div>
            </div>
            <div className="contact-foot">
              <div>
                <img src={mail} alt="" />
              </div>
              <div>
                <a href="mailto:kshitijsrivastava0389@gmail.com">
                  kshitijsrivastava0389@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="partition-line-sbsa"></div>
        <div className="all-nav-foot">
          <div className="contact-foot">
            <div>
              <img src={call} alt="" />
            </div>
            <div>
              <a href="tel:+919619386916">(+91) 9619 386 916</a>
            </div>
          </div>
          <div className="bottom-navs">
            <div className="">
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "link-active" : "")}
                onClick={() => LinkFn()}
              >
                About Me
              </NavLink>
            </div>
            <div>
              <a href="https://www.behance.net/Kshitij_03" target="_blank">
                Behance[Old Work]
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/kshitij-srivastava-03ab5861/"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
            <div>My Digital Painting</div>
          </div>
          <div className="contact-foot">
            <div>
              <img src={mail} alt="" />
            </div>
            <div>
              <a href="mailto:kshitijsrivastava0389@gmail.com">
                kshitijsrivastava0389@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
