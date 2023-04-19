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
    <div className="max-w-[1440px] border h-[100vh-5rem] mx-auto">
      <div className="access-card  mt-[20%] mx-auto bc:h-[549px] w-[43%] border"></div>
    </div>
  );
}

export default Restricted;
