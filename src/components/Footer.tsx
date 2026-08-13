import { Link } from 'react-router-dom'
import { site } from '../data/content'
import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <p className="footer__brand">{site.brand}</p>
          <p className="footer__text">
            An atelier for couples and planners who want celebrations that feel intimate, designed,
            and deeply personal.
          </p>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/invitation">Invitation site</Link>
            </li>
            <li>
              <Link to="/rsvp">RSVP</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Visit</h4>
          <ul>
            <li>{site.address}</li>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <a href={`tel:${site.phone.replace(/\D/g, '')}`}>{site.phone}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} {site.brand}. Crafted for love stories.</span>
        <span>New York · Lisbon · Amalfi</span>
      </div>
    </footer>
  )
}
