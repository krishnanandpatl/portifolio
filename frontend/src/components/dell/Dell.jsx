import React from "react";
import { useNavigate } from "react-router-dom";
import Wireframe from "../sliders/Wireframe";
import dell from "../../assets/dell/dell.png";
import fraud from "../../assets/subex/fraud.svg";
import revenue from "../../assets/subex/revenue.svg";
import cancel from "../../assets/trippez/cancel.svg";
import analsoln from "../../assets/subex/analsoln.svg";
import buisschall from "../../assets/dell/buisschall.svg";
import blueactivity from "../../assets/dell/blueactivity.svg";
import check from "../../assets/pgos/check_circle.svg";
import threecolor from "../../assets/dell/threeclor.svg";
import flag from "../../assets/sbsa/flag.svg";
import designpers from "../../assets/dell/designpers.svg";
import greycheck from "../../assets/mtbp/greycheck.svg";
import u1 from "../../assets/dell/u1.png";
import u2 from "../../assets/dell/u2.png";
import u3 from "../../assets/dell/u3.png";
import u4 from "../../assets/dell/u4.png";
import u5 from "../../assets/dell/u5.png";
import u6 from "../../assets/dell/u6.png";
import graph from "../../assets/dell/Graphs.png";
import sticky from "../../assets/dell/sticky.png";
import searchfxn from "../../assets/dell/searchfxn.png";
import partnerprofile from "../../assets/dell/profileimp.png";
import userexp from "../../assets/dell/usrexp.png";
import garrow from "../../assets/pgos/Arrow.svg";
import arrowFor from "../../assets/arrowFor.svg";
import arrowBack from "../../assets/arrowBack.svg";

function Dell() {
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
    <div className="Dell-Page">
      <div className="dell-Maincontainer">
        <div className="dell-MainBoxTop">
          <div className="dell-MainBox-leftBox">
            <div className="dell-MainBox-leftBox-intro">
              <p className="fontSize28">
                Revamping Dell's Find a Partner (FAP) Program to increase
                engagement and conversion rates.
              </p>
              <br />
              <p className="fontSize24">
                Our team focused on improving user engagement, experience, and
                conversion rates by implementing an intuitive and responsive
                design.
              </p>
            </div>
            <div className="dell-MainBox-LeftBox-TimeBox">
              <div className="timeBox-Left">
                <p className="fontSize16">TIMELINE</p>
                <p className="fontSize18">Sep 2020 - Mar 2021</p>
              </div>
              <div className="timeBox-Right">
                <p className="fontSize16">PLATFORM</p>
                <p className="fontSize18">Web</p>
              </div>
            </div>
            <div className="dell-MainBox-LeftBox-ContentBox">
              <div className="dell-MainBox-LeftBox-ContentBox-Left">
                <p className="fontSize18">Onshore (Ireland, Hungary)</p>
                <div className="dell-MainBox-LeftBox-ContentBox-LeftContext">
                  <p className="fontSize14">
                    1<span className="marginLeft14">Product Owner</span>
                    <br />1<span className="marginLeft14">Tech Lead</span>
                    <br />4<span className="marginLeft14">Developers</span>
                    <br />1<span className="marginLeft14">Program Manager</span>
                  </p>
                </div>
              </div>
              <div className="dell-MainBox-LeftBox-ContentBox-Right">
                <p className="fontSize18">India POD</p>
                <div className="marginTop12">
                  <p className="fontSize14">
                    1<span className="marginLeft14">UX Lead</span>
                    <br />1
                    <span className="marginLeft14">Design Lead [Me] </span>
                    <br />1<span className="marginLeft14">UX Designer</span>
                    <br />1<span className="marginLeft14">Visual Designer</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="dell-MainBox-LeftBox-ContrebutionBox">
              <p className="fontSize16">My Contribution</p>
              <p className="fontSize18 ">
                Research & Analysis | Experience Design | Interaction Design
              </p>
            </div>
          </div>
          <div className="dell-MainBox-RightBox">
            <img src={dell} alt="" />
          </div>
        </div>
        <div className="dell-Content-MainBox">
          <h1 className="fontSize32">Context and Background</h1>
          <br />
          <p className="fontSize14">
            FAP (Find a Partner Program) is a program by Dell that enables End
            Customers, Other Partners and Dell Sales Makers to engage with
            Dell's certified partners to solve their technology implementation
            challenges. The program helps partners to grow their business and
            also drives revenue growth for Dell.
          </p>
          <br />
          <p className="fontSize14">
            Dell was facing challenges in increasing customer engagement with
            its partners through the FAP program and driving revenue growth for
            both Dell and its partners. Google Analytics data also revealed that
            the average time spent on the FAP program website was low,
            indicating a lack of customer interest and engagement.
          </p>
          <br />
          <p className="fontSize14">
            To address these challenges, Dell decided to revamp the FAP program
            with a focus on improving the user experience and enhancing the
            visibility of Dell's product portfolio and the value proposition of
            the FAP program.
          </p>
          <br />
          <p className="fontSize14">
            The product needed to cater to the needs of three distinct user
            groups
          </p>
          <div className="dell-Content-MainBox-ContextBox">
            <div className="dell-Content-MainBox-ContextBox-insideBox">
              <div className="dell-Content-MainBox-ContextBox-insideBox-TitleBox">
                <div className="dell-Content-MainBox-ContextBox-insideBox-TitleBox-Icon">
                  <img src={revenue} alt="" />
                </div>
                <div className="fontSize12 marginTop4">End Customers</div>
              </div>
              <div className="dell-Content-MainBox-ContextBox-insideBox-Content">
                They are the primary users of the FAP program, who are searching
                for Dell partners to meet their technology needs.
              </div>
            </div>
            <div className="dell-Content-MainBox-ContextBox-insideBox">
              <div className="dell-Content-MainBox-ContextBox-insideBox-TitleBox">
                <div className="dell-Content-MainBox-ContextBox-insideBox-TitleBox-Icon">
                  <img src={fraud} alt="" />
                </div>
                <div className="fontSize12 marginTop4">Partners</div>
              </div>
              <div className="dell-Content-MainBox-ContextBox-insideBox-Content">
                They are the partners of Dell who collaborate with FAP partners
                to deliver comprehensive technology solutions to end customers.
              </div>
            </div>
            <div className="dell-Content-MainBox-ContextBox-insideBox">
              <div className="dell-Content-MainBox-ContextBox-insideBox-TitleBox">
                <div className="dell-Content-MainBox-ContextBox-insideBox-TitleBox-Icon">
                  <img src={analsoln} alt="" />
                </div>
                <div className="fontSize12 marginTop4">Sales Makers</div>
              </div>
              <div className="dell-Content-MainBox-ContextBox-insideBox-Content">
                They are the sales representatives of Dell who work closely with
                FAP partners to promote Dell's product portfolio and drive
                revenue growth.
              </div>
            </div>
          </div>
        </div>
        <div className="dell-Content-MainBox2">
          <div className="dell-content-Box2">
            <div className="dell-content-Box2-Icon">
              <img className="mx-auto" src={flag} alt="" />
            </div>
            <div className="dell-content-Box2-Text">What was the problem</div>
          </div>
          <div className="dell-content-Box2-Inside1">
            <div className="dell-content-Box2-Inside1-Icon">
              <img src={buisschall} alt="" />
            </div>
            <div className="dell-content-Box2-Inside1-Text">
              <p>
                <span className="colorWeight">The business challenge </span>{" "}
                <span className="dell-content-Box2-Inside1-Content">
                  {" "}
                  for Dell is to increase customer engagement with the FAP
                  program and drive revenue growth for both Dell and its
                  partners. This requires addressing the low traffic, poor user
                  experience, and low conversion rates on the website.
                </span>
              </p>
            </div>
          </div>
          <div className="dell-content-Box2-Inside1">
            <div className="dell-content-Box2-Inside1-Icon">
              <img src={designpers} alt="" />
            </div>
            <div className="dell-content-Box2-Inside1-Text">
              <p>
                <span className="colorWeight">From a design perspective, </span>{" "}
                <span className="dell-content-Box2-Inside1-Content">
                  {" "}
                  the challenge is to create a user-friendly and visually
                  appealing interface that simplifies the partner search process
                  and enhances the visibility of Dell's product portfolio. This
                  involves addressing pain points such as the poor user
                  experience, high bounce rates, and low engagement.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="dell-Content-MainBox3">
          <div className="dell-content-Box2">
            <div className="dell-content-Box2-Icon">
              <img src={flag} alt="" />
            </div>
            <div className="dell-content-Box2-Text">Problems we solved</div>
          </div>
          <div className="dell-content-Box3">
            <div className="dell-content-Box3-Left">
              Increase <br /> Customer Engagement
            </div>
            <div className="dell-content-Box3-Right">
              <div className="dell-content-Box3-Right-Left">
                <div className="Box3-Icon1">
                  <img src={greycheck} alt="" />
                </div>
                <div className="Box3-Icon2">
                  <img src={greycheck} alt="" />
                </div>
                <div className="Box3-Icon3">
                  <img src={greycheck} alt="" />
                </div>
              </div>
              <div className="dell-content-Box3-Right-Right">
                <p className="Font18">
                  Enhance the search function, refine partner profiles, and add
                  filters to help customers find partners based on specific
                  criteria.
                </p>{" "}
                <br />
                <p className="Font18">
                  Provide more detailed information on each partner's services,
                  expertise, certifications, and customer reviews to help
                  customers make more informed decisions when choosing a
                  partner.
                </p>{" "}
                <br />
                <p className="Font18">
                  Introduce a personalised recommendation engine that suggests
                  partners based on a customer's previous search history,
                  location, industry, and other relevant factors.
                </p>
              </div>
            </div>
          </div>
          <div className="dell-content-Box3">
            <div className="dell-content-Box3-Left">
              Page performance and <br /> website responsiveness
            </div>
            <div className="dell-content-Box3-Right">
              <div className="dell-content-Box3-Right-Left">
                <div className="Box3-Icon1">
                  <img src={greycheck} alt="" />
                </div>
                <div className="Box3-Icon4">
                  <img src={greycheck} alt="" />
                </div>
              </div>
              <div className="dell-content-Box3-Right-Right">
                <p className="Font18">
                  Optimise website performance by minimising load times and
                  improving overall website speed.
                </p>{" "}
                <br />
                <p className="Font18">
                  Ensure the website is responsive and mobile-friendly to cater
                  to the growing number of users accessing the site on mobile
                  devices.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="DellPageHr1"></div>
        <div className="dell-Content-MainBox4">
          <p className="Font32">How did we approach the problem</p>
          <p className="Font14">
            When we were on-boarded to Dell FAP project, Dell had already
            conducted user research. So we began by analysing and synthesising
            the user research data collected which involved reviewing the
            existing experience and identifying key insights, pain points, and
            opportunities for improvement.
          </p>
        </div>
        <div className="dell-Content-MainBox5">
          <div className="dell-Content-MainBox5-Box1">
            <p className="dell-Content-MainBox5-Box1-headingText">
              Step #1: Understand the user
            </p>
            <p className="dell-Content-MainBox5-Box1-headingText1">
              In the first phase, we identified
              <span className="WhiteFont"> end customers</span> as the primary
              users, followed by partners, as they were the major contributors
              to the FAP program. The user research data was analysed, and a
              persona of the target users was created to identify their needs
              and pain points.
            </p>
          </div>
          <div className="dell-Content-MainBox5-Box2">
            <div className="dell-Content-MainBox5-Box2-Box1">
              <p className="dell-Content-MainBox5-Box1-headingText">
                The User Personal
              </p>
              <p className="dell-Content-MainBox5-Box1-headingText1">
                After analysing the research data, we developed a detailed
                persona to better understand the needs, goals, and pain points
                of our target end users.
              </p>
            </div>
            <div className="dell-Content-MainBox5-Box2-Box2">
              <div className="dell-Content-MainBox5-Box2-Box2-Left">
                <div className="dell-Personal-LeftBox1">
                  <div className="dell-Personal-LeftBox1-Image">image</div>
                  <div className="dell-Personal-LeftBox1-Heading">
                    Persona Type 1 <br /> End Customer User
                  </div>
                  <div className="dell-Personal-LeftBox1-Text">
                    "I would like to meet with your company and need information
                    about Dell servers and storages for our new factory that
                    will be built in Chennai."
                  </div>
                  <div className="dell-Personal-LeftBox1-Profile">
                    Name: <span className="WhiteFont">Mark</span> <br /> <br />
                    Age: <span className="WhiteFont">35</span> <br /> <br />
                    Work: <span className="WhiteFont">
                      System engineer
                    </span>{" "}
                    <br /> <br />
                    Family: <span className="WhiteFont">
                      Single
                    </span> <br /> <br />
                    Location:{" "}
                    <span className="WhiteFont">
                      US, Boston, MA Character: Highly educated, building up
                      career with technical orientation
                    </span>
                  </div>
                </div>
                <div className="dell-Personal-LeftBox2">
                  <div className="dell-Personal-LeftBox2-Title">
                    😩 Frustation / Problems / Pain Point
                  </div>
                  <div className="dell-Personal-LeftBox2-Context">
                    <ul>
                      <li>
                        Difficulty understanding how to find potential partners
                      </li>
                      <li>Unable to find the correct partner easily</li>
                      <li>Cannot compare partners and get recommendations</li>
                      <li>
                        Limited time to research and study potential partners
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="dell-Personal-LeftBox3">
                  <div className="dell-Personal-LeftBox3-Title">
                    Tools / Touchpoint
                  </div>
                  <div className="dell-Personal-LeftBox3-Context">
                    <ul className="list-disc">
                      <li>Online search engines</li>
                      <li>Dell Tech website</li>
                      <li>Email/phone communication</li>
                      <li>Online partner directories</li>
                      <li>Referrals from colleagues/peers.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="dell-Content-MainBox5-Box2-Box2-Right">
                <div className="dell-Personal-RightBox1">
                  <div className="dell-Personal-RightBox1-Heading">
                    🎯 Goals
                  </div>
                  <div className="dell-Personal-RightBox1-Content">
                    <ul className="list-disc">
                      <li>Get help to solve the IT challenge of his company</li>
                      <li>Gain acknowledgement for fast solution </li>
                      <li>
                        Confident and fast to find the best matching
                        thrust-worthy partner.who has the highest chance to
                        solve his problem
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="dell-Personal-RightBox1">
                  <div className="dell-Personal-RightBox1-Heading">
                    🚀 Needs
                  </div>
                  <div className="dell-Personal-RightBox1-Content">
                    <ul className="list-disc">
                      <li>A partner with expertise in IT implementation</li>
                      <li>Reliable and responsive partner </li>
                      <li>
                        Clear and concise information about potential partners
                      </li>
                      <li>Shortlisted partners and their proposal</li>
                    </ul>
                  </div>
                </div>
                <div className="dell-Personal-RightBox1">
                  <div className="dell-Personal-RightBox1-Heading">
                    😶 Attitudes / Interest
                  </div>
                  <div className="dell-Personal-RightBox1-Content">
                    <ul className="list-disc">
                      <li>Knowledgeable</li>
                      <li>Demanding </li>
                      <li>Determined</li>
                      <li>Solution focused</li>
                    </ul>
                  </div>
                </div>
                <div className="dell-Personal-RightBox1">
                  <div className="dell-Personal-RightBox1-Heading">
                    Behaviours Summary
                  </div>
                  <div className="dell-Personal-RightBox1-Content">
                    <ul className="list-disc">
                      <li>
                        Mark is a busy individual with limited time to research
                        and study public Dell Tech sites for more details.
                      </li>
                      <li>
                        He prefers to have potential partners present their
                        options and solutions to him.
                      </li>
                      <li>
                        Mark values efficiency, reliability, and clear
                        communication.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="DellPageHr2"></div>
          <div className="dell-Content-MainBox5-Box3">
            <div className="dell-Content-MainBox5-Box3-Box1">
              <div className="dell-Content-MainBox5-Box3-Box1-Heading">
                Voice of the users
              </div>
              <div className="dell-Content-MainBox5-Box3-Box1-Text">
                The voice of the users played a crucial role in shaping the user
                experience of FAP, ensuring that it meets the needs and
                expectations of its users.
              </div>
            </div>
            <div className="dell-Content-MainBox5-Box3-Box2">
              <div className="dell-Content-MainBox5-Box3-Box2-B1 Box5-Background">
                <div className="dell-MainBox5-B1-ProfileIcon">
                  <img src={u1} alt="" />
                </div>
                <div className="dell-MainBox5-B1-ProfileText">
                  <div className="dell-MainBox5-B1-Profile-Content">
                    Can you show me a partner that can help me replace my e-mail
                    servers and help my company move to cloud?
                  </div>
                  <div className="dell-MainBox5-B1-ProfileText-box">
                    <div className="dell-MainBox5-B1-ProfileText-Icon">
                      <img src={threecolor} alt="" />
                    </div>
                    <div className="dell-MainBox5-B1-ProfileText-Text">
                      <h2 className="dell-MainBox5-B1-ProfileText-Text-Heading">
                        Darlene Robertson
                      </h2>
                      <p className="dell-MainBox5-B1-ProfileText-Text-Content">
                        IT managers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dell-Content-MainBox5-Box3-Box2-B2 Box5-Background">
                <div className="dell-MainBox5-B1-ProfileIcon">
                  <img src={u2} alt="" />
                </div>
                <div className="dell-MainBox5-B1-ProfileText">
                  <div className="dell-MainBox5-B1-Profile-Content">
                    System is really slow, not sure if it has refreshed
                  </div>
                  <div className="dell-MainBox5-B1-ProfileText-box">
                    <div className="dell-MainBox5-B1-ProfileText-Icon">
                      <img src={threecolor} alt="" />
                    </div>
                    <div className="dell-MainBox5-B1-ProfileText-Text">
                      <h2 className="dell-MainBox5-B1-ProfileText-Text-Heading">
                        Wade Warren
                      </h2>
                      <p className="dell-MainBox5-B1-ProfileText-Text-Content">
                        Teacher, Education institution
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dell-Content-MainBox5-Box3-Box2-B3 Box5-Background">
                <div className="dell-MainBox5-B1-ProfileIcon">
                  <img src={u3} alt="" />
                </div>
                <div className="dell-MainBox5-B3-ProfileText">
                  <div className="dell-MainBox5-B3-Profile-Content">
                    I get Zero search results even after searching using filters
                  </div>
                  <div className="dell-MainBox5-B1-ProfileText-box">
                    <div className="dell-MainBox5-B1-ProfileText-Icon">
                      <img src={threecolor} alt="" />
                    </div>
                    <div className="dell-MainBox5-B1-ProfileText-Text">
                      <h2 className="dell-MainBox5-B1-ProfileText-Text-Heading">
                        Kathryn Murphy
                      </h2>
                      <p className="dell-MainBox5-B1-ProfileText-Text-Content">
                        Healthcare providers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dell-Content-MainBox5-Box3-Box2-B4 Box5-Background">
                <div className="dell-MainBox5-B1-ProfileIcon">
                  <img src={u4} alt="" />
                </div>
                <div className="dell-MainBox5-B4-ProfileText">
                  <div className="dell-MainBox5-B4-Profile-Content">
                    I am lost, I can't understand you nomenclature and can't use
                    your filters, don't know what they mean{" "}
                  </div>
                  <div className="dell-MainBox5-B1-ProfileText-box">
                    <div className="dell-MainBox5-B1-ProfileText-Icon">
                      <img src={threecolor} alt="" />
                    </div>
                    <div className="dell-MainBox5-B1-ProfileText-Text">
                      <h2 className="dell-MainBox5-B1-ProfileText-Text-Heading">
                        Savannah Nguyen, User FAP
                      </h2>
                      <p className="dell-MainBox5-B1-ProfileText-Text-Content">
                        Small business owners
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dell-Content-MainBox5-Box3-Box2-B5 Box5-Background">
                <div className="dell-MainBox5-B1-ProfileIcon">
                  <img src={u5} alt="" />
                </div>
                <div className="dell-MainBox5-B5-ProfileText">
                  <div className="dell-MainBox5-B4-Profile-Content">
                    Why doesn't Dell answer my request when I provided my
                    contact details and question?
                  </div>
                  <div className="dell-MainBox5-B1-ProfileText-box">
                    <div className="dell-MainBox5-B1-ProfileText-Icon">
                      <img src={threecolor} alt="" />
                    </div>
                    <div className="dell-MainBox5-B1-ProfileText-Text">
                      <h2 className="dell-MainBox5-B1-ProfileText-Text-Heading">
                        Leslie Alexander
                      </h2>
                      <p className="dell-MainBox5-B1-ProfileText-Text-Content">
                        Home-maker
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dell-Content-MainBox5-Box3-Box2-B6 Box5-Background">
                <div className="dell-MainBox5-B1-ProfileIcon">
                  <img src={u6} alt="" />
                </div>
                <div className="dell-MainBox5-B3-ProfileText">
                  <div className="dell-MainBox5-B3-Profile-Content">
                    Can't search for Partners on my phone.
                  </div>
                  <div className="dell-MainBox5-B1-ProfileText-box">
                    <div className="dell-MainBox5-B1-ProfileText-Icon">
                      <img src={threecolor} alt="" />
                    </div>
                    <div className="dell-MainBox5-B1-ProfileText-Text">
                      <h2 className="dell-MainBox5-B1-ProfileText-Text-Heading">
                        Brooklyn Simmons
                      </h2>
                      <p className="dell-MainBox5-B1-ProfileText-Text-Content">
                        Educators
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dell-Content-MainBox6">
          <div className="dell-Content-MainBox6-Title">
            By analyzing the data collected from user interviews, we were able
            to identify the needs, pain points, and opportunities for
            improvement. Using this information, we created a Problem
            Prioritization matrix to determine which issues to address first and
            focus our efforts on solving the most critical problems.
          </div>
          <div className="dell-Content-MainBox6-B1">
            <img src={graph} alt="" />
          </div>
        </div>
        <div className="dell-Content-MainBox7">
          <div className="dell-Content-MainBox6-Title">
            Based on the problem prioritization, we conducted extensive research
            and gathered insights from stakeholders and users to gain a deeper
            understanding of the pain points and needs. This allowed us to
            define a clear problem statement that guided our ideation and
            solution-building process.
          </div>
          <div className="dell-Content-MainBox7-B1">
            <div className="dell-Content-MainBox7-B1-TitleBox">
              <div className="dell-Content-MainBox7-B1-TitleBox-Icon">
                <img src={buisschall} alt="" />
              </div>
              <div className="dell-Content-MainBox7-B1-TitleBox-Text">
                The problem statement
              </div>
            </div>
            <div className="dell-Content-MainBox7-B1-Content">
              How might we improve the process of connecting customers with the
              right Dell partners for their needs, in order to increase revenue
              growth for Dell and its partners and enhance the overall customer
              experience?
            </div>
          </div>
        </div>
        <div className="dell-Content-MainBox8">
          <div className="dell-Content-MainBox8-Heading">
            Ideas to solve the problem
          </div>
          <div className="dell-Content-MainBox8-Context">
            Once the problem statement was defined, we engaged in a
            brainstorming session using the crazy 8 exercise to generate
            multiple ideas. These ideas were then categorized into different
            groups to facilitate further analysis. We then plotted them on a 2x2
            Solution matrix to identify their properties and selected the most
            promising ones for further development.
          </div>
          <div className="dell-Content-MainBox8-B1">
            <div className="dell-Content-MainBox8-B1-Box1">
              <div className="dell-Content-MainBox8-B1-Box1-Title">
                Communicate Clearly <br /> Guide User
              </div>
              <div className="dell-Content-MainBox8-B1-Box1-ContentBox">
                <div className="dell-Content-MainBox8-B1-Box1-ContentBox-Left">
                  <div className="MainBox8-B1-Box1-ContentBox-Left-Box1 Pink">
                    Provide help text near to competencies, services competency
                    etc to understand what is it
                  </div>
                  <div className="MainBox8-B1-Box1-ContentBox-Left-Box1 Pink">
                    Good-better-best easy to understand (help users to easily
                    and visually understand competencies etc and make choice)
                  </div>
                  <div className="MainBox8-B1-Box1-ContentBox-Left-Box1 Pink">
                    Highlighting how to contact partner or dell for more details
                  </div>
                </div>
                <div className="dell-Content-MainBox8-B1-Box1-ContentBox-Right">
                  <div className="MainBox8-B1-Box1-ContentBox-Left-Box1 Pink">
                    Relabelling or provide tooltip explanations for hard to
                    understand filter nomenclature (E.g. Changing Competency to
                    Capability or Expertise)
                  </div>
                  <div className="MainBox8-B1-Box1-ContentBox-Left-Box1 Pink">
                    would like to see case studies from the partner to help me
                    make my decision (eg let partner choose what to showcase,
                    testimonials etc)
                  </div>
                </div>
              </div>
            </div>
            <div className="dell-Content-MainBox8-B1-Box1">
              <div className="dell-Content-MainBox8-B1-Box1-Title">
                Personalisation
              </div>
              <div className="dell-Content-MainBox8-B1-Box1-ContentBox">
                <div className="dell-Content-MainBox8-B1-Box1-ContentBox-Left">
                  <div className="MainBox8-B1-Box1-ContentBox-Left-Box1 Yellow">
                    Recommended options (based on history of partner’s services)
                  </div>
                  <div className="MainBox8-B1-Box1-ContentBox-Left-Box1 Yellow">
                    With 0 search results we can show recommendations partners
                  </div>
                </div>
                <div className="dell-Content-MainBox8-B1-Box1-ContentBox-Right">
                  <div className="MainBox8-B1-Box1-ContentBox-Left-Box1 Yellow">
                    Your recent searches
                  </div>
                  <div className="MainBox8-B1-Box1-ContentBox-Left-Box1 Yellow">
                    Show Search history for returning users (Last searched with
                    date and view same results with single click)
                  </div>
                </div>
              </div>
            </div>
            <div className="dell-Content-MainBox8-B1-Box1">
              <div className="dell-Content-MainBox8-B1-Box1-Title">
                Smart Filters
              </div>
              <div className="dell-Content-MainBox8-B1-Box1-ContentBox">
                <div className="dell-Content-MainBox8-B1-Box1-ContentBox-Left">
                  <div className="MainBox8-B1-Box1-ContentBox-Left-Box1 Blue">
                    Left hand filters vs top as on other sites
                  </div>
                  <div className="MainBox8-B1-Box1-ContentBox-Left-Box1 Blue">
                    Flexibility in Filter combinations (Multi-select filter
                    options and quick removal of one or more selected filters)
                  </div>
                </div>
                <div className="dell-Content-MainBox8-B1-Box1-ContentBox-Right">
                  <div className="MainBox8-B1-Box1-ContentBox-Left-Box1 Blue">
                    Show options that would result 0 results (disable filters
                    that would give no results)
                  </div>
                  <div className="MainBox8-B1-Box1-ContentBox-Left-Box1 Blue">
                    Navigation Path guide for user after each user's action
                  </div>
                  <div className="MainBox8-B1-Box1-ContentBox-Left-Box1 Blue">
                    I want see who's near me
                  </div>
                </div>
              </div>
            </div>
            <div className="dell-Content-MainBox8-B1-Box4">
              <div className="dell-Content-MainBox8-B1-Box4-Title">
                Smart Search
              </div>
              <div className="MainBox8-B1-Box4-Box">Keyword search option</div>
              <div className="MainBox8-B1-Box4-Box">Predictive search</div>
              <div className="MainBox8-B1-Box4-Box">
                Powerful Keyword search (To allow them search in their own
                natural language)
              </div>
              <div className="MainBox8-B1-Box4-Box">
                Allow different character sets in search
              </div>
              <div className="MainBox8-B1-Box4-Box">
                Allow different character sets in search
              </div>
            </div>
            <div className="dell-Content-MainBox8-B1-Box1">
              <div className="dell-Content-MainBox8-B1-Box1-Title">
                Information Architecture
              </div>
              <div className="dell-Content-MainBox8-B1-Box1-ContentBox">
                <div className="dell-Content-MainBox8-B1-Box1-ContentBox-Left">
                  <div className="MainBox8-B1-Box1-ContentBox-Left-Box1 Orange">
                    Reduce amount of text on initial results page
                  </div>
                  <div className="MainBox8-B1-Box1-ContentBox-Left-Box1 Orange">
                    Ability to sort lists in multiple ways (Name, Ranking, Type,
                    Location)
                  </div>
                </div>
                <div className="dell-Content-MainBox8-B1-Box1-ContentBox-Right">
                  <div className="MainBox8-B1-Box1-ContentBox-Left-Box1 Orange">
                    I want to see the results in list view
                  </div>
                  <div className="MainBox8-B1-Box1-ContentBox-Left-Box1 Orange">
                    Ability to view results in more than one way (List, Tile,
                    Map)
                  </div>
                </div>
              </div>
            </div>
            <div className="dell-Content-MainBox8-B1-Box1">
              <div className="dell-Content-MainBox8-B1-Box1-Title">
                Look and Feel
              </div>
              <div className="dell-Content-MainBox8-B1-Box1-ContentBox">
                <div className="dell-Content-MainBox8-B1-Box1-ContentBox-Left">
                  <div className="MainBox8-B1-Box1-ContentBox-Left-Box1 LightBlue">
                    Consistent and modern look & feel (As per Dell Design
                    System)
                  </div>
                </div>
                <div className="dell-Content-MainBox8-B1-Box1-ContentBox-Right">
                  <div className="MainBox8-B1-Box1-ContentBox-Left-Box1 LightBlue">
                    Design for responsive breakpoints (Prioritise primary
                    content, avoid long scrolls, reduce user interactions, using
                    mobile friendly elements)
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="DellPageHrColour"></div>
          <div className="dell-Content-MainBox8-B2">
            <img src={sticky} alt="" />
          </div>
          <div className="dell-Content-MainBox8-B3">
            <div className="dell-Content-MainBox8-B3-Heading">
              Outcome of the activitty
            </div>
            <div className="dell-Content-MainBox8-B3-Content">
              <div className="dell-Content-MainBox8-B3-Content-Left">
                <div className="dell-Content-MainBox8-B3Icon Content-LeftBox-Icon1">
                  <img src={blueactivity} alt="" />
                </div>
                <div className="dell-Content-MainBox8-B3Icon Content-LeftBox-Icon2">
                  <img src={blueactivity} alt="" />
                </div>
                <div className="dell-Content-MainBox8-B3Icon Content-LeftBox-Icon3">
                  <img src={blueactivity} alt="" />
                </div>
              </div>
              <div className="dell-Content-MainBox8-B3-Content-Right">
                <p>
                  Firstly, we will aim to make the search function more
                  intelligent and user-friendly by introducing smart filters,
                  sorting options, and different views for search results.
                </p>{" "}
                <br />
                <p>
                  Secondly, we will focus on optimising the program's visual
                  design and ensuring that it was mobile-friendly.
                </p>
                <br />
                <p>
                  Lastly, we will work on improving the layout and information
                  architecture of partner profiles to make them more visually
                  appealing and easy to navigate. These efforts aimed to provide
                  a seamless and streamlined experience for FAP users.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="dell-Content-MainBox9">
          <div className="dell-Content-MainBox9-Box1">
            <p className="dell-Content-MainBox9-Box1-Heading">
              Designing the solution
            </p>
            <p className="dell-Content-MainBox9-Box1-Content">
              After conducting extensive research and gathering insights from
              stakeholders and users, we established experience principles that
              aligned with the core goals of the FAP project. These principles
              guided our design decisions and ensured that the product was
              designed to meet the needs of both users and the business. The
              four principles we identified were:
            </p>
          </div>
          <div className="dell-Content-MainBox9-Box2">
            <div className="dell-Content-MainBox9-Box2-left">
              <img src={searchfxn} alt="" />
            </div>
            <div className="dell-Content-MainBox9-Box2-Right">
              <div className="dell-Content-MainBox9-Box2-Right-heading">
                Enhanced Search Function
              </div>
              <div className="dell-Content-MainBox9-Box2-Right-Content">
                <ul>
                  <li>
                    Implemented of a clear, smart, and proactive search that
                    helps users find their desired results quickly and easily.
                  </li>
                  <li>
                    Guided search functionality was introduced, allowing users
                    to search for partners using natural language and specific
                    criteria.
                  </li>
                  <li>
                    The search function was further streamlined with the
                    addition of smart filters featuring clear nomenclature and
                    improved functionality.
                  </li>
                  <li>
                    To cater to the diverse needs of users, the revamped search
                    function also introduced three different views: GRID, LIST,
                    and MAP.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="dell-Content-MainBox9-Box3">
            <div className="dell-Content-MainBox9-Box3-Left">
              <div className="dell-Content-MainBox9-Box3-Left-Heading">
                Improved Partner Profiles
              </div>
              <div className="dell-Content-MainBox9-Box3-Left-Content">
                <ul>
                  <li>
                    Partner profiles were enriched with detailed information
                    about their services, expertise, certifications, and
                    customer reviews.
                  </li>
                  <li>
                    A clear partner level was introduced, with no interference
                    in the logo.
                  </li>
                  <li>
                    A prominent call-to-action (CTA) was added to contact the
                    partner directly.
                  </li>
                  <li>
                    The language on partner profiles was simplified, and
                    information was categorised for better understanding.
                  </li>
                  <li>
                    The layout of partner profiles was improved for a visually
                    appealing and user-friendly experience.
                  </li>
                </ul>
              </div>
            </div>
            <div className="dell-Content-MainBox9-Box3-Right">
              <img src={partnerprofile} alt="" />
            </div>
          </div>
          <div className="dell-Content-MainBox9-Box4">
            <div className="dell-Content-MainBox9-Box4-Left">
              <img src={userexp} alt="" />
            </div>
            <div className="dell-Content-MainBox9-Box4-Right">
              <div className="dell-Content-MainBox9-Box4-Right-Heading">
                Improved User Experience
              </div>
              <div className="dell-Content-MainBox9-Box4-Right-Content">
                <ul>
                  <li>
                    The FAP program was optimised for mobile devices to provide
                    a seamless experience for users on-the-go. The design and
                    layout were adjusted to ensure the program is fully
                    functional and accessible on mobile devices.
                  </li>
                  <li>
                    The navigation, layout, and design of the program were
                    improved, including the integration of multimedia content to
                    showcase Dell's product portfolio and the value of the FAP
                    program.
                  </li>
                  <li>
                    A personalised recommendation engine was introduced, which
                    suggests partners based on a customer's previous search
                    history, location, industry, and other relevant factors.{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="dell-Content-MainBox10">
          <div className="dell-Content-MainBox10-Title">What we improved</div>
          <div className="dell-Content-MainBox10-TableBox">
            <table className="h-full">
              <tr className="header-bg-dell">
                <th>Aspect</th>
                <th className="w-2/5">Before Revamp</th>
                <th className="w-2/5">After Revamp</th>
              </tr>
              <tr>
                <td>User engagement</td>
                <td>
                  <div>
                    <img src={cancel} alt="" />
                    Low traffic, only 10% of website visitors engaged with FAP
                  </div>
                </td>
                <td>
                  <div>
                    <img src={check} alt="" />
                    Increased traffic, 25% of website visitors engaged with FAP
                  </div>
                </td>
              </tr>
              <tr>
                <td>User experience</td>
                <td>
                  <div>
                    <img src={cancel} alt="" />
                    High bounce rates (above 50%), low time on site (less than 1
                    minute on average)
                  </div>
                </td>
                <td>
                  <div>
                    <img src={check} alt="" />
                    Reduced bounce rates (below 30%), increased time on site
                    (2-3 minutes on average)
                  </div>
                </td>
              </tr>
              <tr>
                <td>Conversion rate</td>
                <td>
                  <div>
                    <img src={cancel} alt="" />
                    Only 5% of users contacting a partner or submitting a lead
                    form
                  </div>
                </td>
                <td>
                  <div>
                    <img src={check} alt="" />
                    Increased conversion rate of 10%, with more leads generated
                  </div>
                </td>
              </tr>
              <tr>
                <td>Page speed</td>
                <td>
                  <div>
                    <img src={cancel} alt="" />
                    Slow loading times, resulting in frustration and user
                    drop-off
                  </div>
                </td>
                <td>
                  <div>
                    <img src={check} alt="" />
                    Faster loading times, improving overall user experience
                  </div>
                </td>
              </tr>
              <tr>
                <td>Mobile responsiveness</td>
                <td>
                  <div>
                    <img src={cancel} alt="" />
                    Poor mobile experience, with site not optimized for mobile
                    devices
                  </div>
                </td>
                <td>
                  <div>
                    <img src={check} alt="" />
                    Improved mobile experience, with site optimized for mobile
                    devices
                  </div>
                </td>
              </tr>
              <tr>
                <td>Partner profiles</td>
                <td>
                  <div>
                    <img src={cancel} alt="" />
                    Unclear level of partner, distracting logos, lack of
                    information hierarchy
                  </div>
                </td>
                <td>
                  <div>
                    <img src={check} alt="" />
                    Clear level of partner, prominent CTAs, easy-to-understand
                    language and information hierarchy
                  </div>
                </td>
              </tr>
              <tr>
                <td>Search functionality</td>
                <td>
                  <div>
                    <img src={cancel} alt="" />
                    Limited search capabilities and filters, not user-friendly
                  </div>
                </td>
                <td>
                  <div>
                    <img src={check} alt="" />
                    Enhanced search capabilities and filters, more user-friendly
                    interface
                  </div>
                </td>
              </tr>
              <tr>
                <td>User support</td>
                <td>
                  <div>
                    <img src={cancel} alt="" />
                    Limited help and user guides available
                  </div>
                </td>
                <td>
                  <div>
                    <img src={check} alt="" />
                    User support with clear documentation and user guides
                  </div>
                </td>
              </tr>
              <tr>
                <td>Global reach</td>
                <td>
                  <div>
                    <img src={cancel} alt="" />
                    Limited availability in certain regions
                  </div>
                </td>
                <td>
                  <div>
                    <img src={check} alt="" />
                    Increased availability in more regions worldwide
                  </div>
                </td>
              </tr>
              <tr>
                <td>Branding</td>
                <td>
                  <div>
                    <img src={cancel} alt="" />
                    Outdated design and branding
                  </div>
                </td>
                <td>
                  <div>
                    <img src={check} alt="" />
                    Modern and refreshed design and branding
                  </div>
                </td>
              </tr>
              <tr>
                <td>User feedback</td>
                <td>
                  <div>
                    <img src={cancel} alt="" />
                    Limited feedback collection and incorporation
                  </div>
                </td>
                <td>
                  <div>
                    <img src={check} alt="" />
                    Active collection and incorporation of user feedback
                  </div>
                </td>
              </tr>
              <tr>
                <td>Partner feedback</td>
                <td>
                  <div>
                    <img src={cancel} alt="" />
                    Limited partner feedback collection and incorporation
                  </div>
                </td>
                <td>
                  <div>
                    <img src={check} alt="" />
                    Active collection and incorporation of partner feedback to
                    drive improvements
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div className="dell-Content-MainBox11">
          <div className="dell-Content-MainBox11-TopBox">
            <div className="dell-Content-MainBox11-TopBox-Heading">
              Deliver: Wireframes
            </div>
            <div className="dell-Content-MainBox11-TopBox-Box">
              <Wireframe val={"dell/wf"}></Wireframe>
            </div>
            <div className="dell-Content-MainBox11-Hr"></div>
            <div className="dell-Content-MainBox11-TopBox-Heading">
              Deliver: Visual Design
            </div>
            <div className="dell-Content-MainBox11-TopBox-Box">
              <Wireframe val={"dell/vd"}></Wireframe>
            </div>
          </div>
        </div>
        <div className="dell-my-learningBox">
          <div className="dell-my-learningBox-heading">My Learning </div>
          <div className="dell-my-learningBox-FlexBox">
            <div className="dell-my-learningBox-FlexBox-Left">
              <div className="dell-my-learningBox-FlexBox-Left-Icon learningIcon1">
                <img src={garrow} alt="" />
              </div>
              <div className="dell-my-learningBox-FlexBox-Left-Icon learningIcon2">
                <img src={garrow} alt="" />
              </div>
              <div className="dell-my-learningBox-FlexBox-Left-Icon learningIcon3">
                <img src={garrow} alt="" />
              </div>
            </div>
            <div className="dell-my-learningBox-FlexBox-Right">
              <p>
                I gained a deeper understanding of the importance of user
                research and data analysis in driving design decisions. It was
                crucial to understand the pain points and motivations of our
                users to create a more engaging and efficient platform.
              </p>
              <br />
              <p>
                Additionally, I learned about the importance of collaborating
                closely with developers to ensure that design decisions are
                technically feasible and scalable.
              </p>
              <br />
              <p>
                Furthermore, the project highlighted the significance of
                creating a consistent and intuitive design language that is easy
                for users to navigate.
              </p>
            </div>
          </div>
        </div>
        <div className="dell-DirectionsBox">
          <div className="dell-my-learningBox-heading">Future Directions </div>
          <div className="dell-my-learningBox-FlexBox">
            <div className="dell-my-learningBox-FlexBox-Left">
              <div className="dell-my-learningBox-FlexBox-Left-Icon learningIcon1">
                <img src={garrow} alt="" />
              </div>
            </div>
            <div className="dell-my-learningBox-FlexBox-Right">
              <p>
                As a design lead, I believe that the future of FAP lies in
                further optimizing the user experience and making it more
                personalized for individual users. This could involve leveraging
                data analytics and AI to provide customized recommendations and
                solutions based on the unique needs of each user.
              </p>
            </div>
          </div>
        </div>
        <div className="dell-BottomBox">
          <div
            className="dell-BottomBox-Left cursor-pointer"
            onClick={() => LinkFn("/moneytap-bankers-portal")}
          >
            <div className="dell-BottomBox-Left-Icon">
              <img src={arrowBack} alt="" />
            </div>
            <div className="dell-BottomBox-Left-Text">
              Previous Case studies
            </div>
          </div>
          <div
            className="dell-BottomBox-Right cursor-pointer"
            onClick={() => LinkFn("/trippiez")}
          >
            <div className="dell-BottomBox-Left-Text">Next Case studies</div>
            <div className="dell-BottomBox-Left-Icon">
              <img src={arrowFor} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dell;
