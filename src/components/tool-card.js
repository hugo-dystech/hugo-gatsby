import React from "react"



    class ToolCard extends React.Component {
  render() {
    return (
        <div className="col-md-6">
                        <div className="card bg-2 shadow-hover rounded border-0 mb-5">
                            <img src={this.props.src} className="card-img-top p-1 bg-white rounded-3 w-25 m-4" alt={this.props.toolName} />
                            <div className="card-body">
                                <h5 className="card-title">{this.props.toolName}</h5>
                                <p className="card-text">{this.props.toolDesc}</p>
                                {this.props.badgeEasy && <span className=" m-1 badge bg-success">Easy to use</span>}
                               {this.props.badgeAdvanced && <span className="m-1 badge bg-danger">Advanced</span> }
                                <div>
                                  <a href={this.props.website} target="blank" className="btn btn-2 mt-3">Visit Website</a>
                                </div>
                            </div>
                        </div>
            </div>
    );
  }
}

export default ToolCard;

