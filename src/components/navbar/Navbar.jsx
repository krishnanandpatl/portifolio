import React, { useEffect, useState } from "react";
import call from "../../assets/call.svg";
import callDark from "../../assets/callDark.svg";
import kshitij from '../../assets/kshitij.svg'
import darkmode from '../../assets/darkmode.svg'
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [nav, setNav] = useState(false);
  const Nav = useNavigate();

  const LinkFn = (URL) => {
    Nav(URL);
    document.getElementById("topheader").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    if (nav) setNav(!nav);
  };

  const handleNav = () => {
    setNav(!nav);
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

  return (
    <div
      id="topheader"
      className="flex dark:text-gray-400 justify-between items-center h-20  mx-auto dark:dark:bg-[#1E1E1E] border-b border-b-gray-500"
    >
      <img className="ml-12 h-1/2 w-32" src={kshitij} alt=""></img>
      <ul className="hidden md:flex md:text-sm">
        <li className="p-4 hover:cursor-pointer" onClick={() => LinkFn("/")}>
          Home
        </li>
        <li
          className="p-4 hover:cursor-pointer"
          onClick={() => LinkFn("/about")}
        >
          About Me
        </li>
        <li
          className="p-4 hover:cursor-pointer"
          onClick={() => LinkFn("/my-work")}
        >
          My Work
        </li>
        <li className="p-4 hover:cursor-pointer">Resume</li>
      </ul>
      <div className="text-xs mr-5 hidden justify-between items-center md:flex">
        <img src={darkmode} height="25px" width="25px" alt="" />
        {theme === "dark" ? (
          <img height="10px" width="16px" className="mr-2" src={call} alt="" />
        ) : (
          <img
            height="10px"
            width="16px"
            className="mr-2"
            src={callDark}
            alt=""
          />
        )}
        <div className="text-[#909DAD] text-base font-normal">(+91) 9619 386 916</div>
      </div>
      <div onClick={handleNav} className="block mr-6 md:hidden">
        {nav ? (
          <ion-icon name="close-outline"></ion-icon>
        ) : (
          <ion-icon name="menu-outline"></ion-icon>
        )}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[40%] h-full border-r border-r-gray-900 text-sm text-white bg-zinc-800 dark:bg-zinc-900 ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <li className="p-2">
          {theme === "dark" ? (
            <ion-icon
              name="sunny-outline"
              onClick={() => setTheme("light")}
            ></ion-icon>
          ) : (
            <ion-icon name="moon" onClick={() => setTheme("dark")}></ion-icon>
          )}
        </li>
        <li
          className="p-3 pt-0 border-b border-gray-600 hover:cursor-pointer"
          onClick={() => LinkFn("/")}
        >
          Home
        </li>
        <li
          className="p-3 border-b border-gray-600 hover:cursor-pointer"
          onClick={() => LinkFn("/about")}
        >
          About Me
        </li>
        <li
          className="p-3 border-b border-gray-600 hover:cursor-pointer"
          onClick={() => LinkFn("/my-work")}
        >
          My Work
        </li>
        <li className="p-3 border-b border-gray-600 hover:cursor-pointer">
          Resume
        </li>
        {/* <li>(+91) 9619 386 916</li> */}
      </ul>
    </div>
  );
}

export default Navbar;
