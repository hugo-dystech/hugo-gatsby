import React from "react"
import Nav from "../components/nav"



export default function Layout({ children }) {

  return (
    <div>
                      <Nav></Nav>

      {children}
    </div>
  )
}