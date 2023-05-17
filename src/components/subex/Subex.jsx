import React from "react";
import "../styles/subex.css";
import check from "../../assets/pgos/check_circle.svg";
import LineGraph from "../../assets/subex/LineGraph.png";
import PieGraph1 from "../../assets/subex/PieGraph1.png";
import PieGraph2 from "../../assets/subex/PieGraph2.png";
import workflow from "../../assets/subex/workflow.png";
import Kanbanboard from "../../assets/subex/Kanbanboard.png";
import Timelines from "../../assets/subex/Timelines.png";
import TaskOriented from "../../assets/subex/TaskOriented.png";
import subex from "../../assets/subex/subex.png";
import bulb from "../../assets/pgos/bulb.svg";
import revenue from "../../assets/subex/revenue.svg";
import fraud from "../../assets/subex/fraud.svg";
import solution from "../../assets/subex/solution.svg";
import analsoln from "../../assets/subex/analsoln.svg";
import leak from "../../assets/subex/leak.svg";
import flag from "../../assets/subex/flag.svg";
import workflowcreation from "../../assets/subex/account_tree.svg";
import caseInvestigation from "../../assets/subex/policy.svg";
import caseclosing from "../../assets/subex/rule_folder.svg";
import ss1 from "../../assets/subex/ss1.png";
import ss2 from "../../assets/subex/ss2.png";
import ss3 from "../../assets/subex/ss3.png";
import workflow1 from "../../assets/subex/workflow1.png";
import casebig from "../../assets/subex/case.png";
import closing from "../../assets/subex/closing.png";
import efficiency from "../../assets/subex/efficiency.svg";
import decision from "../../assets/subex/decision.svg";
import collab from "../../assets/subex/collab.svg";
import report from "../../assets/subex/reporting.svg";
import subexTable from "../../assets/subex/subexTable.png";
import Wireframe from "../sliders/Wireframe";
import arrowBack from "../../assets/arrowBack.svg";
import arrowFor from "../../assets/arrowFor.svg";
import new2 from "../../assets/subex/new.svg";

function Subex() {
  return (
    <div>
      <div className="subex-container">
        <div className="subex-intro-card flex">
          <div className="text-part-intro">
            <h1 className="heading-intro-subex">
              Revamping Subex’s Case Management through Research and Efficiency
              with a User-Centric Design Approach
            </h1>
            <br />
            <p className="para-intro-card">
              Discover our process of research and validation to revamp a case
              management system for revenue assurance (RA) and fraud management
              (FM) users.
            </p>
            <br />
            <div className="timeline-intro-card">
              <div className="flex-titles-intro">
                <div className="headers-top-intro">TimeLine</div>
                <div className="title-details-intro">Sep 2019 - Oct 2020</div>
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
                <div>1 CD</div>
                <div>1 Design Lead[Me]</div>
                <div>2 UX Designers</div>
                <div>2 Visual Designers</div>
                <div>1 Program Manager</div>
              </div>
            </div>
            <br />
            <div>
              <div className="headers-top-intro">My Contribution</div>
              <div className="my-contri-intro">
                Research & Analysis | Experience Design | Interaction Design
              </div>
            </div>
          </div>
          <div className="image-part-intro">
            <img src={subex} loading="lazy" alt="" />
          </div>
        </div>
        <div className="inner-container-subex">
          <div className="key-container">
            <div className="bulb-inner-container">
              <img src={bulb} alt="" />
            </div>
            <div className="bulb-side-line"></div>
            <div className="bulb-text-inner-container">
              Redesigned the company's case management system through research,
              stakeholder conversations, and user interviews to create a
              user-centric system that streamlined RA and FM processes.
            </div>
          </div>
          <div className="context-background-subex">
            <h1>Context and Background</h1>
            <br />
            <p>
              Subex is a leading provider of telecom software solutions that has
              been serving the industry for almost three decades. Their
              solutions are designed to help clients maximise revenues, increase
              profitability, and build trusted digital ecosystems.
            </p>
            <br />
            <i>Subex specialises in three main area</i>
            <br />
            <br />
            <div className="specialisation-subex">
              <div className="cont-subex">
                <div className="speci-title-subex">
                  <div>
                    <img src={revenue} alt="" />
                  </div>
                  <div>Revenue Assurance</div>
                </div>
                <p>
                  involves ensuring that all revenue streams are being captured
                  and accounted for.
                </p>
              </div>
              <div className="cont-subex">
                <div className="speci-title-subex">
                  <div>
                    <img src={fraud} alt="" />
                  </div>
                  <div>Fraud Management</div>
                </div>
                <p>involves detecting and preventing fraudulent activities.</p>
              </div>
              <div className="cont-subex">
                <div className="speci-title-subex">
                  <div>
                    <img src={analsoln} alt="" />
                  </div>
                  <div>Analytics solutions</div>
                </div>
                <p>
                  offer insights on customer behaviour, network performance, and
                  other metrics to help making informed decisions.
                </p>
              </div>
            </div>
            <p className="mid-spec-subex">
              Subex wanted to revamp or reconstruct its case management (CM)
              system for several reasons, including outdated technology, limited
              functionality, poor user experience, and increased competition in
              the telecom industry.
            </p>
            <div className="bottom-context-subex">
              <div className="what-case-subex">
                <h3>What is a Case</h3>
                <br />
                <p className="p1inbottom">
                  A "Case" in Subex is a specific instance of fraudulent
                  activity or revenue leakage that needs to be investigated and
                  resolved.
                </p>
                <br />
                <p className="p2inbottom">
                  For example, if a customer is being charged for unused
                  services, this could be identified as a case. Cases are
                  managed through a case management module that includes
                  features such as case assignment, prioritisation, notes, and
                  closure.
                </p>
              </div>
              <div className="type-case-btm-subex">
                <h3>Few Types of Cases</h3>
                <br />
                <div className="flex gap-3 items-baseline">
                  <div className="w-1/6">
                    <img src={leak} alt="" />
                  </div>
                  <div>
                    <strong>Revenue Leakage:</strong> This case type identifies
                    instances where revenue is lost due to issues such as
                    billing errors, system inefficiencies, or fraudulent
                    activity.
                  </div>
                </div>
                <br />
                <div className="flex gap-3 items-baseline">
                  <div className="w-1/6">
                    <img src={leak} alt="" />
                  </div>
                  <div>
                    <strong>Fraud Detection:</strong> This case type involves
                    subscription fraud or SIM box fraud, which can lead to
                    significant revenue losses for telecom companies.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="buisness-challenge-subex">
            <div className="w-1/5">
              <img src={flag} alt="" />
            </div>
            <div className="buisness-challenge-subex-content">
              <h1>Buisness Challenge</h1>
              <br />
              <p>
                The outdated and limited functionality of the existing case
                management system has resulted in errors, missed revenue
                opportunities, and decreased competitiveness in the telecom
                industry, driving Subex to improve its case management
                capabilities to meet changing client needs.
              </p>
            </div>
          </div>
          <div className="buisness-challenge-subex">
            <div className="w-1/5">
              <img src={flag} alt="" />
            </div>
            <div className="buisness-challenge-subex-content">
              <h1>Design Challenge</h1>
              <br />
              <p>
                How might we provide users with more flexible and customisable
                case management workflows to proactively identify potential
                revenue leakage and fraudulent activities to increase user
                adoption and satisfaction?
              </p>
            </div>
          </div>
          <div className="buisness-challenge-subex">
            <div className="w-1/5">
              <img src={solution} alt="" />
            </div>
            <div className="buisness-challenge-subex-content">
              <h1>The Solution</h1>
              <br />
              <p>
                We implemented a case timeline to enhance case visibility and
                streamline investigation. Additionally, we incorporated features
                such as bulk and automatic case closing, dashboard creation, and
                reporting tools.
              </p>
              <br />
              <i>
                Our initial testing demonstrated a considerable enhancement in
                both user experience and system efficiency.
              </i>
            </div>
          </div>
        </div>
        <div className="partition-line-subex"></div>
        <div className="inner-container-subex">
          <div className="understand-subex">
            <div className="understand-title-subex">Understand</div>
            <br />
            <p className="understand-para-subex">
              My aimed was to deliver the best possible solutions by gaining a
              better understanding of the process and the users involved. I
              started by identifying the different users engaged in revenue
              assurance and fraud management, and delved deeper into their
              roles, responsibilities, frustrations, and needs. Then, I
              proceeded to map the entire user journey to gain a comprehensive
              understanding of their emotions and requirements.
            </p>
          </div>
          <br />
          <div className="primary-research-subex">
            <div className="research-title-subex">
              Primary Research: The User
            </div>
            <br />
            <div className="research-table-subex">
              <table>
                <tr className="research-table-header-subex">
                  <th className="w-[15%]">
                    Age Range <br /> (years)
                  </th>
                  <th className="w-[20%]">Occupation</th>
                  <th className="w-[10%]">Years of Experience</th>
                  <th className="w-[12%]">Number of Cases/Day</th>
                  <th>Responsibilities</th>
                </tr>
                <tr className="research-table-diff-subex">
                  <td>45-60</td>
                  <td>Case Management Director</td>
                  <td>10+ years</td>
                  <td>0</td>
                  <td>
                    Responsible for directing and improving case management
                    policies, procedures, and team performance. Collaborates
                    across departments to align with business objectives and
                    customer needs. Manages a team of case managers and
                    investigators, providing leadership and mentorship. Does not
                    investigate individual cases.
                  </td>
                </tr>
                <tr>
                  <td>35-50</td>
                  <td>Case Managers</td>
                  <td>5-10 years</td>
                  <td>0 - 1</td>
                  <td>
                    Oversees case management from intake to resolution,
                    assigning cases and monitoring progress to meet SLAs.
                    Identifies process improvements and provides updates to
                    stakeholders.
                  </td>
                </tr>
                <tr>
                  <td>30-40</td>
                  <td>Senior Case Investigators</td>
                  <td>3-7 years</td>
                  <td>1-2</td>
                  <td>
                    Lead investigations of high-impact, complex cases; analyze
                    large datasets; manage junior investigators; collaborate
                    with cross-functional teams
                  </td>
                </tr>
                <tr>
                  <td>20-30</td>
                  <td>Junior Investigator</td>
                  <td>0-2 years</td>
                  <td>3 - 5</td>
                  <td>
                    Investigates simple cases, conducts research and analysis,
                    documents findings,
                  </td>
                </tr>
              </table>
            </div>
            <br />
            <p className="primary-research-p1">
              During the primary research phase, I conducted 8 in-depth
              interviews with stakeholders, RA and FM users to gain insights
              into their pain points and needs.
            </p>
            <br />
            <p className="primary-research-p2">
              The stakeholders considered for the development of the solutions
              were the case managers, senior case investigators, and junior
              investigators.Through discussions with these stakeholders, we
              identified several pain points and frustrations, as outlined
              below.
            </p>
            <br />
            <p className="primary-research-p2">
              The users reported challenges with the current case management
              system, such as difficulty in tracking cases, lack of
              user-friendly interfaces, and inefficient case management
              workflows. They expressed the need for more automation, better
              visualization of data, and easy-to-use interfaces.
            </p>
          </div>
          <br />
          <div className="current-cms-subex">
            <div className="current-cms-subex-title">
              Reason for not using current case management system
            </div>
            <div className="curr-cms-graph-subex">
              <img src={LineGraph} alt="" />
            </div>
          </div>
          <br />
          <div className="piechart-subex">
            <div className="piegraph1">
              <br />
              <img src={PieGraph1} alt="" />
            </div>

            <div className="piegraph1">
              <br />
              <img src={PieGraph2} alt="" />
            </div>
          </div>
          <div className="user-experience-subex">
            <h1 className="mb-[48px]">User Experience Map</h1>
            <div>
              <img src={subexTable} loading="lazy" alt="" />
            </div>
          </div>
          <div className="pros-cons-subex">
            <div>
              <p>
                The user research and experience mapping proved invaluable in
                identifying key areas of opportunity for improving the case
                management process.
              </p>
              <br />
              <p>
                By focusing on these areas, I was confident that I can create an
                efficient and effective case management system that delivers
                real value to our clients.
              </p>
              <div className="pros-cons-comapare">
                <div className="pros-subex">
                  <h2>Frustation</h2>
                  <div>
                    <div>
                      <img src={leak} alt="" />
                      Inefficient workflow creation{" "}
                    </div>
                    <div>
                      <img src={leak} alt="" />
                      Difficulty in prioritising and assigning cases to
                      investigators
                    </div>
                    <div>
                      <img src={leak} alt="" />
                      Inconsistent case management processes and procedures
                    </div>
                    <div>
                      <img src={leak} alt="" />
                      Limited visibility and collaboration oncase status and
                      progress
                    </div>
                    <div>
                      <img src={leak} alt="" />
                      No centralised system for creating and managing case
                      information and documents
                    </div>
                  </div>
                </div>
                <div className="cons-subex">
                  <h2>Oppurtunities</h2>
                  <div>
                    <div>
                      <img src={check} alt="" />
                      Efficient case creation and management processes
                    </div>
                    <div>
                      <img src={check} alt="" />
                      Automation of routine tasks
                    </div>
                    <div>
                      <img src={check} alt="" />
                      Access to comprehensive data
                    </div>
                    <div>
                      <img src={check} alt="" />
                      Collaborative tools and platforms
                    </div>
                    <div>
                      <img src={check} alt="" />
                      Robust reporting and analytics capabilities
                    </div>
                    <div>
                      <img src={check} alt="" />
                      Adequate resources and support
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="secondary-research-subex">
            <h2>Secondary Research</h2>
            <br />
            <p>
              Insights collect thought data available on Internet also suggested
              that there is a significant need for Subex to revamp their case
              management processes. The high costs of fraud losses and long case
              resolution times, pain points of data integration and the
              increasing importance of automation, all indicate the need for
              more efficient and effective case management solutions.
            </p>
            <br />
            <div className="secondary-research-cards">
              <div>
                <h3>2-5%</h3>
                <br />
                <p>Revenue loss due to inefficient case management in telcos</p>
              </div>
              <div>
                <h3>50%</h3>
                <br />
                <p>
                  Reduction in resolution time by Automating case management
                  processes
                </p>
              </div>
              <div>
                <h3>4-5D</h3>
                <br />
                <p>
                  Average time taken to resolve a case. For some cases it can be
                  up to 10 days.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="partition-line-subex"></div>
        <div className="inner-container-subex">
          <div className="ideate-subex">
            <h1>Ideate</h1>
            <br />
            <p>
              During the ideation sessions, we conducted brainstorming
              exercises, created user personas, and performed role-playing
              exercises to generate ideas for potential solutions. We also
              conducted design sprints to rapidly prototype and test different
              concepts with users to get feedback and refine our ideas. Some key
              takeaways from these sessions included
            </p>
            <br />
            <div>
              <div className="ideate-text">
                <div className="flex items-start gap-4">
                  <img src={workflowcreation} alt="" />
                  <p>
                    <strong>Workflow Creation:</strong> Identified the key
                    priority for users was to streamlined workflow creation
                    process through automation and configurable work steps.
                    <u>
                      As a result, we focused on creating a pipeline creation
                      flow for case creation that is intuitive and minimises
                      context switching.
                    </u>
                  </p>
                </div>
                <br />
                <div className="flex items-start gap-4">
                  <img src={caseInvestigation} alt="" />
                  <div>
                    <p>
                      <strong>Case Investigation: </strong>
                      Users highlighted the need for better case investigation
                      and reporting tools to track cases more effectively.
                      <u>
                        We added a case timeline feature to help users track
                        cases from start to finish.
                      </u>
                    </p>

                    <br />
                    <p>
                      Users expressed a strong desire for better communication
                      and collaboration tools to improve information sharing and
                      teamwork.
                      <u>
                        We also introduced inline chat features, shared
                        workspaces, and a shared repository for quick access to
                        artefacts to address this need.
                      </u>
                    </p>
                  </div>
                </div>
                <br />
                <div className="flex items-start gap-4">
                  <img src={caseclosing} alt="" />
                  <p>
                    <strong>Case Closing and Reporting: </strong>
                    Included bulk closing and automatic closing features to
                    streamline case resolution. Additionally, we{" "}
                    <u>
                      included dashboard creation features to help users track
                      performance and identify areas for improvement.
                    </u>
                  </p>
                </div>
              </div>
              <div className="w-1/3 m-auto">
                <div>
                  <img src={ss1} alt="" />
                </div>
                <div className="flex gap-4 mt-4">
                  <div>
                    <img src={ss2} alt="" />
                  </div>
                  <div>
                    <img src={ss3} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="user-workflow-subex">
            <h2>User Workflow</h2>
            <br />
            <p>
              During our ideation session, we adopted a user-centric approach to
              define a new workflow for case management. Our aim was to create a
              simplified and streamlined process with an intuitive design that
              would increase the adoption of case management among both RA and
              FM users.
            </p>
            <div className="user-workflow-image mt-[40px]">
              <img src={workflow} alt="" />
            </div>
          </div>
        </div>
        <div className="partition-line-subex"></div>
        <div className="inner-container-subex">
          <div className="concept-creation-subex">
            <h2>Concepts Creation</h2>
            <br />
            <div className="concept-creation-subex-italics">
              <i>
                We explored various design tracks, focusing on enhancing the
                user experience and usability. The primary objective was to
                create a solution that meets the needs of the users and
                addresses their pain points.
                <strong>
                  And arrived to three possible design tracks, including
                  Task-oriented, Kanban board, and timelines.
                </strong>
              </i>
            </div>
            <br />
            <div className="concept-cards-subex">
              <div className="concept-card-subex">
                <img src={TaskOriented} alt="" />
                <br />
                <h4>Task-Oriented</h4>
                <br />
                <p>
                  This design route focused on organizing tasks in a hierarchy
                  and displaying them in a task list. Users could view tasks
                  based on priority, status, and due date.
                </p>
              </div>
              <div className="concept-card-subex">
                <img src={Kanbanboard} alt="" />
                <br />
                <h4>Kanban board</h4>
                <br />
                <p>
                  This option would focus on flexibility, allowing users to
                  display cases and their current status, and easily move them
                  through different stages of investigation.{" "}
                </p>
              </div>
              <div className="concept-card-subex">
                <img src={Timelines} alt="" />
                <br />
                <h4>Timelines</h4>
                <br />
                <p>
                  This design route focused on displaying a case in a
                  chronological order with milestones and key events. Users
                  could track a case from start to finish with a visual
                  timeline.
                </p>
              </div>
            </div>
            <br />
            <div className="concept-italics">
              <i>
                After several rounds of iteration, we landed on{" "}
                <strong>timelines</strong> as our way forward to a solution,
                which proved to be the most effective and intuitive for our
                users.
              </i>
            </div>
          </div>
        </div>
        <div className="partition-line-subex"></div>
        <div className="inner-container-subex">
          <div className="build-subex">
            <h2>Build</h2>
            <br />
            <p>
              We refined and finalized our concept, and then moved on to
              building wireframes and user flows. Our goal was to design an
              experience that would be optimal for the users while also meeting
              the business objectives of the project. To achieve this, we
              focused on three key areas:
            </p>
          </div>
          <br />
          <div className="workflow-creation-subex">
            <div className="flex justify-around">
              <div className="w-2/3">
                <h1>Workflow Creation</h1>
                <br />
                <div className="workflow-creation-para">
                  <p>
                    This feature allows the user to create and customise a case
                    in form of a flexible pipeline with connection to connect
                    work-steps. This means that each work-step is configurable
                    in an overlay, which allows the user to stay focused and not
                    lose context.
                  </p>
                  <br />
                  <div>
                    Impact
                    <ul>
                      <li>
                        By providing a clear and consistent process for case
                        creation, users can reduce the time spent on
                        administrative tasks and focus on more complex
                        investigative work.
                      </li>
                      <br />
                      <li>
                        Additionally, the configurable worksteps allow users to
                        create a workflow that is tailored to their specific
                        needs, further improving efficiency and productivity.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="workflow-numbering-1">1</div>
            </div>
            <div className="workflow-image-part mt-6">
              <img src={workflow1} alt="" />
            </div>
            <div className="w-full mt-[32px] border">
              <div className="complete-diagram-subex flex gap-2 w-fit">
                <p>View complete Flow Diagram here</p>
                <img src={new2} alt="" />
              </div>
            </div>
          </div>
          <br />
          <div className="workflow-creation-subex">
            <div className="flex justify-around">
              <div className="w-2/3">
                <h1>Case Investigation</h1>
                <br />
                <div className="workflow-creation-para">
                  <p>
                    The case investigation feature is designed to provide users
                    with a{" "}
                    <u>
                      comprehensive and centralised view of all case-related
                      information
                    </u>
                    , including the case timeline.
                  </p>
                  <br />
                  <ul>
                    <li>
                      <strong>Case timeline</strong> allows users to track the
                      progress of a case from start to finish, making it easier
                      to identify areas that require attention and action.
                    </li>
                    <li>
                      The <strong>inline chat</strong> feature enables users to
                      communicate with other team members in real-time,
                      facilitating collaboration and information sharing.
                    </li>
                    <li>
                      <strong>Shared workspaces</strong> allow team members to
                      work on a case together, regardless of their location,
                      while the shared repository provides quick access to
                      important artefacts.
                    </li>
                    <li>
                      <strong>Case Clipboard</strong> is a feature that allows
                      users to temporarily store copied data and artifacts
                      within the system, and then paste it during their case
                      investigation.
                    </li>
                  </ul>
                  <br />
                  <div>Impact</div>
                  <ul>
                    <li>
                      Users can quickly access relevant information and
                      collaborate effectively, leading to faster resolution of
                      cases.
                    </li>
                    <li>
                      The shared workspaces and repository enable team members
                      to work together seamlessly, even if they are in different
                      locations. This increases productivity and reduces the
                      time spent on administrative tasks, freeing up time for
                      more complex investigative work.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="workflow-numbering-1">2</div>
            </div>
            <div className="mt-6">
              <img src={casebig} alt="" />
            </div>
            <div className="w-full mt-[32px] border">
              <div className="complete-diagram-subex flex gap-2 w-fit">
                <p>View complete Flow Diagram here</p>
                <img src={new2} alt="" />
              </div>
            </div>
          </div>
          <br />
          <div className="workflow-creation-subex">
            <div className="flex justify-around">
              <div className="w-2/3">
                <h1>Case Closing and Reporting</h1>
                <br />
                <div className="workflow-creation-para">
                  <p>
                    Users can now close multiple cases at once, rather than
                    individually, saving them valuable time. The bulk closing
                    and automatic closing features would significantly increase
                    the efficiency of case resolution, reducing the time and
                    effort required to close cases.
                  </p>
                  <p>
                    The dashboard creation features would provide users with an
                    overview of their performance and identify areas for
                    improvement, allowing them to track progress and take
                    necessary actions.
                  </p>
                  <p>
                    We also added the capability to generate weekly summary
                    reports that highlight key metrics and KPIs related to case
                    management.
                  </p>
                  <br />
                  <div>Impact</div>
                  <ul>
                    <li>
                      This feature would enhance the user experience by
                      providing them with a visual representation of their
                      performance and enable them to make data-driven decisions.
                    </li>
                    <li>
                      The automatic report generation feature saves time and
                      effort for users by eliminating the need to manually
                      compile and analyze data.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="workflow-numbering-1">3</div>
            </div>
            <div className="mt-6">
              <img src={closing} alt="" />
            </div>
            <div className="w-full mt-[32px] border">
              <div className="complete-diagram-subex flex gap-2 w-fit">
                <p>View complete Flow Diagram here</p>
                <img src={new2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="different-bg-subex">
        <div className="inner-container-subex py-[80px]">
          <div className="deliver-wireframes-subex">
            <h1>Deliver: Wireframes</h1>
            <br />
            <div>
              <Wireframe></Wireframe>
            </div>
          </div>
        </div>
        <div className="partition-line-subex"></div>
        <div className="inner-container-subex">
          <div className="deliver-virtual-design-subex">
            <h1>Deliver: VirtualDesign</h1>
            <br />
            <div>
              <Wireframe></Wireframe>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="inner-container-subex">
          <div className="test-subex">
            <h1>Test</h1>
            <br />
            <p>
              The preliminary testing indicates that the case management
              system's overall efficiency and user experience have improved
              significantly. Users have noted a decrease in administrative
              tasks, enhanced collaboration and communication, and more
              effective investigations. The following are some of the areas
              where the solution has had a substantial impact.
            </p>
            <br />
            <div className="test-subex-inner flex gap-2">
              <div className="w-2/3">
                <div className="flex">
                  <div className="w-1/5">
                    <img src={efficiency} alt="" />
                  </div>
                  <div>
                    <h3>Improved Efficiency</h3>
                    <br />
                    <div>
                      The streamlined workflows, automated features, and
                      collaboration tools have improved the efficiency of the
                      case management process. The system now allows users to
                      spend more time on investigative work rather than
                      administrative tasks.
                    </div>
                  </div>
                </div>
                <br />
                <div className="flex">
                  <div className="w-1/5">
                    <img src={decision} alt="" />
                  </div>
                  <div>
                    <h3>Better decision-making</h3>
                    <br />
                    <div>
                      With access to comprehensive and relevant data, users are
                      now able to make better decisions and perform more
                      effective investigations.
                    </div>
                  </div>
                </div>
                <br />
                <div className="flex">
                  <div className="w-1/5">
                    <img src={collab} alt="" />
                  </div>
                  <div>
                    <h3>Enhanced collaboration</h3>
                    <br />
                    <div>
                      The introduction of inline chat, shared workspaces, and a
                      shared repository has improved collaboration between team
                      members and departments, leading to more effective
                      teamwork.
                    </div>
                  </div>
                </div>
                <br />
                <div className="flex">
                  <div className="w-1/5">
                    <img src={report} alt="" />
                  </div>
                  <div>
                    <h3>Improved reporting</h3>
                    <br />
                    <div>
                      The inclusion of dashboard creation features and automated
                      report generation has made it easier to track performance
                      and identify areas for improvement.
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-subex-inner2 border">
                <div className="kpi-box-subex border">
                  <div>
                    KPIs that we used to monitor the success of the project
                  </div>
                  <br />
                  <ol>
                    <li>Reduction in average case resolution time.</li>
                    <li>Increase in user satisfaction ratings</li>
                    <li>
                      Decrease in the number of cases reopened due to incomplete
                      resolution
                    </li>
                    <li>
                      Increase in the number of cases resolved per
                      day/week/month
                    </li>
                    <li>Improvement in first call resolution rate</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="my-learning-subex">
            <h1>My Learning</h1>
            <br />
            <div className="flex">
              <div>icon</div>
              <div>
                To ensure success in a project of this size, it is crucial for
                the entire team to be involved throughout the process, sharing
                their research findings, discussing roadblocks, and working
                together towards achieving common goals that address both user
                needs and business objectives.
              </div>
            </div>
            <br />
            <div className="flex">
              <div>icon</div>
              <div>
                Although we are still evaluating the results based on key
                performance indicators, it is clear that our solutions have had
                a positive impact on usability and user experience.
              </div>
            </div>
            <br />
            <div className="flex">
              <div>icon</div>
              <div>
                Above all, this project provided me with the opportunity to work
                with a diverse user base in an unfamiliar industry, which has
                expanded my skills and knowledge as a designer.
              </div>
            </div>
          </div>
          <br />
          <div className="my-learning-subex">
            <h1>Future Direction</h1>
            <br />
            <div className="flex">
              <div>icon</div>
              <div>
                If I had more time, I would definitely explore the possibilities
                of the "Trigger mechanism" even further. This mechanism plays an
                important role in automatically generating a case based on
                certain triggers, and I believe there is more room for
                innovation and improvement in this area.
              </div>
            </div>
            <br />
            <div className="flex">
              <div>icon</div>
              <div>
                Additionally, I would like to add more flexibility to the system
                to accommodate cross-functional users whose goals may not be
                solely focused on case closure. By doing so, we can ensure that
                the system meets the needs of a wider range of users and can be
                used in various contexts.
              </div>
            </div>
          </div>
          <br />
          <div className="process-tools-subex">
            <h1>Process & tools</h1>
            <br />
            <div>
              <div>
                <h4>Design and Prototyping</h4>
                <div>
                  We used Sketch to create and invision to collaborate on the
                  design.
                </div>
              </div>
              <div>
                <h4>Project Tracking</h4>
                <div>
                  We used Jira to manage project tasks and track progress
                  ensuring that all project requirements were being met.
                </div>
              </div>
              <div>
                <h4>Communication(BlueJeans)</h4>
                <div>
                  We used Slack for internal communication and collaboration
                  throughout the project.
                </div>
              </div>
              <div>
                <h4>Feedback sessions (Zoom)</h4>
                <div>
                  We used Zoom for remote meetings and Feedback sessions,
                  allowing us to connect with stakeholders and users from
                  anywhere.
                </div>
              </div>
              <div>
                <h4>Ideation sessions</h4>
                <div>
                  We utilised the Google Design Sprint methodology for our
                  ideation session. We involved cross-functional teams to define
                  the problem, ideate solutions, and rapidly prototype and test
                  them.
                </div>
              </div>

              <div>
                <h4>Research</h4>
                <div>
                  we conducted a series of interviews and surveys with both RA
                  and FM.The interviews were conducted in-person and remotely,
                  and we used a semi-structured approach to allow for
                  flexibility.
                </div>
              </div>
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
    // </div>
  );
}

export default Subex;
