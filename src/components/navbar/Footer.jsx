import React from "react";

function Footer() {
  return (
    <>
      <div className="h-48 w-screen dark:bg-zinc-900 dark:text-gray-300 sm:flex sm:justify-evenly">
        <div className="md:w-1/4 border">
          <h1>Hello! Again 😇</h1>
          <p className="text-xs text-gray-400">
            I'm nature loving artist turned designer who infuses his passion for
            the environment into his work.
          </p>
        </div>
        <div className="md:w-1/4 border">
          <h1>Get in Touch</h1>
          <div>
            <img src="" alt="Phone" />
            <p className="text-gray-500">(+91) 1234 678 900</p>
          </div>
          <div>
            <img src="" alt="Email" />
            <p className="text-gray-500">marutisrivastava0389@gmail.com</p>
          </div>
        </div>
        <div className="md:w-1/4 border ">
          <h1>Useful Links</h1>
          <ul className="p-4 text-xs text-gray-500">
            <li>About me</li>
            <li>Behance [Old work]</li>
            <li>LinkedIn</li>
            <li>My Digital Painting</li>
          </ul>
        </div>
        <div className="md:w-1/8 border">
          <img src="" alt="Arrow" />
          <a href="">Back to top</a>
        </div>
      </div>
    </>
  );
}

export default Footer;
