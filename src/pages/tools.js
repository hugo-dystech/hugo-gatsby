import * as React from "react"
// Import the nav bar & footer layout
import Layout from "../components/layout"
// Import the tool card component
import ToolCard from "../components/tool-card"
// Import the meta description in the head
import Head from "../components/head"
// Import secondary Navigation
import SecondNav from "../components/secondary-nav"
// Import header section component
import Header from "../components/header"
// Start importing tool logo
import Segment from "../images/logo/segment.png"
import Adobexd from "../images/logo/adobexd.png"
import Ahrefs from "../images/logo/ahrefs.png"
import Atp from "../images/logo/atp.png"
import Biteable from "../images/logo/biteable.png"
import Buffer from "../images/logo/buffer.png"
import Buzzsumo from "../images/logo/buzzsumo.png"
import Canva from "../images/logo/canva.png"
import Cssgradient from "../images/logo/cssgradient.jpg"
import Designprinciple from "../images/logo/design-principle.svg"
import Ga from "../images/logo/ga-logo.png"
import Goodemail from "../images/logo/goodemailcopy.webp"
import Hotjar from "../images/logo/hotjar.svg"
import Htmlemail from "../images/logo/htmlemail.webp"
import Hubspot from "../images/logo/hubspot.svg"
import Icons8 from "../images/logo/icons8.png"
import Keywordseverywhere from "../images/logo/keywordseverywhere.png"
import Kwfinder from "../images/logo/kwfinder.png"
import Mailchimp from "../images/logo/mailchimp.png"
import Mixpanel from "../images/logo/mix-panel.png"
import Promo from "../images/logo/promo.png"
import Removebg from "../images/logo/removebg.png"
import Rev from "../images/logo/rev.webp"
import Semrush from "../images/logo/sem-rush.png"
import Sketchar from "../images/logo/sketchar.webp"
import Sproutsocial from "../images/logo/sproutsocial.png"
import Streamyard from "../images/logo/streamyard.jpg"
import Tribe from "../images/logo/tribe.png"
import Videoask from "../images/logo/videoask.jpg"
import GoogleData from "../images/logo/google-data-studio.svg"
import FullStory from "../images/logo/fullstory.jpg"

const ToolPage = () => {
    return (
      <Layout>
          {/* Include SEO description of the page */}
                         <Head
                         title="60+ growth tools"
                         description="60+ growth tools you can start using right now, from marketing automation to product analytics."
                         keyword="marketing tool"
                         ></Head>
                {/* Include the navigation bar */}

                {/* Start of the header for page */}
                <Header
                title="Growth tools repository"
                color="2"
                p1="A big collection of over 60+ of my favourite marketing tools for startups & eCommerce companies for growth."
                p2="Ranging from analytics to video & design, I have tried to list all the tools I have used and want to try out."
                p3="I will keep this content fresh and updated as much as I can."
>
                </Header>

               

    <div className="container pt-5 pb-5">
        <div  className="row">
        <SecondNav
color="2"
item1="Analytics tools"
id1="analytics"
item2="Social Media Tools"
id2="social"
item3="SEO/Content Tools"
id3="seo"
item4="Video Tools"
id4="video"
item5="Designer Tools"
id5="designer"
item6="Email Marketing Tools"
id6="email"
/>

            <div className="col-md-9 ">
                 <div className="row">
                 <h2 id="analytics" className="mb-5 bg-2 p-3 rounded-3">Analytics Tools</h2>


                        <ToolCard 
                        src={Segment}
                        toolName="Segment"
                        toolDesc="Amazing tool to streamline all your anaytic. 1 source code on your app/site and deploy your analytic anywhere. I love this tool."
                        website="https://segment.com"
                        badgeEasy
                        ></ToolCard>

                        <ToolCard 
                        src={GoogleData}
                        toolName="Google Data Studio"
                        toolDesc="I am using GDS for Metrics/KPI dashbaord. Super easy way to have quick access to measurement that matter."
                        website="https://datastudio.google.com/"
                        badgeAdvanced
                        ></ToolCard>


                        <ToolCard 
                        src={Ga}
                        toolName="Google Analytics"
                        toolDesc="I feel I dont need to explain this one. The new Google Analytics G4 might be a little hard to handle."
                        website="https://analytics.google.com/"
                        badgeAdvanced
                        ></ToolCard>

                        <ToolCard 
                        src={Mixpanel}
                        toolName="Mix Panel"
                        toolDesc="Mix panel is super cool, it allows your to really dive deep into analytics of customer behaviours and interaction with your app."
                        website="https://mixpanel.com/"
                        badgeAdvanced
                        ></ToolCard>


                        <ToolCard 
                        src={Hotjar}
                        toolName="Hotjar"
                        toolDesc="I personally love Hotjar. Super efficient tool to clearly understand how your user interact on your site, and collect feedback."
                        website="https://www.hotjar.com/"
                        badgeEasy
                        ></ToolCard>

                        <ToolCard 
                        src={Semrush}
                        toolName="SemRush"
                        toolDesc="Do you want to know how your website perform compared to your competitor? This is it."
                        website="https://www.semrush.com/"
                        badgeEasy
                        ></ToolCard>

                        <ToolCard 
                        src={FullStory}
                        toolName="Fullstory"
                        toolDesc="Similar to Hotjar, but much more advanced. Monitor your users and reliably understand your UX."
                        website="https://www.fullstory.com/"
                        badgeAdvanced
                        ></ToolCard>


<h2 id="social" className="mb-5 bg-2 p-3 rounded-3">Social Tools</h2>

                        <ToolCard 
                        src={Buffer}
                        toolName="Buffer"
                        toolDesc="Amazing tool to schedule and plan your social media content marketing on multiple channel."
                        website="https://buffer.com/"
                        badgeEasy
                        ></ToolCard>

                        <ToolCard 
                        src={Buzzsumo}
                        toolName="Buzzsumo"
                        toolDesc="Super useful to quickly see what's trending on social media."
                        website="https://buzzsumo.com/"
                        badgeEasy
                        ></ToolCard>

                        <ToolCard 
                        src={Canva}
                        toolName="Canva"
                        toolDesc="I use Canva A LOT! Simple and easy to use online design tool to create literally 'anything'."
                        website="https://www.canva.com/"
                        badgeEasy
                        ></ToolCard>

                        <ToolCard 
                        src={Tribe}
                        toolName="Tribe"
                        toolDesc="Really good to launch social media influencer campaigns. The Tribe team walk you through everything."
                        website="https://www.tribegroup.co/"
                        badgeEasy
                        ></ToolCard>

                        <ToolCard 
                        src={Sproutsocial}
                        toolName="Sprout Social"
                        toolDesc="All in 1 social media management platform from content posting to customer conversation."
                        website="https://sproutsocial.com/"
                        badgeEasy
                        ></ToolCard>

<h2 id="seo" className="mb-5 bg-2 p-3 rounded-3">SEO Tools</h2>

                        <ToolCard 
                        src={Semrush}
                        toolName="SemRush"
                        toolDesc="SEMRush gives you great recommendation to improve your SEO & content."
                        website="https://www.semrush.com/"
                        badgeEasy
                        ></ToolCard>

                        <ToolCard 
                        src={Ahrefs}
                        toolName="ahrefs"
                        toolDesc="ahrefs is a full SEO management platform, and provide heaps of training."
                        website="https://ahrefs.com/"
                        badgeEasy
                        ></ToolCard>

                        <ToolCard 
                        src={Kwfinder}
                        toolName="KWFinder"
                        toolDesc="Super simple longtail keywords analytics to help you in SEO research."
                        website="https://kwfinder.com/"
                        badgeEasy
                        ></ToolCard>

                        <ToolCard 
                        src={Atp}
                        toolName="Answer The Public"
                        toolDesc="ATP allow you to see how people ask questions based on a keywords, super useful highly recommended."
                        website="https://answerthepublic.com/"
                        badgeEasy
                        ></ToolCard>

                        <ToolCard 
                        src={Keywordseverywhere}
                        toolName="Keywords Everywhere"
                        toolDesc="Useful browser extension that gives you search colume cpc and more on specific keywords."
                        website="https://keywordseverywhere.com/"
                        badgeEasy
                        ></ToolCard>


<h2 id="video" className="mb-5 bg-2 p-3 rounded-3">Video Tools</h2>


                        <ToolCard 
                        src={Biteable}
                        toolName="Biteable"
                        toolDesc="Create simple video online, super easy to use, includes lots of templates."
                        website="https://biteable.com/"
                        badgeEasy
                        ></ToolCard>

                        <ToolCard 
                        src={Promo}
                        toolName="Promo"
                        toolDesc="Promo is an alternative to Bitable, they provide the same service."
                        website="https://promo.com/"
                        badgeEasy
                        ></ToolCard>

                        <ToolCard 
                        src={Rev}
                        toolName="Rev"
                        toolDesc="Super cheap and fast captioning service. I use it a lot for video interview."
                        website="https://www.rev.com/"
                        badgeEasy
                        ></ToolCard>

                        <ToolCard 
                        src={Streamyard}
                        imgAlt="StreamYard"
                        toolName="StreamYard"
                        toolDesc="I use StreamYard to host video/podcast with guest. You can also boracast live, super useful."
                        website="https://streamyard.com/"
                        badgeEasy
                        ></ToolCard>

                        <ToolCard 
                        src={Videoask}
                        toolName="Video Ask"
                        toolDesc="Ask feedback to your customer with video. Such an innovative tool!"
                        website="https://www.videoask.com/"
                        badgeEasy
                        ></ToolCard>

<h2 id="designer" className="mb-5 bg-2 p-3 rounded-3">Designer Tools</h2>

                        <ToolCard 
                        src={Canva}
                        toolName="Canva"
                        toolDesc="This is the easiest way to quickly design nearly anything."
                        website="https://www.canva.com/"
                        badgeEasy
                        ></ToolCard>

                        <ToolCard 
                        src={Removebg}
                        toolName="Removebg"
                        toolDesc="This is one of my favourite. Remove the background of any images using AI."
                        website="https://www.remove.bg/"
                        badgeEasy
                        ></ToolCard>

                        <ToolCard 
                        src={Cssgradient}
                        toolName="CSS Gradient"
                        toolDesc="Cool tool to generate awesome gradient in CSS."
                        website="https://cssgradient.io/"
                        badgeEasy
                        ></ToolCard>

                        <ToolCard 
                        src={Icons8}
                        toolName="Icons8"
                        toolDesc="Large collection of free illustration, you can even create your own."
                        website="https://icons8.com/"
                        badgeEasy
                        ></ToolCard>

                        <ToolCard 
                        src={Designprinciple}
                        toolName="Design Principles"
                        toolDesc="Over 195+ design princples example from multiple famous brand. Very goo dread."
                        website="https://principles.design/"
                        badgeEasy
                        ></ToolCard>

                        <ToolCard 
                        src={Adobexd}
                        toolName="Adobe XD"
                        toolDesc="I use XD a lot for product design, great tool for prototyping."
                        website="https://www.adobe.com/au/products/xd.html"
                        badgeAdvanced
                        ></ToolCard>

                        <ToolCard 
                        src={Sketchar}
                        toolName="Sketchar"
                        toolDesc="This one is for Snapchat marketers. Create your own AR mask for Snapchat."
                        website="https://sketchar.tech/sketcharmask/"
                        badgeAdvanced
                        ></ToolCard>

<h2 id="email" className="mb-5 bg-2 p-3 rounded-3">Email Tools</h2>

                        <ToolCard 
                        src={Mailchimp}
                        toolName="Mailchimp"
                        toolDesc="I personally use MailChimp, amazing platform to handle all your email automations and list building."
                        website="https://mailchimp.com/"
                        badgeAdvanced
                        ></ToolCard>

                        <ToolCard 
                        src={Hubspot}
                        toolName="Hubspot"
                        toolDesc="I have been using Hubspot for a while now. Cool thing is that they have tons of email templates."
                        website="https://www.hubspot.com/"
                        badgeAdvanced
                        ></ToolCard>

                        <ToolCard 
                        src={Goodemail}
                        toolName="Good Email Copy"
                        toolDesc="I have been using Hubspot for a while now. Cool thing is that they have tons of email templates."
                        website="https://www.hubspot.com/"
                        badgeEasy
                        ></ToolCard>

                        <ToolCard 
                        src={Htmlemail}
                        toolName="HTML Email"
                        toolDesc="Fully responsive html email templates for startups. Saving yourself the pain of coding HTML email."
                        website="https://htmlemail.io/"
                        badgeEasy
                        ></ToolCard>

</div>
        </div>

    </div>
  
              </div>
  </Layout>
    )
  }
  
  
  
  export default ToolPage