import React from "react"



class Header extends React.Component {
    render() {

        return (
<div className={"bg-" + this.props.color + " container-fluid pb-5 pt-5 text-white"}>
        <div className="row ps-5 pe-5">
            <div className="col-md-8 m-auto pb-5 pb-md-0 pt-5 pt-md-0">
                <h1 className={"text-" + this.props.color + "-dark"}>{this.props.title}</h1>
                {this.props.p1 != null ? <p>{this.props.p1}</p> : null}
                {this.props.p2 != null ? <p>{this.props.p2}</p> : null}
                {this.props.p3 != null ? <p>{this.props.p3}</p> : null}
                {this.props.p4 != null ? <p>{this.props.p4}</p> : null}
               {this.props.list1 != null ? <ul>
                    <li>{this.props.list1}</li>
                    {this.props.list2 != null ? <li>{this.props.list2}</li> : null}
                    {this.props.list3 != null ? <li>{this.props.list3}</li> : null}
                </ul> : null}
               {this.props.btn != null ? null : <a className={"btn-" + this.props.color + " btn btn-lg"} href="#explore">Explore</a>}
                {this.props.btn2text != null ? <a className={"btn-outline-" +this.props.color + " ms-2 btn btn-lg"} target="blank" href={this.props.btn2link}>{this.props.btn2text}</a> : null}
            {this.props.coffee != null ? <a href="https://www.buymeacoffee.com/hugorichard" target="blank" className={"btn btn-" + this.props.color + " mt-3"}>Coffee? <span role="img" aria-label="coffee emoji">☕️</span></a> : null}
            </div>
        </div>
    </div>
        )
    }
}


export default Header;