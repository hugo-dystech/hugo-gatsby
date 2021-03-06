import * as React from "react";
// Import the nav bar & footer layout
import Layout from "../components/layout";
// Import the meta description in the head
import Head from "../components/head";
// Import header section component
import Header from "../components/header";
// Import secondary Nav
import SecondNav from "../components/secondary-nav"

import { Link } from "gatsby"

import CAC from "../images/illustrations/CAC.jpg"
import Churn from "../images/illustrations/Churn-Rate.jpg"
import CLV from "../images/illustrations/CLV.jpg"
import NPS from "../images/illustrations/NPS.jpg"
import Visit from "../images/illustrations/Visits-vs-select-a-metric.jpg"

const ToolPage = () => {
  return (
    <Layout>
      {/* Include SEO description of the page */}
      <Head
        title="Startup Metrics - Beginner guide"
        description="A beginner guide to statup metrics. Why they are important and how to measure them. Read more."
        keyword="startup metric"
      ></Head>

      {/* Start of the header for page */}
      <Header
        title="Metrics - A beginner guide"
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

      <div className="container pt-5 pb-5">
        <div className="row">

        <SecondNav
color="3"
item1="1. What's a metric?"
id1="1"
item2="2. Metric are important"
id2="2"
item3="3. Metrics that matter"
id3="3"
item4="4. Vanity metrics"
id4="4"
item5="5. Conclusion"
id5="5"
/>
         
          <div className="col-lg-9 ">
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
              <p>
                <i>no. of emails collected / page views = conversion rate (in
                percentage)</i>
              </p>

              <p>
                What does this formula mean? Let’s assume your conversion rate
                is 15%, it means for every 100 visitors you collect 15 emails.
                We are defining the conversion rate as a metric. As a formula a
                metric can look like this:
              </p>

              <p>
                <i>measurement<sup>1</sup> + operation(-, *, /) + measurement
                <sup>2</sup> = Metrics</i>
              </p>

              <h2 id="2" className="mb-5 bg-3 text-3-dark mt-5 p-3 rounded-3">
                2. Why are metrics important?
              </h2>

              <p>
                As a startup, the only way to understand how to improve your
                business is by having metrics. Here is a good quote that
                illustrates the importance of metrics:
              </p>
              <p className="text-3-dark text-center mt-4 mb-4">
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
            
            <h3 className="mt-3 mb-2">Metrics & Investors</h3>
            <p>Investors will want to be able to measure your success using metrics. Metrics will influence their decision in investing in your startups. Keep in mind, investors are very familiar with metrics (that’s their job) so be mindful of what you are showing them.</p>
            <p>Make sure you have a clear understanding of your metrics before you present them. Know your numbers! </p>

            <h3 className="mt-3 mb-2">Metrics & Forecasting</h3>
            <p>Are you looking to forecast your revenue for the next 12 months? Metrics will empower you to make an educated forecast. You will need maybe 6-8 months worth of data before being accurate in your prediction.</p>
            <p>Metrics also drive marketing strategy. How many users will you have in 4 months? Should you spend that much in SEM, knowing that your organic acquisitions will hit your revenue target for the year?</p>
           <h3 className="mt-3 mb-2">Metrics & Product Development</h3>
           <p>Alongside your product iteration plan, you will need an analytic strategy. Remember, if you can’t measure it, you can’t improve it.</p>
           <p>Every time you roll out new features, make sure to have a clear analytic plan. Understand what metrics matter for your specific features and measure it closely.</p>
           <p>You should see metrics as your operational dashboard. Being able to oversee all your essential metrics is like a car dashboard, you know if your car needs servicing or if the oil needs replacement. <a href="https://datastudio.google.com/" target="blank">Google Data Studio</a> is a great tool to create your metric dashboard; <a href="https://mixpanel.com/" target="blank">Mix Panel</a> can also be a good one. Having direct access to all your metrics allows you to act and minimise mistakes quickly.</p>
           <p className="text-muted">PS: you can visit my <Link to="/tools/" target="blank">tools page</Link> I have listed lots of tool to use for gorwth</p>
           
           
           <h2 id="3" className="mb-5 bg-3 text-3-dark mt-5 p-3 rounded-3">
                3. Metrics that matter
              </h2>
<p>Let's dive deep into multiple metrics relevant for a SaaS company. Now you need to understand that any given situation lies along a spectrum; for example, a professional networking app may initially track how many prospective professionals and employers are actively using it. They would likewise then need to define what they mean by “active,” either based on the hypothesis of how often a user should perform the relevant action or by a frequency analysis of how often the users are doing so on average.</p>
<p>Metrics are uniquely created by you but use universal names. In the example above, “active users” is defined in a specific way; other startups might define it differently. </p>
<p>Let’s go in detail of some of the most common metrics startup uses to measure their success. Again, I put the basic simple calculation for each metrics. However, the formula might be more complicated, depending on your business model.</p>

<h3 className="mt-3 mb-2" id="cac">CAC (Cost of Acquisition)</h3>
<p>The cost of acquisition is the total expense incurred in acquiring a new client or purchasing an asset. <br/>You can learn more about CAC <a href="https://www.investopedia.com/terms/c/costofacquisition.asp" target="blank">here</a></p>
<div><img src={CAC} alt="Cost Of Acquisition Equation" className="img img-fluid"/></div>
<p>Ideally, your cost of acquisition should be as low as possible. There are multiple ways to reduce your CAC, you can visit <a href="https://www.smartbugmedia.com/blog/how-to-reduce-customer-acquisition-cost" target="blank">this link</a> to learn more about techniques to improve your CAC.</p>

<h3 className="mt-3 mb-2" id="clv">CLV (Customer Lifetime Value)
</h3>
<p>Customer Lifetime Value represents the total amount of money a customer is expected to spend in your business, or on your products, during their lifetime. Learn more about CLV <a href="https://www.qualtrics.com/au/experience-management/customer/customer-lifetime-value/" tagret="blank">here</a>.</p>
<div><img src={CLV} alt="Customer Lifetime Value Equation" className="img img-fluid"/></div>
<p>Calculating the CLV for different customers helps in a number of ways, mainly regarding business decision-making. Knowing your CLV you can determine, among other things:
<ul>
  <li>How much you can spend to acquire a similar customer and still have a profitable relationship</li>
  <li>What kinds of products customers with the highest CLV want
</li>
  <li>Which products have the highest profitability
</li>
  <li>Who your most profitable types of clients are
</li>
</ul>
</p>

<p>Together, these types of decisions can significantly boost your business profitability.

Ideally, your Cost of Acquisition should be lower than your Customer Lifetime Value.
</p>

<h3 className="mt-3 mb-2" id="nps">NPS (Net promoter Score)
</h3>
<p>Net Promoter Score is the percentage of customers rating their likelihood to recommend a company, a product, or a service to a friend or colleague. For more info about NPS you can go <a href="https://blog.hubspot.com/service/what-is-nps" target="blank">here</a>.</p>
<div><img src={NPS} alt="Net promoter score equation" className="img img-fluid"/></div>
<p>Subtracting the percentage of Detractors from the percentage of Promoters yields the Net Promoter Score, which can range from a low of -100 (if every customer is a Detractor) to a high of 100 (if every customer is a Promoter).</p>
<p>Use your NPS as the key measure of your customers’ overall perception of your brand. Because NPS is a leading indicator from growth, it provides the best anchor for your customer experience management program. Complement NPS with other metrics and insights from various points along the customer journey, and you have a comprehensive, actionable view of your customer experience performance.</p>

<h3 className="mt-3 mb-2" id="churn">Churn Rate
</h3>
<p>Churn rate is the percentage of your customers or subscribers who cancel or don't renew their subscriptions during a given time. More detail on churn <a href="https://www.investopedia.com/terms/c/churnrate.asp" target="blank">here</a>.</p>
<div><img src={Churn} alt="Churn Rate Equation" className="img img-fluid"/></div>
<p>Customer churn is a painful reality that all businesses have to deal with. Even the largest and most successful companies suffer from customer churn and understanding what causes formerly loyal customers to abandon ship is crucial to lasting, sustainable business growth.</p>
<p>I would highly recommend <a href="https://www.cobloom.com/blog/churn-rate-how-high-is-too-high" target="blank">this article</a> to understand how to properly measure churn rate. It can often be miss understood.</p>

<h2 id="4" className="mb-5 bg-3 text-3-dark mt-5 p-3 rounded-3">
                4. Vanity metrics
              </h2>
              <p>Let’s discuss vanity metrics. Vanity metrics are metrics that make you look useful to others but do not help you understand your performance in a way that informs future strategies.</p>
            <p>Typical vanity metric in action: a massive spike in website visits in early August.
</p>
<div><img src={Visit} alt="Google Analytics Monthly Visit" className="img img-fluid" /></div>
<p>Great – more visits is good, right? And whatever we did in July must have made this happen, so let’s do way more of that and we can get an even more significant spike.
</p>
<p>This is how vanity metrics seduce you away from the measurements that matter. You can’t know from this graph what caused that spike – something you did? Something someone else did? Maybe you got some attention from an influencer, or a mention on a high-authority site – or perhaps something random and unrepeatable. That’s point one.</p>
<h3 className="mt-3 mb-2">How do I know if it is a vanity metrics?
</h3>
<p>If you're unsure if a metric is a vanity metric, a quick shortcut is to ask: “Can this metric lead to a course of action or inform a decision?” If the answer is “no” or “I don't know,” then you should probably re-evaluate it.</p>
<p><strong>Example:</strong> Think about a marketing landing page for an ebook download. Measuring pageviews doesn’t allow you to make a business decision, but measuring download rate might inspire you to test out different on-page wording, call to action buttons, or form submission styles.
</p>
<p>Another clue is whether or not you can manage cause and effect within your data. Observing random occurrences isn’t helpful and lightning rarely ever strikes the same spot twice. Pageviews earned from content going viral is excellent, but not useful if you can’t repeat it to expand on that success.</p>
<h2 id="5" className="mb-5 bg-3 text-3-dark mt-5 p-3 rounded-3">
                5. Conclusion
              </h2><p>Startups would be better off, reporting real metrics from the start. Vanity metrics can catch up to them, primarily if those numbers do not correspond to the real numbers.</p>
<p>Remember that all tracked metrics should help you gauge your system’s design performance and prompt you to take action if needed. Rates and ratios that stay mostly stable are ideal because any change in the metric is likely because of a real difference in the system — either a design change or a bug! — and not a random fluctuation. If a metric doesn’t have any actionable outcome when it changes over a tracked time period, then it’s likely a vanity metric and not worth tracking.
</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ToolPage;
