import * as React from "react"
// Import the nav bar & footer layout
import Layout from "../components/layout"
// Import the meta description in the head
import Head from "../components/head"
// Import header section component
import Header from "../components/header"
import Thailand from "../images/hugo-thailand.jpg"
import Ski from "../images/hugo-ski.jpg"
import Friend from "../images/hugo-friend.jpg"
import Friend_2 from "../images/hugo-friend-2.jpg"
import Food from "../images/hugo-food.jpg"
import Fun from "../images/hugo-fun.jpg"


const OutsideOfWork = () => {
    return (
      <Layout>
          {/* Include SEO description of the page */}
                         <Head
                         title="Hugo Richard Outside of work"
                         description="Check out what Hugo Richard is up to outside of work. From travel, to adventure, see the images."
                         keyword="landing page framework"
                         ></Head>

                {/* Start of the header for page */}
                <Header
                title="Outside of work"
                color="2"
                p1="A picture is worth a thousand words. Here is a great quote from one of my favourite scientists that defines in some way the philosophy of my life."
                p2="“If you want to live a happy life, tie it to a goal, not to people or things.”"
                p3="- Albert Einstein"
                btn
               
                >
                </Header>

                <div className="container pt-5 pb-5">
        <div className="row">
            <div className="col-md-4">
                <div className="card bg-2 rounded border-0 mb-5 ps-0 pe-0">
                    <img src={Thailand} alt="Thailand travel" className="card-img-top rounded-top" />
                    <div className=" card-body ">
                        <h5 className="card-title text-2-dark ">Travel</h5>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="card bg-2 rounded border-0 mb-5 ps-0 pe-0">
                    <img src={Ski} className="card-img-top rounded-top" alt="Hugo richard is optimist" />
                    <div className=" card-body ">
                        <h5 className="card-title text-2-dark ">Skiing</h5>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="card bg-2 rounded border-0 mb-5 ps-0 pe-0">
                    <img src={Friend} className="card-img-top rounded-top" alt="Living life with friends" />
                    <div className=" card-body ">
                        <h5 className="card-title text-2-dark ">Friends</h5>
                    </div>
                </div>
            </div>


            <div className="col-md-4">
                <div className="card bg-2 rounded border-0 mb-5 ps-0 pe-0">
                    <img src={Food} className="card-img-top rounded-top" alt="Food is great" />
                    <div className=" card-body ">
                        <h5 className="card-title text-2-dark ">Food</h5>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="card bg-2 rounded border-0 mb-5 ps-0 pe-0">
                    <img src={Friend_2} className="card-img-top rounded-top" alt="Hugo richard likes food"/>
                    <div className=" card-body ">
                        <h5 className="card-title text-2-dark ">Adventure</h5>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="card bg-2 rounded border-0 mb-5 ps-0 pe-0">
                    <img src={Fun} className="card-img-top rounded-top" alt="Hugo richard is optimist" />
                    <div className=" card-body ">
                        <h5 className="card-title text-2-dark ">Optimism <span role="img" aria-label="smiling face">🙃</span></h5>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="card bg-2 rounded border-0 mb-5 ps-0 pe-0">
                    <div className="spinner-border m-4" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className=" card-body ">
                        <h5 className="card-title text-2-dark ">Life in progress...</h5>
                    </div>
                </div>
            </div>


        </div>


         </div>      
  
  </Layout>
    )
  }
  
  
  
  export default OutsideOfWork;