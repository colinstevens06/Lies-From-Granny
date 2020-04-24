import React from 'react'
import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <div>

      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <div className="navbar-brand d-flex flex-row align-items-center">
            <img src="./assets/images/home/Lies-From-Granny-Logo.png" alt="Lies From Granny logo" className="logoImg mr-4" />
            <h1 className="brand-header d-flex" id="brand-header">
              Lies From Granny
      </h1>
          </div>

          <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse"
            data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon custom-toggler"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <div className="navbar-nav ml-auto mt-2 mt-lg-0">
              <Link className="btn nav-item nav-btn" to="/">
                Home
              </Link>

              <Link className="btn nav-item nav-btn" to="/shows">
                Shows
              </Link>

              <Link className="btn nav-item nav-btn" to="/songs">
                Songs
              </Link>

              <Link className="btn nav-item nav-btn" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

    </div>
  )
}
