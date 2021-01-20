import * as React from "react"
// Import the nav bar & footer layout
import Layout from "../components/layout"
// Import the Job Description component
import Jobdescription from "../components/job-descriptions"
// Import the meta description in the head
import Head from "../components/head"
// Import header section component
import Header from "../components/header"



const ToolPage = () => {
    return (
      <Layout>
          {/* Include SEO description of the page */}
                         <Head
                         title="Job Descriptions Templates For Tech Startup "
                         description="60+ growth tools you can start using right now, from marketing automation to product analytics."
                         keyword="marketing tool"
                         ></Head>

                {/* Start of the header for page */}
                <Header
                title="Job Description Templates"
                color="3"
                p1="You will notice as your startup grows, hiring becomes one of your main activities."
                p2="Hiring the right person starts with crafting a job description capable enough attracting your top candidates. Below are job descriptions for tech roles - feel free to copy, paste and change the description as you like."
                btn2text="Google Doc"
                btn2link="https://docs.google.com/document/d/1mFd8qY8_0JuEuHnJ7zEBHSjV-gxKkhpwqnnTa2slB0I/edit"
>
                </Header>

    <div className="container pt-5 pb-5">
        <div  className="row">
     

            <div id="explore" className="col-md-3 mb-3">
                <nav  className="nav flex-column sticky-top">
                <a className="nav-link text-3-dark plain-hover-3" href="#backenddev">Backend Developer</a>
                    <a className="nav-link text-3-dark plain-hover-3" href="#frontenddev">Frontend Developer</a>
                    <a className="nav-link text-3-dark plain-hover-3" href="#datascientist">Data Scientist</a>
                    <a className="nav-link text-3-dark plain-hover-3" href="#fullstack">Fullstack Engineer</a>
                    <a className="nav-link text-3-dark plain-hover-3" href="#productmanager">Product Manager</a>
                    <a className="nav-link text-3-dark plain-hover-3" href="#qa">QA Engineer</a>
                    <a className="nav-link text-3-dark plain-hover-3" href="#android">Android Engineer</a>
                    <a className="nav-link text-3-dark plain-hover-3" href="#ios">IOS Engineer</a>
                    <a href="https://www.buymeacoffee.com/hugorichard" target="blank" className="btn btn-3 mt-3">Coffee? <span role="img" aria-label="coffee emoji">☕️</span></a>

                </nav>


            </div>
            <div className="col-md-9 ">
                 <div className="row">

<Jobdescription
id="backenddev"
emoji="⌨️"
jobtitle="Backend Developer"
mission1="Architecting, building, testing, and releasing product-facing features"
mission2="Building and maintaining scalable services"
mission3="Design flexible API (REST, GraphQL)"
mission4="Deliver modern reliable and resilient services"
mission5="Share knowledge, evangelize best practices"
mission6="Working with our product management and frontend team to build products"
mission7="Deploying machine learning algorithms and augmenting data scientists to make our AI platform smarter"
req1="3+ years of industry experience in a software engineering role, preferably building a SaaS product. You can demonstrate the significant impact that your work has had on the product and/or the team"
req2="Deep knowledge of any high-level programming language (for example, Ruby, Python, Perl etc.)"
req3="Fluency in any backend server language (Golang, Node, Java, Scala) and expertise in relational databases and schema design"
req4="Experience in database and storage technologies (RDBMS, NoSQL,...)"
req5="Experience with scalable distributed systems, both built from scratch as well as on AWS primitives"
req6="Ability to debug complex systems"
req7="Experience with the CI/CD pipeline"
req8="Experience working on an agile team"
tool1="Python"
tool2="Node"
tool3="AWS"
tool4="RDBMS, NoSQL"
nice1="Relevant experience building large scale data systems
"
></Jobdescription>


<Jobdescription
id="frontenddev"
emoji="👨‍🎨"
jobtitle="Frontend Developer"
mission1="You will work closely with Product Managers, Engineers, and Stakeholders to deliver complex software solutions that meet the needs of our users"
mission2="Contribute to the full lifecycle of features from design, to implementation to deployment and maintenance"
mission3="Promote and nurture good team practices such as TDD, code reviews, and pair programming"
mission4="Architect new features and reusable UI paradigms using ReactJS with the goal of delighting and improving the experience of our users."
mission5="Seek empirical evidence through proof of concepts, tests and external research"
mission6="Provide technical advice and weighs in on technical decisions that impact other teams"
mission7="Identify gaps, bottlenecks, and areas of frontend architectural debt, and proactively redesigning the system to  tackle those issues"
mission8="Participate extensively in design and code review sessions across teams"
mission9="Contribute to building features using design and API mocks and write contracts, integration & unit tests for features built."
mission10="Perform peer code reviews."
req1="You have under 2 years of experience building applications using modern UI frameworks such as React.js"
req2="You have a knack for understanding the user flows and building them out"
req3="You have deep interest about the technical stack you work on to understand it better and build out responsive products"
req4="You have familiarity with popular JavaScript tools, frameworks and design principles, and enjoy staying up to date with the changing JavaScript ecosystem landscape."
req5="You have strong communication skills across the board, with a passion for finding and sharing best practices and driving greater discipline across organizations."
tool1="JavaScript"
tool2="Node.js"
tool3="React.js"
tool4="Ionic"
tool5="Typescript"
nice1="Some experience working with GraphQL, RESTful webservices, knowledge of CI/CD practices."
></Jobdescription>
                       

<Jobdescription
id="datascientist"
emoji="👨‍🔬"
jobtitle="Data Scientist"
mission1="Mining text data for use in classification / predicting business outcomes."
mission2="Building anomaly detection models to determine fraudulent activity, unexpected trends in data, etc."
mission3="Applying machine learning to image classification for key business applications."
mission4="Identifying, evaluating, and productionizing new data sources (e.g. geospatial data, web scraping, cell phone sensors)."
mission5="Predictive modeling related to improving insurance pricing."
req1="Strong programming skills, especially R and/or Python"
req2="Demonstrated experience in building, validating, and leveraging machine learning models"
req3="Demonstrated skill with data mining, data munging, coping with missing / corrupt / unstructured data"
req4="1+ years of industry experience building predictive models OR graduate-level research in a relevant area"
tool1="Node"
tool2="React"
tool3="React Native (both iOS and Android)"
tool4="Fabric"
tool5="Postgres"
tool6="MongoDB"
tool7="Snowflake"
tool8="Looker"
tool9="Ansible"
tool10="Docker, Datadog, Vault, and everything we host ourselves is running on AWS"
nice1="Experience using big data tools (e.g. Hadoop, Spark) and cloud computing (AWS preferred)"
nice2="Advanced knowledge of physics, linear algebra, probability/statistics."
></Jobdescription>


<Jobdescription
id="fullstack"
emoji="🏄"
jobtitle="Fullstack Engineer"
mission1="Develop new products and features, improve existing products and features"
mission2="Design and deployment of our database"
mission3="Ensuring the entire stack is designed and built for speed and scalability"
mission4="Design and construction of our REST API"
mission5="Integrating our front-end UI with the constructed API"
mission6="Design and implementation of continuous integration and deployment"
mission7="Develop and manage well-functioning databases and applications"
mission8="Expand your development experience across the stack and to other platforms"
mission9="Contribute in the product process: thinking through UX, designing beautiful UI, and working with customers to solve their problems"
mission10="Develop and utilize your skills as a mentor and leader"
mission11="Help estimate, plan and execute on projects, features, and integrations"
req1="You have 3-5 years of professional full-stack web development experience, a background in Java or similar languages, and knowledge across the stack from the database to the UI"
req2="You have a deep understanding of browser Javascript (including the DOM and platform APIs)"
req3="Deep knowledge of a high-level programming language (for example, Ruby, Python, Perl etc."
req4="Knowledge of multiple front-end languages and libraries (e.g. HTML/ CSS, JavaScript, XML, jQuery)"
req5="Knowledge of multiple back-end languages (e.g. C#, Java, Python) and JavaScript frameworks (e.g. Angular, React, Node.js)"
req6="Familiarity with databases (e.g. MySQL, MongoDB), web servers (e.g. Apache) and UI/UX design"
req7="Experience with TDD, CI/CD workflows"
req8="Self-starting with the ability to effectively work autonomously with little oversight"
req9="Working experience with the following technologies: GitHub, TravisCI, React/Redux, Postgres / SQL, Airtable, Heroku, Netlify"
req10="Experience with either or all of Node.js, Vue, Angular, React, or similar frameworks"
req11="Experience with scalable distributed systems, both built from scratch as well as on AWS primitives"
req12="Ability to debug complex systems"
tool1="Python"
tool2="travisCI"
tool3="React/Redux"
tool4="Postgres / SQL"
tool5="Airtable"
tool6="AWS"
tool7="Netlify"
nice1="You've built microservices"
nice2="Experience writing Postgres functions, triggers, and advanced SQL queries"
nice3="An affinity for DevOps / GitOps type of work"
nice4="have worked in early stage start-ups"
></Jobdescription>
                       

<Jobdescription
id="productmanager"
emoji="📱"
jobtitle="Product Manager"
mission1="Gain a deep understanding of customer experience, identify and fill product gaps and generate new ideas that grow market share, improve customer experience and drive growth"
mission2="Help define the goals and vision for the company while developing and delivering a roadmap of impactful features and helping the team develop and measure KPIs for success."
mission3="Create buy-in for the product vision both internally and with key external partners"
mission4="Develop product pricing and positioning strategies"
mission5="Translate product strategy into detailed requirements and prototypes"
mission6="Scope and prioritize activities based on business and customer impact"
mission7="Work closely with engineering teams to deliver with quick time-to-market and optimal resources"
mission8="Drive product launches including working with public relations team, executives, and other product management team members"
mission9="Evaluate promotional plans to ensure that they are consistent with product line strategy and that the message is effectively conveyed"
mission10="Act as a product evangelist to build awareness and understanding"
mission11="Represent the company by visiting customers to solicit feedback on company products and services"
req1="Previous Product Management experience and a proven track record of being able to manage all aspects of a successful product through out its lifecycle."
req2="You inspire others: You can explain the customer problems clearly and include others in the team to discuss solutions. You have an ability to work with a team to develop an inspiring product vision of how you see our product developing."
req3="You have vision: You're swift at effectively communicating the customer's needs and pain points and distilling those into an actionable product roadmap. You inspire and motivate your product engineering team and work effectively as a cross-functional unit."
req4="You strive to be the best: Self-driven and make things happen, show a strong desire to succeed, always looking for opportunities, determined in pursuit of your own and your customers' goals."
req5="You have a proven ability to develop product marketing strategies and effectively communicate recommendations to key stakeholders"
req6="Solid technical background with understanding and/or hands-on experience in software development and web technologies"
req7="Strong problem solving skills and relentlessness in the face of challenges"
req8="A data driven approach and rigor to everything you do, and excellent ability to assess the long term impact of your strategy and rally the entire team behind you on the mission to add value for our customers."
req9="You have deep technical know-how, can differentiate a true MVP from an underripe product idea and understand which hypotheses are worth testing and why"
tool1="JavaScript"
tool2="Node.js"
tool3="React.js"
nice1="Experience working on a cross-functional remote team across different time zones and asynchronous schedules"
></Jobdescription>

<Jobdescription
id="qa"
emoji="🕵️"
jobtitle="QA Engineer"
mission1="Focus on the design, development, and maintenance of automated tests."
mission2="Prototype innovative new solutions and creating frameworks that support different teams in delivering high-quality products to our clients."
mission3="Partner with the product and engineering team to understand project objectives, gather requirements, troubleshoot issues, and implement scalable test solutions."
mission4="Develop tests for regression scenarios so that testers can focus on tasks that require thought and intuition."
mission5="Provide feedback through automation to shorten the feedback loop between developers and QA, helping us deliver features that our users love."
mission6="Responsible for overseeing automated tests development and execution utilizing industry standard automation frameworks for continuous testing."
mission7="Developing scalable automated tests for web, mobile and APIs."
mission8="Monitor and analyze test results, and to provide automated reporting."
mission9="Work within a cross functional team to support confidence in high-quality releases."
mission10="Provide leadership and guidance on automation methodologies, strategies, and tools."
mission11="Help deliver product launches via a streamlined, agile process."
mission12="Take ownership of quality for projects"
req1="3+ years of Quality Assurance experience"
req3="Experience in writing test cases and test scenarios that cover both sanity and in-depth testing"
req4="Experience with web technologies, including HTML, JavaScript, etc."
req5="Familiarity with database and SQL development"
req6="Familiarity with Java, Python, or other object oriented programming language"
req7="Ability to learn quickly and deliver a high-quality product in a fast-paced, dynamic team environment"
too1="JavaScript"
too2="Python"
nice1="Experience with Atlassian products like Jira, Greenhopper, Clover is an advantage"
nice2="Working with highly-available, software-as-a-service platforms"
></Jobdescription>
                       


<Jobdescription
id="android"
emoji="🤖"
jobtitle="Android Engineer"
mission1="Work with and improve the local development environment for our feature engineers"
mission3="Develop tooling for measuring development productivity and speed"
mission4="Developing impactful solutions to improve the speed of development for feature engineers"
mission5="Develop tooling for general developer productivity"
mission6="Innovate at a high pace to support development at scale"
mission7="Become a valued member of an autonomous, cross-functional team"
mission8="Become a developer advocate improving technical communications with developers within our team and foster a deeper understanding to their problems and needs"
req1="You're intimately familiar with the lifecycle intricacies of Android components"
req2="You have several years of working experience as a Software Engineer with Java."
req3="You have working experience as an Android engineer. This can be offset by a strong general development background."
req4="You have experience with XP, strong testing practices or CI/CD."
req5="You are a solutions-oriented team player; you are flexible and ready to do what‘s best for your customers (in this case, the customers are other teams here)."
req6="You have a great ability to learn, and you are eager to expand your areas of expertise."
req7="You have a passion for supporting and enabling others to become more productive."
req8="You have a strong quality mindset and care for the overall performance of the product"
tool1="Kotlin"
tool2="RxJava"
tool3="Retrofit/OkHttp"
tool4="Dagger 2"
tool5="Room"
tool6="Android Studio"
nice1="Experience with languages and platforms such as Kotlin, C++, Dagger 2, RxJava, Python, iOS, low level programming or productivity tools"
nice2="Experience building, maintaining, or otherwise contributing to open-source projects"
></Jobdescription>


<Jobdescription
id="ios"
emoji="🍏"
jobtitle="IOS Engineer"
mission1="Engage in hands-on developement using Objective-C and Swift along with XCode and CocoaPods, maintaining and evolving the product specifications, design implementations, to rapidly deliver features for current and future needs in order to develop highly innovative, consumer-facing mobile products, while supporting the product roadmap"
mission2="Mind performance metrics to draw conclusions and drive change"
mission3="Contribute technical ideas and suggestions to enhance the direction of the product"
mission4="Write efficient, maintainable and reusable code and tests. Pass code reviews and be a good scout in general"
mission5="Be an efficient and responsible team member, communicate, participate and help"
mission6="Work with QA in a weekly release cycle"
mission7="Be enthused about teamwork in an AGILE environment: attend daily stand-ups, plan and demo your projects"
req1="Product-focused iOS application development experience"
req2="Evidence of delivering consumer facing, mass market, networked, high-performance iOS applications available in the App Store"
req3="Up to date with the latest Cocoa and iOS trends"
req4="Understanding of UIKit, Core Animation, Core Data, GCD & Networking"
req5="Excellent understanding of design patterns & Object Oriented Programming"
req6="Understanding of analytics, remote reporting and measurements"
req7="Experience of working with Continuous Integration (CI) and Unit Testing on iOS"
req8="Knowledge of socket based networking desirable"
req9="Solid understanding of the full mobile development life cycle"
tool1="Cocoa"
tool2="UI Kit"
tool3="Core Animation"
tool4="Core Data"
tool5="GCD"
tool6="Xcode"
nice1="ESwift experience is a plus!"
></Jobdescription>



                </div>
            </div>

    </div>
  
              </div>
  </Layout>
    )
  }
  
  
  
  export default ToolPage