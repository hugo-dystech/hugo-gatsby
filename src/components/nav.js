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
          <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
              {/* <li className="nav-item">
                          <Link className="nav-link text-wrap" to="/tools/">
                              Tools
                          </Link>
                          </li>

                          
                          <li className="nav-item">
                          <Link className="nav-link text-wrap" to="/landing-page-framework/">
                              Landing Page Framework
                          </Link>
                          </li >
                          <li className="nav-item">
                          <Link className="nav-link text-wrap" to="/checklist/">
                              Checklist
                          </Link>
                          </li>
                          <li className="nav-item">
                          <Link className="nav-link text-wrap" to="/job-descriptions/">
                              Job Descriptions
                          </Link>
                          </li> */}
                  
                  <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Resources
                      </a>
                      <ul className="dropdown-menu end-100 text-wrap" aria-labelledby="dropdownMenuButton">
                          <li>
                          <Link className="dropdown-item text-wrap" to="/tools/">
                              Tools
                          </Link>
                          </li>

                          
                          <li>
                          <Link className="dropdown-item text-wrap" to="/landing-page-framework/">
                              Landing Page Framework
                          </Link>
                          </li>
                          <li>
                          <Link className="dropdown-item text-wrap" to="/checklist/">
                              Checklist
                          </Link>
                          </li>
                          <li>
                          <Link className="dropdown-item text-wrap" to="/job-descriptions/">
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