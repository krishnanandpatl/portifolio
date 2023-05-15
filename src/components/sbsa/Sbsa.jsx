import React from "react";
import "../styles/Sbsa.css";
import yes from "../../assets/sbsa/yes.svg";
import no from "../../assets/sbsa/no.svg";
import male from "../../assets/sbsa/male.svg";
import female from "../../assets/sbsa/female.svg";
import workflow from "../../assets/sbsa/userworkflow.png";
import approach1 from "../../assets/sbsa/approach1.svg";
import approach2 from "../../assets/sbsa/approach2.png";
import task4 from "../../assets/sbsa/task4.png";
import task3 from "../../assets/sbsa/task3.png";
import task2 from "../../assets/sbsa/task2.png";
import task1 from "../../assets/sbsa/task1.png";
import sbsa from "../../assets/sbsa/sbsa.png"
import fraud from "../../assets/subex/fraud.svg";
import revenue from "../../assets/subex/revenue.svg";
import analsoln from "../../assets/subex/analsoln.svg";
import participant from "../../assets/sbsa/participant.svg";
import solution from "../../assets/subex/solution.svg";
import flag from "../../assets/sbsa/flag.svg";
import greenflag from "../../assets/sbsa/greenflag.svg";
import methodology from "../../assets/sbsa/methodlogy.svg";
import Obstacles from "../../assets/sbsa/Group.png";
import positive from "../../assets/sbsa/heart.svg";
import improve from "../../assets/sbsa/improve.svg";
import ss1 from "../../assets/sbsa/ss1.png"
import ss2 from "../../assets/sbsa/ss2.png"
import arrowBack from "../../assets/arrowBack.svg";
import arrowFor from "../../assets/arrowFor.svg";

function Sbsa() {
  return (
    <div>
      <div className="subex-container">
        <div className="subex-intro-card flex">
          <div className="text-part-intro">
            <h1 className="heading-intro-subex">
              Redesigning Standard Bank South Africa's BOL Portal for an
              Enhanced Business Banking Experience
            </h1>
            <br />
            <p className="para-intro-card">
              We prioritized usability, accessibility, and visual design to
              create a modern and intuitive portal that offers a seamless
              banking experience for business users.
            </p>
            <br />
            <div className="timeline-intro-card">
              <div className="flex-titles-intro">
                <div className="headers-top-intro">TimeLine</div>
                <div className="title-details-intro">Oct 2018 - June 2019</div>
              </div>
              <div className="flex-titles-intro">
                <div className="headers-top-intro">Platform</div>
                <div className="title-details-intro">Web</div>
              </div>
            </div>
            <br />
            <div className="flex gap-10 team-styling-sbsa">
              <div>
                <div className="team-title-sbsa">Onshore (South Africa)</div>
                <div>1 Scrum Master</div>
                <div>2 Product Owner</div>
                <div>1 Tech Lead</div>
                <div>4 Developers</div>
                <div>1 Program Manager</div>
                <div>2 Tester</div>
                <div>4 Deployment Team</div>
              </div>
              <div>
                <div className="team-title-sbsa">India POD</div>
                <div>1 UX Lead</div>
                <div>1 Design Lead [Me]</div>
                <div>1 UX Designer</div>
                <div>1 Visual Designer</div>
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
          <div className="image-part-intro"><img src={sbsa} alt="" /></div>
        </div>
        <div className="inner-container-subex">
          <div className="context-background-subex">
            <h1 className=".f700-32-39">Context and Background</h1>
            <br />
            <p>
              Till Recently Standard Bank South Africa was using Legacy
              Interface for most of its offering which worked like magic. But
              this magic receded to a slew of disparate features that made the
              experience slow and complex to use. hence the need came to Migrate
              from Legacy interface to BOL (Business Online) Standard Bank.
            </p>
            <br />
            <p>
              The product needed to cater to the needs of three distinct user
              groups
            </p>
            <br />
            <div className="flex buisness-owner-sbsa gap-8">
              <div>
                <h4><img src={revenue} alt="" />Small Business Owners</h4>
                <br />
                <div className="ml-4">
                  who use the platform to manage their business finances,
                  transactions, and payments
                </div>
              </div>
              <div>
                <h4><img src={fraud} alt="" />Corporate Finance Managers</h4>
                <br />
                <div className="ml-4">
                  who use the platform to manage multiple accounts, payments,
                  and transactions on behalf of their company
                </div>
              </div>
              <div>
                <h4><img src={analsoln} alt="" />Treasury Managers</h4>
                <br />
                <div className="ml-4">
                  who use the platform for managing foreign exchange, interest
                  rate risks, and investment portfolios.
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="project-scope-sbsa">
            <h1>Project Scope</h1>
            <br />
            <p>
              The goal of the project was to improve the overall user experience
              of Standard Bank BOL portal. The scope of the project involved
              conducting user research and testing to understand user needs,
              suggesting design solutions, and testing those solutions to create
              a more intuitive and user-friendly module.
            </p>
            <br />
            <p>
              While this project was part of a larger effort to improve the
              overall banking experience for business users.
            </p>
            <div>
              It should be noted that this case study will only discuss the
              consolidated balances module and not the entire Standard Bank BOL
              portal redesign project.
            </div>
          </div>
          <br />
          <div className="buisness-objective-sbsa flex">
            <div><img src={flag} alt="" /></div>
            <div>
              <h1>Buisness Objective</h1>
              <br />
              <p>
                To provide Standard Bank's business customers with a streamlined
                and user-friendly way to view and manage their balances. By
                reducing the time it takes for customers to complete
                balance-related tasks, increasing customer satisfaction and
                improving the accuracy of balance reporting.
              </p>
              <br />
              <p>
                The BOL Consolidated Balances module aims to drive increase in
                customer retention rates and increase in revenue from business
                banking services.
              </p>
            </div>
          </div>
          <br />
          <div className="buisness-objective-sbsa flex">
            <div><img src={flag} alt="" /></div>
            <div>
              <h1>Design Challenge</h1>
              <p>
                How might we improve the Consolidated Balances module in the BOL
                portal making it easy for users to add and remove accounts, edit
                subgroups, and select balance types, while ensuring that the
                process is intuitive and clear, regardless of the user's level
                of financial expertise?
              </p>
            </div>
          </div>
          <br />
          <div className="solution-sbsa buisness-objective-sbsa flex">
            <div><img src={solution} alt="" /></div>
            <div>
              <h1>The Solution</h1>
              <br />
              <p>
                We simplified the navigation by placing consolidated balances on
                the <strong>level 1 navigation</strong> and introduced{" "}
                <strong>search and refresh options prominently</strong> .
              </p>
              <br />
              <p>
                We also included all account subgroups at level 2 to reduce
                cognitive load. As a result, user testing showed that 18
                participants found the new navigation and search features
                helpful in locating consolidated balances within a minute.
              </p>
            </div>
          </div>
          <div className="partition-line-sbsa my-[80px]"></div>
          <div className="discover-sbsa">
            <h1>Discover</h1>
            <br />
            <p>
              We started by conducting user interviews and testing of the legacy
              interface to gather insights from Standard Bank users about their
              experiences with the existing system.
            </p>
            <br />
            <h3>Testing the Legacy Interface</h3>
            <br />
            <div className="discover-box1">
              <div className="w-4/5">
                <p className="flex">
                  <div><img src={greenflag} alt="" /></div>
                  <strong>
                    The aim of this usability report is to assess the
                    effectiveness and ease of use of the consolidated statement
                    feature in the Standard Bank South Africa's Business Online
                    (BOL) portal.
                  </strong>
                </p>
                <br />
                <p className="flex">
                  <div><img src={participant} alt="" /></div>
                  Participants: The usability testing was conducted with a
                  diverse group of 6 participants who had previous experience
                  using the portal.
                </p>
                <br />
                <p className="flex">
                  <div><img src={methodology} alt="" /></div>
                  <div>
                    <strong>Methodology:</strong> Participants were assigned a
                    set of 5 tasks to perform using the consolidated statement
                    feature, such as adding and deleting accounts, adding
                    subgroups, editing subgroup selections, and choosing balance
                    types. During the process, participants were observed and
                    asked to articulate their thought process out loud. Upon
                    completion, participants were asked to provide feedback on
                    their experience using the feature.
                  </div>
                </p>
              </div>
            </div>
            <br />
            <div className="discover-box2">
              <h2>
                Standard bank-Consolidated Balances | Users Testing report
              </h2>
              <div className="discover-line-sbsa"></div>
              <div className="experience-card-sbsa flex gap-10">
                <div className="w-1/3">
                  <div className="upper-title-experience">
                    Sessions were conducted with 6 participants who had previous
                    experience using the portal.
                  </div>
                  <div className="experience-list">
                    <h4>5 tasks assigned</h4>
                    <br />
                    <ol>
                      <li>Adding 3 accounts to the consolidation form</li>
                      <br />
                      <li>Removing 1 account from the selected accounts</li>
                      <br />
                      <li>
                        Adding subgroup "Company B" from account group
                        "Logistics" to the consolidated form
                      </li>
                      <br />
                      <li>
                        Editing subgroup selection to "Temporary Staff" from
                        account group "Logistics"
                      </li>
                      <br />
                      <li>Choosing Balance type</li>
                    </ol>
                  </div>
                </div>
                <div className="table-experience">
                  <table>
                    <td>
                      <tr>
                        <img src={female} alt="" />
                      </tr>
                      <tr>Luisa, 28</tr>
                      <tr>
                        <img src={no} alt="" />
                      </tr>
                      <tr>
                        <img src={yes} alt="" />
                      </tr>
                      <tr>
                        <img src={yes} alt="" />
                      </tr>
                      <tr>
                        <img src={no} alt="" />
                      </tr>
                      <tr>
                        <img src={yes} alt="" />
                      </tr>
                    </td>
                    <td>
                      <tr>
                        <img src={female} alt="" />
                      </tr>
                      <tr>Tombo, 45 </tr>
                      <tr>
                        <img src={no} alt="" />
                      </tr>
                      <tr>
                        <img src={yes} alt="" />
                      </tr>
                      <tr>
                        <img src={no} alt="" />
                      </tr>
                      <tr>
                        <img src={no} alt="" />
                      </tr>
                      <tr>
                        <img src={no} alt="" />
                      </tr>
                    </td>
                    <td>
                      <tr>
                        <img src={male} alt="" />
                      </tr>
                      <tr>Andre, 40</tr>
                      <tr>
                        <img src={no} alt="" />
                      </tr>
                      <tr>
                        <img src={yes} alt="" />
                      </tr>
                      <tr>
                        <img src={no} alt="" />
                      </tr>
                      <tr>
                        <img src={no} alt="" />
                      </tr>
                      <tr>
                        <img src={yes} alt="" />
                      </tr>
                    </td>
                    <td>
                      <tr>
                        <img src={male} alt="" />
                      </tr>
                      <tr>Farai, 37</tr>
                      <tr>
                        <img src={yes} alt="" />
                      </tr>
                      <tr>
                        <img src={yes} alt="" />
                      </tr>
                      <tr>
                        <img src={no} alt="" />
                      </tr>
                      <tr>
                        <img src={no} alt="" />
                      </tr>
                      <tr>
                        <img src={no} alt="" />
                      </tr>
                    </td>
                    <td>
                      <tr>
                        <img src={male} alt="" />
                      </tr>
                      <tr>Alonso, 38</tr>
                      <tr>
                        <img src={no} alt="" />
                      </tr>
                      <tr>
                        <img src={no} alt="" />
                      </tr>
                      <tr>
                        <img src={yes} alt="" />
                      </tr>
                      <tr>
                        <img src={no} alt="" />
                      </tr>
                      <tr>
                        <img src={yes} alt="" />
                      </tr>
                    </td>
                    <td>
                      <tr>
                        <img src={male} alt="" />
                      </tr>
                      <tr>José, 40</tr>
                      <tr>
                        <img src={no} alt="" />
                      </tr>
                      <tr>
                        <img src={yes} alt="" />
                      </tr>
                      <tr>
                        <img src={no} alt="" />
                      </tr>
                      <tr>
                        <img src={yes} alt="" />
                      </tr>
                      <tr>
                        <img src={no} alt="" />
                      </tr>
                    </td>
                  </table>
                </div>
              </div>
              <h3 className="mt-[40px]">User Insights</h3>
              <br />
              <div className="discover-results-sbsa">
                <div>
                  <div><img src={Obstacles} alt="" /></div>
                  <h5>Obstacles</h5>
                  <ol>
                    <li>
                      The interface is outdated and clunky, making it difficult
                      to navigate and complete tasks efficiently.
                    </li>
                    <li>
                      There are too many steps and clicks required to perform
                      basic tasks, causing frustration and wasting valuable
                      time.
                    </li>
                    <li>
                      The terminology used is confusing and inconsistent, making
                      it difficult to understand the system's functionality.
                    </li>
                    <li>
                      There is a lack of user-friendly help resources or
                      tutorials, making it difficult to learn how to use the
                      system effectively.
                    </li>
                  </ol>
                </div>
                <div>
                  <div><img src={positive} alt="" /></div>
                  <h5>Positive aspects</h5>
                  <ol>
                    <li>
                      User’s have been using the old legacy interface for a long
                      time had developed a sense of familiarity and comfort with
                      the layout, design, and functionalities.
                    </li>
                    <li>
                      Over time, users have come to trust and rely on the old
                      legacy interface for their banking needs.
                    </li>
                  </ol>
                </div>
                <div>
                  <div><img src={improve} alt="" /></div>
                  <h5>Things to improve</h5>
                  <ol>
                    <li>
                      A simpler and more streamlined process should be
                      implemented of adding and removing accounts
                    </li>
                    <li>
                      The current options for selecting balance types are
                      confusing and unclear. The meaning of each option should
                      be made clearer and more intuitive.
                    </li>
                    <li>
                      The navigation within the consolidated balances feature
                      can be improved to make it easier for users to find what
                      they are looking for.
                    </li>
                    <li>
                      Important information such as the total balance for all
                      accounts should be made more visible and easier to find.
                    </li>
                  </ol>
                </div>
              </div>
              <br />
              <div className="feedback-summary-sbsa">
                <h1>Feedback Summary</h1>
                <ul>
                  <li>
                    Most participants found the feature to be confusing and
                    frustrating to use.
                  </li>
                  <li>
                    Participants reported that the process of adding and
                    selecting accounts and subgroups was overly complicated and
                    required too many steps to complete.
                  </li>
                  <li>
                    They also reported that the search feature did not provide
                    helpful results and that the available options were not
                    clearly labeled or easy to understand.
                  </li>
                </ul>
              </div>
              <br />
              <div className="feedback-summary-sbsa">
                <h1>Our Takeways</h1>
                <ul>
                  <li>
                    Based on the results of the usability testing, the
                    consolidated statement feature is not user-friendly and
                    requires significant improvement.
                  </li>
                  <li>
                    Participants reported difficulty in locating and selecting
                    menus and found the process of adding and editing to be
                    cumbersome and confusing.
                  </li>
                  <li>
                    The available options were not clearly labeled and the
                    search feature did not provide helpful results.
                  </li>
                </ul>
                <br />
                <p>
                  Actions: Based on the feedback received, it is recommended
                  that the design and organisation of the feature be simplified
                  to make it more user-friendly and intuitive. Additionally,
                  providing clearer labelling and more helpful search
                  functionality may improve the overall usability of the
                  feature.
                </p>
              </div>
            </div>
          </div>
          <div className="partition-line-subex"></div>
          <div className="sbsa-below-understanding">
            To gain a deeper understanding of the current legacy system, we
            conducted both <strong>competitive analysis</strong> and{" "}
            <strong>heuristic evaluation</strong>.
          </div>
          <br />
          <div className="sbsa-below-understanding">
            The <strong>competitive analysis</strong> involved reviewing the
            digital banking platforms of Standard Bank's competitors to
            understand how they presented their financial information and
            supported account consolidation.
          </div>
          <br />
          <table className="table-sbsa">
            <tr className="table-sbsa-header">
              <th className="text-left">Competitor</th>
              <th className="w-1/4 text-left">Features</th>
              <th className="text-left">Pros</th>
              <th className="text-left">Cons</th>
            </tr>
            <tr>
              <td>Nedbank</td>
              <td>
                Consolidated balance feature <br /> Alerts and notifications
                <br />
                Transaction history <br /> Mobile app
              </td>
              <td>
                Mobile app allows for easy access to consolidated balances
                on-the-go
                <br /> Alerts and notifications help clients stay on top of
                their accounts
              </td>
              <td>
                Limited account grouping options
                <br /> Some clients report issues with transaction history
                accuracy
              </td>
            </tr>
            <tr>
              <td>FNB</td>
              <td>
                Consolidated balance feature <br /> Account grouping and
                filtering <br />
                Mobile app <br /> Budgeting tools
              </td>
              <td>
                Budgeting tools help clients manage their finances more
                effectively
                <br /> Account grouping options are more extensive than SBSA's
              </td>
              <td>
                Some clients report issues with the accuracy of consolidated
                balances
                <br /> Limited ability to customise account groupings
              </td>
            </tr>
            <tr>
              <td>Absa</td>
              <td>
                Consolidated balance feature <br /> Detailed transaction history
                <br /> Mobile app
              </td>
              <td>
                Detailed transaction history allows clients to drill down into
                their account activity
                <br /> Mobile app is user-friendly and easy to navigate
              </td>
              <td>
                Limited account grouping options
                <br /> Some clients report issues with the accuracy of
                consolidated balances
              </td>
            </tr>
          </table>
          <br />
          <div className="sbsa-below-understanding w-full">
            We conducted a <strong>heuristic evaluation</strong> of the current
            legacy system using Nielsen's 10 usability heuristics.
            <br /> We analyzed the system's navigation, information
            architecture, and visual design to identify potential areas for
            improvement.
            <br />
            Through this evaluation, we were able to identify several critical
            issues that needed to be addressed to improve the overall user
            experience.
          </div>
          <br />
          <table className="table-sbsa">
            <tr className="table-sbsa-header">
              <th>Heuristic</th>
              <th className="w-1/2">Observation</th>
              <th>Severity</th>
              <th className="w-1/6">Easy to Fix</th>
            </tr>
            <tr>
              <td>Visibility of system status</td>
              <td>
                After clicking on a button to execute a transaction, there is no
                visible feedback to indicate whether the transaction is
                processing or has been completed.
              </td>
              <td>High</td>
              <td>Moderate</td>
            </tr>
            <tr>
              <td>Match between system and the real world</td>
              <td>
                The terms used for account categories and types are not easily
                understandable for the average user.
              </td>
              <td>High</td>
              <td>Easy</td>
            </tr>
            <tr>
              <td>User control and freedom</td>
              <td>
                If a user accidentally deletes a transaction or changes an
                account balance incorrectly, there is no clear way to revert
                back to the original state.
              </td>
              <td>Medium</td>
              <td>Moderate</td>
            </tr>
            <tr>
              <td>Consistency and standards</td>
              <td>
                Some buttons are located in different places on different
                screens, and the font sizes and styles used for headings and
                labels are inconsistent.
              </td>
              <td>High</td>
              <td>Easy</td>
            </tr>
            <tr>
              <td>Error prevention</td>
              <td>
                Users may accidentally input incorrect account numbers or
                transaction amounts, and the interface does not prompt them to
                review their inputs before submitting.
              </td>
              <td>Medium</td>
              <td>Easy</td>
            </tr>
            <tr>
              <td>Recognition ratherthan recall</td>
              <td>
                Users may need to remember account numbers when navigating
                between screens, rather than having the system display the
                account name or type
              </td>
              <td>Low</td>
              <td>Easy</td>
            </tr>
            <tr>
              <td>Flexibility and efficiency of use</td>
              <td>
                Users may need to navigate through multiple screens to access
                commonly used functions or data, rather than having the option
                to create shortcuts or personalised dashboards
              </td>
              <td>Medium</td>
              <td>Difficult</td>
            </tr>
            <tr>
              <td>Aesthetic and minimalist design</td>
              <td>
                The dashboard and account summary screens include too many
                icons, graphs, and tables, making it difficult for users to
                quickly find the information they need.
              </td>
              <td>Low</td>
              <td>Easy</td>
            </tr>
            <tr>
              <td>Help users recognize, diagnose, and recover from errors</td>
              <td>
                If a user encounters an error or technical issue, they may not
                know how to troubleshoot or seek assistance.
              </td>
              <td>High</td>
              <td>Moderate</td>
            </tr>
            <tr>
              <td>Help and documentation</td>
              <td>
                The online help centre doesn't have clear instructions or
                relevant FAQs, and the system doesn't provide tooltips or
                tutorials to guide users.
              </td>
              <td>Low</td>
              <td>Moderate</td>
            </tr>
          </table>
          <br />
        </div>
      </div>
      <div className="dark:bg-[#1D242D]">
        <div className="inner-container-subex py-[64px]">
          <div className="ideate-sbsa">
            <h1>Ideate</h1>
            <br />
            <p>
              We started by conducting <strong>user interviews</strong> and{" "}
              <strong>testing</strong> of the legacy interface to gather
              insights from Standard Bank users about their experiences with the
              existing system.
            </p>
          </div>
          <br />
          <div className="brainstorm-sbsa">
            <h3>Step #1: Brainstorming</h3>
            <br />
            <p>
              We used <strong>SCAMPER</strong> a{" "}
              <strong>Creative Thinking Technique</strong> to generate ideas for
              improving the Consolidated Balances feature of BOL. The Scamper
              report below outlines the different areas that we examined and the
              ideas that we generated.
            </p>
            <br />
            <div className="flex">
              <div><img src="" alt="" /></div>
              <p>
                The results of the SCAMPER technique led to the generation of
                numerous innovative ideas for improving the consolidated
                balances feature of BOL.We applied the <span>Substitute</span>{" "}
                and <span>Combine </span>
                techniques to the Consolidated Balances feature of BOL.
              </p>
            </div>
            <br />
            <div className="flex">
              <div><img src="" alt="" /></div>
              <p>
                We substituted the current static interface with a dynamic one
                that updates in real-time, combining it with a feature that
                allows users to set alerts for certain account activity.
              </p>
            </div>
            <br />
            <p className="link-report-sbsa">
              View SCAMPER report<div>icon</div>
            </p>
          </div>
          <br />
          <div className="categorized-idea-sbsa">
            <h3>Step #2: Categorized Ideas</h3>
            <br />
            <p>
              We found that many of the ideas generated fell under the theme of
              improving the interface's functionality and customization options.
              Some examples of ideas that emerged from the brainstorming
              sessions include:
            </p>
            <br />
            <div>
              <h5 className="flex">
                <div><img src="" alt="" /></div> Simplification of Navigation and Information
                Architecture
              </h5>
              <p>
                Simplifying the navigation of the feature to make it more
                intuitive and user-friendly.
              </p>
            </div>
            <div>
              <h5 className="flex">
                <div>icon</div> Visualisation and Presentation
              </h5>
              <p>
                Introducing interactive graphs to visualise account activity
                over time.
              </p>
            </div>
            <div>
              <h5 className="flex">
                <div>icon</div> Recommendation and Suggestion
              </h5>
              <p>
                Adding a feature that recommends actions to take based on
                account balances and spending patterns.
              </p>
            </div>
            <div>
              <h5 className="flex">
                <div>icon</div> Customisation and Alerting
              </h5>
              <p>
                Allowing users to set and customise alerts for specific account
                activity, such as when a transaction exceeds a certain amount or
                when a bill payment is due.
              </p>
            </div>
          </div>
          <br />
          <div className="prioritization-sbsa">
            <h3>Step #3: Prioritization</h3>
            <br />
            <p>
              We then used SCAMPER brainstorming exercises to generate ideas and
              categorised them based on common themes.
              <br /> From these, we prioritised the top ideas, including:
            </p>
            <br />
            <div className="flex">
              <div>icon</div>
              <div className="w-3/4">
                <h5>
                  Simplification of Navigation and Information Architecture
                </h5>
                <p>
                  This idea was prioritised because it addresses a fundamental
                  issue with the feature's usability, which was a significant
                  pain point for users during testing. By making it easier for
                  users to find and understand the information they need, we can
                  improve the overall user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="inner-container-subex">
          <div className="solution-building-sbsa">
            <br />
            <h1>Solution Building</h1>
            <br />
            <p>
              After the ideation sessions, we conducted a thorough analysis of
              the existing IA and information flow of the platform.
            </p>
            <br />
            <h4>User Workflow</h4>
            <br />
            <ul>
              <li>
                As a result of ideation sessions and input from users and
                business, we simplified the IA and improved the information flow
                and user flow.
              </li>
              <br />
              <li>
                The user flow has been optimised, with intuitive paths that make
                it easier for users to complete tasks efficiently. With the
                reduced clicks to perform actions, users can accomplish their
                tasks faster, which improves their overall experience with the
                platform.
              </li>
            </ul>
            <div>
              <img src={workflow} alt="" />
            </div>
          </div>
          <div className="partition-line-sbsa my-[64px]"></div>
          <div className="approach1-sbsa">
            <p>
              After conducting multiple brainstorming sessions, we shifted our
              focus towards finding solutions to the challenges faced by users
              while navigating and locating menus on the platform. Following a
              few iterations, we finalised on two approaches to tackle these
              issues, which are:
            </p>
            <br />
            <div className="flex">
              <div className="w-1/2">
                <h4>Approach #1</h4>
                <br />
                <ol>
                  <li>
                    We suggested putting the consolidated balances feature in
                    the level 1 of the navigation, along with Accounts,
                    Balances, Find a Transaction and Download Report.
                  </li>
                  <br />
                  <li>
                    Additionally, we recommended including All Account and
                    Accounts Subgroups under the Accounts tab at level 2, along
                    with search and refresh options that are prominently
                    displayed on the page.
                  </li>
                </ol>
                <br />
                <h5>Impact:</h5>
                <br />
                <ul>
                  <li>
                    Approach 1 reduces cognitive load and improve
                    decision-making for the user. By organising the information
                    architecture in a clear and intuitive manner, users can
                    quickly find the information they need and make informed
                    decisions about their finances.
                  </li>
                  <br />
                  <li>
                    The search and refresh options also provide users with easy
                    ways to filter and update the data, further enhancing the
                    usability of the feature.
                  </li>
                </ul>
              </div>
              <div className="ml-20 mt-[30px]">
                <img src={approach1} alt="" />
              </div>
            </div>
          </div>
          <div className="partition-line-sbsa my-[18px]"></div>
          <div className="approach1-sbsa flex">
            <div className="w-1/2">
              <h4>Approach #2</h4>
              <br />
              <ol>
                <li>
                  we have added prominent print, export, and consolidate CTAs
                  upfront on the page, making them easily accessible to users
                  without requiring them to search for these options.
                </li>
              </ol>
              <br />
              <h5>Impact:</h5>
              <br />
              <ul>
                <li>
                  Approach 2 aims to reduce the cognitive load and
                  decision-making effort required by users by providing them
                  with easy access to the most important and commonly used
                  features.
                </li>
                <br />
                <li>
                  We reduced the number of steps required for users to perform
                  these actions frequently, which not only saved them time but
                  also aligns with their mental model of where these options
                  should be located on the page.
                </li>
              </ul>
            </div>
            <div className="w-1/2 ml-20 mt-[30px]">
              <img src={approach2} alt="" />
            </div>
          </div>
        </div>
        <div className="wireframe-sbsa-bg">
          <div className="inner-container-subex py-[72px]">
            <div className="deliver-wireframes-sbsa">
              <h1>Deliver: Wireframes</h1>
              <br />
              <div className="wireframe-sbsa">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className="partition-line-sbsa my-[72px]"></div>
              <h1>Deliver: Visual Design</h1>
              <br />
              <div className="wireframe-sbsa">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="inner-container-subex">
        <div className="testing-report-sbsa">
          <h1>User Testing Report</h1>
          <br />
          <div className="flex gap-10">
            <div className="w-3/5 objective-sbsa">
              <h5 className="flex">
                <div><img src="" alt="" /></div>Objective
              </h5>
              <br />
              <p className="ml-9">
                The purpose of this user testing was to evaluate the
                effectiveness of the new design changes to the consolidated
                balances feature in BOL. The testing was conducted with{" "}
                <strong>30 participants</strong> who are current BOL users with
                varying levels of experience using the platform.
              </p>
              <br />
              <strong className="ml-9">
                37 video sessions, 14 questionnaire responses
              </strong>
            </div>
            <div><img src={ss1} alt="" /></div>
          </div>
          <br />
          <div className="flex">
            <div className="gap-10 objective-sbsa">
              <h5 className="flex">
                <div>icon</div>Tasks
              </h5>
              <br />
              <p className="ml-9">
                Participants were asked to complete the following tasks:
              </p>
              <br />
              <ol className="ml-12">
                <li>
                  Find their consolidated balances for the month of January.
                </li>
                <li>
                  Export a report of their consolidated balances for the past 6
                  months.
                </li>
                <li>
                  Set up an alert for when their account balance falls below a
                  certain amount.
                </li>
                <li>
                  Find transactions related to a specific account subgroup.
                </li>
              </ol>
            </div>
            <div><img src={ss2} alt="" /></div>
          </div>
          <br />
          <div className="summary-results-sbsa">
            <h3>Summary Results</h3>
            <br />
            <p className="w-3/4">
              Overall, the new design changes were well received by
              participants.
              <br /> All participants were able to complete the tasks
              successfully, with an average completion time of{" "}
              <strong>6 minutes and 30 seconds.</strong>
            </p>
            <br />
            <p>
              6 users bounced before starting the test, the remaining 24 did the
              following:
            </p>
            <div className="task-results-sbsa">
              <div>
                <div className="task-result-sbsa">
                  Task 1: Find consolidated balances for the month of January
                </div>
                <div className="mt-4">
                  <img src={task1} alt="" />
                </div>
              </div>
              <div>
                <div className="task-result-sbsa">
                  Task 2: Export a report of consolidated balances for the past
                  6 months
                </div>
                <div className="mt-4">
                  <img src={task2} alt="" />
                </div>
              </div>
              <div>
                <div className="task-result-sbsa">
                  Task 3: Set up an alert for when account balance falls below a
                  certain amount
                </div>
                <div className="mt-4">
                  <img src={task3} alt="" />
                </div>
              </div>
              <div>
                <div className="task-result-sbsa">
                  Task 4: Find transactions related to a specific account
                  subgroup
                </div>
                <div className="mt-4">
                  <img src={task4} alt="" />
                </div>
              </div>
            </div>
            <br />
            <div className="active-time-sbsa">
              <div>Average active time : 6 min</div>
              <div>Average session time : 30 min</div>
              <div>Definition of “Success” : User completes user journey</div>
            </div>
            <br />
            <div className="common-observation-sbsa">
              <h3>Common Observation</h3>
              <ul>
                <li>
                  18 Participants found the new navigation and search features
                  helpful in locating theconsolidated balances.
                </li>
                <li>
                  16 of participants were able to export the report within 1
                  minute.
                </li>
                <li>
                  The remaining 8 needed some assistance in locating the export
                  button, but were able to complete the task within 2 minutes.
                </li>
                <li>
                  21 of participants were able to set up the alert within 1
                  minute.
                </li>
                <li>
                  The remaining 3 needed some guidance in locating the alert
                  settings, but were able to complete the task within 2 minutes.
                </li>
                <li>
                  19 of participants were able to find the transactions within 1
                  minute.
                </li>
                <li>
                  The remaining 5 needed some help in understanding the account
                  subgroup feature, but wereable to complete the task within 2
                  minutes.
                </li>
              </ul>
            </div>
            <br />
            <div className="common-observation-sbsa">
              <h3>Outcomes and changes to interface</h3>
              <ul>
                <li>
                  Continue to prioritise and refine search and navigation
                  features to make them even more user-friendly and intuitive.
                </li>
                <li>
                  Consider providing more prominent and clear labelling for the
                  export and alert settings buttons to further streamline these
                  actions.
                </li>
                <li>
                  Consider providing more visual cues or explanatory text to
                  help users understand the function and benefits of account
                  subgroups.
                </li>
                <li>
                  Continue to prioritise simplifying the information
                  architecture and reducing the number of clicks required to
                  complete actions.
                </li>
                <li>
                  Continue to gather user feedback and iterate on the design to
                  further improve the interface and meet user needs.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="beforeafter-sbsa-bg">
        <div className="inner-container-subex">
          <div className="before-ater-sbsa py-[80px]">
            <h1>Before and after</h1>
            <br />
            <table>
              <tr className="table-sbsa-before">
                <th>Feature</th>
                <th>Legacy Interface</th>
                <th>BOL Interface</th>
              </tr>
              <tr>
                <td>Navigation</td>
                <td>Confusing and cluttered with no clear hierarchy</td>
                <td>
                  Clear and intuitive with consolidated balances and account
                  subgroups prominently displayed
                </td>
              </tr>
              <tr>
                <td>Search Function</td>
                <td>Basic search function with limited filters</td>
                <td>
                  Robust search function with advanced filters and suggestions
                </td>
              </tr>
              <tr>
                <td>Information Architecture</td>
                <td>Poor organization of information</td>
                <td>
                  Improved information architecture with clear categorization
                  and labeling
                </td>
              </tr>
              <tr>
                <td>Cognitive Load</td>
                <td>
                  High cognitive load due to overwhelming amount of information
                </td>
                <td>
                  {" "}
                  Reduced cognitive load with streamlined interface and relevant
                  information displayed prominently
                </td>
              </tr>
              <tr>
                <td>Decision Making</td>
                <td>
                  Making Difficult to make informed decisions due to lack of
                  relevant information
                </td>
                <td>
                  Improved decision making with clear recommendations based on
                  account balances and spending patterns
                </td>
              </tr>
              <tr>
                <td>Customisation</td>
                <td>Limited customization options</td>
                <td>
                  More customization options, including the ability to set
                  alerts and personalize the interface
                </td>
              </tr>
              <tr>
                <td>User Feedback</td>
                <td>Limited opportunities for user feedback</td>
                <td>
                  Active solicitation of user feedback with frequent updates and
                  improvements based on user input
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div className="inner-container-subex">
        <div className="mylearning-sbsa">
          <h1>My Learning</h1>
          <div className="flex">
            <div>icon</div>
            To ensure success in a project of this size, it is crucial for the
            entire team to be involved throughout the process, sharing their
            research findings, discussing roadblocks, and working together
            towards achieving common goals that address both user needs and
            business objectives.
          </div>
          <br />
          <div className="flex">
            <div>icon</div>
            Although we are still evaluating the results based on key
            performance indicators, it is clear that our solutions have had a
            positive impact on usability and user experience.
          </div>
          <br />
          <div className="flex">
            <div>icon</div>
            Above all, this project provided me with the opportunity to work
            with a diverse user base in an unfamiliar industry, which has
            expanded my skills and knowledge as a designer.
          </div>
        </div>
        <div className="mylearning-sbsa mt-[48px]">
          <h1>Future Directions</h1>
          <div className="flex">
            <div>icon</div>
            If I had more time, I would definitely explore the possibilities of
            the "Trigger mechanism" even further. This mechanism plays an
            important role in automatically generating a case based on certain
            triggers, and I believe there is more room for innovation and
            improvement in this area.
          </div>
          <br />
          <div className="flex">
            <div>icon</div>
            Additionally, I would like to add more flexibility to the system to
            accommodate cross-functional users whose goals may not be solely
            focused on case closure. By doing so, we can ensure that the system
            meets the needs of a wider range of users and can be used in various
            contexts.
          </div>
        </div>
        <div className="mylearning-sbsa mt-[48px]">
          <h1>Process & tools</h1>
          <div className="flex p-2">
            <div>
              <h5>Design & Prototyping</h5>
              <p>
                We used Sketch to create and invision to collaborate on the
                design.
              </p>
            </div>
            <div className="mylearning-border-sbsa mx-[30px]"></div>
            <div>
              <h5>Project Tracking</h5>
              <p>
                We used Jira to manage project tasks and track progress ensuring
                that all project requirements were being met.
              </p>
            </div>
            <div className="mylearning-border-sbsa mx-[30px]"></div>
            <div>
              <h5>User Testing Sessions</h5>
              <p>
                We used Guerrilla User testing for testing concepts with the
                users
              </p>
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
  );
}

export default Sbsa;
