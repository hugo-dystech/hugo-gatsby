import React from "react"

  
  class Jobdescription extends React.Component {
    render() {
        return (

          <div id={this.props.id} className="card bg-3 rounded border-0 p-md-3 mb-5 shadow">
          <div className="card-body">
              <h3><span role="img" aria-label="emoji">{this.props.emoji}</span></h3>
              <h5 className="card-title text-3-dark">{this.props.jobtitle}</h5>
              <hr />
              <h5>The mission</h5>
              <ul>
              {this.props.mission1 != null ? <li>{this.props.mission1}</li> : null}
              {this.props.mission2 != null ? <li>{this.props.mission2}</li> : null}
              {this.props.mission3 != null ? <li>{this.props.mission3}</li> : null}
              {this.props.mission4 != null ? <li>{this.props.mission4}</li> : null}
              {this.props.mission5 != null ? <li>{this.props.mission5}</li> : null}
              {this.props.mission6 != null ? <li>{this.props.mission6}</li> : null}
              {this.props.mission7 != null ? <li>{this.props.mission7}</li> : null}
              {this.props.mission8 != null ? <li>{this.props.mission8}</li> : null}
              {this.props.mission9 != null ? <li>{this.props.mission9}</li> : null}
              {this.props.mission10 != null ? <li>{this.props.mission10}</li> : null}
              {this.props.mission11 != null ? <li>{this.props.mission11}</li> : null}
              {this.props.mission12 != null ? <li>{this.props.mission12}</li> : null}
              {this.props.mission13 != null ? <li>{this.props.mission13}</li> : null}
               
              </ul>

              <h5>Main requirement</h5>
              <ul>
              
              {this.props.req1 != null ? <li>{this.props.req1}</li> : null}
              {this.props.req2 != null ? <li>{this.props.req2}</li> : null}
              {this.props.req3 != null ? <li>{this.props.req3}</li> : null}
              {this.props.req4 != null ? <li>{this.props.req4}</li> : null}
              {this.props.req5 != null ? <li>{this.props.req5}</li> : null}
              {this.props.req6 != null ? <li>{this.props.req6}</li> : null}
              {this.props.req7 != null ? <li>{this.props.req7}</li> : null}
              {this.props.req8 != null ? <li>{this.props.req8}</li> : null}
              {this.props.req9 != null ? <li>{this.props.req9}</li> : null}
              {this.props.req10 != null ? <li>{this.props.req10}</li> : null}
              {this.props.req11 != null ? <li>{this.props.req11}</li> : null}
              {this.props.req12 != null ? <li>{this.props.req12}</li> : null}
              {this.props.req13 != null ? <li>{this.props.req13}</li> : null}
              </ul>

              <h5>Tools you will use</h5>
              <ul>
              {this.props.tool1 != null ? <li>{this.props.tool1}</li> : null}
              {this.props.tool2 != null ? <li>{this.props.tool2}</li> : null}
              {this.props.tool3 != null ? <li>{this.props.tool3}</li> : null}
              {this.props.tool4 != null ? <li>{this.props.tool4}</li> : null}
              {this.props.tool5 != null ? <li>{this.props.tool5}</li> : null}
              {this.props.tool6 != null ? <li>{this.props.tool6}</li> : null}
              {this.props.tool7 != null ? <li>{this.props.tool7}</li> : null}
              {this.props.tool8 != null ? <li>{this.props.tool8}</li> : null}
              {this.props.tool9 != null ? <li>{this.props.tool9}</li> : null}
              {this.props.tool10 != null ? <li>{this.props.tool10}</li> : null}

              </ul>

              <h5>Nice to have</h5>
              <ul>
              {this.props.nice1 != null ? <li>{this.props.nice1}</li> : null}
              {this.props.nice2 != null ? <li>{this.props.nice2}</li> : null}
              {this.props.nice3 != null ? <li>{this.props.nice3}</li> : null}
              {this.props.nice4 != null ? <li>{this.props.nice4}</li> : null}
              {this.props.nice5 != null ? <li>{this.props.nice5}</li> : null}

              </ul>

              <h5>About Us</h5>
              <p>We have the best startup in the world, changing the life of our customer everyday. Make sure to add something more.</p>
              <h5>Why is it great to work with us</h5>
              <ul>
                  <li>Gym Membership</li>
                  <li>Coworking Pass in your city</li>
                  <li>Paid Parental Leave</li>
                  <li>Brand New MacBook</li>
              </ul>
              <h5>What happen after I apply?</h5>
              <ol>
                  <li>We will review your application and reach out to you to set up a quick call with one of our team members if we feel like you may be a good fit.</li>
                  <li>Remote interview:</li>
                  <ul>
                      <li>Find out more about your technical skills with our Head of Product</li>
                      <li>Brainstorm on a product challenge</li>
                      <li>Meet our team</li>
                  </ul>
              </ol>

              <h5>Equal employment Opportunity</h5>
              <p>Our startup is an equal opportunity employer: we value diversity. We do not discriminate on the basis of race, religion, color, national origin, gender, sexual orientation, age, marital status, veteran status, or disability status.</p>
              <a href="mailto:?Subject=Job%20Description%20Templates&body=Here%20we%20go:%0D%0A%0D%0Ahttps://hugorichard.io/job-decription.html%0D%0A%0D%0AThanks%20for%20visiting%20my%20site.%20Hugo." className="btn btn-3 mt-3">Save this description <span role="img" aria-label="letter box">📫</span></a>
          </div>
      </div>
            

        )

    }
}

export default Jobdescription;
