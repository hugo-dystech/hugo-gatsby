import * as React from "react";
// Import the nav bar & footer layout
import Layout from "../components/layout";
// Import the meta description in the head
import Head from "../components/head";
// Import header section component
import Header from "../components/header";

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
        p1={[
          "Startup metrics are one of the most critical and often misunderstood, aspects of building a healthy startup. ",
          <a
            href="https://en.wikipedia.org/wiki/Antoine_de_Saint-Exup%C3%A9ry"
            target="blank"
          >
            Antoine de Saint-Exupéry
          </a>,
          " once said, “a goal without a plan is just a wish”. ",
        ]}
        p2="To get their startups to where they want them to be, founders must develop a healthy plan or roadmap for growth."
        p3="I have over six years of experience with metrics. After going through this guide, you will understand metrics and get started in planning your success measurement!"
        btn1text="Let's Get Started"
      ></Header>
      <nav className=" d-md-none navbar sticky-top navbar-expand-lg navbar-light bg-trensparent bg-white">
        <div className="container-fluid">
          <a className="navbar-brand " href="#">
            Table of content
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-3-dark plain-hover-3" href="#1">
                  1. What's a metric?
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-3-dark plain-hover-3" href="#2">
                  2. Why are metrics important?
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-3-dark plain-hover-3" href="#3">
                  3. Metrics that matter
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-3-dark plain-hover-3" href="#4">
                  4. Vanity Metrics
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://www.buymeacoffee.com/hugorichard"
                  target="blank"
                  className="btn btn-3 mt-3"
                >
                  Coffee?{" "}
                  <span role="img" aria-label="coffee emoji">
                    ☕️
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container pt-5 pb-5">
        <div className="row">
          <div id="explore" className="col-md-3 mb-3">
            <nav className="nav flex-column sticky-top d-none d-md-block">
              <a className="nav-link text-3-dark plain-hover-3" href="#1">
                1. What's a metric?
              </a>
              <a className="nav-link text-3-dark plain-hover-3" href="#2">
                2. Why are metrics important?
              </a>
              <a className="nav-link text-3-dark plain-hover-3" href="#3">
                3. Metrics that matter
              </a>
              <ul className="text-3-dark ms-3">
                <li>
                  <a className="nav-link text-3-dark  ps-0" href="#cac">
                    CAC
                  </a>
                </li>
                <li>
                  {" "}
                  <a className="nav-link text-3-dark ps-0 " href="#clv">
                    CLV
                  </a>
                </li>
                <li>
                  {" "}
                  <a className="nav-link text-3-dark ps-0 " href="#nps">
                    NPS
                  </a>
                </li>
                <li>
                  <a className="nav-link text-3-dark ps-0" href="#churn">
                    Churn Rate
                  </a>
                </li>
              </ul>
              <a className="nav-link text-3-dark plain-hover-3" href="#4">
                4. Vanity Metrics
              </a>
              <a
                href="https://www.buymeacoffee.com/hugorichard"
                target="blank"
                className="btn btn-3 mt-3"
              >
                Coffee?{" "}
                <span role="img" aria-label="coffee emoji">
                  ☕️
                </span>
              </a>
            </nav>
          </div>
          <div className="col-md-9 ">
            <div className="row">
              <h2 id="1" className="mb-5 bg-3 text-3-dark p-3 rounded-3">
                1. What's a metric?
              </h2>

              <p>
                The first step to mastering startup growth, so obvious it is
                often glossed over, specifies what to grow in the first place.
                That is where metrics come in. They are vital components to
                measure growth in your startup. So what are metrics exactly?
              </p>
              <p>
                I believe a good definition of metrics, given the startup
                context, is: "a decimal system of measures based on a business
                aspect". If you decide to run a tech startup, you will be
                obligated to measure what's happening digitally.
              </p>
              <p>
                Let's start with what is not a metric.
                <ul>
                  <li>A metric is not the number of pages views.</li>
                  <li>A metric is not the number of emails collected.</li>
                </ul>
              </p>
              <p>
                The examples above are merely a simple measurement. A metric, on
                the other hand, comprises two measures that are combined. For
                example, to create a ‘metric’ based on the two measurement
                examples above, we would do the following:
              </p>
              <math>
                page views / number of emails collected = conversion rate (in
                percentage)
              </math>

              <p>
                What does this formula mean? Let’s assume your conversion rate
                is 15%, it means for every 100 visitors you collect 15 emails.
                We are defining the conversion rate as a metric. As a formula a
                metric can look like this:
              </p>
              <math>
                measurement<sup>1</sup> + operation(-,*,/) + measurement
                <sup>2</sup> = Metrics
              </math>

              <h2 id="2" className="mb-5 bg-3 text-3-dark mt-5 p-3 rounded-3">
                2. Why are metrics important?
              </h2>

              <p>
                As a startup, the only way to understand how to improve your
                business is by having metrics. Here is a good quote that
                illustrates the importance of metrics:
              </p>
              <p>
                <i>"If you cannot measure it, you cannot improve it."</i>
                <br />
                <small>- Lord Kelvin</small>
              </p>
              <p>
                Everyone in your company and outside of your company will value
                your success based on metrics. Whether to pitch to investors,
                manage your team, or roll out a new feature, you need metrics to
                measure success. You have probably heard about CAC (Cost of
                Acquisition) or CLV (Customer Lifetime Value) metrics. The
                reason you've heard of these terms before is that they are very
                relevant for startups.
              </p>
              <p>
                We'll explore multiple metrics in detail later on. But right
                now, what is essential to understand is that metrics should be
                at the core of your startup. Everything else gravitating around
                it, such as marketing, PR, or product development, aims to
                improve those metrics.
              </p>
              <p>
                As a tech startup, there are three main things you need to focus
                on :
                <ol>
                  <li>Acquisition</li>
                  <li>
                    Retention<sup>*</sup>
                  </li>
                  <li>Monetisation</li>
                </ol>
                To support you in getting ahead these three points, you will use
                metrics.
              </p>
              <p className="text-muted"><small>*Retention is the most important one! People often consider monetisation a vital thing to start with. However, the most important thing is acquiring user and being able to retain them. Monetisation can be improved later. Having a lot of active users using your app every month is as valuable as making money. If people use your product often for free, you can implement a monetisation strategy later. To look at it in another angle: even if you have a monetised product, without users, it is worth $0. If you have a free product with 100,000 monthly active users, it is worth something!</small></p>
            
            <h3>Metrics & Investors</h3>
            <p>Investors will want to be able to measure your success using metrics. Metrics will influence their decision in investing in your startups. Keep in mind, investors are very familiar with metrics (that’s their job) so be mindful of what you are showing them.</p>
            <p>Make sure you have a clear understanding of your metrics before you present them. Know your numbers! </p>

            <h3>Metrics & Forecasting</h3>
            <p>Are you looking to forecast your revenue for the next 12 months? Metrics will empower you to make an educated forecast. You will need maybe 6-8 months worth of data before being accurate in your prediction.</p>
            <p>Metrics also drive marketing strategy. How many users will you have in 4 months? Should you spend that much in SEM, knowing that your organic acquisitions will hit your revenue target for the year?</p>
           <h3>Metrics & Product Development</h3>
           <p>Alongside your product iteration plan, you will need an analytic strategy. Remember, if you can’t measure it, you can’t improve it.</p>
           <p>Every time you roll out new features, make sure to have a clear analytic plan. Understand what metrics matter for your specific features and measure it closely.</p>
           <p>You should see metrics as your operational dashboard. Being able to oversee all your essential metrics is like a car dashboard, you know if your car needs servicing or if the oil needs replacement. Google Data Studio is a great tool to create your metric dashboard; Mix Panel can also be a good one. Having direct access to all your metrics allows you to act and minimise mistakes quickly.</p>
           
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ToolPage;
