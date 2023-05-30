import React from "react";
import { useNavigate } from "react-router-dom";
import Wireframe from "../sliders/Wireframe";
import tripp from "../../assets/trippez/tripp.png";
import flag from "../../assets/trippez/flag.svg";
import check from "../../assets/trippez/check_circle.svg";
import hiking from "../../assets/trippez/hiking.svg";
import family from "../../assets/trippez/family.svg";
import g1 from "../../assets/trippez/g1.png";
import g2 from "../../assets/trippez/g2.png";
import g3 from "../../assets/trippez/g3.png";
import g4 from "../../assets/trippez/g4.png";
import u1 from "../../assets/trippez/u1.png";
import u2 from "../../assets/trippez/u2.png";
import u3 from "../../assets/trippez/u3.png";
import u4 from "../../assets/trippez/u4.png";
import u5 from "../../assets/trippez/u5.png";
import cc1 from "../../assets/trippez/cc1.png";
import cc2 from "../../assets/trippez/cc2.png";
import cc3 from "../../assets/trippez/cc3.png";
import garrow from "../../assets/trippez/Garrow.svg";
import check_circle from "../../assets/pgos/check_circle.svg";
import cancel from "../../assets/trippez/cancel.svg";
import auto_stories from "../../assets/trippez/auto_stories.svg";
import currency from "../../assets/trippez/curren.svg";
import map from "../../assets/trippez/map.svg";
import travel_explore from "../../assets/trippez/travel_explore.svg";
import airline_stops from "../../assets/trippez/airline_stops.svg";
import recommend from "../../assets/trippez/recommend.svg";
import reviews from "../../assets/trippez/reviews.svg";
import language_chinese_quick from "../../assets/trippez/language_chinese_quick.svg";
import loyalty from "../../assets/trippez/loyalty.svg";
import eco from "../../assets/trippez/eco.svg";
import support_agent from "../../assets/trippez/support_agent.svg";
import directive_4 from "../../assets/trippez/diversity_4.svg";
import arrow from "../../assets/pgos/Arrow.svg";
import arrowBack from "../../assets/arrowBack.svg";
import arrowFor from "../../assets/arrowFor.svg";

function Trippiez() {
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
    <div>
      <div className="subex-container">
        <div className="subex-intro-card flex">
          <div className="text-part-intro w-3/5">
            <h1 className="heading-intro-subex">
              Designing Trippiez's booking platform to enhance bookings and
              travel experience.
            </h1>
            <br />
            <p className="para-intro-card">
              We focused on creating an intuitive and visually appealing design
              that simplifies the booking process, streamlines payment options,
              and incorporates user feedback for continuous improvement.
            </p>
            <br />
            <div className="timeline-intro-card">
              <div className="flex-titles-intro">
                <div className="headers-top-intro">TimeLine</div>
                <div className="title-details-intro">Jan 2016 - July 2016</div>
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
                <div>1 Hybrid Designer [Me]</div>
                <div>1 UI Designer </div>
                <div>Graphic Designer</div>
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
            <img src={tripp} loading="lazy" alt="" />
          </div>
        </div>
        <div className="inner-container-subex">
          <div className="context-background-subex context-background-tripp">
            <h1 className=".f700-32-39">Context and Background</h1>
            <br />
            <p>
              The Idea of Trippiez was coined by a group of travel enthusiasts
              who wanted to help others discover new and unfamiliar travel
              destinations based on their budget. As X-IITians from Madras, they
              knew the joys of travel and adventure, but also recognised that
              many people were unable to experience the same due to financial
              constraints.
            </p>
            <br />
            <p>
              The project ask was to design and develop a user-centred website
              that would enable users to discover new travel destinations based
              on their budget and then book air tickets and hotel accommodation
              on the same platform.
            </p>
            <p>
              The goal was to create a website that would provide users with a
              seamless and personalised travel experience, tailored to their
              individual preferences and financial constraints.
            </p>
          </div>
          <br />
          <div className="solution-tripp">
            <h1 className="flex gap-4">
              <div className="">
                <img src={flag} alt="" />
              </div>
              The Solutions
            </h1>
            <br />
            <div>
              <div>
                <img src={check} alt="" />
              </div>
              <div>
                The budget-based search feature simplifies travel planning by
                allowing users to filter results based on their budget
                preferences. This saves time and minimises frustration by
                eliminating irrelevant options.
              </div>
            </div>
            <br />
            <div>
              <div>
                <img src={check} alt="" />
              </div>
              <div>
                The interactive map feature visually displays destinations and
                accommodations for informed decision-making based on location
                and proximity to attractions, providing an engaging user
                experience and increasing satisfaction.
              </div>
            </div>
            <br />
            <div>
              <div>
                <img src={check} alt="" />
              </div>
              <div>
                The 1-stop booking feature for hotels and flights streamlines
                the process, enabling users to book their accommodations and
                transportation at a single platform. It saves time and provides
                a seamless and convenient experience, enhancing user
                satisfaction and loyalty.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-change-tripp">
        <div className="inner-container-subex py-[64px]">
          <div className="ideate-sbsa research-tripp">
            <h1>Research</h1>
            <br />
            <p>
              We conduct both primary and secondary research to gain a deeper
              understanding of the target audience and the competitive
              landscape. Primary research involves collecting new data directly
              from users through surveys, interviews, or observations.
            </p>
            <br />
            <p>
              By conducting primary research, I can gain firsthand information
              about users' needs, behaviors, and pain points, which allows me to
              develop more effective design solutions that meet their specific
              needs.
            </p>
          </div>
          <br />
          <div className="user-target-tripp">
            <h3>Primary Target Users</h3>
            <br />
            <div className="flex w-[90%] gap-8 users-tripp">
              <div>
                <div className="user-type-tripp mb-2">Primary Users</div>
                <div className="flex gap-3">
                  <div>
                    <img src={hiking} alt="" />
                  </div>
                  Typically individuals who love to travel but are looking for
                  new and unfamiliar travel destinations based on their budget
                </div>
              </div>
              <div>
                <div className="user-type-tripp mb-2">Secondary Users</div>
                <div className="flex gap-3">
                  <div>
                    <img src={family} alt="" />
                  </div>
                  Solo travelers, Couples, Families, or groups of friends. May
                  come from different parts of the world
                </div>
              </div>
            </div>
            <br />
            <h4 className="demography-title mb-[12px]">Demographics</h4>
            <div className="flex demographies-tripp justify-between flex-wrap">
              <div>
                <div>Students</div>
                <ul>
                  <li>
                    Typically between the ages of 18-24 and may be on a tight
                    budget
                  </li>
                  <li>
                    May prioritise unique experiences and cultural immersion
                    over luxury accommodations
                  </li>
                  <li>Often travel in groups or with friends</li>
                  <li>
                    May be looking for affordable transportation options such as
                    trains or buses
                  </li>
                </ul>
              </div>
              <div>
                <div>Young professionals</div>
                <ul>
                  <li>
                    Between the ages of 25-40 and may have a bit more disposable
                    income
                  </li>
                  <li>May prioritise convenience and comfort when traveling</li>
                  <li>
                    Often travel for work and may look for business-friendly
                    accommodations and transportation options
                  </li>
                  <li>
                    May be interested in more upscale dining and entertainment
                    options
                  </li>
                </ul>
              </div>
              <div>
                <div>Older individuals</div>
                <ul>
                  <li>
                    Typically over the age of 50 and may be retired or on a
                    fixed income
                  </li>
                  <li>
                    May prioritize cultural and historical experiences over
                    luxury accommodations
                  </li>
                  <li>Often travel with a partner or spouse</li>
                  <li>
                    May be interested in slower-paced travel options such as
                    river cruises or guided tours
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-wrap personality-tripp justify-between mt-[24px] mb-[40px]">
              <div>
                <div>Personality</div>
                <ul>
                  <li>
                    Typically tech-savvy and comfortable using online platforms
                    to plan and book travel
                  </li>
                  <li>
                    Tend to prioritise experiences over material possessions
                  </li>
                  <li>
                    Often seek to travel for personal growth and self-discovery
                  </li>
                  <li>
                    May be budget-conscious and looking for affordable travel
                    options
                  </li>
                  <li>
                    May be eco-conscious and interested in sustainable travel
                    practices
                  </li>
                </ul>
              </div>
              <div>
                <div className="user-type-tripp">Interests</div>
                <ul>
                  <li>
                    Students: Typically on a tight budget and may be interested
                    in affordable travel options, such as hostels or
                    budget-friendly accommodations. May be looking to travel
                    with friends or as part of a study abroad program.
                  </li>
                  <li>
                    Young professionals: May be interested in higher-end
                    accommodations and experiences, but still value
                    affordability.
                  </li>
                  <li>
                    Older individuals looking for a budget-friendly way to
                    explore new destinations: May be looking for low-cost travel
                    options that still provide comfort and convenience.
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-wrap justify-between down-buttons-tripp">
              <div>Adventure seekers</div>
              <div>Cultural enthusiasts</div>
              <div>Beach lovers</div>
              <div>Wildlife and nature enthusiasts</div>
              <div>City explorers and urbanites</div>
            </div>
            <div className="flex flex-wrap justify-between down-buttons-tripp mt-[12px]">
              <div>Music and festival goers</div>
              <div>Art and design aficionados</div>
              <div>Solo travelers</div>
              <div>Luxury and high-end travel seekers</div>
              <div>Family vacationers</div>
            </div>
          </div>
          <div className="user-testimonial-tripp mt-[56px]">
            <div>
              <div className="user-verbatism-tripp">
                <div>
                  <img src={u1} alt="" />
                </div>
                <div>
                  <div>
                    I find it hard to know where to start with so many different
                    travel options available.
                  </div>
                  <p>Gazali Oztepe</p>
                </div>
              </div>
              <div className="user-verbatism-tripp">
                <div>
                  <img src={u2} alt="" />
                </div>
                <div>
                  <div>
                    I find it frustrating when I can't find clear and concise
                    information on travel websites, such as pricing and
                    availability.
                  </div>
                  <p>Arlene McCoy</p>
                </div>
              </div>
            </div>
            <div className="user-verbatism-tripp2 mx-auto">
              <div>
                <img src={u3} alt="" />
              </div>
              <div>
                <div>
                  Sustainable travel is really important to me, I always try to
                  stay in eco-friendly accommodations.
                </div>
                <p>Idris Konak</p>
              </div>
            </div>
            <div>
              <div className="user-verbatism-tripp">
                <div>
                  <img src={u4} alt="" />
                </div>
                <div>
                  <div>
                    It's important for me to have flexibility in my travel
                    plans, as unexpected events can arise.
                  </div>
                  <p>Kerem Topcu</p>
                </div>
              </div>
              <div className="user-verbatism-tripp">
                <div>
                  <img src={u5} alt="" />
                </div>
                <div>
                  <div>
                    I like to be able to personalize my travel experiences based
                    on my interests and preferences.
                  </div>
                  <p>Necla Eyici</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="parttion-line-tripp"></div>
        <div className="inner-container-subex pb-[80px]">
          <p className="graphs-para-tripp">
            I wanted to make sure that our platform truly meets the needs of our
            users. To gain insights into what potential users wanted and what
            their concerns were, I conducted a survey. Through this survey, we
            were able to gather valuable information about their travel needs
            and behavior, as well as their preferences for travel booking
            platforms.
          </p>
          <div className="graph-tripp">
            <div>
              <h4>What is your preferred budget range for travel?</h4>
              <p>20 Responses </p>
              <img src={g1} alt="" />
            </div>
            <div>
              <h4>What is your preferred method of travel?</h4>
              <p>18 Responses </p>
              <img src={g2} alt="" />
            </div>
            <div>
              <h4>
                What types of destinations are you most interested in visiting?
              </h4>
              <p>25 Responses </p>
              <img src={g3} alt="" />
            </div>
            <div>
              <h4>What is your preferred accommodation type?</h4>
              <p>22 Responses </p>
              <img src={g4} alt="" />
            </div>
          </div>
          <div className="pie-graph-tripp">
            <div>
              <div>Must-haves when booking an accommodation?</div>
              <div className="mx-auto w-[129px] my-[20px]">
                <img src={cc1} alt="" />
              </div>
              <div>
                <ul>
                  <li>27% | Affordable price</li>
                  <li>23% | Proximity to attractions</li>
                  <li>21% | Free Wi-Fi</li>
                  <li>19% | Cleanliness</li>
                </ul>
              </div>
            </div>
            <div>
              <div>How often do you travel?</div>
              <div className="mx-auto w-[129px] my-[20px]">
                <img src={cc2} alt="" />
              </div>
              <div>
                <ul>
                  <li>46% | Once a year</li>
                  <li>39% | 2-3 times a year</li>
                  <li>9% | 4-6 times a year</li>
                  <li>6% | More than 6 times a year</li>
                </ul>
              </div>
            </div>
            <div>
              <div>How concerned are you about security when traveling?</div>
              <div className="mx-auto w-[129px] my-[20px]">
                <img src={cc3} alt="" />
              </div>
              <div>
                <ul>
                  <li>37% | Very concerned</li>
                  <li>44% | Somewhat concerned</li>
                  <li>15% | Not very concerned</li>
                  <li>4% | Not at all concerned</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="graphs-para-tripp mt-[44px]">
            With this information in hand, we can tailor our platform to better
            meet the needs of our users and provide a more seamless and
            enjoyable travel booking experience.
          </p>
        </div>
      </div>
      <div>
        <div className="inner-container-subex">
          <div className="secondary-research-tripp">
            <br />
            <h3>Secondary Research </h3>
            <p>
              I conducted a competitive analysis to gain insights into the
              strengths and weaknesses of our competitors in the travel
              industry. By analyzing the features offered by Expedia.com,
              Kayak.com, and Lonelyplanet.com, I was able to identify areas
              where we can improve and areas where we are already ahead of the
              competition.
            </p>
            <table>
              <tr className="table1-tripp">
                <th className="table-header-tripp w-2/5">Comparison Points</th>
                <th className="w-1/5">Expedia</th>
                <th className="w-1/5">Kayak</th>
                <th className="w-1/5">Lonelyplanet</th>
              </tr>
              <tr>
                <td className="table-details-tripp">Search by budget</td>
                <td>
                  <img src={check_circle} alt="" />
                </td>
                <td>
                  <img src={check_circle} alt="" />
                </td>
                <td>
                  <img src={cancel} alt="" />
                </td>
              </tr>
              <tr>
                <td className="table-details-tripp">
                  Book air tickets and hotels
                </td>
                <td>
                  <img src={check_circle} alt="" />
                </td>
                <td>
                  <img src={check_circle} alt="" />
                </td>
                <td>
                  <img src={cancel} alt="" />
                </td>
              </tr>
              <tr>
                <td className="table-details-tripp">
                  Personalized recommendations
                </td>
                <td>
                  <img src={check_circle} alt="" />
                </td>
                <td>
                  <img src={check_circle} alt="" />
                </td>
                <td>
                  <img src={check_circle} alt="" />
                </td>
              </tr>
              <tr>
                <td className="table-details-tripp">
                  User reviews and ratings
                </td>
                <td>
                  <img src={check_circle} alt="" />
                </td>
                <td>
                  <img src={check_circle} alt="" />
                </td>
                <td>
                  <img src={check_circle} alt="" />
                </td>
              </tr>
              <tr>
                <td className="table-details-tripp">Trip planning tools</td>
                <td>
                  <img src={check_circle} alt="" />
                </td>
                <td>
                  <img src={check_circle} alt="" />
                </td>
                <td>
                  <img src={check_circle} alt="" />
                </td>
              </tr>
              <tr>
                <td className="table-details-tripp">Vacation packages</td>
                <td>
                  <img src={check_circle} alt="" />
                </td>
                <td>
                  <img src={check_circle} alt="" />
                </td>
                <td>
                  <img src={check_circle} alt="" />
                </td>
              </tr>
              <tr>
                <td className="table-details-tripp">Loyalty program</td>
                <td>
                  <img src={check_circle} alt="" />
                </td>
                <td>
                  <img src={check_circle} alt="" />
                </td>
                <td>
                  <img src={cancel} alt="" />
                </td>
              </tr>
              <tr>
                <td className="table-details-tripp">Mobile app</td>
                <td>
                  <img src={check_circle} alt="" />
                </td>
                <td>
                  <img src={check_circle} alt="" />
                </td>
                <td>
                  <img src={check_circle} alt="" />
                </td>
              </tr>
            </table>
          </div>
          <div className="goal-pain-tripp mt-[120px]">
            <h1>User Goals & Pain Points</h1>
            <div className="goal-pain-div-tripp">
              <div>
                <h4>User Goals</h4>
                <div>
                  <img src={arrow} alt="" /> Finding the best travel deals for
                  their budget
                </div>
                <div>
                  <img src={arrow} alt="" /> Discovering new and interesting
                  travel destinations
                </div>
                <div>
                  <img src={arrow} alt="" /> Booking flights and accommodations
                  easily and quickly
                </div>
                <div>
                  <img src={arrow} alt="" />
                  Having a personalized travel experience based on their
                  preferences
                </div>
                <div>
                  <img src={arrow} alt="" />
                  Accessing reliable and up-to-date information about their
                  destination
                </div>
              </div>
              <div>
                <h4>Pain points</h4>
                <div>
                  <img src={garrow} alt="" />
                  Feeling overwhelmed by the amount of information available
                  online
                </div>
                <div>
                  <img src={garrow} alt="" />
                  Difficulty finding trustworthy reviews and recommendations
                </div>
                <div>
                  <img src={garrow} alt="" />
                  Limited budget for travel
                </div>
                <div>
                  <img src={garrow} alt="" />
                  Lack of knowledge about the local culture and customs
                </div>
                <div>
                  <img src={garrow} alt="" />
                  Unpredictable weather or travel disruptions that can affect
                  their plans
                </div>
              </div>
            </div>
          </div>
          <p className="goal-pain-p-tripp">
            After conducting user research and identifying the needs and pain
            points of Trippiez users, we have prioritized a list of product
            features that address these issues and improve the overall user
            experience. Our priorities are based on a combination of user
            feedback, industry standards, and business goals.
          </p>
          <br />
          <strong>
            By implementing these features, Trippiez can enhance its platform
            and establish itself as a leader in the travel industry.
          </strong>
          <div className="feature-trppiz flex flex-wrap justify-between mt-[40px]">
            <div>
              <div>
                <img src={currency} alt="" />
              </div>
              <div className="feature-title">Budget filter</div>
              <p>
                Allow users to search for travel destinations based on their
                budget.
              </p>
            </div>
            <div>
              <div>
                <img src={auto_stories} alt="" />
              </div>
              <div className="feature-title">One-stop booking</div>
              <p>
                Allow users to book flights, hotels, and activities on the same
                website, reducing the hassle of searching for multiple bookings.
              </p>
            </div>
            <div>
              <div>
                <img src={map} alt="" />
              </div>
              <div className="feature-title">Interactive maps</div>
              <p>
                Offer interactive maps to help users explore the destination and
                plan their itinerary.
              </p>
            </div>
            <div>
              <div>
                <img src={airline_stops} alt="" />
              </div>
              <div className="feature-title">Multi-destination booking</div>
              <p>
                Allow users to book flights and accommodations for multiple
                destinations in a single transaction.
              </p>
            </div>
            <div>
              <div>
                <img src={travel_explore} alt="" />
              </div>
              <div className="feature-title">Trip planning tools</div>
              <p>
                Provide users with tools to plan their trip, including packing
                lists, weather forecasts, and transportation options.
              </p>
            </div>
            <div>
              <div>
                <img src={recommend} alt="" />
              </div>
              <div className="feature-title">Personalised recommendations</div>
              <p>
                Provide customised travel recommendations based on user
                preferences and history.
              </p>
            </div>
            <div>
              <div>
                <img src={reviews} alt="" />
              </div>
              <div className="feature-title">Reviews and ratings</div>
              <p>
                Provide user-generated reviews and ratings for destinations,
                hotels, and activities to help users make informed decisions.
              </p>
            </div>
            <div>
              <div>
                <img src={language_chinese_quick} alt="" />
              </div>
              <div className="feature-title">Multi-language support</div>
              <p>
                Offer support in multiple languages to cater to a diverse user
                base.
              </p>
            </div>
            <div>
              <div>
                <img src={loyalty} alt="" />
              </div>
              <div className="feature-title">Loyalty rewards program</div>
              <p>
                Offer a loyalty program to reward users for their frequent
                bookings and encourage repeat business.
              </p>
            </div>
            <div>
              <div>
                <img src={eco} alt="" />
              </div>
              <div className="feature-title">Sustainable travel options</div>
              <p>
                eco-friendly stay and carbon offsets to attract environmentally
                conscious users
              </p>
            </div>
            <div>
              <div>
                <img src={directive_4} alt="" />
              </div>
              <div className="feature-title">Social sharing</div>
              <p>
                Enable users to share their travel experiences on social media,
                increasing brand promotion and engagement with potential
                customers.
              </p>
            </div>
            <div>
              <div>
                <img src={support_agent} alt="" />
              </div>
              <div className="feature-title">24/7 customer service</div>
              <p>
                Provide round-the-clock customer service to address any issues
                or concerns.
              </p>
            </div>
          </div>
          <div className="partition-line-sbsa my-[64px]"></div>

          <div className="value-principle-tripp">
            <h1>Aligning Our Values with Experience Principles</h1>
            <p>
              We conducted thorough research and gathered insights from our
              users. Next, we defined experience principles that aligned with
              the business pillars of the project to guide the design of
              Trippiez. This approach ensured that the product catered to the
              needs of both users and the business.
            </p>
            <div className="budget-search-tripp mt-[48px] relative">
              <div className="budget-image">
                <img
                  src="/images/trippiez/02_Trippiez.png"
                  loading="lazy"
                  alt=""
                />
              </div>
              <div>
                <h3>Budget-Based Search</h3>
                <ul>
                  <li>
                    Allows users to easily filter search results based on their
                    budget preferences
                  </li>
                  <li>
                    The feature saves time and reduces frustration by
                    eliminating irrelevant search results
                  </li>
                  <li>Users can find affordable travel options with ease</li>
                  <li>
                    The feature provides a personalized experience for users
                  </li>
                  <li>
                    It improves the overall user experience by making travel
                    planning easier and more efficient.
                  </li>
                </ul>
              </div>
              <div className="budget-based1">1</div>
            </div>
            <div className="interactive-tripp relative">
              <div className="budget-based2">2</div>
              <div>
                <h3>Interactive Map</h3>
                <ul>
                  <li>Visually explore destinations and accommodations</li>
                  <li>
                    Help users make informed decisions based on location and
                    proximity to attractions
                  </li>
                  <li>
                    Provides a more engaging and interactive experience for
                    users
                  </li>
                  <li>Improves overall satisfaction with the platform.</li>
                </ul>
              </div>
              <div className="budget-image">
                <img
                  src="/images/trippiez/03_Trippiez.png"
                  loading="lazy"
                  alt=""
                />
              </div>
            </div>
            <div className="stop-booking-tripp relative">
              <div className="budget-image">
                <img
                  src="/images/trippiez/05_Trippiez.png"
                  loading="lazy"
                  alt=""
                />
              </div>
              <div>
                <h3> 1-Stop Booking</h3>
                <ul>
                  <li>
                    Allows users to book both their accommodations and
                    transportation in one place, reducing the time and effort
                    required to plan a trip
                  </li>
                  <li>
                    Provides a seamless and convenient experience for users by
                    eliminating the need to navigate multiple websites or
                    platforms for booking
                  </li>
                  <li>
                    Can potentially save users money by offering package deals
                    or discounts for booking both flights and hotels together
                  </li>
                </ul>
              </div>
              <div className="budget-based1">3</div>
            </div>
          </div>
        </div>
        <div className="wireframe-tripp-bg">
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
            </div>
          </div>
          <div className="partition-line-sbsa my-[72px]"></div>
          <div>
            <div className="inner-container-subex">
              <div className="deliver-wireframes-sbsa pb-[80px]">
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
      </div>
      <div className="inner-container-subex">
        <div className="mylearning-sbsa">
          <h1>My Learning</h1>
          <div className="flex items-baseline gap-[10px]">
            <img src={arrow} alt="" />
            Working on the Trippiez project, I gained valuable experience in
            designing for the travel and hospitality industry. I learned how to
            incorporate features that address the specific needs of travelers,
            such as search filters for budget and location, personalized
            recommendations, and social sharing capabilities.
          </div>
          <br />
          <div className="flex items-baseline gap-[10px]">
            <img src={arrow} alt="" />I recognized the significance of
            delivering a smooth and user-friendly experience, as travel planning
            can be complicated and overwhelming for many users.
          </div>
        </div>
        <div className="mylearning-sbsa mt-[48px]">
          <h1>Future Directions</h1>
          <div className="flex items-baseline gap-[10px]">
            <img src={arrow} alt="" />
            There are several potential future directions for Trippiez that
            could help it continue to grow and succeed. One direction would be
            to focus on expanding the range of travel options available on the
            platform, such as offering more off-the-beaten-path destinations and
            unique travel experiences.
          </div>
          <br />
          <div className="flex items-baseline gap-[10px]">
            <img src={arrow} alt="" />
            Trippiez could include expanding the platform to offer more unique
            and immersive travel experiences, integrating augmented or virtual
            reality features to enhance trip planning and preview, implementing
            a loyalty or rewards program to incentivize repeat usage, and
            continuing to prioritize sustainability and eco-friendly options for
            environmentally conscious users.
          </div>
        </div>
        <div className="navigation-subex">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => LinkFn("/dell")}
          >
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

export default Trippiez;
