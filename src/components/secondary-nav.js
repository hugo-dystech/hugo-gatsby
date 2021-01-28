import React from "react"



class SecondNav extends React.Component {
    render() {
        return (

        <div id="explore" className="col-lg-3 mb-3">
        <nav  className="nav flex-column sticky-top">
        <p className={"navbar-brand text-center rounded mt-3 bg-" + this.props.color + " text-" + this.props.color + "-dark" }>Table of Content</p>
         {this.props.item1 != null ? <a className={"nav-link text-" + this.props.color + "-dark px-0 plain-hover-"+ this.props.color} href={"#" + this.props.id1}>{this.props.item1}</a> : null }   
         {this.props.item2 != null ? <a className={"nav-link text-" + this.props.color + "-dark px-0 plain-hover-"+ this.props.color} href={"#" +this.props.id2}>{this.props.item2}</a> : null }   
         {this.props.item3 != null ? <a className={"nav-link text-" + this.props.color + "-dark px-0 plain-hover-"+ this.props.color} href={"#" +this.props.id3}>{this.props.item3}</a> : null }   
         {this.props.item4 != null ? <a className={"nav-link text-" + this.props.color + "-dark px-0 plain-hover-"+ this.props.color} href={"#" +this.props.id4}>{this.props.item4}</a> : null }   
         {this.props.item5 != null ? <a className={"nav-link text-" + this.props.color + "-dark px-0 plain-hover-"+ this.props.color} href={"#" +this.props.id5}>{this.props.item5}</a> : null }   
         {this.props.item6 != null ? <a className={"nav-link text-" + this.props.color + "-dark px-0 plain-hover-"+ this.props.color} href={"#" +this.props.id6}>{this.props.item6}</a> : null }   
         {this.props.item7 != null ? <a className={"nav-link text-" + this.props.color + "-dark px-0 plain-hover-"+ this.props.color} href={"#" +this.props.id7}>{this.props.item7}</a> : null }   
         {this.props.item8 != null ? <a className={"nav-link text-" + this.props.color + "-dark px-0 plain-hover-"+ this.props.color} href={"#" +this.props.id8}>{this.props.item8}</a> : null }   
         {this.props.item9 != null ? <a className={"nav-link text-" + this.props.color + "-dark px-0 plain-hover-"+ this.props.color} href={"#" +this.props.id9}>{this.props.item9}</a> : null }   
         {this.props.item10 != null ? <a className={"nav-link text-" + this.props.color + "-dark px-0 plain-hover-"+ this.props.color} href={"#" +this.props.id10}>{this.props.item10}</a> : null }   
            
          

        {this.props.loading != null ? <p className="nav-link text-warning px-0">{this.props.loading} <div className="spinner-border spinner-border-sm ms-1 mb-1" role="status">
        <span className="visually-hidden">Loading...</span></div></p> 
        : null} 

         <a href="https://www.buymeacoffee.com/hugorichard" target="blank" className={"btn btn-" + this.props.color + " mt-3"}>Coffee? <span role="img" aria-label="coffee emoji">☕️</span></a>

        </nav>
    </div>

    )
  }
}

export default SecondNav;
