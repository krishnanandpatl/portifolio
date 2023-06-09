import React, { useRef } from "react";
import "../styles/home.css";
import extlink from "../../assets/home/open_in_new.svg";
import brush from "../../assets/home/brush.svg";
import compass from "../../assets/home/compass.svg";
import penCross from "../../assets/home/penCross.svg";
import percent from "../../assets/home/percent.svg";
import avatar from "../../assets/avatar.png";
import dell from "../../assets/home/Dell.svg";
import icici from "../../assets/home/ICICI.svg";
import pgos from "../../assets/home/PGOS.svg";
import lscroll from "../../assets/home/leftscroll.svg";
import rscroll from "../../assets/home/rightscroll.svg";
import sbsa from "../../assets/home/SBSA.svg";
import vz from "../../assets/home/VZ.svg";
import P1_Image from "../../assets/home/gifs/VZ.gif";
import P2_Image from "../../assets/home/gifs/PGOS.gif";
import P3_Image from "../../assets/home/gifs/Subex.gif";
import P4_Image from "../../assets/home/gifs/SBSA.gif";
import P5_Image from "../../assets/home/gifs/MTBP.gif";
import P6_Image from "../../assets/home/gifs/Dell.gif";
import P7_Image from "../../assets/home/gifs/Trippiez.gif";
import { useNavigate } from "react-router-dom";

function Home() {
  const Nav = useNavigate();
  const ref = useRef(null);
  const LinkFn = (URL) => {
    Nav(URL);
    document.getElementById("topheader").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    // if (nav) setNav(!nav);
  };
  function Scroll(x) {
    ref.current.scrollLeft += x;
  }
  return (
    <div className="max-w-[1440px] mx-auto main-toppest">
      <div className="home-top-part">
        <div className="mx-auto">
          <img src={avatar} className="rounded-full" alt="avatar" />
        </div>
        <div className="">Hello I'm Kshitij Srivastava 👋</div>
        <h1 className="first-head-home">A Product Designer</h1>
        <h1 className="">driven by empathy and creativity</h1>
        <div className="">
          <button
            className="button-case-study"
            onClick={() => LinkFn("/my-work")}
          >
            All Case Studies
          </button>
        </div>
      </div>
      <div id="home-images" className="">
        <img src={vz} className="" alt="" />
        <img src={pgos} className="" alt="" />
        <img src={dell} className="" alt="" />
        <img src={sbsa} className="" alt="" />
        <img src={icici} className="" alt="" />
      </div>
      <div className="md:mt-[120px] mt-[80px] xl:w-[903px] mx-auto w-fit">
        <div className="feature-title-home">Featured Projects</div>
        <div className="red-line-featured"></div>
        <div className="w-fit">
          <div className="hidden lg:block relative mb-20 w-fit">
            <div className="verizon-container-home py-[78px] pl-[48px]">
              <div className="">
                <div className="verizon-title-home">Verizon Sales 360</div>
                <div className="second-title-home">
                  <div className="icon-second-tit">
                    <img src={brush} alt="" />
                  </div>
                  Greenfield Project
                </div>
                <div className="para-home">
                  A comprehensive digital landscape that supports 22k business
                  across 338k sites.
                </div>
                <a
                  className="link-open-home my-[16px]"
                  onClick={() => LinkFn("/verizon-360")}
                >
                  View case study
                  <img className="" src={extlink} alt="" />
                </a>
              </div>
            </div>
            <div className="image-container-home" style={{left:"72%"}}>
              <img src={P1_Image} alt="" />
            </div>
          </div>

          <div className="hidden lg:block relative items-center lg:w-[42rem] mb-20" style={{marginLeft:"18%"}}>
            <div className="image-container-home2">
              <img src={P2_Image} className="h-full w-full" alt="" />
            </div>
            <div className="flex justify-end verizon-container-home lg:py-[78px] lg:ml-[80px] lg:pr-[108px]">
              <div className="">
                <div className="verizon-title-home">Publicis Growth OS</div>
                <div className="second-title-home">
                  <div className="icon-second-tit">
                    <img src={brush} alt="" />
                  </div>
                  Greenfield Project
                </div>
                <div className="para-home">
                  A campaign management application to provide a more intuitive
                  and eficient platform for marketing teams to manage their
                  campaigns effectively.
                </div>
                <a
                  className="link-open-home my-[16px]"
                  onClick={() => LinkFn("/publicis-growth-os")}
                >
                  View case study
                  <img className="" src={extlink} alt="" />
                </a>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative mb-20 lg:w-[42rem]">
            <div className="verizon-container-home py-[78px] pl-[48px]">
              <div className="">
                <div className="verizon-title-home">Subex</div>
                <div className="flex items-baseline second-title-home">
                  <div className="icon-second-tit">
                    <img src={percent} alt="" />
                  </div>
                  Product Revamp
                </div>
                <div className="para-home">
                  Subex Limited provides digital trust products to communication
                  service providers.
                  <p className="para-home ml-0">
                    The company is listed on BSE and NSE in India.
                  </p>
                </div>
                <a
                  className="link-open-home my-[16px]"
                  onClick={() => LinkFn("/subex")}
                >
                  View case study
                  <img className="" src={extlink} alt="" />
                </a>
              </div>
            </div>
            <div className="image-container-home" style={{left:"76%"}}>
              <img src={P3_Image} alt="" />
            </div>
          </div>

          <div className="hidden lg:block relative items-center lg:w-[42rem] mb-20" style={{marginLeft:"18%"}}>
            <div className="image-container-home2">
              <img src={P4_Image} className="h-full w-full" alt="" />
            </div>
            <div className="flex justify-end verizon-container-home py-[78px] ml-[80px] pr-[108px]">
              <div className="">
                <div className="verizon-title-home">Standard Bank</div>
                <div className="second-title-home">
                  <div className="icon-second-tit">
                    <img src={compass} alt="" />
                  </div>
                  Revisiting user experience and engagement
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
                  <img className="" src={extlink} alt="" />
                </a>
              </div>
            </div>
          </div>

          <div className="other-projects-main">
            <div className="lg:hidden block relative mb-40">
              <div className="mtbp-home">
                <div className="other-proj-title-home verizon-title-home">
                  Verizon Sales 360
                </div>
                <div className="">
                  <div className="second-title-op">
                    <div className="icon-second-tit">
                      <img src={brush} alt="" />
                    </div>
                    Greenfield Project
                  </div>
                  <div className="op-para para-home2">
                    A comprehensive digital landscape that supports 22k business
                    across 338k sites.
                  </div>
                  <a
                    className="link-open-home "
                    onClick={() => LinkFn("/verizon-360")}
                  >
                    View case study
                    <img className="" src={extlink} alt="" />
                  </a>
                </div>
              </div>
              <div className="op-images">
                <img src={P1_Image} alt="" />
              </div>
            </div>
            <div className="lg:hidden block relative mb-40">
              <div className="mtbp-home">
                <div className="other-proj-title-home verizon-title-home">
                  Publicis Growth OS
                </div>
                <div className="">
                  <div className="second-title-op">
                    <div className="icon-second-tit">
                      <img src={brush} alt="" />
                    </div>
                    Greenfield Project
                  </div>
                  <div className="op-para para-home">
                    A campaign management application to provide a more
                    intuitive and eficient platform for marketing teams to
                    manage their campaigns effectively.
                  </div>
                  <a
                    className="link-open-home "
                    onClick={() => LinkFn("/publicis-growth-os")}
                  >
                    View case study
                    <img className="" src={extlink} alt="" />
                  </a>
                </div>
              </div>
              <div className="op-images">
                <img src={P2_Image} alt="" />
              </div>
            </div>
            <div className="lg:hidden block relative mb-40">
              <div className="mtbp-home">
                <div className="other-proj-title-home verizon-title-home">
                  Subex
                </div>
                <div className="">
                  <div className="second-title-op">
                    <div className="icon-second-tit">
                      <img src={percent} alt="" />
                    </div>
                    Hybrid Project
                  </div>
                  <div className="para-home mb-[24px]">
                    Subex Limited provides digital trust products to
                    communication service providers.
                    <p className="para-home ml-0">
                      The company is listed on BSE and NSE in India.
                    </p>
                  </div>
                  <a
                    className="link-open-home "
                    onClick={() => LinkFn("/subex")}
                  >
                    View case study
                    <img className="" src={extlink} alt="" />
                  </a>
                </div>
              </div>
              <div className="op-images">
                <img src={P3_Image} alt="" />
              </div>
            </div>
            <div className="lg:hidden block relative mb-40">
              <div className="mtbp-home">
                <div className="other-proj-title-home verizon-title-home">
                  Standard Bank
                </div>
                <div className="">
                  <div className="second-title-op">
                    <div className="icon-second-tit">
                      <img src={compass} alt="" />
                    </div>
                    Revisiting user experience and engagement
                  </div>
                  <div className="op-para">
                    The Standard Bank of South Africa Limited is a South African
                    financial services group and is Africa's biggest lender by
                    assets.
                  </div>
                  <a
                    className="link-open-home "
                    onClick={() => LinkFn("/standard-bank-of-south-africa")}
                  >
                    View case study
                    <img className="" src={extlink} alt="" />
                  </a>
                </div>
              </div>
              <div className="op-images">
                <img src={P4_Image} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="feature-title-home">Other Projects</div>
      <div className="red-line-featured"></div>
      <div
        className="mt-[24px] relative other-projects-main op-main-2"
        ref={ref}
      >
        <legend className="buttonL-home" onClick={() => Scroll(-200)}>
          <img src={lscroll} alt="" />
        </legend>
        <div className="relative">
          <div className="mtbp-home">
            <div className="other-proj-title-home">
              Moneytap Banker's Portal
            </div>
            <div className="">
              <div className="second-title-op">
                <div className="icon-second-tit">
                  <img src={penCross} alt="" />
                </div>
                Hybrid Project
              </div>
              <div className="op-para">
                MoneyTap is India's first app-based personal credit line,offered
                in partnership with banks and NBFCs.
              </div>
              <a
                className="link-open-home "
                onClick={() => LinkFn("/moneytap-bankers-portal")}
              >
                View case study
                <img className="" src={extlink} alt="" />
              </a>
            </div>
          </div>
          <div className="op-images">
            <img src={P5_Image} alt="" />
          </div>
        </div>
        <div className="relative">
          <div className="mtbp-home">
            <div className="other-proj-title-home">
              Dell-Find A Partner Portal
            </div>
            <div className="p-2">
              <div className="second-title-op">
                <div className="icon-second-tit">
                  <img src={compass} alt="" />
                </div>
                Revisiting user experience and engagement
              </div>
              <div className="op-para mb-[16px]">
                The Dell Find a Partner Program is a program that helps Dell
                customers connect with Dell's network of trusted partners.
              </div>
              <a className="link-open-home" onClick={() => LinkFn("/dell")}>
                View case study
                <img className="" src={extlink} alt="" />
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
              <div className="flex second-title-op">
                <div className="icon-second-tit">
                  <img src={compass} alt="" />
                </div>
                Elevating Experience & Igniting Engagement
              </div>
              <div className="op-para">
                Empowering travelers to explore the world with confidence and
                convenience.
              </div>
              <a
                className="link-open-home"
                onClick={() => LinkFn("/trippiez ")}
              >
                View case study
                <img className="" src={extlink} alt="" />
              </a>
            </div>
          </div>
          <div className="op-images">
            <img src={P7_Image} alt="" />
          </div>
        </div>
        <legend className="buttonR-home" onClick={() => Scroll(+200)}>
          <img src={rscroll} alt="" />
        </legend>
      </div>
    </div>
  );
}

export default Home;
