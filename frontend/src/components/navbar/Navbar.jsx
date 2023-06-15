import React, { useEffect, useState, useRef } from "react";
import "../styles/header.css";
import call from "../../assets/callnav.svg";
import kshitij from "../../assets/kshitij.svg";
import menu from "../../assets/menu.svg";
import darkmode from "../../assets/DM.svg";
import { useNavigate, NavLink } from "react-router-dom";
import Pdf from "../../assets/resume/Resume.pdf";

function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [nav, setNav] = useState(false);
  const Nav = useNavigate();
  const ref = useRef();

  const LinkFn = (URL) => {
    Nav(URL);
    document.getElementById("topheader").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    if (nav) setNav(!nav);
  };
  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (nav && ref.current && !ref.current.contains(e.target)) {
        setNav(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [nav]);

  return (
    <div className=" mx-auto">
      <div>
        <div className="navigation-top">
          <img
            src={kshitij}
            onClick={() => LinkFn("/")}
            alt=""
            className="cursor-pointer"
          />
          <div className="top-links-nav">
            <p className="">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "link-active" : "")}
              >
                Home
              </NavLink>
            </p>
            <p className="">
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "link-active" : "")}
              >
                About Me
              </NavLink>
            </p>
            <p className="">
              <NavLink
                to="/my-work"
                className={({ isActive }) => (isActive ? "link-active" : "")}
              >
                My Work
              </NavLink>
            </p>
            <p className="">
              <a href={Pdf} target="_blank">
                Resume
              </a>
            </p>
          </div>
          <div className="top-button-nav">
            <img src={darkmode} alt="" />
            <a href="tel:+919619386916">
              <img src={call} alt="" />
              <div>(+91) 9619 386 916</div>
            </a>
            <img onClick={() => setNav(!nav)} src={menu} alt="" />
          </div>
        </div>
      </div>
      <div className="partition-line-sbsa"></div>
      <ul
        ref={ref}
        className={
          nav
            ? "fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 text-sm text-white bg-zinc-800 dark:bg-zinc-900 ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <li className="p-3   border-b border-gray-600 hover:cursor-pointer">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "link-active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li className="p-3 border-b border-gray-600 hover:cursor-pointer">
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "link-active" : "")}
          >
            About Me
          </NavLink>
        </li>
        <li className="p-3 border-b border-gray-600 hover:cursor-pointer">
          <NavLink
            to="/my-work"
            className={({ isActive }) => (isActive ? "link-active" : "")}
          >
            My Work
          </NavLink>
        </li>
        <li className="p-3 border-b border-gray-600 hover:cursor-pointer">
          <a href={Pdf} target="_blank">
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
