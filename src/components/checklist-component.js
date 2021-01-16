
import React from "react"
import ReactTooltip from "react-tooltip";


class Checklist extends React.Component { 
    render() {
      return (
        <div>
        <div id={this.props.id} className="card bg-3 rounded border-0 p-md-3 mb-5 shadow">
            <div className="card-body">
                <h3><span role="img" aria-label="emoji">{this.props.emoji}</span></h3>
                <h5 className="card-title text-3-dark">{this.props.title}</h5>
                <hr />

                {this.props.check1 != null ?
                <div className="form-check form-switch disabled mt-3 mb-3 ">
                    <input className="form-check-input" type="checkbox"  />
                <label className="form-check-label" for="flexSwitchCheckDefault">{this.props.check1}</label><br />
                    <small className="text-muted">{this.props.desc1}</small>
                    <div>
                        
                 {this.props.tip1_1 != null ? 
                 <p className="badge bg-warning me-1 text-wrap  fw-normal lh-base" data-tip={this.props.tip1_1} data-for="tip1_1">Tip
                 <ReactTooltip id="tip1_1"  multiline={true} place="right"  effect="solid" />
                          </p> 
                           : null}

                 {this.props.tip1_2 != null ? 
                 <p className="badge bg-warning me-1 text-wrap  fw-normal lh-base" data-tip={this.props.tip1_2} data-for="tip1_2">Tip
                 <ReactTooltip id="tip1_2"  multiline={true} place="right"  effect="solid"/>
                          </p> 
                           : null}

                 {this.props.tip1_3 != null ? 
                 <p className="badge bg-warning me-1 text-wrap  fw-normal lh-base" data-tip={this.props.tip1_3} data-for="tip1_3">Tip
                 <ReactTooltip id="tip1_3"  multiline={true} place="right"  effect="solid"/>
                          </p> 
                           : null}
                    </div>
                
                </div> : null }

                {this.props.check2 != null ?
                <div className="form-check form-switch mt-3 mb-3">
                    <input className="form-check-input" type="checkbox"  />
                <label className="form-check-label" for="flexSwitchCheckDefault">{this.props.check2}</label><br />
                    <small className="text-muted">{this.props.desc2}</small>
                    <div>
                 
                          
                    {this.props.tip2_1 != null ? 
                 <p className="badge bg-warning me-1 text-wrap  fw-normal lh-base" data-tip={this.props.tip2_1} data-for="tip2_1">Tip
                 <ReactTooltip id="tip2_1"  multiline={true} place="right"  effect="solid"/>
                          </p> 
                           : null}

                 {this.props.tip2_2 != null ? 
                 <p className="badge bg-warning me-1 text-wrap  fw-normal lh-base" data-tip={this.props.tip2_2} data-for="tip2_2">Tip
                 <ReactTooltip id="tip2_2"  multiline={true} place="right"  effect="solid"/>
                          </p> 
                           : null}

                 {this.props.tip2_3 != null ? 
                 <p className="badge bg-warning me-1 text-wrap  fw-normal lh-base" data-tip={this.props.tip2_3} data-for="tip2_3">Tip
                 <ReactTooltip id="tip2_3"  multiline={true} place="right"  effect="solid"/>
                          </p> 
                           : null}



                    </div>
                </div> : null }

                {this.props.check3 != null ?
                <div className="form-check form-switch mt-3 mb-3">
                    <input className="form-check-input" type="checkbox"  />
                <label className="form-check-label" for="flexSwitchCheckDefault">{this.props.check3}</label><br />
                    <small className="text-muted">{this.props.desc3}</small>
                    <div>
               
         
                        
                    {this.props.tip3_1 != null ? 
                 <p className="badge bg-warning me-1 text-wrap  fw-normal lh-base" data-tip={this.props.tip3_1} data-for="tip3_1">Tip
                 <ReactTooltip id="tip3_1"  multiline={true} place="right"  effect="solid"/>
                          </p> 
                           : null}

                 {this.props.tip3_2 != null ? 
                 <p className="badge bg-warning me-1 text-wrap  fw-normal lh-base" data-tip={this.props.tip3_2} data-for="tip3_2">Tip
                 <ReactTooltip id="tip3_2"  multiline={true} place="right"  effect="solid"/>
                          </p> 
                           : null}

                 {this.props.tip3_3 != null ? 
                 <p className="badge bg-warning me-1 text-wrap  fw-normal lh-base" data-tip={this.props.tip3_3} data-for="tip3_3">Tip
                 <ReactTooltip id="tip3_3"  multiline={true} place="right"  effect="solid"/>
                          </p> 
                           : null}
                             </div>
                </div> : null }



                {this.props.check4 != null ?
                <div className="form-check form-switch mt-3 mb-3">
                    <input className="form-check-input" type="checkbox"  />
                <label className="form-check-label" for="flexSwitchCheckDefault">{this.props.check4}</label><br />
                    <small className="text-muted">{this.props.desc4}</small>
                    <div>
               
         
                       
                    {this.props.tip4_1 != null ? 
                 <p className="badge bg-warning me-1 text-wrap  fw-normal lh-base" data-tip={this.props.tip4_1} data-for="tip4_1">Tip
                 <ReactTooltip id="tip4_1"  multiline={true} place="right"  effect="solid"/>
                          </p> 
                           : null}

                 {this.props.tip4_2 != null ? 
                 <p className="badge bg-warning me-1 text-wrap  fw-normal lh-base" data-tip={this.props.tip4_2} data-for="tip4_2">Tip
                 <ReactTooltip id="tip4_2"  multiline={true} place="right"  effect="solid"/>
                          </p> 
                           : null}

                 {this.props.tip4_3 != null ? 
                 <p className="badge bg-warning me-1 text-wrap  fw-normal lh-base" data-tip={this.props.tip4_3} data-for="tip4_3">Tip
                 <ReactTooltip id="tip4_3"  multiline={true} place="right"  effect="solid"/>
                          </p> 
                           : null}

                    </div>
                </div> : null }


                {this.props.check5 != null ?
                <div className="form-check form-switch mt-3 mb-3">
                    <input className="form-check-input" type="checkbox"  />
                <label className="form-check-label" for="flexSwitchCheckDefault">{this.props.check5}</label><br />
                    <small className="text-muted">{this.props.desc5}</small>
                    <div>
               
               
                    {this.props.tip5_1 != null ? 
                 <p className="badge bg-warning me-1 text-wrap  fw-normal lh-base" data-tip={this.props.tip5_1} data-for="tip5_1">Tip
                 <ReactTooltip id="tip5_1"  multiline={true} place="right"  effect="solid"/>
                          </p> 
                           : null}

                 {this.props.tip5_2 != null ? 
                 <p className="badge bg-warning me-1 text-wrap  fw-normal lh-base" data-tip={this.props.tip5_2} data-for="tip5_2">Tip
                 <ReactTooltip id="tip5_2"  multiline={true} place="right"  effect="solid"/>
                          </p> 
                           : null}

                 {this.props.tip5_3 != null ? 
                 <p className="badge bg-warning me-1 text-wrap  fw-normal lh-base" data-tip={this.props.tip5_3} data-for="tip5_3">Tip
                 <ReactTooltip id="tip5_3"  multiline={true} place="right"  effect="solid"/>
                          </p> 
                           : null}

                    </div>
                </div> : null }


                {this.props.check6 != null ?
                <div className="form-check form-switch mt-3 mb-3">
                    <input className="form-check-input" type="checkbox"  />
                <label className="form-check-label" for="flexSwitchCheckDefault">{this.props.check6}</label><br />
                    <small className="text-muted">{this.props.desc6}</small>
                    <div>
               
         
                      
                    {this.props.tip6_1 != null ? 
                 <p className="badge bg-warning me-1 text-wrap  fw-normal lh-base" data-tip={this.props.tip6_1} data-for="tip6_1">Tip
                 <ReactTooltip id="tip6_1"  multiline={true} place="right"  effect="solid"/>
                          </p> 
                           : null}

                 {this.props.tip6_2 != null ? 
                 <p className="badge bg-warning me-1 text-wrap  fw-normal lh-base" data-tip={this.props.tip6_2} data-for="tip6_2">Tip
                 <ReactTooltip id="tip6_2"  multiline={true} place="right"  effect="solid"/>
                          </p> 
                           : null}

                 {this.props.tip6_3 != null ? 
                 <p className="badge bg-warning me-1 text-wrap  fw-normal lh-base" data-tip={this.props.tip6_3} data-for="tip6_3">Tip
                 <ReactTooltip id="tip6_3"  multiline={true} place="right"  effect="solid"/>
                          </p> 
                           : null}

                    </div>
                </div> : null }

                <a tabindex="0" role="button" className="btn btn-3 mt-3" >DONE 🚀</a>
</div>
</div>
</div>
        
      );
    }
  }
  
  export default Checklist;