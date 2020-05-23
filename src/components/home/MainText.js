import React from 'react'
import { Link } from 'react-router-dom'

export default function MainText() {
  return (
    <div>
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
              target="_blank" rel="noopener noreferrer">Instagram</a> or <a href="https://www.facebook.com/Lies-From-Granny-427515441329100" target="_blank" rel="noopener noreferrer">Facebook</a>.
                </p>
          <p>
            Want to book us for a show? <Link to="/contact">We'd love to hear from
            you</Link>.
                </p>
        </div>
      </div>
    </div>
  )
}
