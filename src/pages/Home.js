import React, { useEffect } from 'react'
import Footer from '../components/global/Footer'
import ThreePack from '../components/home/ThreePack'
import MainText from '../components/home/MainText'
import HomeVideo from '../components/home/HomeVideo'

export default function Home() {

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0)

    }, 400)
  });

  return (
    <div>
      <section id="swup" className="transition-fade page">
        <div className="footer-spacer">
          {/* <!-- ********** SECTION BEGIN ********** --> */}
          <div id="main-screen">
            <div className="container-fluid">

              <div className="main-image-container"></div>


              <div className="container mt-5">
                <MainText />
              </div>
              <ThreePack />
              <HomeVideo />
            </div>
          </div>
        </div>
        {/* <!-- end of footer spacer --> */}
        <Footer />
      </section>

    </div >
  )
}
