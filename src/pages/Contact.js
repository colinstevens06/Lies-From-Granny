import React from 'react'

export default function Contact() {
  return (
    <div>
      <section id="swup" className="transition-fade" style="display: none;">
        <div className="footer-spacer">
          <div className="container my-3">
            <div className="row">
              <div className="col-sm-6">
                <p>
                  Need a live band for your upcoming event? Need a band to
                  fill in a spot at your bar? Or to schedule us for
                  regular appearances?
            </p>
                <p>We'd love to hear from you.</p>
                <p>
                  We'll work with you on selecting songs to fit your
                  party's vibe. Check out our
              <a href="songs.html">song list</a> for an idea of what
              we play.
            </p>
                <p>
                  Email us at
              <a href="mailto:liesfromgranny@gmail.com">LiesFromGranny@gmail.com</a>
                </p>
                <p>Follow us on social media:</p>
                <ul>
                  <li><a href="https://www.instagram.com/liesfromgranny/" target="_blank">Instagram</a></li>
                  <li><a href="https://www.facebook.com/Lies-From-Granny-427515441329100" target="_blank">Facebook</a></li>
                </ul>
              </div>
              <div className="col-sm-6">
                <img src="./assets/images/contact/contact-lies-from-granny.jpg"
                  alt="Lies From Granny at Locust Point Festival" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>

        <footer className="footer bg-dark">
          <div className="container text-center">
            <span className="text-light p-4 mb-0">
              Page developed by
          <a href="https://www.instagram.com/drumminup" target="_blank">Drummin Up Media</a>
            </span>
          </div>
        </footer>
      </section>
    </div>
  )
}
