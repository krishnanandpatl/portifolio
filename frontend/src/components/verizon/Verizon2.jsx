import React from "react";
import { useNavigate } from "react-router-dom";
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

function Verizon2() {
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
    <div className="toppest-vz">
      <div className="subex-container">
        <div className="vz-big-img2">
          <img src={verizon} alt="" />
        </div>
        <div className="vz-topbox">
          <div>
            <div>
              <div>
                <img src={vzlogo} alt="" />
              </div>
              <h1>Sales 360</h1>
              <h2>
                Putting users first, Using research to drive product redesign
              </h2>
              <p>
                How we carried out field research to create a design vision for
                Razorpay Payment links.
              </p>
              <div className="vz-timeline">
                <div>
                  <p>Timeline</p>
                  <p>Dec 2019 - Jan 2020</p>
                </div>
                <div>
                  <p>Platform</p>
                  <p>Web</p>
                </div>
              </div>
            </div>
            <div className="vz-big-img">
              <img src={verizon} alt="" />
            </div>
          </div>
          <div>
            <div className="team-vz">
              <p>Team</p>
              <div>
                <div>
                  <img src={av1} alt="" />
                  <div className="team-dtls-vz">
                    <p>Pramod Bubbarjung</p>
                    <p>Design Manager</p>
                  </div>
                </div>
                <div>
                  <img src={av2} alt="" />
                  <div className="team-dtls-vz">
                    <p>Kshitij Srivastava Srivastava</p>
                    <p>Sr. UX Designer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pod-vz">
              <div>
                <h5>POD 1</h5>
                <div>Global Framework & Basic Quoting Experience</div>
                <p>5 Experience Designers</p>
                <p>2 Visual Designers</p>
              </div>
              <div>
                <h5>POD 2</h5>
                <div>Advance Quoting Experience</div>
                <p>2 Experience Designers</p>
                <p>2 Visual Designers</p>
              </div>
              <div>
                <h5>POD 3</h5>
                <div>Product Walk-through Videos</div>
                <p>1 Script Writer</p>
                <p>2 Video Editors</p>
              </div>
            </div>
          </div>
        </div>
        <div className="inner-container-subex">
          <div className="context-pgos context-vz mt-[40px]">
            <h1>Context</h1>
            <br />
            <p>
              Verizon is a multinational telecommunications company that offers
              wireless and internet services, as well as various products and
              services related to telecommunications and technology. The company
              is based in New York City and operates in over 150 countries
              worldwide.
            </p>
            <br />
            <p>
              The Sales & Ordering department plays a crucial role in Verizon's
              services that has more than 9.5K users.
            </p>
          </div>

          <div className="ask-vz mt-[40px]">
            <h1>The Ask</h1>
            <br />
            <div>
              <div>
                <img src={check} alt="" />
              </div>
              To achieve, a common CPQ platform (Sale 360) that can be uses
              capabilities from multiple existing applications (Sales2GO, VISE,
              ProQuest) for different use cases.
            </div>
            <br />
            <div>
              <div>
                <img src={check} alt="" />
              </div>
              Create a more seamless and efficient user experience for the Sales
              and Ordering teams, as they will have a unified platform to access
              all relevant information and tools.
            </div>
            <br />
            <div>
              <div>
                <img src={check} alt="" />
              </div>
              The goal of modernizing the Sales & Ordering UX, the modernization
              effort will involve updating the design and functionality of the
              CPQ (Configure, Price, Quote) platform to align with current
              industry standards and user expectations, and ensure it is easy to
              use and accessible for all users.
            </div>
          </div>

          <div className="target-vz">
            <h1>Primary Target Users</h1>
            <div>
              <div>
                <h5>Sales Representatives</h5>
                <ul>
                  <li>Front-line users who interact with customers</li>
                  <li>Need an intuitive, streamlined interface</li>
                  <li>Require tools to quickly create accurate quotes</li>
                  <li>Focus on providing a positive customer experience</li>
                </ul>
              </div>
              <div>
                <h5>Order Managers</h5>
                <ul>
                  <li>
                    Responsible for overseeing the order management process
                  </li>
                  <li>
                    Need a comprehensive view of all orders and their status
                  </li>
                  <li>Require tools to manage orders efficiently</li>
                  <li>
                    Focus on ensuring orders are processed and delivered on time
                  </li>
                </ul>
              </div>
              <div>
                <h5>Solution Architects</h5>
                <ul>
                  <li>Responsible for designing complex solutions</li>
                  <li>Require advanced features and functionality</li>
                  <li>
                    Need the ability to create and modify product configurations
                  </li>
                  <li>
                    Focus on collaborating with other teams to design and
                    deliver solutions
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="partition-line-sbsa my-[80px]"></div>
      <div>
        <div className="inner-container-subex">
          <div className="key-challenge-vz">
            <h1>Key Challenge</h1>
            <div>
              <div>
                <h5>Domain Knowledge</h5>
                <p>
                  The design team lacked a product expert or owner, resulting in
                  more time being required to acquire the necessary domain
                  knowledge to create effective designs.
                </p>
              </div>
              <div>
                <h5>Documentation</h5>
                <p>
                  There was a lack of requirements documentation at the
                  beginning of the project, which made it difficult to define a
                  feature list or document user stories.
                </p>
              </div>
              <div>
                <h5>Indefinite revisions</h5>
                <p>
                  While design is an iterative process, there was no clear
                  sign-off or approval process in place. This led to indefinite
                  revisions and made it difficult to move forward with the
                  project.
                </p>
              </div>
              <div>
                <h5>Access restrictions</h5>
                <p>
                  Access to test environment tools were provided without a
                  walkthrough or demo, and only video recordings were made
                  available. This made it difficult for the design team to fully
                  understand the capabilities of the tools and how to best
                  utilize them.
                </p>
              </div>
              <div>
                <h5>End-user engagement</h5>
                <p>
                  There was little to no interaction with end-users throughout
                  the project. The design team did not participate in any
                  interviews or workshops with end-users, and pain points were
                  only shared later in the process.
                </p>
              </div>
              <div>
                <h5>Technical constraints</h5>
                <p>
                  The design team faced technical constraints related to the
                  limitations of the toolset and platform. This made it
                  difficult to create designs that fully met the needs of the
                  end-users and were aligned with the product vision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="partition-line-sbsa my-[80px]"></div>
      <div>
        <div className="inner-container-subex">
          <div className="research-vz">
            <h1>Research</h1>
            <p>
              The research process began with analyzing and synthesizing the
              primary research insights provided by Verizon key stakeholders
              from business and technology teams. This involved reviewing the
              current experience study, data collected through interviews, and
              group discussions to identify user needs, pain points, and
              preferences, as well as business goals and constraints.
            </p>
            <div className="current-exp-vz">
              <h4>Current Experience Study</h4>
              <div className="mt-10">
                <div>
                  <div>
                    <p>PQ</p>
                  </div>
                  <h4>PROQUEST</h4>
                  <p>
                    PQ is Verizon’s CPQ mothership, it is a legacy product built
                    to take care of moderate to extremely complex quotes for
                    large enterprises.
                  </p>
                </div>
                <div>
                  <div>
                    <p>S2G</p>
                  </div>
                  <h4>SALES2GO</h4>
                  <p>
                    PQ is Verizon’s CPQ mothership, it is a legacy product built
                    to take care of moderate to extremely complex quotes for
                    large enterprises.
                  </p>
                </div>
                <div>
                  <div>
                    <p>ViSE</p>
                  </div>
                  <h4>VISE</h4>
                  <p>
                    ViSE is primarily used by sales architects to build complex
                    solutions (Products that have complex configurations) which
                    later are imported to PQ for quoting process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="partition-line-sbsa my-[80px] block md:hidden"></div>
      <div>
        <div className="inner-container-subex">
          <div className="key-challenge-vz pri-search-vz">
            <h1>Primary Search</h1>
            <div>
              <div>
                <h5>User Needs</h5>
                <p>
                  The new CPQ platform must address the diverse user needs of
                  Sales Representatives, Order Managers, and Solution Architects
                  by providing an intuitive, streamlined user experience that
                  consolidates the functionality of Verizon's existing CPQ
                  products.
                </p>
              </div>
              <div>
                <h5>Business Goals</h5>
                <p>
                  Design a unified CPQ platform that consolidates Proquest,
                  Sales2Go, and ViSE into a seamless user experience, aiming to
                  reduce quote generation times and increase sales revenue by
                  20% within the next year.
                </p>
              </div>
              <div>
                <h5>Usability</h5>
                <p>
                  Usability testing with Order Managers reveals that the current
                  Proquest platform is difficult to navigate, and they often
                  struggle to find the information they need to complete orders
                  on time, leading to delays and customer dissatisfaction.
                </p>
              </div>
              <div>
                <h5>Technical Requirements</h5>
                <p>
                  Analysis of existing systems reveals that the new CPQ platform
                  must be compatible with Verizon's existing CRM system to
                  ensure that customer data is easily accessible and up-to-date.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="partition-line-sbsa my-[80px]"></div>
      <div>
        <div className="inner-container-subex">
          <div className="research-vz">
            <h1>Secondary Research</h1>
            <div className="ResearchMainBoxTitleTablebox">
              <table>
                <tr className="bg-table-vz">
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
            <div className="key-takeways-vz mt-10">
              <h4>Key takeaways</h4>
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
      <div className="diff-bg-vz">
        <div className="inner-container-subex py-[64px]">
          <div className="research-vz">
            <h1>Key Insights</h1>
            <p>
              The research process began with analyzing and synthesizing the
              primary research insights provided by Verizon key stakeholders
              from business and technology teams. This involved reviewing the
              current experience study, data collected through interviews, and
              group discussions to identify user needs, pain points, and
              preferences, as well as business goals and constraints.
            </p>
            <div className="mt-[48px] key-insight-table">
              <table>
                <tr>
                  <td>
                    <div>
                      <h3>ADAPTIVE</h3>
                      <h4>Product for everyone’s need</h4>
                      <p>
                        Every user needs is different, and the products should
                        be capable enough to adapt it to their needs
                      </p>
                    </div>
                  </td>
                  <td>
                    <div>
                      <h3>MULTI-DISCIPLINARY</h3>
                      <h4>Product for all dimensions</h4>
                      <p>
                        A product should be able to cater for all end-to-end
                        user requirements
                      </p>
                    </div>
                  </td>
                  <td>
                    <div>
                      <h3>ACCESSIBLE</h3>
                      <h4>Product for every user</h4>
                      <p>
                        A product should be able to handhold users when needed
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>
                      <h3>COLLABORATIVE</h3>
                      <h4>Product for solving together</h4>
                      <p>
                        A product should be able to bring different personas on
                        a single platform to complete tasks together
                      </p>
                    </div>
                  </td>
                  <td>
                    <div>
                      <h3>SECURE</h3>
                      <h4>Product build with security</h4>
                      <p>
                        The product should prioritize data privacy and security
                        for both users and the company.
                      </p>
                    </div>
                  </td>
                  <td>
                    <div>
                      <h3>MOBILE</h3>
                      <h4>Product with mobility to increase usability</h4>
                      <p>
                        A mobile product solution to support field sales reps.
                      </p>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="inner-container-subex py-[60px]">
          <div className="priciples-vz">
            <h1>Experience Principles Mapped to Business Pillars</h1>
            <p className="mt-8">
              After conducting extensive research and gathering insights from
              stakeholders and users, we transitioned to defining experience
              principles that mapped to the business pillars of the project. We
              used these principles to guide the design of Verizon 360 and
              ensure that the product met the needs of both users and the
              business.
            </p>
            <strong>The four principles we identified were:</strong>
            <div>
              <div>
                <div>
                  <img src={pane} alt="" />
                </div>
                <div className="my-auto">
                  <h2>Single Pane UX</h2>
                  <ul>
                    <li>
                      Single Pane UX provides a unified and consistent interface
                      for users, simplifying the user experience and allowing
                      for a 360-degree view of the customer's account.
                    </li>
                    <li>
                      It enables better collaboration among departments and
                      faster access to information, leading to more informed
                      decisions.
                    </li>
                    <li>
                      It reduces the learning curve, minimises training
                      requirements, and improves personal productivity and job
                      satisfaction.
                    </li>
                    <li>
                      This feature is critical in modern CPQ platforms to
                      deliver exceptional customer experience and service.
                    </li>
                  </ul>
                </div>
                <div className="right-num-vz">1</div>
              </div>
              <div>
                <div className="my-auto">
                  <h2>Shared Workspace</h2>
                  <ul>
                    <li>
                      Teamwork ensures success at scale. Effectively delivering
                      an omni-channel, collaborative and shared workspace brings
                      together sales, sales support, solution architects and
                      order managers to collectively accomplish business goals
                      with efficiency and speed.
                    </li>
                    <li>
                      It improves efficiency and speed in achieving business
                      goals.
                    </li>
                    <li>
                      Sales, sales support, solution architects, and order
                      managers can work together in a unified environment.
                      facilitating effective communication and knowledge sharing
                      among team members.
                    </li>
                    <li>
                      A modern CPQ platform must have shared workspace
                      functionality to ensure successful teamwork and achieve
                      business objectives.
                    </li>
                  </ul>
                </div>
                <div>
                  <img src={workspace} alt="" />
                </div>
                <div className="left-num-vz">2</div>
              </div>
              <div>
                <div>
                  <img src={intelligence} alt="" />
                </div>
                <div className="my-auto">
                  <h2>Delightful Intelligence</h2>
                  <ul>
                    <li>
                      Delightful Intelligence is the integration of advanced
                      analytics and machine learning capabilities into a CPQ
                      platform.
                    </li>
                    <li>
                      It would enables the user to make data-driven decisions
                      like customised recommendations by identifing the best
                      products, pricing, and promotions for each customer based
                      on real-time insights and predictive analytics.
                    </li>
                    <li>
                      It would empowers sales teams in cross-selling and
                      upselling opportunities by recommending complementary
                      products and services to customers.
                    </li>
                    <li>
                      It is a critical feature for modern CPQ platforms and is
                      essential for businesses to remain competitive and agile
                      in today's rapidly changing market.
                    </li>
                  </ul>
                </div>
                <div className="right-num-vz">3</div>
              </div>
              <div>
                <div className="my-auto">
                  <h2>Guided Experiences</h2>
                  <ul>
                    <li>
                      Guided Experience will provide step-by-step assistance for
                      users to complete tasks with ease and confidence,
                      resulting in increased productivity and satisfaction
                      levels.
                    </li>
                    <li>
                      It would also eliminates the need for extensive training
                      and reduces the likelihood of errors and frustration.
                    </li>
                    <li>
                      Contextual help will be provided the users at the point of
                      need, reducing the time and effort required to complete
                      tasks.
                    </li>
                    <li>
                      Guided Experience is critical to delivering a positive
                      Employee Experience (EX) and is an essential feature of
                      modern CPQ platforms.
                    </li>
                  </ul>
                </div>
                <div>
                  <img src={guided} alt="" />
                </div>
                <div className="left-num-vz">4</div>
              </div>
            </div>
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
              <h2>Design Solution</h2>
              <br />
              <p>
                As much as I would love to showcase the actual design work that
                was done for VZ360, unfortunately, I am bound by a
                non-disclosure agreement (NDA) with Verizon.
              </p>
              <br />
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
      <div>
        <div className="inner-container-subex">
          <div className="research-vz ComparativeMainBox">
            <h1>Comparative Analysis </h1>
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
                    language with reduced cognitive load and guided experience
                    that simplifies the learning curve.
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
                    Global navigation with context-sensitive menus, providing
                    easy access to relevant tools and Information.
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
                    Unified alerts and notifications center, making it easier
                    for users to stay on top of tasks and prioritize their work.
                  </td>
                </tr>
                <tr>
                  <td>Design Language</td>
                  <td>Cluttered and information overload</td>
                  <td>
                    A new design language with reduced cognitive load that
                    enhances the user experience.
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
                    Mobile-optimized solution that supports field sales reps,
                    making it easier for them to access the tools and
                    information they need while on the go
                  </td>
                </tr>
                <tr>
                  <td>Cross-team Collaboration</td>
                  <td>N/A</td>
                  <td>
                    Integrated collaboration tools that allow teams to work
                    together seamlessly, improving communication and efficiency.
                  </td>
                </tr>
                <tr>
                  <td>Reporting</td>
                  <td>N/A</td>
                  <td>
                    Daily, weekly, and monthly reporting features that provide
                    users with real-time insights into their performance and
                    help them make data- driven decisions
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
        </div>
      </div>
      <div>
        <div className="inner-container-subex">
          <div className="my-imapct-vz">
            <h1>My Impact</h1>
            <p className="my-[32px]">
              I have made significant contributions to enhance the user
              experience and improve overall performance on the VZ360 project.
              To measure the success of the project, We have identified key UX
              KPIs and made predictions on how they will be impacted.
            </p>
            <div>
              <div>
                <div>
                  <img src={satisfy} alt="" />
                  Improved user satisfaction
                </div>
                <p>
                  Through the implementation of a guided experience and a single
                  pane UX design, user satisfaction has increased by 20%
                  according to initial feedback.
                </p>
                <p>
                  KPI: User satisfaction score (measured through surveys or
                  feedback forms)
                </p>
              </div>
              <div>
                <div>
                  <img src={efficiency} alt="" />
                  Increased efficiency
                </div>
                <p>
                  The shared workspace feature has improved collaboration
                  between different departments resulting in faster
                  decision-making, saving 30 minutes per task on average.
                </p>
                <p>KPI: Task completion time</p>
              </div>
              <div>
                <div>
                  <img src={reduced} alt="" />
                  Reduced errors and frustrations
                </div>
                <p>
                  The delightful intelligence feature has reduced errors by 25%
                  and decreased frustration levels, leading to a 15% decrease in
                  user errors.
                </p>
                <p>KPI: Error rates and user error rates</p>
              </div>
            </div>
            <section className="prediction-vz">
              <h3>Prediction</h3>
              <div>
                <div>
                  <div>
                    <img src={prediction} alt="" />
                    The implementation of a uniform and personalized experience
                    will lead to a 15% increase in user engagement.
                  </div>
                  <p>
                    KPI: User engagement metrics (such as time spent on the
                    platform, number of sessions, etc.)
                  </p>
                </div>
                <div>
                  <div>
                    <img src={prediction} alt="" />
                    The inclusion of in-app collaboration tools will lead to a
                    25% increase in the number of completed tasks and a 10%
                    reduction in task completion time.
                  </div>
                  <p>KPI: Task completion rates and task completion time</p>
                </div>
                <div>
                  <div>
                    <img src={prediction} alt="" />
                    The implementation of a 3-step simple quote creation flow
                    will result in a 20% reduction in user errors and a 10%
                    increase in task completion rates.
                  </div>
                  <p>KPI: User error rates and task completion rates</p>
                </div>
              </div>
              <p>
                These predictions are based on initial feedback from
                stakeholders and users, as well as an analysis of current UX
                KPIs. We believe that these improvements will have a significant
                impact on the success of the VZ 360 project and the overall
                satisfaction of its users.
              </p>
            </section>
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
                Throughout this project, I gained a deeper understanding of how
                CPQ works and the intricacies of the quoting and ordering
                process. I learned the importance of understanding and catering
                to the needs of various stakeholders, including sales reps,
                solution architects, and order managers.
              </div>
              <br />
              <div className="flex">
                <div>
                  <img src={arrow} alt="" />
                </div>
                This project has helped me improve my problem-solving skills and
                ability to work in a fast-paced environment with constantly
                changing requirements. It also taught me the value of
                collaboration and communication to ensure that everyone is on
                the same page and working towards a common goal. This experience
                has been invaluable to me in terms of professional growth and
                development.
              </div>
            </div>
          </div>
          <div className="my-learning-pgos mt-[40px]">
            <h1>If I had more time</h1>
            <br />
            <p className="ml-[28px]">
              <strong>
                If I had more time, there are a few areas where I would like to
                focus on further improving the project. These include:
              </strong>
            </p>
            <br />
            <div>
              <div className="flex">
                <div>
                  <img src={ogarrow} alt="" />
                </div>
                Implementing additional features: While we were able to
                implement several key features during the project, there are
                still some additional features that would be valuable to users.
                With more time, I would like to explore the possibility of
                implementing these features and continuing to iterate on the
                overall design.
              </div>
              <br />
              <div className="flex">
                <div>
                  <img src={ogarrow} alt="" />
                </div>
                Conducting additional testing: While we conducted extensive
                feedback sessions throughout the project, there is always room
                for improvement when tested with actual users. With more time, I
                would like to conduct testing to ensure that the UX is as
                streamlined and user-friendly as possible.
              </div>
            </div>
          </div>
          <div className="process-tool-vz mt-[40px]">
            <h1>Process & tools</h1>
            <div>
              <table>
                <tr>
                  <td>
                    <div>
                      <h4>Design & Prototyping</h4>
                      <p>
                        We used Sketch for designing; InVision for prototyping,
                        and to collaborate with client team
                      </p>
                    </div>
                  </td>
                  <td>
                    <div>
                      <h4>Project Tracking</h4>
                      <p>
                        We used JIRA to track daily work progress across PODs
                      </p>
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
                        India, and thrice a week with our stakeholders in Europe
                        and US.
                      </p>
                    </div>
                  </td>
                  <td>
                    <div>
                      <h4>Stakeholder reviews</h4>
                      <p>
                        With Biz & Tech partners we created flows to capture
                        functionality, behavior, interaction details, and
                        decisions
                      </p>
                    </div>
                  </td>
                  <td></td>
                </tr>
              </table>
            </div>
          </div>
          <div className="navigation-subex">
            <div
              className="flex cursor-pointer"
              onClick={() => LinkFn("/trippiez")}
            >
              <div>
                <img src={arrowBack} alt="" />
              </div>
              Previous Case Study
            </div>
            <div
              className="flex cursor-pointer"
              onClick={() => LinkFn("/publicis-growth-os")}
            >
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
export default Verizon2;
