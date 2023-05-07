import React from 'react';
import '../styles/Home_page.css';
import Me from '../../assets/home/Me.png';
import VZ from '../../assets/home/VZ.png';
import Dell from '../../assets/home/Dell.png';
import ICICI from '../../assets/home/ICICI.png';
import PGOS from '../../assets/home/PGOS.png';
import SBSA from '../../assets/home/SBSA.png';
import openInNew from '../../assets/home/openInNew.png';
import Group1683 from '../../assets/home/Group1683.png';
import P1_Image from '../../assets/home/P1_Image.png';
import P2_Image from '../../assets/home/P2_Image.png';
import P3_Image from '../../assets/home/P3_Image.png';
import P4_Image from '../../assets/home/P4_Image.png';
import P5_Image from '../../assets/home/P5_Image.png';
import P6_Image from '../../assets/home/P6_Image.png';
import P7_Image from '../../assets/home/P7_Image.png';
import { useNavigate } from 'react-router-dom';


function Home_Page() {
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
    <div>
      <div className="Home-Page">
      <div className="homePageIcon"><img src={Me} alt="Avtar" /></div>
      <div className="homePageTitle">Hello I’m Kshitij Srivastava 👋</div>
      <div className="homePageContent">A Product Designer <br /> driven by empathy and creativity</div>
      <button className='home-btn1'>All Case studies</button>
      <div className="homeCompanyBox">
        <div className="homeCompanyIcon"><img src={VZ} alt="VZ" /></div>
        <div className="homeCompanyIcon"><img src={PGOS} alt="PGOS" /></div>
        <div className="homeCompanyIcon"><img src={Dell} alt="DELL" /></div>
        <div className="homeCompanyIcon"><img src={SBSA} alt="SBSA" /></div>
        <div className="homeCompanyIcon"><img src={ICICI} alt="ICICI" /></div>
      </div>
      <div className="homeProjectBox">
        <div className="homeProjectBox-Title">
            <p className="homeProjectBox-Title-Text">Featured Projects</p>
            <div className="homeProjectBox-Hr"></div>
        </div>
        <div className="homeProjectBox-Project1">
            <div className="homeProjectBox-Project1-left">
                <div className="homeProjectBox-Project1-left-Title">Verizon Sales 360</div>
                <div className="homeProjectBox-Project1-left-Text">
                    <div className="homeProjectBox-Project1-left-Text-icon"><img src={Group1683} alt="Group1683" /></div>
                    <div className="homeProjectBox-Project1-left-TextLine">Greenfield Project</div>
                </div>
                <div className="homeProjectBox-Project1-left-Details">A comprehensive digital landscape that supports 22k business customers across 338k sites.</div>
                <div className="homeProjectBox-Project1-left-Link" onClick={() => LinkFn("/restricted")}>
                    <div className="homeProjectBox-Project1-left-Link-Text">View case study</div>
                    <div className="homeProjectBox-Project1-left-Link-Icon"><img src={openInNew} alt="OpenInNew" /></div>
                </div>
            </div>
            <div className="homeProjectBox-Project1-Right"><img src={P1_Image} alt="P1" /></div>
        </div>
        <div className="homeProjectBox-Project1">
        <div className="homeProjectBox-Project2-Left"><img src={P2_Image} alt="P2" /></div>
        <div className="homeProjectBox-Project2-Right">
        <div className="homeProjectBox-Project1-left-Title">Publicis Growth OS</div>
                <div className="homeProjectBox-Project1-left-Text">
                    <div className="homeProjectBox-Project1-left-Text-icon"><img src={Group1683} alt="Group1683" /></div>
                    <div className="homeProjectBox-Project1-left-TextLine">Greenfield Project</div>
                </div>
                <div className="homeProjectBox-Project1-left-Details">A campaign management application to provide a more intuitive and efficient platform for marketing teams to manage their campaigns effectively.</div>
                <div className="homeProjectBox-Project1-left-Link" onClick={() => LinkFn("/restricted")}>
                    <div className="homeProjectBox-Project1-left-Link-Text">View case study</div>
                    <div className="homeProjectBox-Project1-left-Link-Icon"><img src={openInNew} alt="OpenInNew" /></div>
                </div>
        </div>
        </div>
        <div className="homeProjectBox-Project1">
            <div className="homeProjectBox-Project1-left">
                <div className="homeProjectBox-Project1-left-Title">Subex</div>
                <div className="homeProjectBox-Project1-left-Text">
                    <div className="homeProjectBox-Project1-left-Text-icon"><img src={Group1683} alt="Group1683" /></div>
                    <div className="homeProjectBox-Project1-left-TextLine">Product Revamp</div>
                </div>
                <div className="homeProjectBox-Project1-left-Details">Subex Limited provides digital trust products to communication service providers. <br /> The company is listed on BSE and NSE in India.</div>
                <div className="homeProjectBox-Project1-left-Link" onClick={() => LinkFn("/subex")}>
                    <div className="homeProjectBox-Project1-left-Link-Text">View case study</div>
                    <div className="homeProjectBox-Project1-left-Link-Icon"><img src={openInNew} alt="OpenInNew" /></div>
                </div>
            </div>
            <div className="homeProjectBox-Project1-Right"><img src={P3_Image} alt="P3" /></div>
        </div>
        <div className="homeProjectBox-Project1">
        <div className="homeProjectBox-Project2-Left"><img src={P4_Image} alt="P4" /></div>
        <div className="homeProjectBox-Project2-Right">
        <div className="homeProjectBox-Project1-left-Title">Standard Bank</div>
                <div className="homeProjectBox-Project1-left-Text">
                    <div className="homeProjectBox-Project1-left-Text-icon"><img src={Group1683} alt="Group1683" /></div>
                    <div className="homeProjectBox-Project1-left-TextLine">Revisiting user experience and engagement</div>
                </div>
                <div className="homeProjectBox-Project1-left-Details">The Standard Bank of South Africa Limited is a South African financial services group and is Africa's biggest lender by assets.</div>
                <div className="homeProjectBox-Project1-left-Link" onClick={() => LinkFn("/standard-bank-of-south-africa")}>
                    <div className="homeProjectBox-Project1-left-Link-Text">View case study</div>
                    <div className="homeProjectBox-Project1-left-Link-Icon"><img src={openInNew} alt="OpenInNew" /></div>
                </div>
        </div>
        </div>
      </div>
      <div className="homeProjectBox-Lower">
        <div className="homeProjectBox-Title">
            <p className="homeProjectBox-Title-Text">Others Projects</p>
            <div className="homeProjectBox-Hr"></div>
        </div>
        <div className="homeProjectBox-Lower-FlexBox">
            <div className="homeProjectBox-Lower-ProjectBox">
                <div className="homeProjectBox-Lower-ProjectBox-Top">
                    <div className="homeProjectBox-Lower-ProjectBox-Top-Heading">Moneytap Banker's Portal</div>
                    <div className="homeProjectBox-Lower-ProjectBox-Top-TitleBox">
                        <div className="homeProjectBox-Lower-ProjectBox-Top-TitleBox-Icon"><img src={Group1683} alt="Group1683" /></div>
                        <div className="homeProjectBox-Lower-ProjectBox-Top-TitleBox-Text">Hybrid Project</div>
                    </div>
                    <div className="homeProjectBox-Lower-ProjectBox-Top-Details">MoneyTap is India’s first app-based personal credit line, offered in partnership with banks and NBFCs. </div>
                    <div className="homeProjectBox-Project1-left-Link margin28">
                    <div className="homeProjectBox-Project1-left-Link-Text">View case study</div>
                    <div className="homeProjectBox-Project1-left-Link-Icon"><img src={openInNew} alt="OpenInNew" /></div>
                </div>
                </div>
                <div className="homeProjectBox-Lower-ProjectBox-Lower"><img src={P5_Image} alt="P5" /></div>
            </div>
            <div className="homeProjectBox-Lower-ProjectBox">
            <div className="homeProjectBox-Lower-ProjectBox-Top">
                    <div className="homeProjectBox-Lower-ProjectBox-Top-Heading">Dell-Find A Partner Portal</div>
                    <div className="homeProjectBox-Lower-ProjectBox-Top-TitleBox">
                        <div className="homeProjectBox-Lower-ProjectBox-Top-TitleBox-Icon"><img src={Group1683} alt="Group1683" /></div>
                        <div className="homeProjectBox-Lower-ProjectBox-Top-TitleBox-Text">Revisiting user experience and engagement</div>
                    </div>
                    <div className="homeProjectBox-Lower-ProjectBox-Top-Details">The Dell Find a Partner Program is a program that helps Dell customers connect with Dell's network of trusted partners. </div>
                    <div className="homeProjectBox-Project1-left-Link margin28" onClick={()=>LinkFn('/dell')}>
                    <div className="homeProjectBox-Project1-left-Link-Text">View case study</div>
                    <div className="homeProjectBox-Project1-left-Link-Icon"><img src={openInNew} alt="OpenInNew" /></div>
                </div>
                </div>
                <div className="homeProjectBox-Lower-ProjectBox-Lower"><img src={P6_Image} alt="P6" /></div>
            </div>
            <div className="homeProjectBox-Lower-ProjectBox"> <div className="homeProjectBox-Lower-ProjectBox-Top">
                    <div className="homeProjectBox-Lower-ProjectBox-Top-Heading">Trippiez</div>
                    <div className="homeProjectBox-Lower-ProjectBox-Top-TitleBox">
                        <div className="homeProjectBox-Lower-ProjectBox-Top-TitleBox-Icon"><img src={Group1683} alt="Group1683" /></div>
                        <div className="homeProjectBox-Lower-ProjectBox-Top-TitleBox-Text">Revisiting user experience and engagement</div>
                    </div>
                    <div className="homeProjectBox-Lower-ProjectBox-Top-Details">The Standard Bank of South Africa Limited is a South African financial services g</div>
                    <div className="homeProjectBox-Project1-left-Link margin28">
                    <div className="homeProjectBox-Project1-left-Link-Text">View case study</div>
                    <div className="homeProjectBox-Project1-left-Link-Icon"><img src={openInNew} alt="OpenInNew" /></div>
                </div>
                </div>
                <div className="homeProjectBox-Lower-ProjectBox-Lower"><img src={P7_Image} alt="P7" /></div>
                </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home_Page;
