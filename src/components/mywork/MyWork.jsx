import React from "react";

function MyWork() {

    //p 14px
    //roun edges 8px
    
  return (
    <div>
      <div className="p-[4rem] border">
        <h1 className="text-white">Featured Case Studies</h1>
        <div className="md:grid md:grid-cols-3 md:gap-2 justify-between mx-[10rem] rounded-md">
          <div className="h-[15rem] w-[14rem] border p-[1rem] dark:bg-zinc-700">
            <div className="h-[7rem] w-[12rem] border mx-auto rounded-sm"></div>
            <div className="text-gray-400 text-xs mt-5">2018-2021</div>
            <h3 className="text-white">Verizon 360</h3>
            <div className="text-gray-400 text-xs">Telecom CPQ Product</div>
          </div>
          <div className="h-[15rem] w-[14rem] border p-[1rem] dark:bg-zinc-700">
            <div className="h-[7rem] w-[12rem] border mx-auto rounded-sm"></div>
            <div className="text-gray-400 text-xs mt-5">2018-2021</div>
            <h3 className="text-white">PGOS</h3>
            <div className="text-gray-400 text-xs">Telecom CPQ Product</div>
          </div>
          <div className="h-[15rem] w-[14rem] border p-[1rem] dark:bg-zinc-700">
            <div className="h-[7rem] w-[12rem] border mx-auto rounded-sm"></div>
            <div className="text-gray-400 text-xs mt-5">2018-2021</div>
            <h3 className="text-white">Subex</h3>
            <div className="text-gray-400 text-xs">Telecom CPQ Product</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyWork;
