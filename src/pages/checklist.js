import * as React from "react"
// Import the Job Description component
// Import the meta description in the head
import Head from "../components/head"
// Import header section component
import Header from "../components/header"
import Checklist from "../components/checklist-component"
import Layout from "../components/layout"



const ChecklistPage = () => {
    
    return (
      <Layout>
          {/* Include SEO description of the page */}
                         <Head
                         title="Checklist for startup "
                         description="A collection of useful checklist. From writing a blog post to a product launch, use them as much as you want for free!"
                         keyword="startup checklist"
                         ></Head>
            
                {/* Start of the header for page */}
                <Header
                title="Save time with checklists"
                color="3"
                p1="It is common to misconceive how checklists function in complex lines of work."
                p2="They are not comprehensive how-to guides. They are quick and simple tools aimed to buttress the skills of expert professionals."
                p3="Whether you're building a skyscraper, getting a plane out of trouble or launching a new product; the knowledge is within you. Checklists just help you get there efficiently."
                    >
                </Header>

                <nav className=" d-md-none navbar sticky-top navbar-expand-lg navbar-light bg-trensparent bg-white">
  <div className="container-fluid">
    <a className="navbar-brand " href="#">Table of content</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <a className="nav-link text-3-dark plain-hover-3" href="#blogpost">Blog post</a>
        </li>
        <li className="nav-item">
        <a className="nav-link text-3-dark plain-hover-3" href="#uxcopy">UX Copy</a>
        </li>
        <li className="nav-item">
        <a className="nav-link text-3-dark plain-hover-3" href="#startupidea">Startup Idea</a>
        </li>
        <li className="nav-item">
        <a className="nav-link text-3-dark plain-hover-3" href="#productlaunch">Product Launch</a>
        </li>
        <li className="nav-item">
        <a className="nav-link text-3-dark plain-hover-3" href="#gotomarket">Go-to-market</a>
        </li>
        <li className="nav-item">
        <a href="https://www.buymeacoffee.com/hugorichard" target="blank" className="btn btn-3 mt-3">Coffee? <span role="img" aria-label="coffee emoji">☕️</span></a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    <div className="container pt-5 pb-5">
        <div  className="row">


            <div id="explore" className="col-md-3 mb-3">
                <nav  className="nav flex-column sticky-top d-none d-md-block">
                    <a className="nav-link text-3-dark plain-hover-3" href="#blogpost">Blog post</a>
                    <a className="nav-link text-3-dark plain-hover-3" href="#uxcopy">UX Copy</a>
                    <a className="nav-link text-3-dark plain-hover-3" href="#startupidea">Startup Idea</a>
                    <a className="nav-link text-3-dark plain-hover-3" href="#productlaunch">Product Launch</a>
                    <a className="nav-link text-3-dark plain-hover-3" href="#gotomarket">Go-to-market</a>
                    <p className="nav-link text-warning">More coming <div className="spinner-border spinner-border-sm ms-1 mb-1" role="status">
  <span className="visually-hidden">Loading...</span>
</div></p>
                    <a href="https://www.buymeacoffee.com/hugorichard" target="blank" className="btn btn-3 mt-3">Coffee? <span role="img" aria-label="coffee emoji">☕️</span></a>

                </nav>
            </div>
            <div className="col-md-9 ">
                 <div className="row">

<Checklist
emoji="✍️"
id="blogpost"
title="Blog Post"
check1="Title"
desc1="Copy that educates the user on what to expect to read, typically phrased in an eye-catching or interesting manner"
check2="Sub heading"
desc2="Either your complete logo or a symbol mark"
check3="Thumbnail"
desc3="A visual aid to illustrate the the themes of the content"
tip3_1="Thumbnail style should draw from branding and style guide"
check4="Author"
desc4="Who wrote and contributed to the post"
tip4_1="Make an author's profile selectable to le tusers follow their favourite writers in the blog"
check5="Content"
desc5="The actual blog post itself"
tip5_1="Consider responsiveness and how content is represented on smaller devices"
tip5_2="Text size should be minimum 18px to ensure readability"
/>

<Checklist
emoji="😎"
id="uxcopy"
title="UX Copy"
check1="Clear and concise"
desc1="Say exactly what will happen, in as few words as possible"
tip1_1="Read your copy back and remove redundant words"
tip1_2="Don't invent new words for actions, keep it familiar"
check2="Useful"
desc2="Take the user to an intentional direction"
tip2_1="A user should understand what an action is going to do before they interact with it"
tip2_2="Remove jargon that doesn'thelp the user"
check3="Tone"
desc3="How your brand comes across through messaging"
tip3_1="Avoid humour, particularlysarcasm as a tone in general as you leave room for interpretation"
check4="Consistency"
desc4="Wrap a certain action under one word e.g. don't interchange 'Next' and 'Continue' when moving screen to screen"
tip4_1="Consistency helps users notice a purposeful change in copy e.g. a number of 'Next' steps followed by a final 'Confirm' step tells them something different will happen next"
    />

<Checklist
emoji="🦄"
id="startupidea"
title="Startup Idea"
check1="Are you solving a problem?"
desc1="Make sure you are not solving an imaginary problem"
tip1_1="Organise client interviews to confirm the need of your startup."
check2="What are the benefits?"
desc2="List as many as you can to attract your target audience, and remember that benefits sell."
tip2_1="Investors and customers alike need to understand the benefits of your product or service before actually buying it."
check3="What are the features?"
desc3="Benefits vs features? Benefit is what make people buy & features are what make people stay."
tip3_1="You want your customer to use your product/service as often as possible"
check4="Build a prototype"
desc4="Create something cheap, landing page or Facebook group. Before spending $$$ on anything, try and get early adopter onboard"
tip4_1="Collecting email for a potential future startup is a proof of concept and allow you to have early adopter onboard"
    />

<Checklist
emoji="🚀"
id="productlaunch"
title="Product Launch"
check1="Features definition"
desc1="Ensure that engineering teams have all the prioritization, sizing, and documentation needed to start building"
tip1_1="Tools like Asana can help you organise all the features information efficiently"
check2="UX / UI design"
desc2="Provide designers with the UX research, wireframes, and specifications needed to start building."
check3="Analytics Plan"
desc3="It is essential to be able to measure success. Put in place key metrics to measure the success of your product."
tip3_1="The Build Measure Learn framework is really useful for this."
check4="Engineering"
desc4="Build the key features, most likely in a series of weekly or fortnightly sprints."
tip4_1="Agile development is good as it help keep the momentum of the team."
    />

<Checklist
emoji="✈️"
id="gotomarket"
title="Go-to-market"
check1="Launch date"
desc1="Set a date and time for the launch and communicate to stakeholders"
tip1_1="Try to be realistic!"
check2="Pricing"
desc2="Clearly understand your pricing model or for a Freemium model your user acquisition model."
tip2_1="You don't have to make money straight away. If your product has 100K monthly active user, you can worrie about the monetisation later."
check3="Communications plan"
desc3="Decide how the launch will be announced both inside and outside the organization."
check4="Marketing content"
desc4="Create new messaging for the product’s website, advertising, and campaigns. Map out all launch emails, blog posts, webinars, and landing pages"
tip4_1="Have your content publication date in a calendar, very helpful."
    />


                </div>
            </div>

    </div>
  
              </div>
  </Layout>
    )
  }
  
  
  
  export default ChecklistPage