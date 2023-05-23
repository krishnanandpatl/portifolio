import React from "react";
import "../styles/home.css";
import extlink from "../../assets/externalLink.svg";
import avatar from "../../assets/avatar.png";
import dell from "../../assets/home/Dell.svg";
import icici from "../../assets/home/ICICI.svg";
import pgos from "../../assets/home/PGOS.svg";
import sbsa from "../../assets/home/SBSA.svg";
import vz from "../../assets/home/VZ.svg";
import P1_Image from "../../assets/home/gifs/VZ.gif";
import P2_Image from "../../assets/home/gifs/PGOS.gif";
import P3_Image from "../../assets/home/gifs/Subex.gif";
import P4_Image from "../../assets/home/gifs/SBSA.gif";
import P5_Image from "../../assets/home/gifs/SBSA.gif";
import P6_Image from "../../assets/home/gifs/Dell.gif";
import P7_Image from "../../assets/home/gifs/Trippiez.gif";
import { useNavigate } from "react-router-dom";

function Home() {
  const Nav = useNavigate();
  const LinkFn = (URL, redirectTo) => {
    Nav(URL, { state: { to: redirectTo } });
    document.getElementById("topheader").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    // if (nav) setNav(!nav);
  };
  return (
    <div className="md:mt-[11rem] mt-[7rem] max-w-[1440px] mx-auto">
      <div>
        <div className="mx-auto rounded-full lg:w-20 lg:h-20 w-14 h-14 mb-4">
          <img src={avatar} className="rounded-full" alt="avatar" />
        </div>
        <div className="mx-auto w-fit dark:text-gray-200 my-8 font-semibold lg:text-lg text-[8px]">
          Hello I'm Kshitij Srivastava 👋
        </div>
        <h1 className="dark:text-[#D6DFF0] w-fit mx-auto lg:text-[45px] sm:text-[30px] text-[20px] font-normal leading-[54px]">
          A Product Designer
        </h1>
        <h1 className="dark:text-[#D6DFF0] w-fit mx-auto lg:text-[45px] sm:text-[30px] text-[20px] lg:leading-[54px]">
          driven by empathy and creativity
        </h1>
        <div className="w-fit mx-auto mt-8 md:mb-[120px] mb-[70px]">
          <button className="bg-gradient-to-tr from-[#ED787B] to-[#DF5B5D] rounded-md md:py-[16px] md:px-[24px] py-[12px] px-[20px] text-[#FFFFFF] font-semibold">
            All Case Studies
          </button>
        </div>
      </div>
      <div
        id="home-images"
        className=" lg:mx-[5%] mx-[30%] lg:px-[73px] lg:py-[76px] px-[10%] py-[8%]"
      >
        <div className="lg:flex lg:justify-around lg:flex-row lg:gap-5 flex flex-col gap-20">
          <img src={vz} className="" alt="" />
          <img src={pgos} className="" alt="" />
          <img src={dell} className="" alt="" />
          <img src={sbsa} className="" alt="" />
          <img src={icici} className="" alt="" />
        </div>
      </div>
      <div className="md:mt-[120px] mt-[80px] xl:w-[903px] xl:mx-[270px] mx-auto w-fit">
        <div className="dark:text-[#D6DFF0] mt-20 w-fit mx-auto text-2xl font-bold">
          Featured Projects
        </div>
        <div className="red-line-featured"></div>
        <div className="w-fit mx-auto">
          <div className="relative mb-20">
            <div className="verizon-container-home py-[78px] pl-[48px]">
              <div className="">
                <div className="verizon-title-home">Verizon Sales 360</div>
                <div className="flex items-baseline">
                  <div className="w-3 h-3 rounded-full bg-zinc-800"></div>
                  <span className="second-title-home">Greenfield Project</span>
                </div>
                <div className="para-home2">
                  A comprehensive digital landscape that supports 22k business
                  across 338k sites.
                </div>
                <a
                  className="link-open-home my-[16px]"
                  onClick={() => LinkFn("/restricted", "/verizon-360")}
                >
                  View case study
                  <img className="h-4 w-4 ml-2" src={extlink} alt="" />
                </a>
              </div>
            </div>
            <div className="image-container-home">
              <img src={P1_Image} alt="" />
            </div>
          </div>
          <div className="relative items-center lg:w-[42rem] mb-20">
            <div className="image-container-home2">
              <img src={P2_Image} className="h-full w-full" alt="" />
            </div>
            <div className="flex justify-end verizon-container-home py-[78px] pr-[108px]">
              <div className="">
                <div className="verizon-title-home">Publicis Growth OS</div>
                <div className="flex items-baseline">
                  <div className="w-3 h-3 rounded-full bg-zinc-800"></div>
                  <span className="second-title-home">Greenfield Project</span>
                </div>
                <div className="para-home">
                  A campaign management application to provide a more intuitive
                  and eficient platform for marketing teams to manage their
                  campaigns effectively.
                </div>
                <a
                  className="link-open-home my-[16px]"
                  onClick={() => LinkFn("/restricted", "/publicis-growth-os")}
                >
                  View case study
                  <img className="h-4 w-4 ml-2" src={extlink} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="relative mb-20">
            <div className="verizon-container-home py-[78px] pl-[48px]">
              <div className="">
                <div className="verizon-title-home">Subex</div>
                <div className="flex items-baseline">
                  <div className="w-3 h-3 rounded-full bg-zinc-800"></div>
                  <span className="second-title-home">Product Revamp</span>
                </div>
                <div className="para-home">
                  Subex Limited provides digital trust products to communication
                  service providers.
                  <p className="para-home">
                    The company is listed on BSE and NSE in India.
                  </p>
                </div>
                <a
                  className="link-open-home my-[16px]"
                  onClick={() => LinkFn("/subex", "")}
                >
                  View case study
                  <img className="h-4 w-4 ml-2" src={extlink} alt="" />
                </a>
              </div>
            </div>
            <div className="image-container-home">
              <img src={P3_Image} alt="" />
            </div>
          </div>
          <div className="relative items-center lg:w-[42rem] mb-20">
            <div className="image-container-home2">
              <img src={P4_Image} className="h-full w-full" alt="" />
            </div>
            <div></div>
            <div className="flex justify-end verizon-container-home py-[78px] pr-[108px]">
              <div className="">
                <div className="verizon-title-home">Standard Bank</div>
                <div className="flex items-baseline">
                  <div className="w-3 h-3 rounded-full bg-zinc-800"></div>
                  <span className="second-title-home">
                    Revisiting user experience and engagement
                  </span>
                </div>
                <div className="para-home">
                  The Standard Bank of South Africa Limited is a South African
                  financial services group and is Africa's biggest lender by
                  assets.
                </div>
                <a
                  className="link-open-home my-[16px]"
                  onClick={() => LinkFn("/standard-bank-of-south-africa")}
                >
                  View case study
                  <img className="h-4 w-4 ml-2" src={extlink} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="feature-title">Other Projects</div>
      <div className="red-line-featured"></div>
      <div className="mt-[24px] mb-[226px] other-projects-main">
        <div className="relative">
          <div className="mtbp-home">
            <div className="other-proj-title">Moneytap Banker's Portal</div>
            <div className="p-2">
              <div className="flex items-baseline">
                <div className="h-2 w-2 rounded-full bg-zinc-800"></div>
                <div className="second-title-op">Hybrid Project</div>
              </div>
              <div className="op-para">
                MoneyTap is India's first app-based personal credit line,offered
                in partnership with banks and NBFCs.
              </div>
              <a
                className="link-open-home"
                onClick={() => LinkFn("/moneytap-bankers-portal")}
              >
                View case study
                <img className="h-4 w-4 ml-2" src={extlink} alt="" />
              </a>
            </div>
          </div>
          <div className="op-images">
            <img src={P5_Image} alt="" />
          </div>
        </div>
        <div className="relative">
          <div className="mtbp-home">
            <div className="other-proj-title">Dell-Find A Partner Portal</div>
            <div className="p-2">
              <div className="flex items-baseline">
                <div className="h-2 w-2 rounded-full bg-zinc-800"></div>
                <div className="second-title-op whitespace-nowrap">
                  Revisiting user experience and engagement
                </div>
              </div>
              <div className="op-para">
                The Dell Find a Partner Program is a program that helps Dell
                customers connect with Dell's network of trusted partners.
              </div>
              <a
                className="link-open-home"
                onClick={() => LinkFn("/moneytap-bankers-portal")}
              >
                View case study
                <img className="h-4 w-4 ml-2" src={extlink} alt="" />
              </a>
            </div>
          </div>
          <div className="op-images">
            <img src={P6_Image} alt="" />
          </div>
        </div>
        <div className="relative">
          <div className="mtbp-home">
            <div className="other-proj-title-home ">Trippiez</div>
            <div className="p-2">
              <div className="flex items-baseline">
                <div className="h-2 w-2 rounded-full bg-zinc-800"></div>
                <div className="second-title-op line-through whitespace-nowrap">
                  Revisiting user experience and engagement
                </div>
              </div>
              <div className="op-para line-through">
                The Standard Bank of South Africa Limited is a South African
                financial services g
              </div>
              <a
                className="link-open-home"
                onClick={() => LinkFn("/trippiez ")}
              >
                View case study
                <img className="h-4 w-4 ml-2" src={extlink} alt="" />
              </a>
            </div>
          </div>
          <div className="op-images">
            <img src={P7_Image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
