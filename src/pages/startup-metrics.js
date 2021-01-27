import * as React from "react"
// Import the nav bar & footer layout
import Layout from "../components/layout"
// Import the meta description in the head
import Head from "../components/head"
// Import header section component
import Header from "../components/header"



const ToolPage = () => {
    return (
      <Layout>
          {/* Include SEO description of the page */}
                         <Head
                         title="Startup Metrics "
                         description="A biginner guide to statup metrics. Why they are important and how to measure them. Read more."
                         keyword="startup metric"
                         ></Head>

                {/* Start of the header for page */}
                <Header
                title="Metrics - A biginner guide"
                color="3"
                p1={["Startup metrics are one of the most critical and often misunderstood, aspects of building a healthy startup. ", <a href='https://en.wikipedia.org/wiki/Antoine_de_Saint-Exup%C3%A9ry' target='blank'>Antoine de Saint-Exupéry</a>," once said, “a goal without a plan is just a wish”. "]}
                p2="To get their startups to where they want them to be, founders must develop a healthy plan or roadmap for growth."
                p3="I have over six years of experience with metrics. After going through this guide, you will understand metrics and get started in planning your success measurement!"
                btn1text="Let's Get Started"
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
        <a className="nav-link text-3-dark plain-hover-3" href="#1">1. What's a metric?</a>
        </li>
        <li className="nav-item">
        <a className="nav-link text-3-dark plain-hover-3" href="#2">2. Why are metrics important?</a>
        </li>
        <li className="nav-item">
        <a className="nav-link text-3-dark plain-hover-3" href="#3">3. Metrics that matter</a>
        </li>
        <li className="nav-item">
        <a className="nav-link text-3-dark plain-hover-3" href="#4">4. Vanity Metrics</a>
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
                <a className="nav-link text-3-dark plain-hover-3" href="#1">1. What's a metric?</a>
                    <a className="nav-link text-3-dark plain-hover-3" href="#2">2. Why are metrics important?</a>
                    <a className="nav-link text-3-dark plain-hover-3" href="#3">3. Metrics that matter</a>
                    <ul className="text-3-dark ms-3">
                    <li><a className="nav-link text-3-dark  ps-0" href="#cac">CAC</a></li>
                    <li> <a className="nav-link text-3-dark ps-0 " href="#clv">CLV</a></li>
                    <li> <a className="nav-link text-3-dark ps-0 " href="#nps">NPS</a></li>
                    <li><a className="nav-link text-3-dark ps-0" href="#churn">Churn Rate</a></li>
                    </ul>
                    <a className="nav-link text-3-dark plain-hover-3" href="#4">4. Vanity Metrics</a>
                    <a href="https://www.buymeacoffee.com/hugorichard" target="blank" className="btn btn-3 mt-3">Coffee? <span role="img" aria-label="coffee emoji">☕️</span></a>

                </nav>


            </div>
            <div className="col-md-9 ">
                 <div className="row">
                 <h2 id="1" className="mb-5 bg-3 text-3-dark p-3 rounded-3">1. What's a metric?</h2>



                </div>
            </div>

    </div>
  
              </div>
  </Layout>
    )
  }
  
  
  
  export default ToolPage