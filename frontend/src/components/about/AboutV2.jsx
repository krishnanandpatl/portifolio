import React, { useState } from "react";
import "../styles/about2.css";
import Pdf from "../../assets/resume/Resume.pdf";
import myworkimg from "../../assets/mywork.png";
import download from "../../assets/download.svg";

function About() {
  const [readmore, setRead] = useState(false);

  return (
    <div className="max-w-[1440px] mx-auto main-about">
      <div className="max-w-[844px] mx-auto">
        <div className="upperabout">
          <div className="heading-mw">
            <h1 className="">
              I'm a <b>Product & Interaction Designer</b> based out of
              <b> Bengaluru </b>
              and currently working at <b>Publicis Sapient</b>.
            </h1>
            <div className="image-mw">
              <img src={myworkimg} alt="" />
            </div>
          </div>
          <div className="main-para-mw">
            <p>
              Hey there!{" "}
              <span>
                I'm Kshitij Srivastava and I'm a UX designer currently living in
                Bengaluru.
              </span>{" "}
              But let me take you back to the beginning of my journey.
            </p>
            <p>
              I was born and raised in the city of Kanpur, a bustling city in
              northern India. As a child, I always loved art and design, and
              spent many hours drawing and creating my own little sketches. When
              it was time for me to attend college, I decided to pursue my
              passion and study design at a college in Pune.
            </p>
            <p>
              <span>During my time in Pune,</span> learned a lot about various
              aspects of design, from graphic design to product design. However,
              it was during a course on user experience design that I found my
              true calling. I loved the idea of designing products and
              experiences that not only looked beautiful, but also worked
              seamlessly for users.
            </p>
            {!readmore && (
              <p
                className="read-more-about link-active cursor-pointer"
                onClick={() => setRead(!readmore)}
              >
                + read more
              </p>
            )}
            {readmore && (
              <div className="para-hidden">
                <p>
                  After college, I landed my first job in
                  <span> Mumbai as a junior designer</span> at a start-up. It
                  was an exciting and challenging experience,as I worked on a
                  variety of projects and had the opportunity to learn from more
                  experienced designers. But, as time went on,I began to feel
                  the itch for something new and exciting.
                </p>
                <p>
                  That's when I packed my bags and
                  <span>
                    {" "}
                    headed to Bengaluru, the "Silicon Valley" of India.
                  </span>{" "}
                  I was ready to take on new challenges and learn as much as I
                  could. Here, I worked for several years as a senior UX
                  designer at a well-known tech company. I loved the fast-paced,
                  innovative culture of Bengaluru, but I also felt that there
                  was something missing.
                </p>
                <p>
                  And then, came the opportunity of a lifetime a chance to{" "}
                  <span>travel to South Africa for work.</span> I was thrilled
                  at the prospect of working as a UX designer in a new
                  environment, and using my skills to create meaningful
                  experiences for people from all over the world. It was a
                  life-changing experience and made me realize that this was
                  where I wanted to settle down and make a home.
                </p>
                <br />
                <p>
                  But outside of work, I also have a passion for{" "}
                  <span>digital paintings</span>
                  and capturing abandonment places taken over by nature, It was
                  my way of exploring my creative side and appreciating the
                  beauty of the world around us
                </p>
                <p>
                  Below you can find a comprehensive overview of my professional
                  experience as a designer
                </p>
              </div>
            )}
            {readmore && (
              <p
                className="read-more-about link-active cursor-pointer"
                onClick={() => setRead(!readmore)}
              >
                + show less
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="partition-line-sbsa width-change-about my-[80px]"></div>
      <div className="max-w-[844px] mx-auto">
        <div className="exp-bar-mw">
          <div className="exprience-title-mw">
            <h3>Experience</h3>
            <div className="experience-underline"></div>
          </div>
          <div className="download-res-mw">
            <img src={download} alt="" />
            <a href={Pdf} target="_blank">
              Download Resume
            </a>
          </div>
        </div>
        <div>
          <div className="experience-tiles-mw">
            <div className="tile-exp-mw">
              <div className="tile-tile-mw">
                <p>2021 - Current</p>
                <h4>Senior UX Designer</h4>
                <div>Publicis Sapient - Bengaluru,IN</div>
              </div>
              <div className="para-tile-mw">
                I created an enhanced experience for Verizon's C
                recommendations, and documenting use cases and user stories. I
                worked closely with stakeholders and engineers to troubleshoot
                UX problems and improve user engagement. <br /> <br />I designed
                the user experience for PGOS, a campaign management application,
                with the aim of providing a more intuitive and efficient
                platform for marketing teams to manage their campaigns
                effectively.
              </div>
            </div>
            <div className="tile-exp-mw">
              <div className="tile-tile-mw">
                <p>2018 - 2021</p>
                <h4>Design Lead</h4>
                <div>
                  Moonraft Innovation Labs - <br /> Bengaluru,IN
                </div>
              </div>
              <div className="para-tile-mw">
                I gathered and evaluated user requirements for Subex,
                collaborating with product managers and engineers to create
                wireframes, prototypes, mock-ups, and detailed interactions.{" "}
                <br />
                <br /> I was leading the complete user experience redesign and
                user interface for Standard Bank South Africa's web portal,
                which was using a legacy product that required a revamp. <br />{" "}
                <br />
                For Dell Find a Partner, I gather and evaluate user
                requirements, create wireframes, prototypes, and visual designs.
              </div>
            </div>
            <div className="tile-exp-mw">
              <div className="tile-tile-mw">
                <p>2017 - 2018</p>
                <h4>Product Designer</h4>
                <div>Moneytap - Bengaluru,IN</div>
              </div>
              <div className="para-tile-mw">
                I collaborated with the in-house credit team and developers to
                design version 3.0 of the Banker's Portal, improving its
                usability.
                <br />
                <br /> I also optimised Moneytap' website, reducing its loading
                time and enhancing the understanding of its product offerings,
                which increased the visit-to-conversion ratio.
              </div>
            </div>
            <div className="tile-exp-mw">
              <div className="tile-tile-mw">
                <p>2014 - 2017</p>
                <h4>Hybrid Designer</h4>
                <div>The Creon Studio - Mumbai,IN</div>
              </div>
              <div className="para-tile-mw">
                I was responsible for creating architecture, navigation,
                personas, user journeys, and wireframe sketches. I collaborated
                with the development team to provide UX guidelines, Ul patterns,
                and actionable recommendations.
                <br />
                <br /> Additionally, I mentored graduate trainees on user
                experience design fundamentals.
                <br /> <br />
                Some of the clients I worked with were Schoolkart, First Crayon,
                ET Sales, ET Startup Awards 2016, Sirius Sport, and 9xm.
              </div>
            </div>
            <div className="tile-exp-mw">
              <div className="tile-tile-mw">
                <p>2013 - 2014</p>
                <h4>Designer</h4>
                <div>HB Design - Mumbai,IN</div>
              </div>
              <div className="para-tile-mw">
                As a web and graphic designer, my responsibilities included
                designing websites and emailers for Accenture, TCS and WNS. This
                involved collaborating with stakeholders to understand their
                needs and goals, and then translating those into visually
                appealing and user-friendly designs.
                <br />
                <br /> Additionally, I created marketing materials such as
                flyers, ads, and other graphics for TCS, WNS, and Box Office
                India.
              </div>
            </div>
            <div className="tile-exp-mw">
              <div className="tile-tile-mw">
                <p>2012 - 2013</p>
                <h4>Junior Designer</h4>
                <div>Hulahoop Design - Mumbai,IN</div>
              </div>
              <div className="para-tile-mw">
                I was responsible for designing a signage system to modernise
                the branded marketing and aesthetics for JW Marriott. This
                included a new color scheme and typography to improve the visual
                appeal of the signage system.
                <br />
                <br />
                Additionally, I created various printed materials for Raheja's
                Pebble Bay, which includes print and banner ads, newspaper ads,
                flyers, and handouts.
              </div>
            </div>
          </div>
        </div>
        <div className="exprience-title-mw mt-[72px] mb-[56px]">
          <h3>Education</h3>
          <div className="experience-underline"></div>
        </div>
        <div className="tile-exp-mw mb-[80px]">
          <div className="tile-tile-mw">
            <p>2008 - 2012</p>
            <h4>
              Bachelor of Fine Arts <br /> (Applied Arts)
            </h4>
            <div>University of Pune,IN</div>
          </div>
          <div className="para-tile-mw">
            I specialised in Visual Communication. During my course, I studied
            various subjects related to art and design, such as typography,
            graphic design, illustration, and branding, which equipped me with
            the skills to create visually appealing designs that prioritise user
            needs and enhance their overall experience.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
