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
