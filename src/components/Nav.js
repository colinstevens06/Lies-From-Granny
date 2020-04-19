import React from 'react'
import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <div>

      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <div class="navbar-brand d-flex flex-row align-items-center">
            <img src="./assets/images/home/Lies-From-Granny-Logo.png" alt="Lies From Granny logo" class="logoImg mr-4" />
            <h1 class="brand-header d-flex" id="brand-header">
              Lies From Granny
      </h1>
          </div>

          <button class="navbar-toggler custom-toggler" type="button" data-toggle="collapse"
            data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon custom-toggler"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <div class="navbar-nav ml-auto mt-2 mt-lg-0">
              <Link class="btn nav-item nav-btn" to="/">
                Home
              </Link>

              <Link class="btn nav-item nav-btn" to="/shows">
                Shows
              </Link>

              <Link class="btn nav-item nav-btn" to="/songs">
                Songs
              </Link>

              <Link class="btn nav-item nav-btn" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

    </div>
  )
}
