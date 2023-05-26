import React from "react";
import "../styles/Mtbp.css";
import Wireframe from "../sliders/Wireframe";
import check from "../../assets/trippez/check_circle.svg";
import mtbp from "../../assets/mtbp/mtbp.png";
import flag from "../../assets/mtbp/orangeflag.svg";
import primeres from "../../assets/mtbp/prime.svg";
import secondres from "../../assets/mtbp/second.svg";
import techchall from "../../assets/mtbp/techchall.svg";
import processchall from "../../assets/mtbp/processchall.svg";
import chat from "../../assets/mtbp/chat.svg";
import u1 from "../../assets/mtbp/u1.png";
import u2 from "../../assets/mtbp/u2.png";
import u3 from "../../assets/mtbp/u3.png";
import u4 from "../../assets/mtbp/u4.png";
import threecolor from "../../assets/dell/threeclor.svg";
import needs from "../../assets/mtbp/needs.svg";
import pains from "../../assets/mtbp/pains.svg";
import garrow from "../../assets/trippez/Garrow.svg";
import arrow from "../../assets/pgos/Arrow.svg";
import oarrow from "../../assets/mtbp/orangearrow.svg";
import desires from "../../assets/mtbp/desires.svg";
import techspecs from "../../assets/mtbp/teschspecs.svg";
import buisness from "../../assets/mtbp/business.svg";
import IA from "../../assets/mtbp/IA.png";
import arrowBack from "../../assets/arrowBack.svg";
import arrowFor from "../../assets/arrowFor.svg";

function Mtbp() {
  return (
    <div>
      <div className="subex-container">
        <div className="subex-intro-card flex">
          <div className="text-part-intro w-3/5">
            <h1 className="heading-intro-subex">
              Revamping MTBP's credit approval platform to enhance user
              experience, increase efficiency and Productivity
            </h1>
            <br />
            <p className="para-intro-card">
              We focused on creating an intuitive and user-friendly design,
              streamlining the approval process, and incorporating user feedback
              for continuous improvement.
            </p>
            <br />
            <div className="timeline-intro-card">
              <div className="flex-titles-intro">
                <div className="headers-top-intro">TimeLine</div>
                <div className="title-details-intro">Oct 2017 - Mar 2018</div>
              </div>
              <div className="flex-titles-intro">
                <div className="headers-top-intro">Platform</div>
                <div className="title-details-intro">Web</div>
              </div>
            </div>
            <br />
            <div>
              <div className="headers-top-intro">Team</div>
              <div className="list-intro-card">
                <div>1 UX/VD Designer [Me]</div>
                <div>1 Shadow UI Designer</div>
                <div>1 Graphic Designer</div>
              </div>
            </div>
            <br />
            <div>
              <div className="headers-top-intro">My Contribution</div>
              <div className="my-contri-intro whitespace-pre-wrap">
                Research & Analysis | Experience Design | Interaction Design
              </div>
            </div>
          </div>
          <div className="image-part-intro">
            <img src={mtbp} loading="lazy" alt="" />
          </div>
        </div>
        <div className="inner-container-subex">
          <div className="context-background-subex context-background-tripp">
            <h1 className=".f700-32-39">Context and Background</h1>
            <br />
            <p>
              MoneyTap is a Bangalore-based fintech startup that provides users
              with an app-based credit line. The app allows users to borrow
              money on an as-needed basis, with low interest rates per month.
              MoneyTap has partnered with RBL Bank to provide credit lines to
              users, and the company has raised over $32 million in funding
              since its launch in 2016.
            </p>
            <br />
            <p>
              The credit approval process for MoneyTap users is handled through
              the MoneyTap Banker’s Portal (MTBP). This portal is used by
              MoneyTap's partner banks and other financial institutions to
              assess and approve user credit applications. However, the complex
              nature of the credit approval process and the large number of
              stakeholders involved has made the MTBP system difficult to use,
              resulting in frustration for users and slower processing times. As
              a result, there is a need to improve the user experience and
              streamline the credit approval process to meet the demands of
              MoneyTap's growing user base.
            </p>
          </div>
          <div className="solution-tripp problem-mtbp mt-[48px]">
            <h1 className="flex gap-4">
              <div className="">
                <img src={flag} alt="" />
              </div>
              What was the problem
            </h1>
            <br />
            <div>
              <div>
                <img src={check} alt="" />
              </div>
              <div>
                MoneyTap Banker's Portal (MTBP) was a complex and unintuitive
                system that provides a poor user experience. The overabundance
                of functions and elements within the system make it challenging
                for users to navigate and learn how to use effectively.
              </div>
            </div>
            <br />
            <div>
              <div>
                <img src={check} alt="" />
              </div>
              <div>
                Additionally, the credit approval process is lengthy and
                inefficient due to multiple teams being involved in different
                stages of the process.
              </div>
            </div>
            <br />
            <div>
              <div>
                <img src={check} alt="" />
              </div>
              <div>
                Miscommunication and errors can occur due to a lack of
                communication and coordination between the teams involved. The
                system also requires manual data entry and verification, which
                can be prone to errors and slows down the credit approval
                process.
              </div>
            </div>
          </div>
          <div className="solution-tripp problem-mtbp mt-[48px]">
            <h1 className="flex gap-4">
              <div className="">
                <img src={flag} alt="" />
              </div>
              Problems we solved
            </h1>
            <br />
            <div>
              <div>
                <img src={check} alt="" />
              </div>
              <div>
                The MTBP platform was created with the goal of delivering a
                seamless user experience with a simple, intuitive interface that
                priorities quick and efficient credit disbursement.
              </div>
            </div>
            <br />
            <div>
              <div>
                <img src={check} alt="" />
              </div>
              <div>
                To achieve this, I crafted a linear shared workspace with
                powerful user management capabilities that allow users to easily
                track the credit approval process from start to finish.
              </div>
            </div>
            <br />
            <div>
              <div>
                <img src={check} alt="" />
              </div>
              <div>
                As a key component of the design, data security was carefully
                considered and implemented to ensure that user data is kept safe
                at all times.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="partition-line-sbsa mt-[80px]"></div>
      <div className="">
        <div className="inner-container-subex pb-[64px]">
          <div className="ideate-sbsa research-tripp">
            <h1>Research</h1>
            <br />
            <p>
              As part of my role in MTBP, I took on the responsibility of
              conducting comprehensive research to inform our product
              development strategy. To accomplish this, I drafted two research
              proposals, which included both secondary and primary research
              methods.
            </p>
            <br />
            <div className="research-goal-mtbp">
              <strong>Research Goal:</strong>The ultimate goal of this research
              was to develop a deep understanding of the credit approval process
              and our various users/teams involved in the process. By doing so,
              I was able to identify opportunities to differentiate our product,
              and to develop a product that met the needs and expectations of
              our users.
            </div>
          </div>
          <div className="two-research-mtbp mt-[32px]">
            <div>
              <div>
                <div className="flex justify-end">
                  <img src={primeres} alt="" />
                </div>
                <div>
                  <h4>Primary Research</h4>
                  <br />
                  <p>
                    To gather more detailed insights, I conducted{" "}
                    <strong>in-depth in-person</strong> interviews with our
                    target audience.
                  </p>
                  <br />
                  <p>
                    By doing so, I was able to identify the key pain points and
                    challenges that our users faced, as well as the features and
                    functionality that they valued most.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="flex justify-end">
                  <img src={secondres} alt="" />
                </div>
                <div>
                  <h4>Secondary Research</h4>
                  <br />
                  <p>
                    I conducted a thorough analysis of our{" "}
                    <strong>competitors' application process</strong> evaluating
                    strengths and weaknesses.
                  </p>
                  <br />
                  <p>
                    This helped me form a solid foundation of knowledge and also
                    provided me with valuable insights that helped to inform our
                    product development roadmap.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-color-diff-mtbp pb-[80px]">
          <div className="inner-container-subex">
            <div className="research-finding-mtbp pt-[88px]">
              <h3>Research Key Findings</h3>
              <br />
              <p className="w-2/3">
                Based on the interviews, the challenges faced by the teams can
                be broadly classified into technical, process-related, and
                communication-related
              </p>
              <div className="two-research-mtbp inner-finding-mtbp mt-[40px]">
                <div>
                  <div className="flex justify-end">
                    <img src={techchall} alt="" />
                  </div>
                  <div className="mt-[10px]">
                    <h4>Technical challenges</h4>
                    <br />
                    <p>
                      All teams reported facing issues with the platform's slow
                      loading speed and occasional system crashes.
                    </p>
                    <br />
                    <p>
                      They also mentioned that the platform lacks advanced
                      search and filtering options and they had difficulty
                      finding specific applications.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex justify-end">
                    <img src={processchall} alt="" />
                  </div>
                  <div className="mt-[10px]">
                    <h4>Process-related challenges</h4>
                    <br />
                    <p>
                      Teams reported that the current process for verifying
                      customer details is lengthy, highly manual and requires
                      multiple back and forth with the customer, which can be
                      time-consuming and frustrating leading to confusion and
                      errors.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex justify-end">
                    <img src={chat} alt="" />
                  </div>
                  <div className="mt-[10px]">
                    <h4>Communication-related</h4>
                    <br />
                    <p>
                      Credit team mentioned that there is a lack of transparency
                      in the communication across teams, leading to
                      miscommunication and delays.
                    </p>
                    <br />
                    <p>
                      They suggested the need for a more streamlined and
                      transparent communication process.
                    </p>
                  </div>
                </div>
              </div>
              <div className="partition-line-mtbp my-[80px]"></div>
              <div className="user-saying-mtbp">
                <h3>What were our users saying </h3>
                <div className="users-mtbp mt-[32px]">
                  <div>
                    <div>
                      <img src={u1} alt="" />
                    </div>
                    <div>
                      <p>
                        There is a lack of transparency in the communication
                        between teams. We need a proper channel for feedback and
                        better communication.
                      </p>
                      <div className="inner-user-mtbp mt-[24px]">
                        <div>
                          <img src={threecolor} alt="" /> Ravi
                        </div>
                        <p>Credit Manager - (SA Lead)</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <img src={u2} alt="" />
                    </div>
                    <div>
                      <p>
                        The current process for verifying customer details is
                        lengthy and error-prone. We need a more streamlined
                        process to avoid delays.
                      </p>
                      <div className="inner-user-mtbp mt-[24px]">
                        <div>
                          <img src={threecolor} alt="" /> Akash
                        </div>
                        <p>Process Associate, TelePD team</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <img src={u3} alt="" />
                    </div>
                    <div>
                      <p>
                        The platform is slow and lacks certain features that can
                        make our work easier. We need a more user-friendly
                        platform.
                      </p>
                      <div className="inner-user-mtbp mt-[24px]">
                        <div>
                          <img src={threecolor} alt="" /> Arpita S
                        </div>
                        <p>MT Admin</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <img src={u4} alt="" />
                    </div>
                    <div>
                      <p>
                        It's confusing and overwhelming, and I feel like I'm
                        always missing something. At times it’s really
                        frustrating.
                      </p>
                      <div className="inner-user-mtbp mt-[24px]">
                        <div>
                          <img src={threecolor} alt="" /> Suyash
                        </div>
                        <p>Member, Admin Team</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="need-pain-mtbp">
                  <div>
                    <div>
                      <h4>Needs</h4>
                      <img src={needs} alt="" />
                    </div>
                    <div>
                      <div>
                        <img src={oarrow} alt="" />A more efficient and
                        user-friendly system that can help them manage
                        applications more effectively.
                      </div>
                      <br />
                      <div>
                        <img src={oarrow} alt="" />A more streamlined and
                        automated process for SA, which can help them save time
                        and improve efficiency.
                      </div>
                      <br />
                      <div>
                        <img src={oarrow} alt="" />A more efficient and accurate
                        SA process that can help them make more informed
                        decisions.
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <h4>Pains</h4>
                      <img src={pains} alt="" />
                    </div>
                    <div>
                      <div>
                        <img src={garrow} alt="" />
                        Dealing with incomplete or inaccurate data in
                        applications, which can lead to delays and errors.
                      </div>
                      <br />
                      <div>
                        <img src={garrow} alt="" />
                        Work with a high volume of applications, which can be
                        overwhelming and lead to errors. Also result in delayed
                        approvals and dissatisfied customers.
                      </div>
                      <br />
                      <div>
                        <img src={garrow} alt="" />
                        Spend extra time verifying the data which slows down the
                        approval process leading to frustration and
                        dissatisfaction among customers.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="desires-mtbp">
                  <div>
                    <h4>Desires</h4>
                    <img src={desires} alt="" />
                  </div>
                  <div>
                    <img src={arrow} alt="" />
                    All Team expressed a strong desire for a better
                    communication and coordination between different teams
                    involved in the approval process.
                  </div>
                  <div>
                    <img src={arrow} alt="" />
                    Teams mentioned that the team desires more training and
                    education on the MTBP system, especially in terms of
                    customer verification and data input. They also mentioned
                    that a more user-friendly interface with clear guidelines
                    could reduce errors and streamline the process.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="inner-container-subex">
            <div className="goal-feature-mtbp">
              <h3>Goals & Features‍</h3>
              <div className="need-pain-mtbp mt-9">
                <div>
                  <div>
                    <h4>User Goals</h4>
                    <img src={primeres} alt="" />
                  </div>
                  <div>
                    <div>
                      <img src={arrow} alt="" />
                      Have a user-friendly platform with necessary features for
                      day-to-day work
                    </div>
                    <br />
                    <div>
                      <img src={arrow} alt="" />
                      Streamline the process of verifying customer details to
                      avoid delays
                    </div>
                    <br />
                    <div>
                      <img src={arrow} alt="" />
                      Increase productivity and handle high volume of
                      applications effectively
                    </div>
                    <br />
                    <div>
                      <img src={arrow} alt="" />
                      Improve communication and coordination between teams
                    </div>
                    <br />
                    <div>
                      <img src={arrow} alt="" />
                      Increase speed and accuracy of the credit approval process
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <h4>Business Goals</h4>
                    <img src={buisness} alt="" />
                  </div>
                  <div>
                    <div>
                      <img src={arrow} alt="" />
                      Increase the number of credit approvals and disbursements
                      to customers.
                    </div>
                    <br />
                    <div>
                      <img src={arrow} alt="" />
                      Improve the efficiency of the credit approval process.
                    </div>
                    <br />
                    <div>
                      <img src={arrow} alt="" />
                      Streamline internal processes and increase efficiency to
                      reduce costs and improve profitability.
                    </div>
                    <br />
                    <div>
                      <img src={arrow} alt="" />
                      Leverage data and analytics to better understand customer
                      behaviour and preferences
                    </div>
                    <br />
                    <div>
                      <img src={arrow} alt="" />
                      Enhance the security and reliability of the platform to
                      ensure the protection of sensitive customer data.
                    </div>
                  </div>
                </div>
              </div>
              <div className="desires-mtbp technical-specification-mtbp">
                <div>
                  <h4>Technical Specifications</h4>
                  <img src={techspecs} alt="" />
                </div>
                <div>
                  <img src={arrow} alt="" />
                  <p>
                    <strong>Security:</strong> the platform must provide a high
                    level of security to protect sensitive user information and
                    prevent fraud.
                  </p>
                </div>
                <div>
                  <img src={arrow} alt="" />
                  <p>
                    <strong>Scalability:</strong> the platform should be able to
                    handle a large volume of users and transactions as it grows.
                  </p>
                </div>
                <div>
                  <img src={arrow} alt="" />
                  <p>
                    <strong>Reliability:</strong> the platform must be highly
                    available and performant to ensure that users can access it
                    when they need it.
                  </p>
                </div>
                <div>
                  <img src={arrow} alt="" />
                  <p>
                    <strong>Compliance:</strong> the platform must comply with
                    relevant regulatory requirements, such as data privacy laws
                    and financial regulations.
                  </p>
                </div>
                <div>
                  <img src={arrow} alt="" />
                  <p>
                    <strong>Integration:</strong> the platform should be able to
                    integrate with other systems and services that the business
                    may need to use, such as third-party APIs or databases.
                  </p>
                </div>
              </div>
              <p className="mt-[80px] p1-mtbp">
                After conducting user research and identifying the needs and
                pain points of MTBP users, I arrived at a list of product
                feature priorities that can address these issues and improve the
                overall user experience. These priorities have been determined
                based on a combination of user feedback, industry standards, and
                business goals.
              </p>
              <p className="p2-mtbp my-[40px]">
                By implementing these features, MTBP can enhance its platform
                and solidify its position as a leader in the finance industry.
              </p>
              <div className="feature-mtbp">
                <div>
                  <img src={techspecs} alt="" />
                  <h4>Application Status Tracking</h4>
                  <p>
                    All Users should be able to track the status of an
                    application and receive real-time updates on its progress.
                  </p>
                </div>
                <div>
                  <img src={techspecs} alt="" />
                  <h4>Document Upload and Verification</h4>
                  <p>
                    The platform should allow users to verify documents with
                    CIBIl and other financial institutions easily.
                  </p>
                </div>
                <div>
                  <img src={techspecs} alt="" />
                  <h4>Automated Approval Process</h4>
                  <p>
                    The platform should use algorithms to analyse the
                    applicant's data and provides quick feedback.
                  </p>
                </div>
                <div>
                  <img src={techspecs} alt="" />
                  <h4>Integration with Credit Scoring Agencies</h4>
                  <p>
                    The platform should be integrated with credit scoring
                    agencies to provide accurate and reliable credit scores.
                  </p>
                </div>
                <div>
                  <img src={techspecs} alt="" />
                  <h4>User Management System</h4>
                  <p>
                    The platform should have a user management system that
                    allows to manage users, assign roles and permissions, and
                    monitor user activities.
                  </p>
                </div>
                <div>
                  <img src={techspecs} alt="" />
                  <h4>Reporting and Analytics</h4>
                  <p>
                    The platform should have reporting and analytics features
                    that provide all teams with insights into application
                    processing times, approval rates, and other key metrics.
                  </p>
                </div>
                <div>
                  <img src={techspecs} alt="" />
                  <h4>Secure Data Storage</h4>
                  <p>
                    The platform should have secure data storage features that
                    ensure customer data is kept safe and confidential.
                  </p>
                </div>
                <div>
                  <img src={techspecs} alt="" />
                  <h4>Customization and Flexibility</h4>
                  <p>
                    The platform should be customisable and flexible to make
                    changes to the platform to meet the evolving needs of the
                    business and users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="partition-line-sbsa my-[80px]"></div>
      <div>
        <div className="inner-container-subex">
          <div className="user-flows-mtbp">
            <h2>User Flows</h2>
            <p>
              I analyzed the tasks and user flows that align with the needs,
              desires, and goals of our user persona throughout their product
              journey. Using this analysis, I created an application sitemap
              that outlines the most efficient path to achieving those goals.
            </p>
            <div className="user-flow-image">
              <img src={IA} loading="lazy" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="wireframe-mtbp-bg">
        <div className="inner-container-subex py-[72px]">
          <div className="deliver-wireframes-sbsa">
            <h1>Deliver: Wireframes</h1>
            <br />
            <div className="wireframe-sbsa">
              <Wireframe val={"mtbp/wf"}></Wireframe>
            </div>
          </div>
        </div>
        <div className="partition-line-sbsa my-[72px]"></div>
        <div className="inner-container-subex">
          <div className="deliver-wireframes-sbsa pb-[80px]">
            <h1>Deliver: Visual Design</h1>
            <br />
            <div className="wireframe-sbsa">
              <Wireframe val={"mtbp/vd"}></Wireframe>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="inner-container-subex">
          <div className="usability-testing-mtbp">
            <h2>Usability Testing</h2>
            <p className="my-8">
              A Usability Test Guide was created and proposed after the
              finalisation of the high-fidelity prototype. Participants from
              various backgrounds were invited to test a click-through prototype
              and provide feedback based on their observations.
            </p>
            <strong>There were many valid and interesting suggestions:</strong>
            <div className="usability-inner-mtbp mt-6">
              <div>
                <img src={oarrow} alt="" />
                The streamlined workflow and clearer information hierarchy
                helped users to better understand the credit approval process
                and make more informed decisions.
              </div>
              <div>
                <img src={oarrow} alt="" />
                The addition of real-time notifications and updates was
                particularly well-received, as users felt more informed and
                engaged with the platform and the status of their application.
              </div>
              <div>
                <img src={oarrow} alt="" />
                Some users suggested the addition of more educational resources
                or FAQs to further clarify any questions or concerns they had
                about the platform or the credit approval process.
              </div>
              <div>
                <img src={oarrow} alt="" />
                Some users expressed interest in more customisation options or
                personalised features to better tailor the platform to their
                individual needs or preferences.
              </div>
              <div>
                <img src={oarrow} alt="" />
                Overall, users were pleased with the revamp of MTBP and felt
                that it was a significant improvement over the previous version,
                making the credit approval process faster, more efficient, and
                more user-friendly.
              </div>
            </div>
          </div>
          <div className="mylearning-sbsa mt-[60px]">
            <h1>My Learning</h1>
            <div className="flex items-baseline gap-[10px]">
              <img src={arrow} alt="" />
              During my work on the credit approval platform project, I gained a
              deep understanding of the credit approval process and the fintech
              domain.
            </div>
            <br />
            <div className="flex items-baseline gap-[10px]">
              <img src={arrow} alt="" />I learned about the various stages
              involved in the process, including document verification, credit
              score analysis, physical document pickup, and address
              verification. I also learned about the importance of user
              experience in fintech platforms and how it can greatly impact user
              satisfaction and adoption.
            </div>
          </div>
          <div className="mylearning-sbsa mt-[48px]">
            <h1>Future Directions</h1>
            <div className="flex items-baseline gap-[10px]">
              <img src={arrow} alt="" />
              Future directions for MTBP could include incorporating more
              automation and AI to improve the efficiency and accuracy of the
              credit approval process, as well as expanding the platform to
              include additional financial products beyond credit lines.
            </div>
          </div>
          <div className="navigation-subex">
            <div className="flex items-center cursor-pointer">
              <div>
                <img src={arrowBack} alt="" />
              </div>
              Previous Case Study
            </div>
            <div className="flex items-center cursor-pointer">
              Next Case Study
              <div>
                <img src={arrowFor} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mtbp;
