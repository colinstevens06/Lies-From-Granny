import React from 'react'

export default function Home() {
  return (
    <div>
      <section id="swup" className="transition-fade page">
        <div className="footer-spacer">
          {/* <!-- ********** SECTION BEGIN ********** --> */}
          <div id="main-screen">
            <div className="container-fluid">
              <img className="main-image img-fluid" src="./assets/images/home/Lies-From-Granny.jpg" alt="Group shot of Lies From Granny" data-main-img="home" />
              <div className="container my-5">
                <div className="row">
                  <div className="col">
                    <h2>
                      Covering Hits, '60s to Present, and Everything In
                      Between
                </h2>
                    <p>
                      Lies From Granny is a five-piece rock cover band who
                      brings a party environment by playing a mix of rock,
                      pop punk and anything else you might want to dance
                      to.
                </p>
                    <p>
                      We love learning new songs and are always adding new
                      tunes to our arsenal. So anytime you see us, expect
                      to see a different show than last time.
                </p>
                    <p>
                      You can find us at venues in the Baltimore and D.C.
                      areas. Have a song you think we should learn? A place
                  we should play? Drop us a note on <a href="https://www.instagram.com/liesfromgranny/"
                        target="_blank">Instagram</a> or
                  <a href="https://www.facebook.com/Lies-From-Granny-427515441329100" target="_blank">Facebook</a>.
                </p>
                    <p>
                      Want to book us for a show? We'd love to hear from
                      you.
                </p>
                  </div>
                </div>

                {/* <!-- 3-PACK --> */}
                <div className="row mt-5">
                  <div className="card-deck">
                    <div className="card text-center nav-btn" data-url="shows.html">
                      <img src="./assets/images/home/Lies-From-Granny-Shows.jpg" alt="Lies From Granny in concert" className="card-img rounded-circle mx-auto" />
                      <div className="card-body">
                        <h3 className="card-title">Shows</h3>
                      </div>
                    </div>
                    <div className="card text-center nav-btn" data-url="songs.html">
                      <img src="./assets/images/home/Lies-From-Granny-Songs.jpg" alt="Set list from a recent Lies From Granny show at Sollys in DC" className="card-img rounded-circle mx-auto" />
                      <div className="card-body">
                        <h3 className="card-title">Song List</h3>
                      </div>
                    </div>
                    <div className="card text-center">
                      <img src="./assets/images/home/Granny-Logo.jpg" alt="Lies From Granny logo"
                        className="card-img rounded-circle mx-auto" />
                      <div className="card-body">
                        <h3 className="card-title">Contact Us</h3>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- END OF 3-PACK --> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end of footer spacer --> */}

        {/* <!-- *********** START OF FOOTER *********** --> */}
        <footer className="footer bg-dark">
          <div className="container text-center">
            <span className="text-light p-4 mb-0">
              Page developed by
          <a href="https://www.instagram.com/drumminup" target="_blank">Drummin Up Media</a>
            </span>
          </div>
        </footer>
        {/* <!-- *********** END OF FOOTER *********** --> */}
      </section>



    </div >
  )
}
