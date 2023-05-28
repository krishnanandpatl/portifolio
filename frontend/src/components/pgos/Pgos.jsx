import React from "react";
import pgos from "../../assets/pgos/pgos.svg";
import lock from "../../assets/pgos/lock.svg";
import pgosbig from "../../assets/pgos/pgosBig.png";
import bulb from "../../assets/pgos/bulb.svg";
import dataexp from "../../assets/pgos/data_exploration.svg";
import database from "../../assets/pgos/database.svg";
import folder from "../../assets/pgos/folder_managed.svg";
import redflag from "../../assets/pgos/red-flag.svg";
import requirements from "../../assets/pgos/requirement.svg";
import research from "../../assets/pgos/research.svg";
import ideation from "../../assets/pgos/ideation.svg";
import wireframe from "../../assets/pgos/wireframe.svg";
import validation from "../../assets/pgos/validation.svg";
import resistance from "../../assets/pgos/resistance.svg";
import differing from "../../assets/pgos/differing.svg";
import technical from "../../assets/pgos/constraints.svg";
import team from "../../assets/pgos/team.svg";
import check from "../../assets/pgos/check_circle.svg";
import design from "../../assets/pgos/design.svg";
import impactdes from "../../assets/pgos/impactdes.svg";
import impactteam from "../../assets/pgos/impactteam.svg";
import buissimpact from "../../assets/pgos/buissnessimpa.svg";
import arrowBack from "../../assets/arrowBack.svg";
import arrowFor from "../../assets/arrowFor.svg";
import arrow from "../../assets/pgos/Arrow.svg";

function Pgos() {
  return (
    <div>
      <div className="subex-container">
        <div className="subex-intro-card flex">
          <div className="text-part-intro mt-[24px]">
            <img src={pgos} alt="" />
            <h1 className="heading-intro-subex">
              Revolutionising Campaign Planning with User-Centred Design
            </h1>
            <br />
            <p className="para-intro-card my-[40px]">
              Explore how a proactive UX process and collaboration with
              stakeholders led to a user-friendly and business-driven PGOS
              campaign planning application.
            </p>
            <div className="timeline-intro-card">
              <div className="flex-titles-intro">
                <div className="headers-top-intro">TimeLine</div>
                <div className="title-details-intro">July 2021 - Ongoing</div>
              </div>
              <div className="flex-titles-intro">
                <div className="headers-top-intro">Platform</div>
                <div className="title-details-intro">Web</div>
              </div>
            </div>
            <div className="flex team-pgos mt-[40px] justify-between w-3/4">
              <div>
                <div className="teams-title-pgos">
                  Onshore (Germany, UK, US)
                </div>
                <div>7 Product Strategy Team</div>
                <div>2 Product Owner</div>
                <div>1 Data Lead</div>
                <div>4 Data Engineers</div>
                <div>1 Data Consultant</div>
                <div>4 Tech Lead</div>
                <div>20+ SW Developers</div>
                <div>5 Product Support</div>
                <div>1 Program Manager</div>
                <div>8 Deployment Team</div>
              </div>
              <div>
                <div className="teams-title-pgos">India POD</div>
                <div>1 ACD UX</div>
                <div>1 Sr. UX Designer [Me]</div>
                <div>1 UX Designer</div>
                <div>1 ACD UI</div>
                <div>1 Sr. UI Designer</div>
                <div>1 Program Manager</div>
              </div>
            </div>

            <div className=" mt-[40px]">
              <div className="headers-top-intro">My Contribution</div>
              <div className="my-contri-intro">
                User Experience | Interaction Design | Customer Experience |
                Product Strategy | Visual Design
              </div>
            </div>
          </div>
          <div className="image-part-intro">
            <img src={pgosbig} alt="" />
          </div>
        </div>

        <div className="inner-container-subex">
          <div className="key-container ">
            <div className="bulb-inner-container">
              <img src={bulb} alt="" />
            </div>
            <div className="bulb-side-line"></div>
            <div className="bulb-text-inner-container">
              Refining and Redefining PGOS's user experience with a focus on
              humanising data and technology and using storytelling techniques
              to helped showcase the product's potential to potential investors
              and clients.
            </div>
          </div>
          <div className="context-pgos mt-[80px]">
            <h1>Context and Background</h1>
            <br />
            <p>
              Publicis Growth OS (PGOS) is a web-based application designed to
              provide an end-to-end solution for media and marketing activities
              for clients and agencies. PGOS has several modules that are
              integrated with each other, providing a seamless and efficient
              flow of work. The platform is flexible and can be configured to
              meet the specific needs of each client separately, allowing for a
              customisable solution for each unique use case.
            </p>
            <br />
            <div className="flex key-offering-sbsa justify-between">
              <div>
                <h3>Key Offering</h3>
                <div>
                  <div>
                    <img src={dataexp} alt="" />
                  </div>
                  A comprehensive marketing services technology that connects
                  data and decision-making throughout the marketing value chain.
                </div>
                <br />
                <div>
                  <div>
                    <img src={database} alt="" />
                  </div>
                  An intuitive and flexible campaign planning application that
                  simplifies complex data and processes into a seamless and
                  efficient workflow.
                </div>
                <br />
                <div>
                  <div>
                    <img src={folder} alt="" />
                  </div>
                  The ability to develop and integrate new functionalities and
                  requirements quickly in response to client requests.
                </div>
              </div>
              <br />
              <div>
                <h3>Stats</h3>
                <div>
                  <div>
                    <img src={check} alt="" />
                  </div>
                  PGOS has already gained significant interest from potential
                  clients, with several major brands expressing their desire to
                  use the platform.
                </div>
                <br />
                <div>
                  <div>
                    <img src={check} alt="" />
                  </div>
                  PGOS's flexible and configurable nature has resulted in
                  significant cost savings by simplifying their marketing and
                  media planning processes.
                </div>
                <br />
                <div>
                  <div>
                    <img src={check} alt="" />
                  </div>
                  Early user testing and feedback has been overwhelmingly
                  positive, with users highlighting the intuitive and
                  user-friendly design of the platform.
                </div>
              </div>
            </div>
          </div>

          <div className="the-challenge-pgos">
            <h1 className="flex">
              <div>
                <img src={redflag} alt="" />
              </div>
              The Challenge
            </h1>
            <div className="mx-[58px] mt-[32px]">
              <h4>
                How might we improve the user experience of PGOS to increase
                adoption rates and ensure its effectiveness for clients and
                agencies?
              </h4>
              <br />
              <p>
                This problem involved balancing the trade-offs between UX design
                and technical limitations, managing multiple stakeholder
                interests, and ensuring that the platform is scalable and
                flexible enough to accommodate the needs of different clients.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="diffrerent-bg-pgos">
        <div className="inner-container-subex py-[80px]">
          <div className="way-working-pgos">
            <h1>Way of Working</h1>
            <br />
            <div>
              This is an example of how I approach this project as a UX designer
              using a 2 week sprint format:
            </div>
            <br />
            <h4>Sprint 1 - Week 1</h4>
            <br />
            <table className="first-table-pgos">
              <tr>
                <th>Day 1</th>
                <th>Day 2</th>
                <th>Day 3</th>
                <th>Day 4</th>
                <th>Day 5</th>
              </tr>
              <tr className="second-row-pgos">
                <td>Requirements Gathering</td>
                <td>Analysis and Synthesis</td>
                <td>Ideation</td>
                <td>Wire-framing</td>
                <td className="last-table-pgos">Team Review</td>
              </tr>
              <tr>
                <td>
                  <ul>
                    <li>
                      Check JIRA for new tickets related to usability
                      enhancement and new feature introduction.
                    </li>
                    <li>
                      Regular sync-ups with program managers & design teams to
                      discuss requirements in details.
                    </li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>
                      I first dive into the feedback provided by stakeholders to
                      gain a thorough understanding of the problem at hand.
                    </li>
                    <li>
                      I use HMW statements to frame the design problem in a way
                      that will help me generate meaningful solutions
                    </li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>
                      I synthesise my thoughts and ideas to develop solutions
                      that address the needs of the stakeholders and effectively
                      solve the problem.
                    </li>
                    <li>
                      Conduct brainstorming sessions with design team to
                      generate design, refine and narrow down ideas based on
                      user needs and business goals.
                    </li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>
                      Use the selected ideas to create initial medium -fidelity
                      wireframes.
                    </li>
                    <li>
                      Develop a basic click-through prototype of the selected
                      wireframe designs.
                    </li>
                  </ul>
                </td>
                <td className="last-table-pgos">
                  <ul>
                    <li>
                      Review and refine wireframes based on stakeholder
                      feedback.
                    </li>
                  </ul>
                </td>
              </tr>
            </table>
          </div>
          <div className="partition-line-pgos my-[48px]"></div>
          <div className="way-working-pgos">
            <h4>Sprint 1 - Week 2</h4>
            <br />
            <table className="first-table-pgos">
              <tr>
                <th>Day 6</th>
                <th className="w-1/6">Day 7</th>
                <th>Day 8</th>
                <th>Day 9</th>
                <th>Day 10</th>
              </tr>
              <tr className="second-row-pgos">
                <td>Analysis and Synthesis</td>
                <td>Iterations</td>
                <td>Finalising UX Design</td>
                <td>Handover to VD Team</td>
                <td className="last-table-pgos">Review and Wrap-up</td>
              </tr>
              <tr>
                <td>
                  <ul>
                    <li>
                      Analyse and synthesise the feedback and make necessary
                      changes to the prototype.
                    </li>
                    <li>Use JIRA to document changes and track progress.</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>
                      Create iterations of wire frames and prototyping based on
                      the feedback and stakeholder inputs.
                    </li>
                    <li>
                      Check-in regularly with stakeholders to ensure that the
                      designs are aligned with their expectations and goals.
                    </li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>
                      Work on finalising the UX design based on the feedback
                      from stakeholders and tech leads.
                    </li>
                    <li>
                      Ensure that the Wireframes are consistent with the
                      product's style guide and branding.
                    </li>
                    <li>
                      Prepare the UX design files for handover to the visual
                      design team.
                    </li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>
                      Handover the finalised UX design files to the visual
                      design team.
                    </li>
                    <li>
                      Discuss any questions or concerns with the visual design
                      team.
                    </li>
                  </ul>
                </td>
                <td className="last-table-pgos">
                  <ul>
                    <li>
                      Review the UX design project with stakeholders and team
                      members.
                    </li>
                    <li>
                      Reflect on the design process and identify any areas of
                      improvement for future projects.
                    </li>
                    <li>Prepare for the next sprint.</li>
                  </ul>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div>
        <div className="inner-container-subex">
          <div className="design-process-pgos">
            <h1>Design Process</h1>
            <br />
            <p className="ml-3 w-2/3">
              My top priority was to understand the needs of users and develop
              solutions that meet those needs. The following example will
              illustrate how I approached a Jira ticket request with empathy and
              a focus on user-centred design.
            </p>
            <br />
            <div className="jira-pgos">
              <h5>
                JIRA Ticket: Adding multiple scenarios to a Marketing Campaign
                in current Scenario Planner module
              </h5>
              <br />
              <p>
                <i>What is a Scenario:</i> A scenario is a specific set of
                events or conditions that may occur in the future, such as a
                change in customer behaviour or a new competitor entering the
                market. In marketing, scenarios are often used to explore
                different possibilities and plan for the future.
              </p>
            </div>
            <br />
            <p className="mb-[36px] ml-3">
              To add multiple scenarios to a marketing campaign in Scenario
              Planner, I follow a detailed process that includes the following
              steps:
            </p>
            <div className="design2-pgos">
              <div className="flex">
                <div className="circle-bg">
                  <img src={requirements} alt="" />
                </div>
                <div>
                  <h5>Gathering Requirements</h5>
                  <p>
                    I review the JIRA ticket and gather information about the
                    ticket, including the goals of the marketing team and any
                    specific requirements or constraints.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="circle-bg">
                  <img src={research} alt="" />
                </div>
                <div>
                  <h5>Research and Analysis</h5>
                  <p>
                    I conduct research on the target audience and relevant
                    industry trends to gain a deeper understanding of the market
                    and identify potential scenarios.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="circle-bg">
                  <img src={ideation} alt="" />
                </div>
                <div>
                  <h5>Ideation</h5>
                  <p>
                    Based on the research, I brainstorm multiple solutions that
                    could impact the marketing team and prioritise them based on
                    their likelihood and potential impact.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="circle-bg">
                  <img src={wireframe} alt="" />
                </div>
                <div>
                  <h5>Wire-framing</h5>
                  <p>
                    Once the solutions were finalised, I created wireframes for
                    each solution to visualise the layout and flow of the new
                    feature. I created wireframes using Adobe XD, ensuring they
                    were easy to understand for both the development team and
                    stakeholders.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div>
                  <img src={validation} alt="" />
                </div>
                <div>
                  <h5>Validation</h5>
                  <p>
                    I review the solutions with the marketing team and
                    stakeholders to ensure that they accurately reflect the
                    goals and requirements of the project.
                  </p>
                </div>
              </div>
            </div>
            <p className="w-2/3">
              Throughout this process, I ensure that all deadlines are met and
              that the scenarios are thoroughly tested and validated to ensure
              accuracy and reliability.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-lock-pgos">
        <div className="bg-lock-pgos2">
          <div className="inner-container-subex bg-image-pgos">
            <div className="product-showcase-pgos py-[160px]">
              <div>
                <img src={lock} alt="" />
              </div>
              <br />
              <h2>Product Showcase</h2>
              <br />
              <h6>
                I appreciate your interest in seeing my work and I hope you can
                understand that my commitment to maintaining client trust and
                confidentiality is of the utmost importance to me.
                <br />
                If there are any other ways in which I can demonstrate my skills
                and experience, I would be more than happy to discuss them with
                you.
              </h6>
              <br />
              <br />
              <p>
                Due to the Non-Disclosure Agreement (NDA) I have signed with
                PGOS, I am not able to showcase any design work publicly.
                However, I can confidently say that my design solutions have
                positively impacted the business and have contributed to
                improving the overall user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="inner-container-subex">
          <div className="project-challenges-pgos">
            <h1>Project Challenges</h1>
            <br />
            <div className="flex">
              <div>
                <img src={resistance} alt="" />
              </div>
              <div>
                <h5>Resistance to Change</h5>
                <p>
                  Despite encountering resistance from clients to proposed
                  changes, I overcame this challenge by building trust,
                  effectively communicating the benefits of the changes, and
                  providing data to support my recommendations.
                </p>
              </div>
            </div>
            <br />
            <div className="flex">
              <div>
                <img src={differing} alt="" />
              </div>
              <div>
                <h5>Differing Design Opinion</h5>
                <p>
                  At times the client had different idea of what the final
                  design should look like, which resulted in conflicting design
                  opinions. To overcome this, you can present a clear rationale
                  for your design decisions and provide data and user research
                  to support your design choices.
                </p>
              </div>
            </div>
            <br />
            <div className="flex">
              <div>
                <img src={technical} alt="" />
              </div>
              <div>
                <h5>Technical Constraints</h5>
                <p>
                  Sometimes client had technical constraints that limit the
                  design options available. To overcome this challenge, I would
                  work with the client to identify the technical constraints and
                  design a solution that works within those constraints.
                </p>
              </div>
            </div>
          </div>
          <div className="skills-contribution-pgos mt-[64px]">
            <h2>My Skill and Contribution</h2>
            <br />
            <p>
              As a UX designer at PGOS, I bring a strong set of design, team,
              and project management skills to the table.
            </p>
            <br />
            <div>
              <div className="p-6 border-right-pgos">
                <div className="mb-4">
                  <img src={design} alt="" />
                </div>
                <h5>Design</h5>
                <br />
                <div>
                  Led experience design and usability improvements on 8 modules
                  of PGOS, resulting in an increase in user satisfaction and a
                  decrease in user errors.
                </div>
                <br />
                <div>
                  Created and iterated on 150+ wireframes and prototypes,
                  resulting in a increase in efficiency and ease of use for
                  users.
                </div>
                <br />
                <div>
                  Conducted user testing sessions, resulting in improved ease of
                  use and satisfaction with the platform.
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <img src={team} alt="" />
                </div>
                <h5>Team & Project Management</h5>
                <br />
                <div>
                  Facilitated design workshops, resulting in the identification
                  and implementation of several successful UX solutions.
                </div>
                <br />
                <div>
                  Conducted regular meetings with stakeholders and provided
                  weekly progress reports, resulting in an improvement in
                  communication and alignment among the team.
                </div>
                <br />
                <div>
                  Managed and prioritized 30+ Jira tickets and ensured all
                  deliverables were completed within the 2-week sprint timeline.
                </div>
                <br />
                <div>
                  Mentored and trained 3 junior UX designers, resulting in an
                  improvement in their skills and confidence.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="impact-bg-pgos">
        <div className="inner-container-subex">
          <div className="my-impact-pgos py-[56px]">
            <h1>My Impact</h1>
            <br />
            <div className="flex my-impact-in-pgos">
              <div className="w-3/5 impact-border-pgos pr-[60px]">
                <div className="">
                  <img src={impactdes} alt="" />
                </div>
                <br />
                <h5>Design</h5>
                <br />
                <h6>Improved user experience</h6>
                <p>
                  Through your redesign of the platform's user interface, you
                  were able to increase user engagement by 25% and decrease user
                  errors by 20%, resulting in a more user-friendly and intuitive
                  experience.
                </p>
                <br />
                <h6>Faster time-to-market</h6>
                <p>
                  By streamlining the design process and implementing Agile
                  methodologies, you were able to reduce the average time it
                  takes to deliver new features by 30%, allowing PGOS to stay
                  competitive in the market.
                </p>
                <br />
                <h6>Implemented a new design review process</h6>
                <p>
                  By involving more stakeholders earlier in the design process,
                  which helped to catch potential issues before they became
                  major roadblocks.
                </p>
              </div>
              <div className="w-2/5 pl-[60px] pb-[40px]">
                <div>
                  <img src={impactteam} alt="" />
                </div>
                <br />
                <h5>Team Management</h5>
                <br />
                <h6>Enhanced collaboration</h6>
                <p>
                  Through your redesign of the platform's user interface, you
                  were able to increase user engagement by 25% and decrease user
                  errors by 20%, resulting in a more user-friendly and intuitive
                  experience.
                </p>
                <br />
                <h6>Coordinated and led a design sprint</h6>
                <p>
                  By streamlining the design process and implementing Agile
                  methodologies, you were able to reduce the average time it
                  takes to deliver new features by 30%, allowing PGOS to stay
                  competitive in the market.
                </p>
                <br />
                <h6>Mentored and coached junior designers</h6>
                <p>
                  I mentored junior designers resulting in increase of their
                  design efficiency and their design output quality
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-[42px] pb-[56px]">
            <div className="w-1/5">
              <img src={buissimpact} alt="" />
            </div>
            <div className="buisness-impact-pgos">
              <h5>Business Impact</h5>
              <br />
              <div className="flex gap-[120px]">
                <div>
                  <strong>Increased satisfaction</strong>
                  <p>
                    By optimising the platform's user interface and improving
                    the overall user experience, I was able to increase customer
                    satisfaction and retention.
                  </p>
                </div>
                <div>
                  <strong>Improved brand perception</strong>
                  <p>
                    We developed a consistent visual identity and design
                    language for PGOS, improving brand perception among
                    customers and stakeholders, resulting in increased brand
                    loyalty and customer retention.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="inner-container-subex">
          <div className="my-learning-pgos">
            <h1>My Learning</h1>
            <br />
            <div>
              <div className="flex">
                <div>
                  <img src={arrow} alt="" />
                </div>
                Through my work with PGOS, I have learned to balance design
                quality with technical constraints and business requirements. I
                have learned how to manage and prioritise Jira tickets to ensure
                that deadlines are met and that the design output meets both
                user and business needs.
              </div>
              <br />
              <div className="flex">
                <div>
                  <img src={arrow} alt="" />
                </div>
                In managing UX tracks for projects, I have developed skills in
                project management, including task prioritization, timeline
                management, and effective communication with team members and
                stakeholders.
              </div>
              <br />
              <div className="flex">
                <div>
                  <img src={arrow} alt="" />
                </div>
                Working with a variety of stakeholders, including program
                managers, tech leads, business teams, and design teams, I have
                learned how to effectively communicate design recommendations
                and receive feedback for iterative design improvements.
              </div>
            </div>
          </div>
          <div className="flex mt-[64px] reflecion-pgos gap-6">
            <div>
              <h2>Reflection</h2>
              <br />
              <div className="flex">
                <div>
                  <img src={arrow} alt="" />
                </div>
                Reflecting on my work has helped me identify areas for
                improvement and growth as a designer and team member.
              </div>
              <br />
              <div className="flex">
                <div>
                  <img src={arrow} alt="" />
                </div>
                By taking the time to reflect on my successes and challenges, I
                am able to learn from my experiences and make changes to my
                approach in the future.
              </div>
              <br />
              <div className="flex">
                <div>
                  <img src={arrow} alt="" />
                </div>
                Reflection has also helped me appreciate the impact of my work
                on the team and the business, and has motivated me to continue
                striving for excellence.
              </div>
            </div>
            <div>
              <h2>Future Directions</h2>
              <br />
              <div className="flex">
                <div>
                  <img src={arrow} alt="" />
                </div>
                Reflecting on my work has helped me identify areas for
                improvement and growth as a designer and team member.
              </div>
              <br />
              <div className="flex">
                <div>
                  <img src={arrow} alt="" />
                </div>
                By taking the time to reflect on my successes and challenges, I
                am able to learn from my experiences and make changes to my
                approach in the future.
              </div>
              <br />
              <div className="flex">
                <div>
                  <img src={arrow} alt="" />
                </div>
                Reflection has also helped me appreciate the impact of my work
                on the team and the business, and has motivated me to continue
                striving for excellence.
              </div>
            </div>
          </div>
          <div className="navigation-subex">
            <div className="flex">
              <div>
                <img src={arrowBack} alt="" />
              </div>
              Previous Case Study
            </div>
            <div className="flex">
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

export default Pgos;
