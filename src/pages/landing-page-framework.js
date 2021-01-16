import * as React from "react"
// Import the nav bar & footer layout
import Layout from "../components/layout"
// Import the meta description in the head
import Head from "../components/head"
// Import header section component
import Header from "../components/header"
import Placeholder from "../images/placeholder.jpg"
import Dashboard from "../images/dashboard-example.jpg"
import LogoPlaceholder from "../images/fake-logo.png"



const LandingPageFramework = () => {
    return (
      <Layout>
          {/* Include SEO description of the page */}
                         <Head
                         title="Landing page framework"
                         description="A landing page framework for growth marketer. Stratgic template ad key messages to have on your landing page."
                         keyword="landing page framework"
                         ></Head>
                {/* Include the navigation bar */}

                {/* Start of the header for page */}
                <Header
                title="Landing page framework"
                color="2"
                p1="I have built this framework to give you some rational and understanding about what people see when they visit your page."
                p2="Landing pages are a key ingredient to collect emails, acquire users or make sales. Before you get started with this template, read the following rules/disclaimers."
                list1="Adjust this framework based on your business and customers. Don't take it for granted"
                list2="The goal of this template is to provide interpretations on diferent sections of a landing page"
                list3="A good landing page requires a lot of trial and error. This is just to get you started."
                btn2text="Get the code"
                btn2link="https://github.com/hugo-dystech/hugo-website/blob/main/landing-page-template.zip"
                >
                </Header>

                <nav id="explore" className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Your <small>(amazing)</small> Logo</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                </ul>
                <button className="btn btn-success">Your CTA</button>
            </div>
        </div>
    </nav>
    <div className="container pt-5 pb-5">
        <div className="row pt-4 pb-4">
            <div className="col-md-8 m-auto text-center">
                <h1>Here is how we solve your <u>problem</u> super <u>easily!</u></h1>
                <p>Explain your product/service with the least amount of detail. Your goal is to convince them with as little words as possible. Be clear and precise.</p>
                <button className="btn btn-success btn-lg">Detailed CTA</button>
                <p><small className="text-muted">Reduce the commitment as much as possible. For example do not ask for a credit card. You can also provide an <span className="text-decoration-underline">alternative here</span> </small></p>
            </div>
        </div>

        <div className="col-12 text-center">
            <img className="img img-fluid w-75 rounded" alt="fake dashboard" src={Dashboard} /> 
            <p><small className="text-muted">Showcase your product/services</small></p>
        </div>
    </div>

    <div className="container-fluid bg-light pt-5 pb-5">
        <div className="row ">
            <div className="col-md-8 m-auto text-center">
                <h1>Build trust!</h1>
                <p><small>If they are scrolling, they are not convinced yet. Maybe they just need a little more trust coming from your company. Showcasing logos of clients or testimonials is a good way to build trust.</small></p>
            </div>
        </div>
        <div className="row">
            <div className="col-md-3 col-6">
                <img className="img img-fluid" alt="logo placeholder" src={LogoPlaceholder} />
            </div>
            <div className="col-md-3 col-6">
                <img className="img img-fluid" alt="logo placeholder" src={LogoPlaceholder} />
            </div>
            <div className="col-md-3 col-6">
                <img className="img img-fluid" alt="logo placeholder" src={LogoPlaceholder} />
            </div>
            <div className="col-md-3 col-6">
                <img className="img img-fluid" alt="logo placeholder" src={LogoPlaceholder} />
            </div>
        </div>
    </div>
    <div className="container pt-5 pb-5">
        <div className="row pt-4 pb-4">
            <div className="col-md-8 m-auto text-center">
                <h1>Remind them of their <u>problem</u> and how <u>painful</u> it is.</h1>
                <p>We want to remind them of their problem. Ideally, we'd like them to realise that you are the solution!</p>
                <button className="btn btn-success btn-lg">Test Our Product For Free</button>
            </div>
        </div>
    </div>
    <div className="container-fluid pt-5 pb-5">
        <div className="row pe-md-5 ps-md-5">
            <div className="col-md-6 pb-3 text-center">
                <img className="img img-fluid rounded" alt="placeholder" src={Placeholder} />

            </div>
            <div className="col-md-6 m-auto">
                <h2>Tell them <u>why</u> their current way of doing things is wrong.</h2>
                <p>Are they doing a task manually? Are they spending to much time on something? Tell them why they should stop doing it this way.</p>
                <ul className="list-unstyled">
                    <li><span role="img" aria-label="Cross"> ❌ </span>Here is why it's wrong</li>
                    <li><span role="img" aria-label="Cross"> ❌ </span> Here is why it's wrong</li>
                    <li><span role="img" aria-label="Cross"> ❌ </span> Here is why it's wrong</li>
                </ul>

            </div>

        </div>
    </div>

    <div className="container-fluid pt-5 pb-5 bg-light">
        <div className="row pe-md-5 ps-md-5 flex-wrap-reverse d-flex">

            <div className="col-md-6 m-auto">
                <h2>Show them how you are their <u>solution</u></h2>
                <p>Tell them how you solve all the cons mentioned above.</p>
                <ul className="list-unstyled">
                    <li><span role="img" aria-label="check">✅ </span> Here is how we solve your problem</li>
                    <li><span role="img" aria-label="check">✅ </span> Here is how we solve your problem</li>
                    <li><span role="img" aria-label="check">✅ </span> Here is how we solve your problem</li>
                </ul>
                <button className="btn btn-success btn-lg">Main CTA</button>
                <p><small className="text-muted">Provide an <span className="text-decoration-underline">alternative here</span> </small></p>



            </div>
            <div className="col-md-6 pb-3 text-center">
                <img className="img img-fluid rounded" alt="placeholder" src={Placeholder} />

            </div>

        </div>
    </div>

    <div className="container-fluid pt-5 pb-5 bg-warning">
        <div className="row pe-md-5 ps-md-5 text-center">
            <div className="col-md-8 offset-md-2 col-12 pb-3">
                <h2>Tell them how to <u>get started</u></h2>
                <p>This needs to be very clear and easy. 3 simple steps, no more!</p>
            </div>
            <div className="col-md-4 m-auto pb-3">
                <img className="img img-fluid rounded w-75 pb-2" alt="placeholder" src={Placeholder} />
                <h2>Step 1</h2>
                <p>Explain the step. Make sure to be very clear and use the minimum amount of words</p>
            </div>
            <div className="col-md-4 m-auto pb-3">
                <img className="img img-fluid rounded w-75 pb-2" alt="placeholder" src={Placeholder} />
                <h2>Step 2</h2>
                <p>Explain the step. Make sure to be very clear and use the minimum amount of words</p>
            </div>
            <div className="col-md-4 m-auto pb-3">
                <img className="img img-fluid rounded w-75 pb-2" alt="placeholder" src={Placeholder} />
                <h2>Step 3</h2>
                <p>Explain the step. Make sure to be very clear and use the minimum amount of words</p>
            </div>

            <div className="col-12 text-center pt-4">
                <button className="btn btn-success btn-lg">Main CTA</button>
                <p><small className="text-muted">Provide an <span className="text-decoration-underline">alternative here</span> </small></p>

            </div>


        </div>
    </div>

    <div className="container-fluid pt-5 pb-5">
        <div className="row pe-md-5 ps-md-5 ">
            <div className="col-md-8 offset-md-2 col-12 pb-3 text-center">
                <h2>Here is why our clients <u>love us</u></h2>
                <p>Ideally, have client testimonials here. Build more trust with your visitors. Put your client logos again.</p>
            </div>

            <div className="col-md-6 m-auto pb-3">
                <img className="img img-fluid rounded w-75 pb-2" alt="placeholder" src={Placeholder} />
                <h4>We've had <u>150%</u> growth in <u>3 months</u> [Results+Time]
                </h4>
                <p className="pb-0 mb-0">John Smith</p>
                <p><small className="text-muted">Job Title - Company</small></p>
            </div>

            <div className="col-md-6 m-auto pb-3">
                <img className="img img-fluid rounded w-75 pb-2" alt="placeholder" src={Placeholder} />
                <h4>We've saved <u>$$$</u> in the first <u>4 weeks</u> [Results+Time]</h4>
                <p className="pb-0 mb-0">John Smith</p>
                <p><small className="text-muted">Job Title - Company</small></p>
            </div>

            <div className="col-md-3 col-6">
                <img className="img img-fluid" alt="logo placeholder" src={LogoPlaceholder} />
            </div>
            <div className="col-md-3 col-6">
                <img className="img img-fluid" alt="logo placeholder" src={LogoPlaceholder} />
            </div>
            <div className="col-md-3 col-6">
                <img className="img img-fluid" alt="logo placeholder" src={LogoPlaceholder} />
            </div>
            <div className="col-md-3 col-6">
                <img className="img img-fluid" alt="logo placeholder" src={LogoPlaceholder} />
            </div>
        </div>

    </div>

    <div className="container-fluid pt-5 pb-5 bg-light">
        <div className="row pt-4 pb-4">
            <div className="col-md-8 m-auto text-center">
                <h1>Create a sense of <u>urgency</u></h1>
                <p>Have a one time offer or a countdown offer. Apply risk reversal by highlighting why there is no commitment from them to use your product/service.</p>
                <ul className="list-unstyled">
                    <li><span role="img" aria-label="check">✅ </span> No credit card required</li>
                    <li><span role="img" aria-label="check">✅ </span> Cancel anytime</li>
                    <li><span role="img" aria-label="check">✅ </span> Our team will help you with the setup</li>
                    <li><span role="img" aria-label="check">✅ </span> Access our team for support anytime</li>
                </ul>
                <button className="btn btn-success btn-lg mb-3">Main CTA</button>
                <p className="pb-0 mb-0">Offer ends in</p>
                <p className="alert alert-warning">7 min 45 sec</p>
            </div>
        </div>
    </div>


    <div className="container-fluid pt-5 pb-5 bg-dark text-white">
        <div className="row pt-4 pb-4">
            <div className="col-md-6 m-auto">
                <h1 className="text-white"><u>Alternative CTA</u> for the sceptics</h1>
                <p>This section is for visitors who are not convinced about your product/service. The goal is to capture them by providing them with an alternative CTA, for example "download e-book, free webinar, etc.".</p>

                <button className="btn btn-success btn-lg mb-3">Alternative CTA</button>
            </div>
            <div className="col-md-6">
                <img className="img img-fluid rounded pb-2" alt="placeholder" src={Placeholder} />

            </div>
        </div>
    </div>

  
  </Layout>
    )
  }
  
  
  
  export default LandingPageFramework