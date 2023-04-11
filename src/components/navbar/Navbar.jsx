import React, { useEffect, useState } from "react";
import call from "../../assets/call.svg";
import callDark from "../../assets/callDark.svg";

function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [nav, setNav] = useState(false);

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
    <div className="flex dark:text-gray-400 justify-between items-center h-20 max-w-[1240px] mx-auto dark:bg-zinc-900 border-b border-b-gray-500">
      <div className="ml-12 h-1/2 w-32 dark:bg-white"></div>
      <ul className="hidden md:flex md:text-sm">
        <li className="p-4">Home</li>
        <li className="p-4">About Me</li>
        <li className="p-4">My Work</li>
        <li className="p-4">Resume</li>
      </ul>
      <div className="text-xs mr-5 hidden justify-between items-center md:flex">
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
        <div>(+91) 1234 678 900</div>
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
        <li className="p-3 pt-0 border-b border-gray-600">Home</li>
        <li className="p-3 border-b border-gray-600">About Me</li>
        <li className="p-3 border-b border-gray-600">My Work</li>
        <li className="p-3 border-b border-gray-600">Resume</li>
        {/* <li>(+91) 1234 678 900</li> */}
      </ul>
    </div>
  );
}

export default Navbar;
