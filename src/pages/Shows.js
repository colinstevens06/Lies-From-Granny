import React from 'react'

export default function Shows() {
  return (
    <div>



      <section id="swup" className="transition-fade page">
        <div className="footer-spacer">

          <div id="shows-content">
            <div className="container-fluid">
              <img src="./assets/images/home/Lies-From-Granny-Shows-Group.jpg"
                alt="Lies From Granny at the 8x10 in Baltimore" className="main-image img-fluid" data-main-img="shows"
                id="showsMainImg" />
            </div>
            <div className="container mt-4">

              {/* <!-- *********************** UPCOMING SHOWS *********************** --> */}

              <h1 className="h1 mt-5 mb-4 upcoming-shows">Upcoming Shows</h1>

              {/* <!-- *********************** beggining of gig ROW --> */}
              <div className="row gig-row my-3">

                {/* <!-- *********************** beggining of gig --> */}
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-6 gig-image">
                      <img src="./assets/images/shows/Valentines-8x10-Web-flyer.jpg"
                        alt="Lies From Granny at the 8x10 on Valentine's Day" className="show-img img-fluid" />
                    </div>

                    <div className="col-md-6">
                      <div className="gig-title">8x10</div>
                      <div className="gig-deets">Feb. 14, 2020</div>
                      <div className="gig-text">
                        <p>Bringing your favorite love and breakup songs.</p>
                        <p>Cover: $12</p>
                        <p>Presale tickets on <a
                          href="https://www.mt.cm/lies-granny-valentines-bashvote-4-pedro?fbclid=IwAR1Q3uP0fIuEixZ6g3J-68AcMhKVhJNWJqriNIZVa2-nNw-jUEHF-_9vjCQ"
                          target="_blank">LiveNation</a></p>
                      </div>
                    </div>

                  </div>
                </div>

                {/* <!-- *********************** beggining of gig --> */}
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-6 gig-image">
                      <img src="./assets/images/shows/best-buddies.jpg" alt="Best Buddies" className="show-img img-fluid" />
                    </div>
                    <div className="col-md-6">
                      <div className="gig-title">Best Buddies Fundraiser</div>
                      <div className="gig-deets">Feb. 22, 2020</div>
                      <div className="gig-text">

                        <p>Join us at Checkerspot Brewery in Baltimore for a 90s party to support Best Buddies, a
                        nonprofit that creates opportunities for people with intellectual and developmental
                        disabilities.</p>
                        <p>Purchase tickets in advance for $5 (Venmo @sarah-spund or cash), or a minimum donation of $8 at
                        the door the night of the event. All proceeds go to <a
                            href="https://www.teambestbuddies.org/chicagomarathon/supporting/?fbclid=IwAR16FhQvvNO0zjr7661V269PvtrngjQyhZTJGWnSqILqur78187Q3VzZDRA#sarahspund">Best
                          Buddies</a>.</p>
                        <ul>
                          <li><a href="https://www.facebook.com/events/449442072399742/" target="_blank">Facebook
                            Event</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end of gig row --> */}
              {/* <!-- *********************** beggining of gig ROW --> */}
              <div className="row gig-row my-3">

                {/* <!-- *********************** beggining of gig --> */}
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-6 gig-image">
                      <img src="./assets/images/shows/wedding-july.jpg" alt="Lies From Granny guitar player Kyle Fives"
                        className="show-img img-fluid" />
                    </div>
                    <div className="col-md-6">
                      <div className="gig-title">Private Event</div>
                      <div className="gig-deets">April 25, 2020</div>
                      <div className="gig-text">

                        <p>We're playing a wedding in South Carolina. We are very excited to help make this special day
                        amazing!</p>
                        <p>Want to book us for an event?</p>
                        <p>Email us at <a href="mailto:liesfromgranny@gmail.com">liesfromgranny@gmail.com</a>.</p>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end of gig ROW --> */}

              {/* <!-- *********************** PAST SHOWS *********************** --> */}
              <h2 className="h1 mt-5 mb-4">Past Shows</h2>

              {/* <!-- *********************** beggining of gig ROW --> */}
              <div className="row gig-row my-3">

                {/* <!-- *********************** beggining of gig --> */}
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-6 gig-image">
                      <img src="./assets/images/shows/Sollys-Jan-2019.jpg" alt="Nick Hermes" className="show-img img-fluid" />
                    </div>
                    <div className="col-md-6">
                      <div className="gig-title">Sollys on U Street</div>
                      <div className="gig-deets">Jan. 4, 2019</div>
                      <div className="gig-text">

                        <p>Our first show of 2020 was a blast! Thanks to all who came out. It was packed upstairs and we
                        loved everyone singing along.</p>
                        <p>New songs were:</p>
                        <ul>
                          <li>Hey Jealousy</li>
                          <li>Santeria</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- *********************** beggining of gig --> */}
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-6 gig-image">
                      <img src="./assets/images/shows/Sollys-11-23.jpg" alt="Lies From Granny guitar player Kyle Fives"
                        className="show-img img-fluid" />
                    </div>
                    <div className="col-md-6">
                      <div className="gig-title">Sollys on U Street</div>
                      <div className="gig-deets">Nov. 23, 2019</div>
                      <div className="gig-text">

                        <p>Our first D.C. gig. Solly's is the spot! Great stage and sound system. And a great dance floor!
                        Was poppin.</p>
                        <p>New songs included:</p>
                        <ul>
                          <li>Dirty Little Secret</li>
                          <li>I'd Do Anything</li>
                          <li>Killin' in the Name</li>
                          <li>Absolutely (Story of a Girl)</li>
                          <li>Every Time I Look For You</li>
                          <li>She Hates Me</li>
                        </ul>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end of gig ROW --> */}
              {/* <!-- *********************** beggining of gig ROW --> */}
              <div className="row gig-row my-3">

                {/* <!-- *********************** beggining of gig --> */}
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-6 gig-image">
                      <img src="./assets/images/shows/Mums-10-19.jpg" alt="Lies From Granny bass player Ben Denissen"
                        className="show-img img-fluid" />
                    </div>

                    <div className="col-md-6">
                      <div className="gig-title">Mums</div>
                      <div className="gig-deets">Oct. 19, 2019</div>
                      <div className="gig-text">
                        <p>Halloween songs at Mums</p>
                        <p>New songs included:</p>
                        <ul>
                          <li>Anthem Part Two</li>
                          <li>Feeling This</li>
                          <li>Highway to Hell</li>
                          <li>I Put a Spell on You</li>
                          <li>Ghostbusters</li>
                          <li>Monster Mash</li>
                          <li>Werewolves of London</li>
                        </ul>
                      </div>
                    </div>

                  </div>
                </div>
                {/* <!-- *********************** beggining of gig --> */}
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-6 gig-image">
                      <img src="./assets/images/shows/Sandlot-9-8-19.jpg" alt="Lies From Granny at Sandlot in Baltimore"
                        className="show-img img-fluid" data-main-img="shows" />
                    </div>
                    <div className="col-md-6">
                      <div className="gig-title">Sandlot</div>
                      <div className="gig-deets">Sept. 8, 2019</div>
                      <div className="gig-text">

                        <p>Outside venue in Baltimore. This was our third gig in 48 hours. What a weekend!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end of gig ROW --> */}


              {/* <!-- *********************** beggining of gig ROW --> */}
              <div className="row gig-row my-3">
                {/* <!-- *********************** beggining of gig --> */}
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-6 gig-image">
                      <img src="./assets/images/shows/8x10-9-7-19.jpg"
                        alt="Lies From Granny at the 8x10 on Valentine's Day" className="show-img img-fluid" />
                    </div>

                    <div className="col-md-6">
                      <div className="gig-title">8x10</div>
                      <div className="gig-deets">Sept. 7, 2019</div>
                      <div className="gig-text">
                        <p>LFG's first show at the 8x10.</p>
                        <p>200+ attendance.</p>
                        <p>New songs:</p>
                        <ul>
                          <li>Rich Girl</li>
                          <li>My Girl</li>
                          <li>Material Girl</li>
                          <li>Short Skirt/Long Jacket</li>
                          <li>Brain Stew</li>
                          <li>The Lion The Beast The Beast</li>
                          <li>If It Makes You Happy</li>
                        </ul>
                      </div>
                    </div>

                  </div>
                </div>

                {/* <!-- *********************** beggining of gig --> */}
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-6 gig-image">
                      <img src="./assets/images/shows/Locust-Point-9-7-19.jpg" alt="Nick Hermes"
                        className="show-img img-fluid" />
                    </div>
                    <div className="col-md-6">
                      <div className="gig-title">Locust Point Festival</div>
                      <div className="gig-deets">Sept. 7, 2019</div>
                      <div className="gig-text">

                        <p>Our first festival. Beautiful day to play outside and to be a part of a great community
                        event.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end of gig ROW --> */}


              {/* <!-- *********************** beggining of gig ROW --> */}
              <div className="row gig-row my-3">

                {/* <!-- *********************** beggining of gig --> */}
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-6 gig-image">
                      <img src="./assets/images/shows/Mums-6-22-19.jpg"
                        alt="Lies From Granny at the 8x10 on Valentine's Day" className="show-img img-fluid" />
                    </div>

                    <div className="col-md-6">
                      <div className="gig-title">Mums</div>
                      <div className="gig-deets">June 22, 2019</div>
                      <div className="gig-text">
                        <p>Mums is a great party spot in Federal Hill, Baltimore. Cash encouraged!</p>

                      </div>
                    </div>

                  </div>
                </div>
                {/* <!-- *********************** beggining of gig --> */}
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-6 gig-image">
                      <img src="./assets/images/shows/Sandlot-6-21-19.jpg" alt="Anna Stevens at the Sandlot in Baltimore"
                        className="show-img img-fluid" />
                    </div>
                    <div className="col-md-6">
                      <div className="gig-title">Sandlot</div>
                      <div className="gig-deets">June 21, 2019</div>
                      <div className="gig-text">
                        <p>The first gig at Sandlot went so well they asked us back! </p>
                        <p>This was a Friday happy hour - gorgeous day with great tunes.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end of gig ROW --> */}

              {/* <!-- *********************** beggining of gig ROW --> */}
              <div className="row gig-row my-3">

                {/* <!-- *********************** beggining of gig --> */}
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-6 gig-image">
                      <img src="./assets/images/shows/Sandlot-6-12-19.jpg"
                        alt="Lies From Granny at the 8x10 on Valentine's Day" className="show-img img-fluid" />
                    </div>

                    <div className="col-md-6">
                      <div className="gig-title">Sandlot</div>
                      <div className="gig-deets">June 12, 2019</div>
                      <div className="gig-text">
                        <p>This was our first show at Sandlot. It's an outdoor spot in Harbor East and is right on the
                        water. It's hard to beat playing outside.</p>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
              {/* <!-- end of gig ROW --> */}


            </div>
            {/* <!-- closes body container --> */}

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
      {/* <!-- *********** END OF SHOWS CONTENT *********** --></div> */}



    </div>
  )
}
