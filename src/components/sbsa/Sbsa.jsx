import React from "react";
import "../styles/Sbsa.css";
import yes from "../../assets/sbsa/yes.svg";
import no from "../../assets/sbsa/no.svg";
import male from "../../assets/sbsa/male.svg";
import female from "../../assets/sbsa/female.svg";

function Sbsa() {
  return (
    <div>
      <div className="subex-container">
        <div className="subex-intro-card">
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
          <div className="image-part-intro"></div>
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
                <h4>Small Business Owners</h4>
                <br />
                <div className="ml-4">
                  who use the platform to manage their business finances,
                  transactions, and payments
                </div>
              </div>
              <div>
                <h4>Corporate Finance Managers</h4>
                <br />
                <div className="ml-4">
                  who use the platform to manage multiple accounts, payments,
                  and transactions on behalf of their company
                </div>
              </div>
              <div>
                <h4>Treasury Managers</h4>
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
            <div>icon</div>
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
            <div>icon</div>
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
            <div>icon</div>
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
                  <div>icon</div>
                  <strong>
                    The aim of this usability report is to assess the
                    effectiveness and ease of use of the consolidated statement
                    feature in the Standard Bank South Africa's Business Online
                    (BOL) portal.
                  </strong>
                </p>
                <br />
                <p className="flex">
                  <div>icon</div>
                  Participants: The usability testing was conducted with a
                  diverse group of 6 participants who had previous experience
                  using the portal.
                </p>
                <br />
                <p className="flex">
                  <div>icon</div>
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
                  <div>icon</div>
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
                  <div>icon</div>
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
                  <div>icon</div>
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
              We started by conducting <strong>user interviews</strong> and <strong>testing</strong> of the legacy
              interface to gather insights from Standard Bank users about their
              experiences with the existing system.
            </p>
          </div>
          <br />
          <div className="brainstorm-sbsa">
            <h3>Step #1: Brainstorming</h3>
            <br />
            <p>
              We used <strong>SCAMPER</strong> a Creative Thinking Technique to generate ideas
              for improving the Consolidated Balances feature of BOL. The
              Scamper report below outlines the different areas that we examined
              and the ideas that we generated.
            </p>

            <div>
              The results of the SCAMPER technique led to the generation of
              numerous innovative ideas for improving the consolidated balances
              feature of BOL.We applied the Substitute and Combine techniques to
              the Consolidated Balances feature of BOL.
            </div>
            <div>
              We substituted the current static interface with a dynamic one
              that updates in real-time, combining it with a feature that allows
              users to set alerts for certain account activity.
            </div>
            <p>View SCAMPER report</p>
          </div>
          <div className="categorized-idea-sbsa">
            <h3>Step #2: Categorized Ideas</h3>
            <p>
              We found that many of the ideas generated fell under the theme of
              improving the interface's functionality and customization options.
              Some examples of ideas that emerged from the brainstorming
              sessions include:
            </p>
            <div>
              <h5>Simplification of Navigation and Information Architecture</h5>
              <p>
                Simplifying the navigation of the feature to make it more
                intuitive and user-friendly.
              </p>
            </div>
            <div>
              <h5>Visualisation and Presentation</h5>
              <p>
                Introducing interactive graphs to visualise account activity
                over time.
              </p>
            </div>
            <div>
              <h5>Recommendation and Suggestion</h5>
              <p>
                Adding a feature that recommends actions to take based on
                account balances and spending patterns.
              </p>
            </div>
            <div>
              <h5>Customisation and Alerting</h5>
              <p>
                Allowing users to set and customise alerts for specific account
                activity, such as when a transaction exceeds a certain amount or
                when a bill payment is due.
              </p>
            </div>
          </div>
          <div className="prioritization-sbsa">
            <h3>Step #3: Prioritization</h3>
            <p>
              We then used SCAMPER brainstorming exercises to generate ideas and
              categorised them based on common themes. From these, we
              prioritised the top ideas, including:
            </p>
            <div>
              <h5>Simplification of Navigation and Information Architecture</h5>
              <p>
                This idea was prioritised because it addresses a fundamental
                issue with the feature's usability, which was a significant pain
                point for users during testing. By making it easier for users to
                find and understand the information they need, we can improve
                the overall user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="inner-container-subex">
          <div className="solution-building-sbsa">
            <br />
            <h1>Solution Building</h1>
            <p>
              After the ideation sessions, we conducted a thorough analysis of
              the existing IA and information flow of the platform.
            </p>
            <h4>User Workflow</h4>
            <ul>
              <li>
                As a result of ideation sessions and input from users and
                business, we simplified the IA and improved the information flow
                and user flow.
              </li>
              <li>
                The user flow has been optimised, with intuitive paths that make
                it easier for users to complete tasks efficiently. With the
                reduced clicks to perform actions, users can accomplish their
                tasks faster, which improves their overall experience with the
                platform.
              </li>
            </ul>
            <div>Graph</div>
          </div>
          <div className="partition-line-sbsa"></div>
          <div className="approach1-sbsa">
            <p>
              After conducting multiple brainstorming sessions, we shifted our
              focus towards finding solutions to the challenges faced by users
              while navigating and locating menus on the platform. Following a
              few iterations, we finalised on two approaches to tackle these
              issues, which are:
            </p>
            <div>
              <div>
                <h4>Approach #1</h4>
                <ol>
                  <li>
                    We suggested putting the consolidated balances feature in
                    the level 1 of the navigation, along with Accounts,
                    Balances, Find a Transaction and Download Report.
                  </li>
                  <li>
                    Additionally, we recommended including All Account and
                    Accounts Subgroups under the Accounts tab at level 2, along
                    with search and refresh options that are prominently
                    displayed on the page.
                  </li>
                </ol>
                <h5>Impact:</h5>
                <ul>
                  <li>
                    Approach 1 reduces cognitive load and improve
                    decision-making for the user. By organising the information
                    architecture in a clear and intuitive manner, users can
                    quickly find the information they need and make informed
                    decisions about their finances.
                  </li>
                  <li>
                    The search and refresh options also provide users with easy
                    ways to filter and update the data, further enhancing the
                    usability of the feature.
                  </li>
                </ul>
              </div>
              <div>Image</div>
            </div>
          </div>
          <div className="partition-line-sbsa"></div>
          <div className="approach2-sbsa">
            <div>
              <h3>Approach #2</h3>
              <ol>
                <li>
                  we have added prominent print, export, and consolidate CTAs
                  upfront on the page, making them easily accessible to users
                  without requiring them to search for these options.
                </li>
              </ol>
              <h5>Impact:</h5>
              <ul>
                <li>
                  Approach 2 aims to reduce the cognitive load and
                  decision-making effort required by users by providing them
                  with easy access to the most important and commonly used
                  features.
                </li>
                <li>
                  We reduced the number of steps required for users to perform
                  these actions frequently, which not only saved them time but
                  also aligns with their mental model of where these options
                  should be located on the page.
                </li>
              </ul>
            </div>
            <div>image</div>
          </div>
          <div className="deliver-wireframes-sbsa">
            <h1>Deliver: Wireframes</h1>
            <div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="partition-line-sbsa"></div>
            <h1>Deliver: Visual Design</h1>
            <div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="testing-report-sbsa">
          <h1>User Testing Report</h1>
          <div>
            <div>
              <div>
                <h5>Objective</h5>
                <p>
                  The purpose of this user testing was to evaluate the
                  effectiveness of the new design changes to the consolidated
                  balances feature in BOL. The testing was conducted with 30
                  participants who are current BOL users with varying levels of
                  experience using the platform.
                </p>
                <p>37 video sessions, 14 questionnaire responses</p>
              </div>
              <div>
                <h3>Tasks</h3>
                <p>Participants were asked to complete the following tasks:</p>
                <ol>
                  <li>
                    Find their consolidated balances for the month of January.
                  </li>
                  <li>
                    Export a report of their consolidated balances for the past
                    6 months.
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
            </div>
            <div>
              <div>Image1</div>
              <div>Image2</div>
            </div>
          </div>
          <div className="summary-results-sbsa">
            <h3>Summary Results</h3>
            <p>
              Overall, the new design changes were well received by
              participants. All participants were able to complete the tasks
              successfully, with an average completion time of 6 minutes and 30
              seconds.
            </p>
            <p>
              6 users bounced before starting the test, the remaining 24 did the
              following:
            </p>
            <div>
              <div>
                <div className="task1-result-sbsa">
                  Task 1: Find consolidated balances for the month of January
                </div>
                <div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div>
                <div className="task2-result-sbsa">
                  Task 2: Export a report of consolidated balances for the past
                  6 months
                </div>
                <div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div>
                <div className="task3-result-sbsa">
                  Task 3: Set up an alert for when account balance falls below a
                  certain amount
                </div>
                <div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div>
                <div className="task4-result-sbsa">
                  Task 4: Find transactions related to a specific account
                  subgroup
                </div>
                <div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div>
                <div>Average active time : 6 min</div>
                <div>Average session time : 30 min</div>
                <div>Definition of “Success” : User completes user journey</div>
              </div>
            </div>
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
          </div>
        </div>
        <div className="before-ater-sbsa">
          <table>
            <th>
              <tr>Feature</tr>
              <tr>Legacy Interface</tr>
              <tr>BOL Interface</tr>
            </th>
            <td>
              <tr>Navigation</tr>
              <tr>Confusing and cluttered with no clear hierarchy</tr>
              <tr>
                Clear and intuitive with consolidated balances and account
                subgroups prominently displayed
              </tr>
            </td>
            <td>
              <tr>Search Function</tr>
              <tr>Basic search function with limited filters</tr>
              <tr>
                Robust search function with advanced filters and suggestions
              </tr>
            </td>
            <td>
              <tr>Information Architecture</tr>
              <tr>Poor organization of information</tr>
              <tr>
                Improved information architecture with clear categorization and
                labeling
              </tr>
            </td>
            <td>
              <tr>Cognitive Load</tr>
              <tr>
                High cognitive load due to overwhelming amount of information
              </tr>
              <tr>
                Reduced cognitive load with streamlined interface and relevant
                information displayed prominently
              </tr>
            </td>
            <td>
              <tr>Decision Making</tr>
              <tr>
                Making Difficult to make informed decisions due to lack of
                relevant information
              </tr>
              <tr>
                Improved decision making with clear recommendations based on
                account balances and spending patterns
              </tr>
            </td>
            <td>
              <tr>Customisation</tr>
              <tr>Limited customization options</tr>
              <tr>
                More customization options, including the ability to set alerts
                and personalize the interface
              </tr>
            </td>
            <td>
              <tr>User Feedback</tr>
              <tr>Limited opportunities for user feedback</tr>
              <tr>
                Active solicitation of user feedback with frequent updates and
                improvements based on user input
              </tr>
            </td>
          </table>
        </div>
        <div className="mylearning-sbsa">
          <h1>My Learning</h1>
          <div>
            To ensure success in a project of this size, it is crucial for the
            entire team to be involved throughout the process, sharing their
            research findings, discussing roadblocks, and working together
            towards achieving common goals that address both user needs and
            business objectives.
          </div>
          <div>
            Although we are still evaluating the results based on key
            performance indicators, it is clear that our solutions have had a
            positive impact on usability and user experience.
          </div>
          <div>
            Above all, this project provided me with the opportunity to work
            with a diverse user base in an unfamiliar industry, which has
            expanded my skills and knowledge as a designer.
          </div>
        </div>
        <div className="future-directions-sbsa">
          <div>
            If I had more time, I would definitely explore the possibilities of
            the "Trigger mechanism" even further. This mechanism plays an
            important role in automatically generating a case based on certain
            triggers, and I believe there is more room for innovation and
            improvement in this area.
          </div>
          <div>
            Additionally, I would like to add more flexibility to the system to
            accommodate cross-functional users whose goals may not be solely
            focused on case closure. By doing so, we can ensure that the system
            meets the needs of a wider range of users and can be used in various
            contexts.
          </div>
        </div>
        <div className="process-tools-sbsa">
          <h1>Process & tools</h1>
          <div>
            <div>
              <h5>Design & Prototyping</h5>
              <p>
                We used Sketch to create and invision to collaborate on the
                design.
              </p>
            </div>
            <div>
              <h5>Project Tracking</h5>
              <p>
                We used Jira to manage project tasks and track progress ensuring
                that all project requirements were being met.
              </p>
            </div>
            <div>
              <h5>User Testing Sessions</h5>
              <p>
                We used Guerrilla User testing for testing concepts with the
                users
              </p>
            </div>
          </div>
        </div>
        <div>
          <div>Previous Case Study</div>
          <div>Next Case Study</div>
        </div>
      </div>
    </div>
  );
}

export default Sbsa;
