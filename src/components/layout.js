import React from "react"
import Nav from "../components/nav"



export default function Layout({ children }) {

  return (
    <div>
      <a href="#top" id="totop" className="btn btn-dark" title="Go to top">Top</a>

                      <Nav></Nav>

      {children}

      <footer className=" mt-auto py-3 bg-light">
  <div className="container">
    <div className="row">
    <p className="text-muted">Developed & designed by <a href="https://www.linkedin.com/in/hugorichard/" target="blank">me</a> using <a href="https://www.gatsbyjs.com/" target="blank">Gatsby</a> & <a href="https://www.netlify.com/" target="blank">Netlify</a></p>
    </div>
  </div>
</footer>

    </div>
  )
}