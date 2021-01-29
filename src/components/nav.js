import React from "react"
import { Link } from "gatsby"



export default function Nav () {
    return (

<nav className="navbar navbar-expand-md navbar-light bg-light">
  <div className="container-fluid">
  <Link className="navbar-brand" to="/">Hugo Richard<br /> <small className="fs-6 text-muted">Melbourne - Australia</small></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-md-auto">
       
      <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Guides
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end shadow-hover" aria-labelledby="dropdownMenuButton">
                          <li>
                          <Link className="dropdown-item " to="/startup-metrics/">
                              Startup Metrics
                          </Link>
                          </li>

                          
                          <li>
                          <Link className="dropdown-item text-muted" >
                              More coming <div className="spinner-border spinner-border-sm" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
                          </Link>
                          </li>
                      </ul>
                      </li>

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