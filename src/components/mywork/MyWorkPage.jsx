import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/mywork.css";
import P1_Image from "../../assets/home/gifs/VZ.gif";
import P2_Image from "../../assets/home/gifs/PGOS.gif";
import P3_Image from "../../assets/home/gifs/Subex.gif";
import P4_Image from "../../assets/home/gifs/SBSA.gif";
import P5_Image from "../../assets/home/gifs/SBSA.gif";
import P6_Image from "../../assets/home/gifs/Dell.gif";
import P7_Image from "../../assets/home/gifs/Trippiez.gif";
import checker from "../../assets/home/gifs/checker.png";

function MyWorkPage() {

  const Nav = useNavigate();
  const LinkFn = (URL, redirectTo) => {
    Nav(URL, { state: { to: redirectTo } });
    document.getElementById("topheader").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }

  return (
    <div className="workMainContainer dark:bg-[#151A20]">
      <div className="MainContainer max-w-[1440px] mx-auto">
        <div className="featuredBoxMain">
          <div className="titleBox">Featured Case-Studies</div>
          <div className="featureBox">
            <div className="featureContent" onClick={()=>LinkFn("/restricted","/verizon-360")}>
              <div className="contentImage">
                <img src={P1_Image} loading="lazy" alt="" />
              </div>
              <div className="contentTextBox">
                <h2 className="titleYear">2018-2021</h2>
                <p className="titleName">Verizon 360</p>
                <p className="companyName">Telecom CPQ Product</p>
              </div>
            </div>
            <div className="featureContent" onClick={()=>LinkFn("/restricted","/publicis-growth-os")}>
              <div className="contentImage">
                <img src={P2_Image} loading="lazy" alt="" />
              </div>
              <div className="contentTextBox">
                <h2 className="titleYear">2018-2021</h2>
                <p className="titleName">PGOS</p>
                <p className="companyName">Telecom CPQ Product</p>
              </div>
            </div>
            <div className="featureContent" onClick={()=>LinkFn("/subex")}>
              <div className="contentImage">
                <img src={P3_Image} loading="lazy" alt="" />
              </div>
              <div className="contentTextBox">
                <h2 className="titleYear">2018-2021</h2>
                <p className="titleName">Subex</p>
                <p className="companyName">Telecom CPQ Product</p>
              </div>
            </div>
          </div>
        </div>
        <div className="otherBoxMain">
          <div className="titleBox">Other Case-Studies</div>
          <div className="featureBox">
            <div className="featureContent" onClick={()=>LinkFn("/standard-bank-of-south-africa")}>
              <div className="contentImage">
                <img src={P4_Image} loading="lazy" alt="" />
              </div>
              <div className="contentTextBox">
                <h2 className="titleYear">2018-2021</h2>
                <p className="titleName">Standard Bank,SA</p>
                <p className="companyName">Telecom CPQ Product</p>
              </div>
            </div>
            <div className="featureContent" onClick={()=>LinkFn("/moneytap-bankers-portal")}>
              <div className="contentImage">
                <img src={P5_Image} loading="lazy" alt="" />
              </div>
              <div className="contentTextBox">
                <h2 className="titleYear">2018-2021</h2>
                <p className="titleName">Banker's Portal</p>
                <p className="companyName">Telecom CPQ Product</p>
              </div>
            </div>
            <div className="featureContent" onClick={()=>LinkFn("/dell")}>
              <div className="contentImage">
                <img src={P6_Image} loading="lazy" alt="" />
              </div>
              <div className="contentTextBox">
                <h2 className="titleYear">2018-2021</h2>
                <p className="titleName">Dell</p>
                <p className="companyName">Telecom CPQ Product</p>
              </div>
            </div>
            <div className="featureContent"onClick={()=>LinkFn("/trippiez")}>
              <div className="contentImage">
                <img src={P7_Image} loading="lazy" alt="" />
              </div>
              <div className="contentTextBox">
                <h2 className="titleYear">2018-2021</h2>
                <p className="titleName">Trippiez</p>
                <p className="companyName">Telecom CPQ Product</p>
              </div>
            </div>
          </div>
        </div>
        <div className="otherBoxMain">
          <div className="titleBox">Mobile Applications</div>
          <div className="featureBox">
            <div className="featureContent">
              <div className="contentImage">
                <img src={checker} loading="lazy" alt="" />
              </div>
              <div className="contentTextBox">
                <h2 className="titleYear">2018-2021</h2>
                <p className="titleName">Qskip</p>
                <p className="companyName">Telecom CPQ Product</p>
              </div>
            </div>
            <div className="featureContent">
              <div className="contentImage">
                <img src={checker} loading="lazy" alt="" />
              </div>
              <div className="contentTextBox">
                <h2 className="titleYear">2018-2021</h2>
                <p className="titleName">SugeX</p>
                <p className="companyName">Telecom CPQ Product</p>
              </div>
            </div>
            <div className="featureContent">
              <div className="contentImage">
                <img src={checker} loading="lazy" alt="" />
              </div>
              <div className="contentTextBox">
                <h2 className="titleYear">2018-2021</h2>
                <p className="titleName">Bike Guru</p>
                <p className="companyName">Telecom CPQ Product</p>
              </div>
            </div>
            <div className="featureContent">
              <div className="contentImage">
                <img src={checker} loading="lazy" alt="" />
              </div>
              <div className="contentTextBox">
                <h2 className="titleYear">2018-2021</h2>
                <p className="titleName">Skribe</p>
                <p className="companyName">Telecom CPQ Product</p>
              </div>
            </div>
          </div>
        </div>
        <div className="otherBoxMain">
          <div className="titleBox">Other Projects</div>
          <div className="featureBox">
            <div className="featureContent">
              <div className="contentImage">
                <img src={checker} loading="lazy" alt="" />
              </div>
              <div className="contentTextBox">
                <h2 className="titleYear">2018-2021</h2>
                <p className="titleName">Dreams Redeveloped</p>
                <p className="companyName">Telecom CPQ Product</p>
              </div>
            </div>
            <div className="featureContent">
              <div className="contentImage">
                <img src={checker} loading="lazy" alt="" />
              </div>
              <div className="contentTextBox">
                <h2 className="titleYear">2018-2021</h2>
                <p className="titleName">Nurture Farm</p>
                <p className="companyName">Telecom CPQ Product</p>
              </div>
            </div>
            <div className="featureContent">
              <div className="contentImage">
                <img src={checker} loading="lazy" alt="" />
              </div>
              <div className="contentTextBox">
                <h2 className="titleYear">2018-2021</h2>
                <p className="titleName">Cosmos Bank</p>
                <p className="companyName">Telecom CPQ Product</p>
              </div>
            </div>
          </div>
        </div>
        <div className="otherBoxMain">
          <div className="titleBox">Passion Applications</div>
          <div className="featureBox">
            <div className="featureContent">
              <div className="contentImage">
                <img src={checker} loading="lazy" alt="" />
              </div>
              <div className="contentTextBox">
                <h2 className="titleYear">2018-2021</h2>
                <p className="titleName">Tv App</p>
                <p className="companyName">Telecom CPQ Product</p>
              </div>
            </div>
            <div className="featureContent">
              <div className="contentImage">
                <img src={checker} loading="lazy" alt="" />
              </div>
              <div className="contentTextBox">
                <h2 className="titleYear">2018-2021</h2>
                <p className="titleName">Watch App</p>
                <p className="companyName">Telecom CPQ Product</p>
              </div>
            </div>
            <div className="featureContent">
              <div className="contentImage">
                <img src={checker} loading="lazy" alt="" />
              </div>
              <div className="contentTextBox">
                <h2 className="titleYear">2018-2021</h2>
                <p className="titleName">AR/VR App</p>
                <p className="companyName">Telecom CPQ Product</p>
              </div>
            </div>
          </div>
        </div>
        <div className="otherBoxMain">
          <div className="titleBox">My Digital Paintings</div>
          <div className="featureBox">
            <div className="featureContent">
              <div className="contentImage">
                <img src={checker} loading="lazy" alt="" />
              </div>
              <div className="contentTextBox">
                <h2 className="titleYear">2018-2021</h2>
                <p className="titleName">Tv App</p>
                <p className="companyName">Telecom CPQ Product</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyWorkPage;
