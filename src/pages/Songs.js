import React, { useEffect } from 'react'
import SongsContainer from '../components/songs/SongsContainer'
import Footer from '../components/global/Footer'

export default function Songs() {

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0)

    }, 400)
  });

  return (
    <div>
      <section id="swup" className="transition-fade page">
        <div className="footer-spacer">
          <div id="main-screen">
            <div className="container-fluid">

              <div className="container my-3">
                <h1 className="mb-3">Song List</h1>
                <div className="row">
                  <div className="col-sm-6 order-sm-1 order-md-12 song-list-img">
                    <img src="./assets/images/home/Lies-From-Granny-Songs-List.jpg"
                      alt="Setlist from a Lies From Granny show" className="img-fluid rounded img-song-list" />
                  </div>

                  <div className="col-sm-6 order-sm-12 order-md-1">
                    <p>
                      We're always adding new songs to our binder. We
                      try to pull from our influences but always with an
                      ear to what our crowds will sing and dance along
                      to.
                </p>
                    <p>
                      Pulling inspiration from a number of rock genres,
                      we play songs that span several decades, back to
                      the Beatles in the '60s up to some more recent
                      jams.
                </p>
                    <p>Our bread and butter: pop punk.</p>

                    <p>
                      Have ideas for a song we'd kill? Hit us up on <a href="https://www.instagram.com/liesfromgranny/" target="_blank" rel="noopener noreferrer">Instagram</a> or <a
                        href="https://www.facebook.com/Lies-From-Granny-427515441329100" target="_blank" rel="noopener noreferrer">Facebook</a>.
                </p>
                    <p>
                      Want to book us for a gig? We'll work with you to
                      build a setlist for your audience. Contact us about
                      a booking.
                </p>
                  </div>
                </div>
                <div className="clearfix"></div>
                <hr />
                <SongsContainer />

              </div>
            </div>
          </div>
        </div>
        {/* <!-- closes footer spacer --> */}
        <Footer />

      </section>
    </div>
  )
}
