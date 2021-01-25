import React from "react"
import { Link } from "gatsby"



export default function Nav () {
    return (
      <nav id="top" className="navbar  navbar-expand-lg navbar-light bg-light pe-lg-5 ps-lg-5">
      <div className="container-fluid">
          <Link className="navbar-brand" to="/">Hugo Richard<br /> <small class="fs-6 text-muted">Melbourne - Australia</small></Link>
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          Resources
        </button> */}
          <div className="" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                  
                  <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Resources
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end shadow-hover" aria-labelledby="dropdownMenuButton">
                          <li>
                          <Link className="dropdown-item " to="/tools/">
                              Tools
                          </Link>
                          </li>

                          
                          <li>
                          <Link className="dropdown-item " to="/landing-page-framework/">
                              Landing Page Framework
                          </Link>
                          </li>
                          <li>
                          <Link className="dropdown-item " to="/checklist/">
                              Checklist
                          </Link>
                          </li>
                          <li>
                          <Link className="dropdown-item " to="/job-descriptions/">
                              Job Descriptions
                          </Link>
                          </li>
                      </ul>
                  </li>

              </ul>
           
          </div>
      </div>
  </nav>

    )
  }