import React from 'react'
import Footer from '../components/global/Footer'
import ThreePack from '../components/home/ThreePack'
import MainText from '../components/home/MainText'
import HomeVideo from '../components/home/HomeVideo'

export default function Home() {
  return (
    <div>
      <section id="swup" className="transition-fade page">
        <div className="footer-spacer">
          {/* <!-- ********** SECTION BEGIN ********** --> */}
          <div id="main-screen">
            <div className="container-fluid">
              <img className="main-image img-fluid" src="./assets/images/home/Lies-From-Granny.jpg" alt="Group shot of Lies From Granny" data-main-img="home" />
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
