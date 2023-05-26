import React from "react";
import "../styles/Verizon.css";
import verizon from "../../assets/verizon/verizon.png";
import av1 from "../../assets/verizon/av1.png";
import av2 from "../../assets/verizon/av2.png";
import vzlogo from "../../assets/verizon/vzlogo.svg";
import arrowBack from "../../assets/arrowBack.svg";
import arrowFor from "../../assets/arrowFor.svg";
import check from "../../assets/pgos/check_circle.svg";
import pane from "../../assets/verizon/pane.png";
import intelligence from "../../assets/verizon/intelligence.png";
import workspace from "../../assets/verizon/workspace.png";
import guided from "../../assets/verizon/guided.png";
import lock from "../../assets/pgos/lock.svg";
import satisfy from "../../assets/verizon/satisfaction.svg";
import efficiency from "../../assets/verizon/efficiency.svg";
import reduced from "../../assets/verizon/reduced.svg";
import prediction from "../../assets/verizon/prediction.svg";
import arrow from "../../assets/pgos/Arrow.svg";
import ogarrow from "../../assets/verizon/ogArrow.svg";

function Verizon() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="verizonMainBox">
        <div className="verizonBox">
          <div className="verizonLeftBox">
            <div className="verizonContentBox">
              <div className="verizonTitleIconBox1">
                <img src={vzlogo} loading="lazy" alt="" />
              </div>
              <div className="verizonTitleIconBox2">Sales 360</div>
              <div className="verizonContent">
                <p className="firstLine">
                  Putting users first, Using research to drive product redesign.
                </p>
                <p className="secondLine">
                  How we carried out field research to create a design vision
                  for Razorpay Payment links.
                </p>
              </div>
              <div className="verizonDateBox">
                <div className="DateBoxLeft">
                  <p className="timeline">TIMELINE</p>
                  <p className="time">Dec 2019-Jan 2020</p>
                </div>
                <div className="DateBoxRight">
                  <p className="timeline">PLATFORM</p>
                  <p className="time">Web</p>
                </div>
              </div>
            </div>
            <div className="verizonTeamBox">
              <p className="teamText">TEAM</p>
              <div className="teamMemberBox">
                <div className="teamMember1">
                  <div className="memberIcon">
                    <img src={av1} alt="" />
                  </div>
                  <div className="memberDetail">
                    <p className="memberName">Pramod Bubbarjung</p>
                    <p className="memberRole">Design Manager</p>
                  </div>
                </div>
                <div className="teamMember2">
                  <div className="memberIcon">
                    <img src={av2} alt="" />
                  </div>
                  <div className="memberDetail">
                    <p className="memberName">Kshitij Srivastava</p>
                    <p className="memberRole">Sr.UX Designer </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="verizonRightBox">
            <img src={verizon} alt="" />
          </div>
        </div>
        <div className="verizonPODBox">
          <div className="PODbox1">
            <p className="podtitle1">POD 1</p>
            <p className="podtitle1">
              Global Framework & Basic Quoting Experience
            </p>
            <p className="podtitle2">5 Experience Designers</p>
            <p className="podtitle2">2 Visual Designers</p>
          </div>
          <div className="PODbox2">
            <p className="podtitle1">POD 2</p>
            <p className="podtitle1">Advance Quoting Experience</p>
            <p className="podtitle2">2 Experience Designers</p>
            <p className="podtitle2">2 Visual Designers</p>
          </div>
          <div className="PODbox3">
            <p className="podtitle1">POD 3</p>
            <p className="podtitle1">Product Walk-through Videos</p>
            <p className="podtitle2">1 Script Writter</p>
            <p className="podtitle2">2 Video Editors</p>
          </div>
        </div>
        <div className="verizonContext">
          <div className="verizonContextTitle">Context</div>
          <div className="verizonContextDetail">
            <p>
              Verizon is a multinational telecommunications company that offers
              wireless and internet services, as well as various products and
              services related to telecommunications and technology. The company
              is based in New York City and operates in over 150 countries
              worldwide
            </p>{" "}
            <br />
            <p>
              The Sales & Ordering department plays a crucial role in Verizon's
              services that has more than 9.5K users.
            </p>
          </div>
        </div>
        <div className="verizonAskBox">
          <div className="verizonContextTitle">The Ask</div>
          <div className="verizonAskBoxContent">
            <div className="verizonAskBoxContentLeft">
              <div className="askboxLeftIcon greenIcon1">
                <img src={check} alt="" />
              </div>
              <div className="askboxLeftIcon greenIcon2">
                <img src={check} alt="" />
              </div>
              <div className="askboxLeftIcon">
                <img src={check} alt="" />
              </div>
            </div>
            <div className="verizonAskBoxContentRight">
              <p>
                To achieve, a common CPQ platform (Sale 360) that can be uses
                capabilities from multiple existing applications (Sales2GO,
                VISE, ProQuest) for different use cases.
              </p>
              <br />
              <p>
                Create a more seamless and efficient user experience for the
                Sales and Ordering teams, as they will have a unified platform
                to access all relevant information and tools.
              </p>
              <br />
              <p>
                The goal of modernizing the Sales & Ordering UX, the
                modernization effort will involve updating the design and
                functionality of the CPQ (Configure, Price, Quote) platform to
                align with current industry standards and user expectations, and
                ensure it is easy to use and accessible for all users.
              </p>
            </div>
          </div>
        </div>
        <div className="verizonPrimaryBox">
          <div className="primaryBoxTitle">Primary Target Users</div>
          <div className="primaryboxContentBox">
            <div className="primaryBoxContext">
              <div className="primaryContext1">Sales Representatives</div>
              <br />
              <div className="primaryContext2">
                <ul>
                  <li>Front-line users who interact with customers</li> <br />
                  <li>Need an intuitive, streamlined interface</li> <br />
                  <li>Require tools to quickly create accurate quotes</li>{" "}
                  <br />
                  <li>Focus on providing a positive customer experience</li>
                </ul>
              </div>
            </div>
            <div className="primaryBoxContext">
              <div className="primaryContext1">Order Managers</div>
              <br />
              <div className="primaryContext2">
                <ul>
                  <li>
                    Responsible for overseeing the order management process
                  </li>
                  <br />
                  <li>
                    Need a comprehensive view of all orders and their status
                  </li>
                  <br />
                  <li>Require tools to manage orders efficiently</li> <br />
                  <li>
                    Focus on ensuring orders are processed and delivered on time
                  </li>
                </ul>
              </div>
            </div>
            <div className="primaryBoxContext">
              <div className="primaryContext1">Solution Architects</div>
              <br />
              <div className="primaryContext2">
                <ul>
                  <li>Responsible for designing complex solutions</li> <br />
                  <li>Require advanced features and functionality</li> <br />
                  <li>
                    Need the ability to create and modify product configurations
                  </li>
                  <br />
                  <li>
                    Focus on collaborating with other teams to design and
                    deliver solutions
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="verizonHr1" />
        <div className="verizonChellengesBox">
          <div className="ChellengesTitle">Key Chellenges</div>
          <div className="chellengesMainBox">
            <div className="chellengesBox1">
              <p className="chellengesTitle">Domain Knowledge</p>
              <br />
              <p className="chellengesContext">
                The design team lacked a product expert or owner, resulting in
                more time being required to acquire the necessary domain
                knowledge to create effective designs.
              </p>
            </div>
            <div className="chellengesBox1">
              <p className="chellengesTitle">Documentation</p>
              <br />
              <p className="chellengesContext">
                There was a lack of requirements documentation at the beginning
                of the project, which made it difficult to define a feature list
                or document user stories.
              </p>
            </div>
            <div className="chellengesBox1">
              <p className="chellengesTitle">Indefinite revisions</p>
              <br />
              <p className="chellengesContext">
                While design is an iterative process, there was no clear
                sign-off or approval process in place. This led to indefinite
                revisions and made it difficult to move forward with the
                project.
              </p>
            </div>
            <div className="chellengesBox2">
              <p className="chellengesTitle">Access restrictions</p>
              <br />
              <p className="chellengesContext">
                Access to test environment tools were provided without a
                walkthrough or demo, and only video recordings were made
                available. This made it difficult for the design team to fully
                understand the capabilities of the tools and how to best utilize
                them.
              </p>
            </div>
            <div className="chellengesBox2">
              <p className="chellengesTitle">End-user engagement</p>
              <br />
              <p className="chellengesContext">
                There was little to no interaction with end-users throughout the
                project. The design team did not participate in any interviews
                or workshops with end-users, and pain points were only shared
                later in the process.
              </p>
            </div>
            <div className="chellengesBox2">
              <p className="chellengesTitle">Technical constraints</p>
              <br />
              <p className="chellengesContext">
                The design team faced technical constraints related to the
                limitations of the toolset and platform. This made it difficult
                to create designs that fully met the needs of the end-users and
                were aligned with the product vision.
              </p>
            </div>
          </div>
        </div>
        <hr className="verizonHr2" />
        <hr className="verizonHr3" />
      </div>
      <div className="verizonResearchMainBox">
        <div className="researchContextBox">
          <div className="ResearchTitle">Research</div>
          <br />
          <div className="researchContext">
            The research process began with analyzing and synthesizing the
            primary research insights provided by Verizon key stakeholders from
            business and technology teams. This involved reviewing the current
            experience study, data collected through interviews, and group
            discussions to identify user needs, pain points, and preferences, as
            well as business goals and constraints.
          </div>
        </div>
        <div className="researchExperienceBox">
          <div className="researchExprienceTitle">Current Experience Study</div>
          <div className="researchContentMainBox">
            <div className="researchContentBox">
              <div className="researchContentBoxIcon">
                <p className="centerTitle">PQ</p>
              </div>
              <div className="researchContentBoxText">
                <div className="ContentBoxTextTitle">PROQUEST</div>
                <div className="ContentBoxTextContext">
                  PQ is Verizon’s CPQ mothership, it is a legacy product built
                  to take care of moderate to extremely complex quotes for large
                  enterprises.
                </div>
              </div>
            </div>
            <div className="researchContentBox">
              <div className="researchContentBoxIcon">
                <p className="centerTitle">S2G</p>
              </div>
              <div className="researchContentBoxText">
                <div className="ContentBoxTextTitle">SALES2GO</div>
                <div className="ContentBoxTextContext">
                  PQ is Verizon’s CPQ mothership, it is a legacy product built
                  to take care of moderate to extremely complex quotes for large
                  enterprises.
                </div>
              </div>
            </div>
            <div className="researchContentBox">
              <div className="researchContentBoxIcon">
                <p className="centerTitle">VISE</p>
              </div>
              <div className="researchContentBoxText">
                <div className="ContentBoxTextTitle">VISE</div>
                <div className="ContentBoxTextContext">
                  ViSE is primarily used by sales architects to build complex
                  solutions (Products that have complex configurations) which
                  later are imported to PQ for quoting process.
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="verizonHr4" />
        <div className="verizonSerchMainBox">
          <div className="verizonSerchMainBoxTitle">Primary Search</div>
          <div className="verizonSerchMainBoxContextBox">
            <div className="verizonSerchMainBoxContent">
              <p className="searchBoxtitle">User Needs</p>
              <br />
              <p className="searchBoxcontent">
                The new CPQ platform must address the diverse user needs of
                Sales Representatives, Order Managers, and Solution Architects
                by providing an intuitive, streamlined user experience that
                consolidates the functionality of Verizon's existing CPQ
                products.
              </p>
            </div>
            <div className="verizonSerchMainBoxContent">
              <p className="searchBoxtitle">Business Goals</p>
              <br />
              <p className="searchBoxcontent">
                Design a unified CPQ platform that consolidates Proquest,
                Sales2Go, and ViSE into a seamless user experience, aiming to
                reduce quote generation times and increase sales revenue by 20%
                within the next year.
              </p>
            </div>
            <div className="verizonSerchMainBoxContent">
              <p className="searchBoxtitle">Usability</p>
              <br />
              <p className="searchBoxcontent">
                Usability testing with Order Managers reveals that the current
                Proquest platform is difficult to navigate, and they often
                struggle to find the information they need to complete orders on
                time, leading to delays and customer dissatisfaction.
              </p>
            </div>
            <div className="verizonSerchMainBoxContent">
              <p className="searchBoxtitle">Technical Requirements</p>
              <br />
              <p className="searchBoxcontent">
                Analysis of existing systems reveals that the new CPQ platform
                must be compatible with Verizon's existing CRM system to ensure
                that customer data is easily accessible and up-to-date.
              </p>
            </div>
          </div>
        </div>
        <hr className="verizonHr4" />
        <div className="ResearchMainBox">
          <div className="ResearchMainBoxTitle">Secondary Research</div>
          <div className="ResearchMainBoxTitleTablebox">
            <table>
              <tr>
                <th>Feature</th>
                <th>Salesforce CPQ</th>
                <th>Oracle CPQ</th>
                <th>Zoho CRM</th>
              </tr>
              <tr>
                <td>Pricing</td>
                <td>High Cost</td>
                <td>High Cost</td>
                <td>Affordable</td>
              </tr>
              <tr>
                <td>Customization</td>
                <td>Extensive</td>
                <td>Advanced</td>
                <td>Limited</td>
              </tr>
              <tr>
                <td>Intergration</td>
                <td>Seamless</td>
                <td>Seamless</td>
                <td>Integration with Zoho</td>
              </tr>
              <tr>
                <td>User Interface</td>
                <td>Complex</td>
                <td>Complex</td>
                <td>Simple and user-friendly</td>
              </tr>
              <tr>
                <td>Automation</td>
                <td>Advanced</td>
                <td>Al-powered</td>
                <td>Powerful</td>
              </tr>
              <tr>
                <td>User Base</td>
                <td>Large</td>
                <td>Large</td>
                <td>Growing</td>
              </tr>
              <tr>
                <td>Target Customers</td>
                <td>Mid-size to large</td>
                <td>Mid-size to large</td>
                <td>Small to mid-sized</td>
              </tr>
              <tr>
                <td>Collabration Feature</td>
                <td>Folder sharing,Attachments, Schedules,Review Process</td>
                <td>File sharing,Commenting, Scheduling,Review Process</td>
                <td>Document sharing,Chat, Scheduling,Review Process</td>
              </tr>
              <tr>
                <td>Reporting Feature</td>
                <td>Customisable Dashboards, Reports,Real-time Metrics</td>
                <td>Analytics,Customizable, Reports,Real-time Metrics</td>
                <td>Customisable Dashboards, Reports,Real-time Metrics</td>
              </tr>
              <tr>
                <td>3rd Party Integration</td>
                <td>Extensive</td>
                <td>Extensive</td>
                <td>Limited</td>
              </tr>
              <tr>
                <td>Example Of Integrations</td>
                <td>Slack,Jira,Salesforce CRM</td>
                <td>NetSuite,SAP,Salesforce CRM</td>
                <td>G Suite,Office 365,Shopify</td>
              </tr>
            </table>
          </div>
          <div className="verizonkeyBox">
            <div className="keyBoxTitle">Key takeaways</div>
            <br />
            <div className="keyBoxContent">
              <ul>
                <li>
                  Salesforce and Oracle CPQ platforms offer extensive cross-team
                  collaboration features, such as file sharing, scheduling, and
                  review processes.
                </li>
                <li>
                  All three platforms offer customisable reporting features,
                  including dashboards and real-time metrics.
                </li>
                <li>
                  Salesforce and Oracle have extensive 3rd party integration
                  capabilities, while Zoho CRM's integration options may be more
                  limited.
                </li>
                <li>
                  Examples of 3rd party integrations vary among the platforms,
                  with Salesforce offering the most options, including Slack and
                  Jira, and Zoho CRM integrating with G Suite and Office 365.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="verizonKeyInsightsMainBox">
        <div className="KeyInsightsTitle">Key Insights</div>
        <div className="KeyInsightsTitleDetails">
          The research process began with analyzing and synthesizing the primary
          research insights provided by Verizon key stakeholders from business
          and technology teams. This involved reviewing the current experience
          study, data collected through interviews, and group discussions to
          identify user needs, pain points, and preferences, as well as business
          goals and constraints.
        </div>
        <div className="KeyInsightsContentBox">
          <table>
            <tr>
              <td className="keytablepadding">
                <p className="tableTitle">ADAPTIVE</p>
                <p className="tableTitle textColor">
                  Product for everyone's need
                </p>
                <p className="tableContent">
                  Every user needs is different,and the product should be
                  capable enough to adapt.
                </p>
              </td>
              <td className="keytablepadding">
                <p className="tableTitle">MULTI-DISCIPLINARY</p>
                <p className="tableTitle textColor">
                  Product for all dimensions
                </p>
                <p className="tableContent">
                  A product should be able to cater for all end-to-end user
                  requirements.
                </p>
              </td>
              <td className="keytablepadding">
                <p className="tableTitle">ACCESSIBLE</p>
                <p className="tableTitle textColor">
                  Product for every yseruser
                </p>
                <p className="tableContent">
                  A product should be able to handhold users when needed.
                </p>
              </td>
            </tr>
            <tr>
              <td className="keytablepadding">
                <p className="tableTitle">COLLABORATIVE</p>
                <p className="tableTitle textColor">
                  Product for solving together
                </p>
                <p className="tableContent">
                  A product should be able to bring different personas on a
                  single platform to complete tasks together.
                </p>
              </td>
              <td className="keytablepadding">
                <p className="tableTitle">SECURE</p>
                <p className="tableTitle textColor">
                  Product build with security
                </p>
                <p className="tableContent">
                  A product should prioritize data privancy and security for
                  both users and the company.
                </p>
              </td>
              <td className="keytablepadding">
                <p className="tableTitle">MOBILE</p>
                <p className="tableTitle textColor">
                  Product with mobility to increase usability
                </p>
                <p className="tableContent">
                  A mobile product solution to support field sales reps.
                </p>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div className="verizonExperienceBusinessMainBox">
        <div className="ExperienceBusinessTitleBox">
          <p className="ExperienceBusinessTitle">
            Experience Principles Mapped to Business Pillars
          </p>
          <p className="ExperienceBusinessTitle1">
            After conducting extensive research and gathering insights from
            stakeholders and users, we transitioned to defining experience
            principles that mapped to the business pillars of the project. We
            used these principles to guide the design of Verizon 360 and ensure
            that the product met the needs of both users and the business. The
            four principles we identified were:
          </p>
        </div>
        <div className="ExperienceBusinessTitlecontent">
          <div className="ExperienceBusinessTitlecontentLeft">
            <img src={pane} loading="lazy" alt="" />
          </div>
          <div className="ExperienceBusinessTitlecontentRight">
            <div className="ExperienceBusinessTitlecontentRightTitle">
              Single Pane UX
            </div>
            <div className="ExperienceBusinessTitlecontentRightContent">
              <ul>
                <li>
                  Single Pane UX provides a unified and consistent interface for
                  users, simplifying the user experience and allowing for a
                  360-degree view of the customer's account
                </li>{" "}
                <br />
                <li>
                  It enables better collaboration among departments and faster
                  access to information, leading to more informed decision
                </li>{" "}
                <br />
                <li>
                  It reduces the learning curve, minimises training
                  requirements, and improves personal productivity and job
                  satisfaction.
                </li>{" "}
                <br />
                <li>
                  This feature is critical in modern CPQ platforms to deliver
                  exceptional customer experience and service.
                </li>
              </ul>
            </div>
          </div>
          <div className="ExperienceBusinessTitlecontentNumber">1</div>
        </div>
        <div className="ExperienceBusinessTitlecontent">
          <div className="ExperienceBusinessTitlecontentNumbereven">2</div>
          <div className="ExperienceBusinessTitlecontentLeft2">
            <div className="ExperienceBusinessTitlecontentRightTitle">
              Shared Workspace
            </div>
            <div className="ExperienceBusinessTitlecontentRightContent">
              <ul>
                <li>
                  Teamwork ensures success at scale. Effectively delivering an
                  omni-channel, collaborative and shared workspace brings
                  together sales, sales support, solution architects and order
                  managers to collectively accomplish business goals with
                  efficiency and speed
                </li>{" "}
                <br />
                <li>
                  It improves efficiency and speed in achieving business goals
                </li>{" "}
                <br />
                <li>
                  Sales, sales support, solution architects, and order managers
                  can work together in a unified environment. facilitating
                  effective communication and knowledge sharing among team
                  members
                </li>{" "}
                <br />
                <li>
                  A modern CPQ platform must have shared workspace functionality
                  to ensure successful teamwork and achieve business objectives.
                </li>
              </ul>
            </div>
          </div>
          <div className="ExperienceBusinessTitlecontentRight2">
            <img src={workspace} loading="lazy" alt="" />
          </div>
        </div>
        <div className="ExperienceBusinessTitlecontent">
          <div className="ExperienceBusinessTitlecontentLeft">
            <img src={intelligence} loading="lazy" alt="" />
          </div>
          <div className="ExperienceBusinessTitlecontentRight">
            <div className="ExperienceBusinessTitlecontentRightTitle">
              Delightful Intelligence
            </div>
            <div className="ExperienceBusinessTitlecontentRightContent">
              <ul>
                <li>
                  Delightful Intelligence is the integration of advanced
                  analytics and machine learning capabilities into a CPQ
                  platform
                </li>{" "}
                <br />
                <li>
                  It would enables the user to make data-driven decisions like
                  customised recommendations by identifing the best products,
                  pricing, and promotions for each customer based on real-time
                  insights and predictive analytics
                </li>{" "}
                <br />
                <li>
                  It would empowers sales teams in cross-selling and upselling
                  opportunities by recommending complementary products and
                  services to customers
                </li>{" "}
                <br />
                <li>
                  It is a critical feature for modern CPQ platforms and is
                  essential for businesses to remain competitive and agile in
                  today's rapidly changing market.
                </li>
              </ul>
            </div>
          </div>
          <div className="ExperienceBusinessTitlecontentNumber">3</div>
        </div>
        <div className="ExperienceBusinessTitlecontent">
          <div className="ExperienceBusinessTitlecontentNumbereven">4</div>
          <div className="ExperienceBusinessTitlecontentLeft2">
            <div className="ExperienceBusinessTitlecontentRightTitle">
              Guided Experiences
            </div>
            <div className="ExperienceBusinessTitlecontentRightContent">
              <ul>
                <li>
                  Guided Experience will provide step-by-step assistance for
                  users to complete tasks with ease and confidence, resulting in
                  increased productivity and satisfaction levels
                </li>{" "}
                <br />
                <li>
                  It would also eliminates the need for extensive training and
                  reduces the likelihood of errors and frustration.
                </li>{" "}
                <br />
                <li>
                  Contextual help will be provided the users at the point of
                  need, reducing the time and effort required to complete tasks
                </li>{" "}
                <br />
                <li>
                  Guided Experience is critical to delivering a positive
                  Employee Experience (EX) and is an essential feature of modern
                  CPQ platforms.
                </li>
              </ul>
            </div>
          </div>
          <div className="ExperienceBusinessTitlecontentRight2">
            <img src={guided} loading="lazy" alt="" />
          </div>
        </div>
      </div>
      <div className="bg-lock-pgos">
        <div className="verizonDesignSolutionMainBox">
          <div className="verizonDesignSolutionContentBox">
            <div className="verizonDesignSolutionContentIcon">
              <img src={lock} alt="" />
            </div>
            <div className="verizonDesignSolutionContentTitle">
              Design Solution
            </div>
            <div className="verizonDesignSolutionContentTitleContent">
              <p>
                As much as I would love to showcase the actual design work that
                was done for VZ360, unfortunately, I am bound by a
                non-disclosure agreement (NDA) with Verizon.
              </p>{" "}
              <br />
              <p>
                While I cannot share the specifics of the design, I can discuss
                the comparative analysis that was done to identify areas of
                improvement in the existing design and the proposed design
                changes that were made to address those issues.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="verizonComparativeMainBox">
        <div className="ComparativeTitleBox">Comparative Analysis</div>
        <div className="ComparativeTableMainBox">
          <table>
            <tr>
              <th>Feature</th>
              <th>Existing Design</th>
              <th>Proposed Design</th>
            </tr>
            <tr>
              <td>User Experience</td>
              <td>
                Complex and disjointed, requires switching between multiple
                applications
              </td>
              <td>
                Uniform and personalized, with a global navigation and smart
                search for enhanced discoverability. Includes a new design
                language with reduced cognitive load and guided experience that
                simplifies the learning curve.
              </td>
            </tr>
            <tr>
              <td>Quote Creation Process</td>
              <td>Complex and multi-step</td>
              <td>
                Simple 3-step quote creation process that loops back for
                refinement and collaboration.
              </td>
            </tr>
            <tr>
              <td>Navigation</td>
              <td>Confusing and non-intuitive</td>
              <td>
                Global navigation with context-sensitive menus, providing easy
                access to relevant tools and Information.
              </td>
            </tr>
            <tr>
              <td>Collaboration</td>
              <td>Manual collaboration over emails and third-party apps</td>
              <td>
                In-app collaboration tools for team members to work together
                seamlessly.
              </td>
            </tr>
            <tr>
              <td>Alerts and Notifications</td>
              <td>Missed prompts and actionable alerts</td>
              <td>
                Unified alerts and notifications center, making it easier for
                users to stay on top of tasks and prioritize their work.
              </td>
            </tr>
            <tr>
              <td>Design Language</td>
              <td>Cluttered and information overload</td>
              <td>
                A new design language with reduced cognitive load that enhances
                the user experience.
              </td>
            </tr>
            <tr>
              <td>Guided Experience</td>
              <td>N/A</td>
              <td>
                Guided experience that simplifies the learning curve for new
                users and improves productivity and satisfaction levels for
                Employee Experience
              </td>
            </tr>
            <tr>
              <td>Mobile Optimisation</td>
              <td></td>
              <td>
                Mobile-optimized solution that supports field sales reps, making
                it easier for them to access the tools and information they need
                while on the go
              </td>
            </tr>
            <tr>
              <td>Cross-team Collaboration</td>
              <td>N/A</td>
              <td>
                Integrated collaboration tools that allow teams to work together
                seamlessly, improving communication and efficiency.
              </td>
            </tr>
            <tr>
              <td>Reporting</td>
              <td>N/A</td>
              <td>
                Daily, weekly, and monthly reporting features that provide users
                with real-time insights into their performance and help them
                make data- driven decisions
              </td>
            </tr>
            <tr>
              <td>Third-party Integrations</td>
              <td>N/A</td>
              <td>
                Extensive third-party integrations with popular tools and
                platforms such as Salesforce, Oracle, and Zoho.
              </td>
            </tr>
            <tr>
              <td>Security and Compliance</td>
              <td>Limited security</td>
              <td>
                Robust security and compliance features, including data
                encryption, access controls, and compliance with industry
                standards and regulations such as GDPR and CCPA.
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div className="verizonMyImpactMainBox">
        <div className="myImpactTitle">My Impact</div>
        <div className="myImpactTitleContent">
          I have made significant contributions to enhance the user experience
          and improve overall performance on the VZ360 project. To measure the
          success of the project, We have identified key UX KPIs and made
          predictions on how they will be impacted.
        </div>
        <div className="myImpactContentBox">
          <div className="myImpactContentleft">
            <div className="myImpactContentleftIcon">
              <img src={satisfy} alt="" />
            </div>
            <div className="myImpactContentleftIcon">
              <img src={efficiency} alt="" />
            </div>
            <div className="myImpactContentleftIcon">
              <img src={reduced} alt="" />
            </div>
          </div>
          <div className="myImpactContentRight">
            <p className="myImpactContentTitle">Improved user satisfaction</p>
            <p className="myImpactContentContext">
              Through the implementation of a guided experience and a single
              pane UX design, user satisfaction has increased by 20% according
              to initial feedback.
            </p>
            <p className="myImpactContentContext">
              KPI: User satisfaction score (measured through surveys or feedback
              forms)
            </p>
            <br />
            <p className="myImpactContentTitle">Increased efficiency</p>
            <p className="myImpactContentContext">
              The shared workspace feature has improved collaboration between
              different departments resulting in faster decision-making, saving
              30 minutes per task on average.
            </p>
            <p className="myImpactContentContext">KPI: Task completion time</p>
            <br />
            <p className="myImpactContentTitle">
              Reduced errors and frustrations
            </p>
            <p className="myImpactContentContext">
              The delightful intelligence feature has reduced errors by 25% and
              decreased frustration levels, leading to a 15% decrease in user
              errors.
            </p>
            <p className="myImpactContentContext">
              KPI: Error rates and user error rates
            </p>
          </div>
        </div>
        <div className="verizonPredictionMainBox">
          <div className="verizonPredictionTitle">Predictions</div>
          <div className="verizonPredictionContentBox">
            <div className="verizonPredictionLeft">
              <div className="verizonPredictionIcon">
                <img src={prediction} alt="" />
              </div>
              <div className="verizonPredictionIcon">
                <img src={prediction} alt="" />
              </div>
              <div className="verizonPredictionIcon">
                <img src={prediction} alt="" />
              </div>
            </div>
            <div className="verizonPredictionRight">
              <p className="myImpactContentTitle">
                The implementation of a uniform and personalized experience will
                lead to a 15% increase in user engagement.
              </p>
              <p className="myImpactContentContext">
                KPI: User engagement metrics (such as time spent on the
                platform, number of sessions, etc.)
              </p>
              <br />
              <p className="myImpactContentTitle">
                The inclusion of in-app collaboration tools will lead to a 25%
                increase in the number of completed tasks and a 10% reduction in
                task completion time.
              </p>
              <p className="myImpactContentContext">
                KPI: Task completion rates and task completion time
              </p>
              <br />
              <p className="myImpactContentTitle">
                The implementation of a 3-step simple quote creation flow will
                result in a 20% reduction in user errors and a 10% increase in
                task completion rates
              </p>
              <p className="myImpactContentContext">
                KPI: User error rates and task completion rates
              </p>
              <br />
              <p className="myImpactContentContext">
                These predictions are based on initial feedback from
                stakeholders and users, as well as an analysis of current UX
                KPIs. We believe that these improvements will have a significant
                impact on the success of the VZ 360 project and the overall
                satisfaction of its users.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="verizonLearningBox1">
        <div className="verizonLearningBox1Title">
          My Learnings & Conclusions
        </div>
        <div className="verizonLearningBox1ContentBox">
          <div className="verizonLearningBox1Left">
            <div className="verizonLearningIcon">
              <img src={arrow} alt="" />
            </div>
            <div className="verizonLearningIcon">
              <img src={arrow} alt="" />
            </div>
          </div>
          <div className="verizonLearningBox1Right">
            <p>
              Throughout this project, I gained a deeper understanding of how
              CPQ works and the intricacies of the quoting and ordering process.
              I learned the importance of understanding and catering to the
              needs of various stakeholders, including sales reps, solution
              architects, and order managers.
            </p>{" "}
            <br />{" "}
            <p>
              This project has helped me improve my problem-solving skills and
              ability to work in a fast-paced environment with constantly
              changing requirements. It also taught me the value of
              collaboration and communication to ensure that everyone is on the
              same page and working towards a common goal. This experience has
              been invaluable to me in terms of professional growth and
              development.
            </p>
          </div>
        </div>
      </div>
      <div className="verizonLearningBox2">
        <div className="verizonLearningBox1Title">If I had more time</div>
        <div className="verizonLearningBox2ContentBox">
          <div className="verizonLearningBox2Left">
            <div className="verizonLearningBox2Icon">
              <img src={ogarrow} alt="" />
            </div>
            <div className="verizonLearningBox2Icon2">
              <img src={ogarrow} alt="" />
            </div>
          </div>
          <div className="verizonLearningBox2Right">
            <p className="textColorWhite">
              If I had more time, there are a few areas where I would like to
              focus on further improving the project. These include:
            </p>
            <br />
            <p>
              Implementing additional features: While we were able to implement
              several key features during the project, there are still some
              additional features that would be valuable to users. With more
              time, I would like to explore the possibility of implementing
              these features and continuing to iterate on the overall design.
            </p>
            <br />
            <p>
              Conducting additional testing: While we conducted extensive
              feedback sessions throughout the project, there is always room for
              improvement when tested with actual users. With more time, I would
              like to conduct testing to ensure that the UX is as streamlined
              and user-friendly as possible.
            </p>
          </div>
        </div>
      </div>
      <div className="verizonLearningBox3">
        <div className="verizonLearningBox3Title">Process & tools</div>
        <div className="verizonLearningBox3ContentBox">
          <table>
            <tr>
              <td>
                <div>
                  <h4>Design & Prototyping</h4>
                  <p>
                    We used Sketch for designing; InVision for prototyping, and
                    to collaborate with client team
                  </p>
                </div>
              </td>
              <td>
                <div>
                  <h4>Project Tracking</h4>
                  <p>We used JIRA to track daily work progress across PODs</p>
                </div>
              </td>
              <td>
                <div>
                  <h4>Estimates & planning</h4>
                  <p>
                    We used spreadsheets & docs for documenting, writing UT
                    plan, work plan & estimations
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  <h4>Communication (BlueJeans)</h4>
                  <p>
                    We set up daily cadence with our client design team in
                    India, and thrice a week with our stakeholders in Europe and
                    US.
                  </p>
                </div>
              </td>
              <td>
                <div>
                  <h4>Stakeholder reviews</h4>
                  <p>
                    With Biz & Tech partners we created flows to capture
                    functionality, behavior, interaction details, and decisions
                  </p>
                </div>
              </td>
              <td></td>
            </tr>
          </table>
        </div>
      </div>
      <div className="verizonLearningBox4">
        <div className="verizonLearningBox4Content">
          <div className="verizonPreviousIcon">
            <img src={arrowBack} alt="" />
          </div>
          <div className="verizonPreviousText">Previous Case studies</div>
        </div>
        <div className="verizonLearningBox4Content">
          <div className="verizonNextText">Next Case studies</div>
          <div className="verizonNextIcon">
            <img src={arrowFor} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Verizon;
