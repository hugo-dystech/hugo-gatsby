import React from "react"
import Nav from "../components/nav"



export default function Layout({ children }) {

  return (
    <div>
      <a href="#top" id="totop" class="btn btn-dark" title="Go to top">Top</a>

                      <Nav></Nav>

      {children}

    </div>
  )
}