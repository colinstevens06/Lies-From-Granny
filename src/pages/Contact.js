import React, { useEffect } from 'react'
import Footer from '../components/global/Footer'
import { Link } from 'react-router-dom'

export default function Contact() {

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0)

    }, 400)
  });

  return (
    <div>
      <section id="swup" className="transition-fade page">
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
                  We'll work with you on selecting songs to fit your party's vibe. Check out our <Link to="/songs">song list</Link> for an idea of what we play.
            </p>
                <p>
                  Email us at <a href="mailto:liesfromgranny@gmail.com">LiesFromGranny@gmail.com</a>
                </p>
                <p>Follow us on social media:</p>
                <ul>
                  <li><a href="https://www.instagram.com/liesfromgranny/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                  <li><a href="https://www.facebook.com/Lies-From-Granny-427515441329100" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                </ul>
              </div>
              <div className="col-sm-6">
                <img src="./assets/images/contact/contact-lies-from-granny.jpg"
                  alt="Lies From Granny at Locust Point Festival" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </section>

    </div>
  )
}
