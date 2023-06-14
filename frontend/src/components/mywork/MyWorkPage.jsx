import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/mywork.css";
import P1_Image from "../../assets/home/gifs/VZ.gif";
import P2_Image from "../../assets/home/gifs/PGOS.gif";
import P3_Image from "../../assets/home/gifs/Subex.gif";
import P4_Image from "../../assets/home/gifs/SBSA.gif";
import P5_Image from "../../assets/home/gifs/MTBP.gif";
import P6_Image from "../../assets/home/gifs/Dell.gif";
import P7_Image from "../../assets/home/gifs/Trippiez.gif";
import bike from "../../assets/about/bike.png";
import qskip from "../../assets/about/qskip.png";
import skribe from "../../assets/about/skribe.png";
import paint from "../../assets/about/paint.png";
import sugrx from "../../assets/about/sugrx.png";

function MyWorkPage() {
  const Nav = useNavigate();
  const LinkFn = (URL) => {
    Nav(URL);
    document.getElementById("topheader").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <div>
      <div className="featured-mw">
        <h1>Featured Case-Studies</h1>
        <div>
          <div>
            <img src={P1_Image} alt="" />
            <div>
              <p>2021 - 2022</p>
              <h3>Verizon 360</h3>
              <p>Telecom CPQ Product</p>
            </div>
          </div>
          <div>
            <img src={P2_Image} alt="" />
            <div>
              <p>2022 - 2023</p>
              <h3>PGOS</h3>
              <p>Campaign Planning Platform </p>
            </div>
          </div>
          <div>
            <img src={P3_Image} alt="" />
            <div>
              <p>2019 - 2020</p>
              <h3>Subex</h3>
              <p>Telecom RA-FM Product</p>
            </div>
          </div>
        </div>
      </div>
      <div className="featured-mw">
        <h1>Other Case-Studies</h1>
        <div>
          <div>
            <img src={P4_Image} alt="" />
            <div>
              <p>2019</p>
              <h3>Standard Bank, SA</h3>
              <p>Corporate Banking</p>
            </div>
          </div>
          <div>
            <img src={P5_Image} alt="" />
            <div>
              <p>2017 - 2018</p>
              <h3>Banker’s Portal</h3>
              <p>Credit Analysis Product</p>
            </div>
          </div>
          <div>
            <img src={P6_Image} alt="" />
            <div>
              <p>2020 - 2021</p>
              <h3>Dell</h3>
              <p>Re-sale Platform</p>
            </div>
          </div>
          <div>
            <img src={P7_Image} alt="" />
            <div>
              <p>2018</p>
              <h3>Trippiez</h3>
              <p>Travel Planning Portal</p>
            </div>
          </div>
        </div>
      </div>
      <fieldset>
        <legend>Coming soon</legend>
      </fieldset>
      <div className="featured-mw">
        <h1>Mobile Application</h1>
        <div>
          <div>
            <img src={qskip} alt="" />
            <div>
              <p>2018</p>
              <h3>Qskip</h3>
              <p>Scan&Go Product</p>
            </div>
          </div>
          <div>
            <img src={sugrx} alt="" />
            <div>
              <p>2015</p>
              <h3>SugRx</h3>
              <p>Diabetes Monitoring App</p>
            </div>
          </div>
          <div>
            <img src={bike} alt="" />
            <div>
              <p>2019</p>
              <h3>Bike Guru</h3>
              <p>Biker Community App</p>
            </div>
          </div>
          <div>
            <img src={skribe} alt="" />
            <div>
              <p>2019 - 2020</p>
              <h3>Skribe</h3>
              <p>Admin Dashboard</p>
            </div>
          </div>
        </div>
      </div>
      <div className="featured-mw">
        <h1>My Digital Paintings</h1>
        <div>
          <div>
            <img src={paint} alt="" />
            <div>
              <p>2011 - Ongoing </p>
              <h3>Digital Paintings</h3>
              <p>Personal work</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyWorkPage;
