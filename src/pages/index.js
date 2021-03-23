import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import hugo from "../images/hugo-cover-3.jpeg"
import Startup from "../images/Startup-daily-logo.png"
import webDirection from "../images/web-direction.png"
import theCube from "../images/the-cube.png"
import Head from "../components/head"


// markup


const IndexPage = () => {
  return (
    <Layout>
            <Head
            title="Hugo Richard - Growth Marketer"
            description="I live and breathe startups, I worked in 3 different countries in 2 continents over the last 6 years. I help company growth, let's talk."
            keyword="hugo richard"
            ></Head>
              <div className="container-fluid pb-5 pt-lg-0 pt-5">
        <div className="row ps-md-5 pe-md-5 ">
            <div className="col-12 col-md-6 m-auto pb-5 pb-md-0 pt-5 ps-5 pe-5 pt-md-0">
                <h1>I help <u>people</u> make better <u>startups</u>.</h1>
                <p> I live and breathe startups, and I have worked in 3 different countries in 2 continents over the last 6 years. I have good experience in marketing & growth with SaaS startups and I am a firm believer in profit for purpose.</p>
                <p><a className="fs-5 text-dark text-decoration-none plain-hover-black" href="mailto:zhugok@gmail.com"><strong>Let's talk <span role="img" aria-label="send email">&#128073;</span></strong></a></p>
                <Link to="https://www.linkedin.com/in/hugorichard/" target="blank"> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg></Link>
            </div>
            <div className="col-12 col-md-6 text-center pt-5 pb-5">
                <img inline src={hugo} className="img-fluid d-none d-md-block w-75 rounded m-auto shadow" alt="Hugo Richard" />
                <img inline src={hugo} className="img-fluid d-md-none w-50 rounded m-auto shadow" alt="Hugo Richard" />
            </div>

        </div>
    </div>
    <nav id="innerNav" className="navbar shadow-sm navbar-expand-lg navbar-light bg-light sticky-lg-top pe-lg-5 ps-lg-5">
        <div className="container-fluid">

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
            <div className="collapse navbar-collapse" id="navbarNav">

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link " to="#about">About</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link " aria-current="page" to="#stuff">Ressources <span role="img" aria-label="send email">&#127805;</span></Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link " aria-current="page" to="#pr">PR</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link " aria-current="page" to="#startup">Startup Life</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link " aria-current="page" to="#professional">Professional Life</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link " aria-current="page" to="#help">How can I help?</Link>
                    </li>
                </ul>

            </div>
            <a className="navbar-brand plain-hover-black" href="mailto:zhugok@gmail.com">Let's talk <span role="img" aria-label="send email">&#128073;</span></a>

        </div>
    </nav>


    <div id="about" className="container-fluid bg-light pt-5 pb-5">
        <div className="row ps-md-5 pe-md-5  pt-5 pb-5">
            <div className="col-12 col-md-4  pb-5">
                <h1 className="pb-0">Few things about me</h1>
                <small className="pb-5 text-muted">Don't like reading? <a href="#stuff">Scroll down</a></small>

            </div>
            <div className="col-12 col-md-6">
                <p>I work with cross-functional teams to build &amp; grow SaaS products. I also have experience in business development, marketing and strategic partnership.</p>
                <p>I am a data-driven individual with the ability to analyse data with creative agility, extract knowledge and nurture business growth. I do my best work with teams I can learn from and challenges that kindle my curiosity.</p>
                <p>I believe in people and social good. Tech has changed our lives over the past decades, and it is now our responsibility to do good with the tools we have.</p>
            </div>
        </div>
    </div>

    <div id="stuff" className="container-fluid pt-5 ">
        <div className="row ps-md-5 pe-md-5  pb-5">
            <div className="col-12">
                <h1 className="text-center pt-0 pb-5">I am glad you're here.</h1>
            </div>
            <div className="col-lg-4 col-md-6 pb-5">
                <div className="card h-100 bg-2 rounded  border-0">
                    <div className="card-header mt-3 bg-transparent  border-0">
                        <h2 className="text-2-dark">60+ growth tools</h2>
                    </div>

                    <div className="card-body text-2-dark">
                        <p>Throughout my work, I have used multiple tools. I have put together a list of my favourites, which may also help you find new tools to use.</p>
                    </div>
                    <div className="card-footer mb-3 bg-transparent  border-0">
                        <Link to="/tools/" className="fs-5 text-2-dark text-decoration-none plain-hover-2"><strong>Tools collection &#8594;</strong></Link><br />
                    </div>
                </div>

            </div>

            <div className="col-lg-4 col-md-6 pb-5">
                <div className="card h-100 bg-3 rounded  border-0">
                    <div className="card-header mt-3 mb-0 bg-transparent  border-0">
                        <h2 className="text-3-dark">Checklist</h2>
                    </div>
                    <div className="card-body text-3-dark">
                        <p>A collection of checklists I like to use for pretty much everything; from writing blog posts to product launches.</p>
                    </div>
                    <div className="card-footer mb-3 bg-transparent  border-0">
                        <Link to="/checklist/" className="fs-5 text-3-dark text-decoration-none plain-hover-3"><strong>Checklist collection &#8594;</strong></Link>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 pb-5">
                <div className="card h-100 bg-2 rounded  border-0">
                    <div className="card-header mt-3 mb-0 bg-transparent  border-0">
                        <h2 className="text-2-dark">Landing Page Framework</h2>
                    </div>
                    <div className="card-body text-2-dark">
                        <p>A simple framework with examples to guide you through the thought process of building a landing page.</p>
                    </div>
                    <div className="card-footer mb-3 bg-transparent  border-0">
                    <Link to="/landing-page-framework/" className="fs-5 text-2-dark text-decoration-none plain-hover-2"><strong>Landing page framework &#8594;</strong></Link>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 pb-5">
                <div className="card h-100 bg-3 rounded  border-0">
                    <div className="card-header mt-3 bg-transparent  border-0">
                        <h2 className="text-3-dark">Job Descriptions</h2>
                    </div>
                    <div className="card-body text-3-dark">
                        <p>I have put together a list of job descriptions I have used to hire in the past. Specially made for tech startups.</p>
                    </div>
                    <div className="card-footer mb-3 bg-transparent  border-0">
                        <Link to="/job-descriptions/" className="fs-5 text-3-dark text-decoration-none plain-hover-3"><strong>Job Descriptions &#8594;</strong></Link>

                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 pb-5">
                <div className="card h-100 bg-2 rounded  border-0">
                    <div className="card-header mt-3 bg-transparent  border-0">
                        <h2 className="text-2-dark">Outside of work</h2>
                    </div>
                    <div className="card-body text-2-dark">
                        <p>Want to see what I am up to when I am not working? Here is a sneak peek into my life.</p>
                    </div>
                    <div className="card-footer mb-3 bg-transparent  border-0">
                        <Link to="/outside-of-work/" className="fs-5 text-2-dark text-decoration-none plain-hover-2"><strong>What am I up to &#8594;</strong></Link>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 pb-5">
                <div className="card h-100 bg-3 rounded  border-0">
                    <div className="card-header mt-3 bg-transparent  border-0">
                        <h2 className="text-3-dark">Startup Metrics</h2>
                    </div>
                    <div className="card-body text-3-dark">
                        <p>A beginner guide to metrics for SaaS startups. Metrics play an important role in the success of your startup.</p>
                    </div>
                    <div className="card-footer mb-3 bg-transparent  border-0">
                        <Link to="/startup-metrics/" className="fs-5 text-3-dark text-decoration-none plain-hover-3"><strong>Beginner Guide &#8594;</strong></Link>

                    </div>
                </div>
            </div>

        </div>
    </div>
    <div id="pr" className="container-fluid pt-5 pb-5">
        <div className="row ps-md-5 pe-md-5  pb-5 pt-5">
            <div className="col-12 text-center">
                <h1 className="pb-0">PR &amp; Speaking</h1>
                <p>Some public talks and TV interviews <span role="img" aria-label="funny emoji">😎</span></p>
            </div>
            <div className="col-md-4 text-center">
                <img className="img-fluid w-50" src={Startup} alt="startup daily" />
                <p>TV interview as a Co-founder of <a href="https://dystech.com.au" target="blank">Dystech</a></p>

                <div className="ratio ratio-16x9">
                    <iframe title="tv interview" src="https://www.youtube.com/embed/DNj9237rZ9Y" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
            <div className="col-md-4 text-center">
                <img className="img-fluid w-50" src={webDirection} alt="web direction" />
                <p>Speaker at <a href="https://www.webdirections.org/ai/speakers/hugo-richard.php" target="blank">Web Direction AI 2018 </a>
                </p>
                <div className="ratio ratio-16x9">

                    <iframe title="Public speaking" src="https://www.youtube.com/embed/5XNc0mZpNNw" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>

            <div className="col-md-4 text-center">
                <img className="img-fluid w-50" src={theCube} alt="the cube" />
                <p>Interview with AWS &amp; <a href="https://www.thecube.net/" target="blank">The Cube</a>
                </p>
                <div className="ratio ratio-16x9">
                    <iframe title="Another TV interview" src="https://www.youtube.com/embed/5PpogJnO6xY" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> </div>
            </div>


        </div>
    </div>

    <div id="startup" className="container-fluid pt-5 pb-5">
        <div className="row ps-md-5 pe-md-5  pb-5 pt-5">
            <div className="row ps-md-5 pe-md-5 m-auto ">
                <div className="col-12  col-lg-6 pb-5">
                    <h1>Startup life</h1>

                    <p>I have founded and managed 4 startups through the course of my career. The one I’m most proud of is Dystech, a SaaS platform to screen for the likelihood of dyslexia using AI. In my role as CEO ( Chief Everything Officer ), I have
                        established a global partnership and client network ranging from governments to dyslexic associations. </p>
                    <p>Using my knowledge in AI and multiple tech stacks, I not only steered but also participated in the development of the platform. I also led the team to produce scientific publications in European conferences and journals to increase
                        our credibility. But what I consider my biggest achievement is that Dystech has helped over 10,000 families by providing affordable and accessible screening for dyslexia.</p>
                    <p>Geom Chat, another startup I founded, developed chatbot interfaces for companies. The ingenuity behind Geom Chat led to me being invited as a paid speaker at an International AI conference in Sydney. <Link target="blank" to="https://youtu.be/5XNc0mZpNNw">Listen to it</Link></p>
                </div>
                <div className="col-12 col-lg-6 bg-2 rounded d-inline-block">
                    <div className="card bg-2 rounded border-0 mb-5">
                        <div className="card-header mt-3 bg-transparent  border-0">
                            <h2 >Dystech</h2>
                            <p className="card-subtitle ">Co-founder - CEO</p>

                        </div>

                        <div className="card-body">
                            <p>The world’s first assessment app for dyslexia, using artificial intelligence.</p>
                        </div>
                        <div className="card-footer mb-3 bg-transparent  border-0">
                            <a target="blank" href="https://dystech.com.au" className="btn btn-2 btn-large">Check it out</a>
                        </div>
                    </div>

                    <div className="card bg-2 rounded border-0 mb-5">
                        <div className="card-header mt-3 bg-transparent  border-0">
                            <h2 >Geom</h2>
                            <p className="card-subtitle ">Co-founder - Board Member</p>

                        </div>
                        <div className="card-body">
                            <p>Create a 3D tour of your space instantly, for free by simply uploading your floorplan. Use it anywhere, share it with anyone</p>
                        </div>
                        <div className="card-footer mb-3 bg-transparent  border-0">
                            <a target="blank" href="https://geom.ai" className="btn btn-2 btn-large">Check it out</a>
                        </div>
                    </div>

                    <div className="card bg-2 rounded border-0 mb-5">
                        <div className="card-header mt-3 bg-transparent  border-0">
                            <h2 >Geom Chat</h2>
                            <p className="card-subtitle ">Co-founder - CEO</p>
                        </div>
                        <div className="card-body">
                            <p>An agency developing chatbot for a multitude of clients worldwide.</p>
                        </div>
                    </div>

                    <div className="card bg-2 rounded border-0 mb-5">
                        <div className="card-header mt-3 bg-transparent  border-0">
                            <h2 >Koxai</h2>
                            <p className="card-subtitle">Co-founder - CMO</p>

                        </div>
                        <div className="card-body">
                            <p>A consulting agency in Machine Learning based in London. I exited the company in 2017
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="professional" className="container-fluid pt-5 pb-5">
        <div className="row ps-md-5 pe-md-5  pb-5 pt-5">
            <div className="row ps-md-5 pe-md-5 m-auto ">
                <div className="col-12  col-lg-6 pb-5">
                    <h1>Professional life</h1>

                    <p>My role as a Growth marketer with Image Direct, a full stack agency ranging from Facebook &amp; Google ads to web design, taught me everything I know about digital growth. This includes metrics that matter, learning from the data collected
                        and creating innovative experiments that explore and improve multiple facets of the business from activation to retention thereby leading to growth. </p>
                    <p>I have also been involved with isgood.ai, a non for profit organisation, as a growth hacker & now advisor working on their online presence to improve growth and clarify messaging.</p>
                    <p>In my role at Outfox The Market (UK) as a business analyst, I explored large businesses and their operating ecosystems, analysing gaps in their processes and curating potential solutions for improvement.</p>
                </div>
                <div className="col-12 col-lg-6 bg-2 rounded d-inline-block">
                    <div className="card  bg-transparent border-0 mb-5">
                        <div className="card-header mt-3 bg-transparent  border-0">
                            <h2 >Image Direct</h2>
                            <p className="card-subtitle ">Growth Marketer - 5 Years</p>

                        </div>

                        <div className="card-body">
                            <p>Image Direct is a full stack digital agency.</p>
                        </div>
                        <div className="card-footer mb-3 bg-transparent  border-0">
                            <a target="blank" href="https://imagedirect.com.au" className="btn btn-2 btn-large">Check it out</a>
                        </div>
                    </div>

                    <div className="card bg-transparent border-0 mb-5">
                        <div className="card-header mt-3 bg-transparent  border-0">
                            <h2 >isgood.ai</h2>
                            <p className="card-subtitle ">Advisor - present</p>
                            <p className="card-subtitle ">Growth Hacker - 6 months</p>

                        </div>
                        <div className="card-body">
                            <p>An innovative AI platform for social impact optimisation.</p>
                        </div>
                        <div className="card-footer mb-3 bg-transparent  border-0">
                            <a target="blank" href="https://isgood.ai" className="btn btn-2 btn-large">Check it out</a>
                        </div>
                    </div>

                    <div className="card bg-transparent border-0 mb-5">
                        <div className="card-header mt-3 bg-transparent  border-0">
                            <h2 >Outfox The Market</h2>
                            <p className="card-subtitle ">Business Analyst - 1 year</p>
                        </div>
                        <div className="card-body">
                            <p>Fisher Energy (Rebranded Outfox The Market) is a premium gas and electricity supplier in the UK.</p>
                        </div>

                        <div className="card-footer mb-3 bg-transparent  border-0">
                            <a target="blank" href="https://www.outfoxthemarket.co.uk/" className="btn btn-2 btn-large">Check it out</a>
                        </div>
                    </div>

                    <div className="card bg-transparent border-0 mb-5">
                        <div className="card-header mt-3 bg-transparent  border-0">
                            <h2 >Startup Gippsland</h2>
                            <p className="card-subtitle ">Ambassador - 2 years</p>

                        </div>
                        <div className="card-body">
                            <p>The largest regional startup accelerator in Australia.
                            </p>
                        </div>

                        <div className="card-footer mb-3 bg-transparent  border-0">
                            <a target="blank" href="https://startupgippsland.com.au/" className="btn btn-2 btn-large">Check it out</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="help" className="container-fluid pt-5 pb-5 bg-3">
        <div className="row ps-md-5 pe-md-5  pt-5 pb-5 text-3-dark">
            <div className="col-12 text-center">
                <h1 className="text-3-dark">How can I help?</h1>
            </div>
            <div className=" col-md-12 mt-3 mb-3 text-center">
              <h3>Activation &#8594; Retention &#8594; Monetisation</h3>
              <p className="text-center text-3-dark">While making <u>tech for good</u>.</p>
            </div>
        </div>


    </div>


            </Layout>

  )
}



export default IndexPage
