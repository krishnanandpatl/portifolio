import React from "react";
import arrow from '../../assets/arrow.svg'

function Footer() {
  function handleTop() {
    document.getElementById("topheader").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }

  return (
    <>
    <div className="border-t border-gray-500 w-5/6 mx-auto"></div>
      <div className="md:h-48 dark:text-gray-300 md:flex md:justify-evenly mt-4 md:mt-10 md:px-20">
        <div className="md:w-1/4">
          <h1 className="w-fit mx-auto md:ml-0 p-3 text-2xl">Hello! Again 😇</h1>
          <p className="w-80 text-xs text-gray-400 mx-auto md:ml-0 md:px-3 md:pt-2">
            I'm nature loving artist turned designer who infuses his passion for
            the environment into his work.
          </p>
        </div>
        <div className="md:w-1/4 md:ml-20">
          <h1 className="w-fit mx-auto p-3 text-2xl md:mx-0">Get in Touch</h1>
          <div className="flex p-2 w-fit mx-auto items-center md:block md:mx-0">
            <p className="text-gray-400 text-sm">📱 Phone</p>
            <p className="text-gray-500 ml-2 text-xs md:ml-0">(+91) 1234 678 900</p>
          </div>
          <div className="flex p-2 w-fit mx-auto items-center md:block md:mt-2 md:mx-0">
            <p className="text-gray-400 text-sm">📩 Email</p>
            <p className="text-gray-500 ml-2 text-xs md:ml-0">marutisrivastava0389@gmail.com</p>
          </div>
        </div>
        <div className="md:w-1/4 p-2">
          <h1 className="w-fit mx-auto">Useful Links</h1>
          <ul className="p-4 text-xs text-gray-500 w-fit mx-auto">
            <li className="p-1">About me</li>
            <li className="p-1">Behance [Old work]</li>
            <li className="p-1">LinkedIn</li>
            <li className="p-1">My Digital Painting</li>
          </ul>
        </div>
        <div className="md:w-1/8 w-fit mx-auto" onClick={handleTop}>
          <img className="h-8 w-8 mx-auto" src={arrow} alt="Arrow" />
          <a className="underline text-gray-500" href="">Back to Top</a>
        </div>
      </div>
    </>
  );
}

export default Footer;
