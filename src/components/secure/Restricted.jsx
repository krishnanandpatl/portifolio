import React from "react";

function Restricted() {
  const LinkFn = (URL) => {
    Nav(URL);
    document.getElementById("topheader").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    // if (nav) setNav(!nav);
  };
  return (
    <div>
      <div className="access-card my-auto mx-auto h-[40vh] w-[50vw] border"></div>
    </div>
  );
}

export default Restricted;
