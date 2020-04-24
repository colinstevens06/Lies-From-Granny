import React from 'react'
import Footer from '../components/global/Footer'


export default function Songs() {
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
                      Have ideas for a song we'd kill? Hit us up on
                  <a href="https://www.instagram.com/liesfromgranny/" target="_blank">Instagram</a> or <a
                        href="https://www.facebook.com/Lies-From-Granny-427515441329100" target="_blank">Facebook</a>.
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
                {/* <!-- ********** SONGS BY BAND ********** --> */}
                <div className="row song-list mt-5" data-song-group="songs-by-band">
                  <div className="col-sm-4">
                    <h2>3 Doors Down</h2>
                    <ul>
                      <li>Kryptonite</li>
                    </ul>

                    <h2>4 Non Blondes</h2>
                    <ul>
                      <li>What's Up?</li>
                    </ul>
                    <h2>AC/DC</h2>
                    <ul>
                      <li>Highway to Hell</li>
                    </ul>
                    <h2>Alanis Morisette</h2>
                    <ul>
                      <li>Hand in My Pocket</li>
                      <li>You Oughtta Know</li>
                    </ul>
                    <h2>Ben King</h2>
                    <ul>
                      <li>Stand By Me</li>
                    </ul>
                    <h2>The Beatles</h2>
                    <ul>
                      <li>Twist and Shout</li>
                    </ul>

                    <h2>Blind Melon</h2>
                    <ul>
                      <li>No Rain</li>
                    </ul>
                    <h2>blink-182</h2>
                    <ul>
                      <li>All the Small Things</li>
                      <li>Anthem Pt. II</li>
                      <li>Every Time I Look For You</li>
                      <li>Feeling This</li>
                      <li>First Date</li>
                      <li>Miss You</li>
                      <li>The Rock Show</li>
                      <li>What's My Age Again</li>
                    </ul>
                    <h2>Bonnie Raitt</h2>
                    <ul>
                      <li>Something to Talk About</li>
                    </ul>

                    <h2>The Cranberries</h2>
                    <ul>
                      <li>Zombie</li>
                    </ul>
                    <h2>Credence Clearwater Revival</h2>
                    <ul>
                      <li>I Put a Spell On You</li>
                    </ul>

                    <h2>The Darkness</h2>
                    <ul>
                      <li>I Believe In a Thing Called Love</li>
                    </ul>

                    <h2>Del Amitri</h2>
                    <ul>
                      <li>Roll to Me</li>
                    </ul>

                    <h2>The Donnas</h2>
                    <ul>
                      <li>Take It Off</li>
                    </ul>

                    <h2>Dixie Chicks</h2>
                    <ul>
                      <li>Wide Open Spaces</li>
                    </ul>

                    <h2>Fall Out Boy</h2>
                    <ul>
                      <li>Sugar We're Goin Down</li>
                    </ul>

                    <h2>Fleetwood Mac</h2>
                    <ul>
                      <li>Dreams</li>
                    </ul>

                    <h2>Foo Fighters</h2>
                    <ul>
                      <li>Best of You</li>
                      <li>Times Like These</li>
                      <li>Monkey Wrench</li>
                    </ul>
                  </div>

                  {/* <!-- end of first column --> */}

                  {/* <!-- SECOND COLUMN --> */}

                  <div className="col-sm-4">
                    <h2>Gin Blossoms</h2>
                    <ul>
                      <li>Follow You Down</li>
                      <li>Hey Jealousy</li>
                    </ul>

                    <h2>Grace Potter & The Nocturnals</h2>
                    <ul>
                      <li>The Lion, the Beast, the Beat</li>
                    </ul>

                    <h2>Green Day</h2>
                    <ul>
                      <li>Basket Case</li>
                      <li>Chump</li>
                      <li>Longview</li>
                      <li>She</li>
                      <li>Welcome to Paradise</li>
                      <li>When I Come Around</li>
                    </ul>

                    <h2>Jet</h2>
                    <ul>
                      <li>Are You Gonna Be My Girl</li>
                      <li>Cold Hard Bitch</li>
                    </ul>

                    <h2>Joan Jett & the Blackhearts</h2>
                    <ul>
                      <li>Bad Reputation</li>
                    </ul>

                    <h2>The Killers</h2>
                    <ul>
                      <li>All These Things That I've Done</li>
                      <li>When You Were Young</li>
                    </ul>

                    <h2>Lit</h2>
                    <ul>
                      <li>My Own Worst Enemy</li>
                    </ul>

                    <h2>Madonna</h2>
                    <ul>
                      <li>Material Girl</li>
                    </ul>

                    <h2>Me First and the Gimme Gimmes</h2>
                    <ul>
                      <li>Rich Girl</li>
                    </ul>

                    <h2>Michelle Branch</h2>
                    <ul>
                      <li>Everywhere</li>
                    </ul>

                    <h2>Misfits</h2>
                    <ul>
                      <li>Monster Mash</li>
                    </ul>

                    <h2>New Found Glory</h2>
                    <ul>
                      <li>My Friends Over You</li>
                    </ul>

                    <h2>Nine Days</h2>
                    <ul>
                      <li>Absolutely (Story of a Girl)</li>
                    </ul>

                    <h2>No Doubt</h2>
                    <ul>
                      <li>Just a Girl</li>
                    </ul>

                    <h2>The Offspring</h2>
                    <ul>
                      <li>Pretty Fly (For a White Guy)</li>
                    </ul>

                    <h2>Paramore</h2>
                    <ul>
                      <li>Misery Business</li>
                    </ul>

                    <h2>Pat Benatar</h2>
                    <ul>
                      <li>Hit Me With Your Best Shot</li>
                    </ul>

                    <h2>Puddle of Mudd</h2>
                    <ul>
                      <li>She Hates Me</li>
                    </ul>

                    <h2>The Raconteurs</h2>
                    <ul>
                      <li>Steady as She Goes</li>
                    </ul>
                  </div>


                  {/* <!-- end of second column --> */}

                  {/* <!-- THIRD COLUMN --> */}
                  <div className="col-sm-4">
                    <h2>Radiohead</h2>
                    <ul>
                      <li>Creep</li>
                    </ul>

                    <h2>Rage Against the Machine</h2>
                    <ul>
                      <li>Killin in the Name</li>
                    </ul>

                    <h2>Ray Parker Jr.</h2>
                    <ul>
                      <li>Ghostbusters</li>
                    </ul>

                    <h2>Reel Big Fish</h2>
                    <ul>
                      <li>Beer</li>
                    </ul>

                    <h2>Shania Twain</h2>
                    <ul>
                      <li>Man! I Feel Like a Woman</li>
                    </ul>

                    <h2>Sheryl Crow</h2>
                    <ul>
                      <li>If It Makes You Happpy</li>
                    </ul>

                    <h2>Simple Plan</h2>
                    <ul>
                      <li>I'd Do Anything</li>
                    </ul>

                    <h2>Stevie Nicks</h2>
                    <ul>
                      <li>Edge of Seventeen</li>
                      <li>
                        Stop Draggin' My Heart Around (w/ Tom Petty)
                  </li>
                    </ul>

                    <h2>Sublime</h2>
                    <ul>
                      <li>Santeria</li>
                      <li>What I Got</li>
                    </ul>

                    <h2>Sum 41</h2>
                    <ul>
                      <li>Fat Lip</li>
                    </ul>

                    <h2>The Temptations</h2>
                    <ul>
                      <li>My Girl</li>
                    </ul>

                    <h2>Third Eye Blind</h2>
                    <ul>
                      <li>How's It Going to Be</li>
                      <li>Semi-Charmed Life</li>
                    </ul>



                    <h2>Tina & Ike Turner</h2>
                    <ul>
                      <li>Proud Mary</li>
                    </ul>

                    <h2>Tom Petty and the Heartbreakers</h2>
                    <ul>
                      <li>Mary Jane's Last Dance</li>
                      <li>You Wreck Me</li>
                    </ul>

                    <h2>Tracy Chapman</h2>
                    <ul>
                      <li>Give Me One Reason</li>
                    </ul>

                    <h2>Warren Zevon</h2>
                    <ul>
                      <li>Werewolves of London</li>
                    </ul>

                    <h2>Weezer</h2>
                    <ul>
                      <li>Hash Pipe</li>
                      <li>Island in the Sun</li>
                    </ul>

                    <h2>The White Stripes</h2>
                    <ul>
                      <li>Seven Nation Army</li>
                    </ul>

                    <h2>Yellowcard</h2>
                    <ul>
                      <li>Ocean Avenue</li>
                    </ul>
                  </div>
                  {/* <!-- end of column 2 --> */}
                </div>
                {/* <!-- end of songs by band --> */}


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
