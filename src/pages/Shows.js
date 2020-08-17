import React, { useEffect } from 'react'
import ShowsContainer from '../components/shows/ShowsContainer'
import Footer from '../components/global/Footer'

export default function ShowsTest() {

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0)

    }, 400)
  });

  return (
    <div>

      <section id="swup" className="transition-fade page">
        <div className="footer-spacer">

          <div id="shows-content">
            <div className="container-fluid">
              <div className="main-image-container__shows"></div>

            </div>
            <div className="container">
              <h2 className="my-4">Upcoming Shows</h2>


              <div className="show-card">

                <div className="row">
                  <div className="col-md-6 gig-image">
                    <img src="../../assets/images/shows/Renegade-09-03-20.jpg"
                      alt="The Renegade - Thurs Sept. 3, 2020" className="show-img img-fluid" />
                  </div>

                  <div className="col-md-6">
                    <div className="gig-title">The Renegade</div>
                    <div className="gig-deets">Sept. 3, 2020</div>
                    <div>Rockin' the Renegade in Arlington. You can join us two different ways:</div>
                    <ul>
                      <li>Online via the Renegade's live streamt</li>
                      <li>In person w/ a table reservation</li>
                    </ul>
                    <div>No matter how you join us, get ready for a rockin' evening w/ a bunch of your favorites.</div>


                  </div>

                </div>


              </div>
              <h2>Past Shows</h2>

              <ShowsContainer />
            </div>
            {/* <!-- closes body container --> */}

          </div>
        </div>
        {/* <!-- end of footer spacer --> */}
        <Footer />

      </section>

    </div>
  )
}
