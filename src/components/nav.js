import React from "react"
import { Link } from "gatsby"



export default function Nav () {
    return (
      <nav id="top" className="navbar navbar-expand-lg navbar-light bg-light pe-lg-5 ps-lg-5">
<a href="#top" id="totop" class="btn btn-dark" title="Go to top">Top</a>
      <div className="container-fluid">
          <Link className="navbar-brand" to="/">Hugo Richard</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
          <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                  <li className="nav-item">
                      <Link className="nav-link" aria-current="page" to="/">About</Link>
                  </li>
                  <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Resources
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
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
                          <Link className="dropdown-item" to="/job-descriptions/">
                              Job Descriptions
                          </Link>
                          </li>
                      </ul>
                  </li>

              </ul>
              <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                  <span role="img" aria-label="pin emoji" >&#128205;</span> Melbourne - Australia
                  </li>
              </ul>
          </div>
      </div>
  </nav>

    )
  }