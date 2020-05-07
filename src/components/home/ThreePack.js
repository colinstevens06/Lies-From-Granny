import React from 'react'
import { Link } from 'react-router-dom'

export default function ThreePack() {
  return (
    <div className="container-fluid three-pack">

      <div className="container">
        {/* <!-- 3-PACK --> */}
        <div className="row mt-5">
          <div className="card-deck">
            <div className="card text-center nav-btn">
              <Link to="/shows">
                <div className="card-image-container">

                  <img src="./assets/images/home/shows-thumb-2.jpg" alt="Lies From Granny in concert" className="card-img rounded-circle mx-auto" />
                  <div className="card-image-overlay"></div>
                </div>
                <div className="card-body">
                  <h3 className="card-title">Shows</h3>
                </div>
              </Link>
            </div>
            <div className="card text-center nav-btn">
              <Link to="/songs">


                <div className="card-image-container">

                  <img src="./assets/images/home/Lies-From-Granny-Songs.jpg" alt="Set list from a recent Lies From Granny show at Sollys in DC" className="card-img rounded-circle mx-auto" />
                  <div className="card-image-overlay"></div>
                </div>


                <div className="card-body">
                  <h3 className="card-title">Song List</h3>
                </div>
              </Link>

            </div>
            <div className="card text-center">
              <Link to="/contact">
                <div className="card-image-container">

                  <img src="./assets/images/home/Granny-Logo.jpg" alt="Lies From Granny logo"
                    className="card-img rounded-circle mx-auto" />
                  <div className="card-image-overlay"></div>
                </div>
                <div className="card-body">
                  <h3 className="card-title">Contact Us</h3>
                </div>
              </Link>

            </div>
          </div>
        </div>
        {/* <!-- END OF 3-PACK --> */}
      </div>
    </div>
  )
}
