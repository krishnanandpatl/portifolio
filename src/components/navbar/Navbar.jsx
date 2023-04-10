import React, { useEffect, useState } from "react";

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
    <div className="flex dark:text-white justify-between items-center h-24 max-w-[1240px] mx-auto dark:bg-slate-900 border-b border-b-gray-500">
      <div className="mr-12 h-1/2 w-32 dark:bg-white"></div>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">About Me</li>
        <li className="p-4">My Work</li>
        <li className="p-4">Resume</li>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <ion-icon name="close-outline"></ion-icon>
        ) : (
          <ion-icon name="menu-outline"></ion-icon>
        )}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[40%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        {/* <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1> */}
        <li className="p-4 border-b border-gray-600">Home</li>
        <li className="p-4 border-b border-gray-600">About Me</li>
        <li className="p-4 border-b border-gray-600">My Work</li>
        <li className="p-4 border-b border-gray-600">Resume</li>
        <li className="p-4">Contact</li>
        <li>
          {theme === "dark" ? (
            <ion-icon
              name="sunny-outline"
              onClick={() => setTheme("light")}
            ></ion-icon>
          ) : (
            <ion-icon name="moon" onClick={() => setTheme("dark")}></ion-icon>
          )}
        </li>
        <li>(+91) 1234 678 900</li>
      </ul>
    </div>
  );
}

export default Navbar;
