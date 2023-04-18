import React from "react";
import "../styles/home.css";
import extlink from "../../assets/externalLink.svg";
import avatar from "../../assets/avatar.png";
import report from "../../assets/report.webp";
import dell from "../../assets/home/Dell.svg";
import icici from "../../assets/home/ICICI.svg";
import pgos from "../../assets/home/PGOS.svg";
import sbsa from "../../assets/home/SBSA.svg";
import vz from "../../assets/home/VZ.svg";
import { useNavigate } from "react-router-dom";

function Home() {
  const Nav = useNavigate();
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
    <div className="mt-[11rem]">
      <div>
        <div className="mx-auto rounded-full w-20 h-20 bg-gradient-to-tr from-pink-200 to-red-500 mb-4">
          <img src={avatar} className="rounded-full" alt="avatar" />
        </div>
        <div className="mx-auto w-fit dark:text-gray-200 my-8 font-semibold text-lg">
          Hello I'm Kshitij Srivastava 👋
        </div>
        <h1 className="dark:text-[#D6DFF0] w-fit mx-auto text-[45px] font-normal leading-[54px]">
          A Product Designer
        </h1>
        <h1 className="dark:text-[#D6DFF0] w-fit mx-auto text-[45px] leading-[54px]">
          driven by empathy and creativity
        </h1>
        <div className="w-fit mx-auto mt-8 mb-[120px]">
          <button className="bg-gradient-to-tr from-[#ED787B] to-[#DF5B5D] rounded-md py-[16px] px-[24px] text-[#FFFFFF] font-semibold">
            All Case Studies
          </button>
        </div>
      </div>
      <div
        id="home-images"
        className=" mx-[5%] px-[73px] py-[76px] flex justify-center gap-[93px] flex-wrap"
      >
        <img src={vz} className="w-full sm:w-1/6 lg:w-1/6 flex-grow" alt="" />
        <img src={pgos} className=" sm:w-1/6 lg:w-1/6 flex-grow" alt="" />
        <img src={dell} className="w-full sm:w-1/6 lg:w-1/6 flex-grow" alt="" />
        <img src={sbsa} className="w-full sm:w-1/6 lg:w-1/6 flex-grow" alt="" />
        <img src={icici} className=" sm:w-1/6` flex-grow" alt="" />
      </div>
      {/* <div className="mt-[120px] w-[903px] mx-[270px]">
        <div className="dark:text-gray-400 mt-20 w-fit mx-auto text-2xl font-bold">
          Featured Projects
        </div>
        <div className="w-8 rounded-sm border-b-4 my-2 mx-auto border-red-400 mb-24"></div>
        <div className="relative w-[42rem] mx-auto mb-20">
          <div className="w-[32rem] border rounded-md bg-black h-60 my-auto">
            <div className="py-12 px-10 pr-52">
              <div className="text-red-400 text-xl font-bold">
                Verizon Sales 360
              </div>
              <div className="flex items-baseline">
                <div className="w-3 h-3 rounded-full bg-zinc-800"></div>
                <span className="text-gray-500 text-sm pl-2">
                  Greenfield Project
                </span>
              </div>
              <div className="text-gray-600 text-xs mt-2">
                A comprehensive digital landscape that supports 22k business
                across 338k sites.
              </div>
              <a
                className="text-red-400 text-xs mt-2 flex cursor-pointer"
                onClick={() => LinkFn("/restricted")}
              >
                View case study
                <img className="h-4 w-4 ml-2" src={extlink} alt="" />
              </a>
            </div>
          </div>
          <div className="bg-red-500 absolute rounded-md top-[2rem] right-0 h-[11rem] w-[20rem]"></div>
        </div>
        <div className="flex relative items-center w-[42rem] mx-auto mb-20">
          <div className="rounded-md z-10 h-[11rem] w-[20rem]">
            <img src={report} className="h-full w-full" alt="" />
          </div>
          <div className="w-[32rem] absolute rounded-md right-0 bg-black h-60">
            <div className="ml-[13rem] py-12">
              <div className="text-red-400 text-xl font-bold">
                Publicis Growth OS
              </div>
              <div className="flex items-baseline">
                <div className="w-3 h-3 rounded-full bg-zinc-800"></div>
                <span className="text-gray-500 text-sm pl-2">
                  Greenfield Project
                </span>
              </div>
              <div className="text-gray-600 text-xs mt-2">
                A campaign management application to provide a more intuitive
                and eficient platform for marketing teams to manage their
                campaigns effectively.
              </div>
              <a
                className="text-red-400 text-xs mt-2 flex cursor-pointer"
                onClick={() => LinkFn("/restricted")}
              >
                View case study
                <img className="h-4 w-4 ml-2" src={extlink} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="relative w-[42rem] mx-auto mb-20">
          <div className="w-[32rem] rounded-md bg-black h-60 my-auto">
            <div className="py-12 px-10 pr-52">
              <div className="text-red-400 text-xl font-bold">Subex</div>
              <div className="flex items-baseline">
                <div className="w-3 h-3 rounded-full bg-zinc-800"></div>
                <span className="text-gray-500 text-sm pl-2">
                  Product Revamp
                </span>
              </div>
              <div className="text-gray-600 text-xs mt-2">
                Subex Limited provides digital trust products to communication
                service providers.
                <p>The company is listed on BSE and NSE in India.</p>
              </div>
              <a className="text-red-400 text-xs mt-2 flex" href="">
                View case study
                <img className="h-4 w-4 ml-2" src={extlink} alt="" />
              </a>
            </div>
          </div>
          <div className="dark:bg-white absolute rounded-md top-[2rem] right-0 h-[11rem] w-[20rem]"></div>
        </div>
        <div className="flex relative items-center w-[42rem] mx-auto mb-20">
          <div className="bg-white rounded-md z-10 h-[11rem] w-[20rem]"></div>
          <div className="w-[32rem] absolute rounded-md right-0 bg-black h-60">
            <div className="ml-[13rem] py-12">
              <div className="text-red-400 text-xl font-bold">
                Standard Bank
              </div>
              <div className="flex items-baseline">
                <div className="w-3 h-3 rounded-full bg-zinc-800"></div>
                <span className="text-gray-500 text-sm pl-2">
                  Revisiting user experience and engagement
                </span>
              </div>
              <div className="text-gray-600 text-xs mt-2">
                The Standard Bank of South Africa Limited is a South African
                financial services group and is Africa's biggest lender by
                assets.
              </div>
              <a className="text-red-400 text-xs mt-2 flex" href="">
                View case study
                <img className="h-4 w-4 ml-2" src={extlink} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div> */}
      <div className="featuredprojects-home">
        <div className="fps-title-home">
          <h1 className="text-[#D6DFF0]">Featured Projects</h1>
          <div></div>
        </div>
        <div className="verizon-sales-home">
          <div className="cardinsideconatiner1-home"></div>
          <div className="secondcard-home"></div>
        </div>
        <div className="verizon-sales-home">
          <div className="rightcard-home"></div>
          <div></div>
        </div>
        <div className="verizon-sales-home">
          <div className="cardinsideconatiner1-home"></div>
          <div className="secondcard-home"></div>
        </div>
        <div className="verizon-sales-home"></div>
      </div>
      <div className="dark:text-gray-400 mt-20 w-fit mx-auto text-2xl font-bold">
        Other Projects
      </div>
      <div className="w-8 rounded-sm border-b-4 my-2 mx-auto border-red-400 mb-24"></div>
      <div className="md:grid md:grid-cols-2 md:gap-x-10 md:gap-y-10 lg:grid-cols-3 justify-around px-14">
        <div className="relative mb-[10rem] w-fit mx-auto">
          <div className="border border-gray-700 h-[14rem] w-[18rem] rounded-sm">
            <div className="p-3">
              <div className="w-fit mx-auto text-red-400 text-xl font-bold">
                Moneytap Banker's Portal
              </div>
              <div className="p-2">
                <div className="flex items-baseline">
                  <div className="h-2 w-2 rounded-full bg-zinc-800"></div>
                  <div className="dark:text-gray-400 text-xs ml-1">
                    Revisiting user experience and engagement
                  </div>
                </div>
                <div className="text-gray-600 text-xs mt-2 px-2">
                  MoneyTap is India's first app-based personal credit
                  line,offered in partnership with banks and NBFCs.
                </div>
                <a
                  className="text-red-400 text-xs mt-2 flex w-fit mx-auto"
                  href=""
                >
                  View case study
                  <img className="h-4 w-4 ml-2" src={extlink} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="absolute h-[8rem] w-[13.5rem] left-[2.5rem] top-[10rem] rounded-sm bg-white"></div>
        </div>
        <div className="relative mb-[10rem] w-fit mx-auto">
          <div className="border border-gray-700 h-[14rem] w-[18rem] rounded-sm">
            <div className="p-3">
              <div className="w-fit mx-auto text-red-400 text-xl font-bold">
                Dell-Find A Partner Portal
              </div>
              <div className="p-2">
                <div className="flex items-baseline">
                  <div className="h-2 w-2 rounded-full bg-zinc-800"></div>
                  <div className="dark:text-gray-400 text-xs ml-1">
                    Revisiting user experience and engagement
                  </div>
                </div>
                <div className="text-gray-600 text-xs mt-2 px-2 line-through">
                  The Standard Bank of South Africa Limited is a South African
                  financial services group and is Africa's biggest lender by
                  assets.
                </div>
                <a
                  className="text-red-400 text-xs mt-2 flex w-fit mx-auto"
                  href=""
                >
                  View case study
                  <img className="h-4 w-4 ml-2" src={extlink} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="absolute h-[8rem] w-[13.5rem] left-[2.5rem] top-[10rem] rounded-sm bg-white"></div>
        </div>
        <div className="relative mb-[10rem] w-fit mx-auto">
          <div className="border border-gray-700 h-[14rem] w-[18rem] rounded-sm">
            <div className="p-3">
              <div className="w-fit mx-auto text-red-400 text-xl font-bold">
                ICICI Bank Dashboard
              </div>
              <div className="p-2">
                <div className="flex items-baseline">
                  <div className="h-2 w-2 rounded-full bg-zinc-800"></div>
                  <div className="dark:text-gray-400 text-xs ml-1">
                    Revisiting user experience and engagement
                  </div>
                </div>
                <div className="text-gray-600 text-xs mt-2 px-2 line-through">
                  The Standard Bank of South Africa Limited is a South African
                  financial services group and is Africa's biggest lender by
                  assets.
                </div>
                <a
                  className="text-red-400 text-xs mt-2 flex w-fit mx-auto"
                  href=""
                >
                  View case study
                  <img className="h-4 w-4 ml-2" src={extlink} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="absolute h-[8rem] w-[13.5rem] left-[2.5rem] top-[10rem] rounded-sm bg-white"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
